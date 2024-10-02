import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export async function POST(request: Request) {
    try {
        const { postId, commentId, value, browserToken } = await request.json();
        console.log('Received vote request:', { postId, commentId, value, browserToken });

        if (!browserToken) {
            return NextResponse.json({ error: 'Browser token is required' }, { status: 400 });
        }

        let user = await prisma.user.findUnique({ where: { browserToken } });
        console.log('User found:', user ? user.id : 'No user found');

        if (!user) {
            user = await prisma.user.create({ data: { browserToken } });
            console.log('New user created:', user.id);
        }

        if (user.isBanned) {
            return NextResponse.json({ error: 'User is banned' }, { status: 403 });
        }

        const voteValue = value === 1 ? 1 : -1;

        let vote;

        if (postId) {
            console.log('Searching for post with ID:', postId);
            const post = await prisma.post.findUnique({ where: { id: postId } });

            if (!post) {
                console.log('Post not found, checking all posts in the database:');
                const allPosts = await prisma.post.findMany({ select: { id: true } });
                console.log('All post IDs in the database:', allPosts.map(p => p.id));
                return NextResponse.json({ error: 'Post not found', postId }, { status: 404 });
            }

            console.log('Post found:', post.id);

            vote = await prisma.vote.upsert({
                where: {
                    postId_userId: {
                        postId: postId,
                        userId: user.id,
                    },
                },
                update: { value: voteValue },
                create: {
                    value: voteValue,
                    userId: user.id,
                    postId: postId,
                },
            });
            console.log('Vote created/updated for post:', vote.id);
        } else if (commentId) {
            console.log('Searching for comment with ID:', commentId);
            const comment = await prisma.comment.findUnique({ where: { id: commentId } });

            if (!comment) {
                console.log('Comment not found, checking all comments in the database:');
                const allComments = await prisma.comment.findMany({ select: { id: true } });
                console.log('All comment IDs in the database:', allComments.map(c => c.id));
                return NextResponse.json({ error: 'Comment not found', commentId }, { status: 404 });
            }

            console.log('Comment found:', comment.id);

            const existingVote = await prisma.vote.findUnique({
                where: {
                    commentId_userId: {
                        commentId: commentId,
                        userId: user.id,
                    },
                },
            });

            if (existingVote && existingVote.value === voteValue) {
                return NextResponse.json({ error: 'You have already voted this way on this comment' }, { status: 400 });
            }

            vote = await prisma.vote.upsert({
                where: {
                    commentId_userId: {
                        commentId: commentId,
                        userId: user.id,
                    },
                },
                update: { value: voteValue },
                create: {
                    value: voteValue,
                    userId: user.id,
                    commentId: commentId,
                },
            });
            console.log('Vote created/updated for comment:', vote.id);
        } else {
            return NextResponse.json({ error: 'Either postId or commentId is required' }, { status: 400 });
        }

        return NextResponse.json(vote);
    } catch (error) {
        console.error('Error creating/updating vote:', error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                return NextResponse.json({ error: 'Duplicate vote', details: error.meta }, { status: 409 });
            }
            return NextResponse.json({ error: 'Database error', details: error.message }, { status: 500 });
        }
        return NextResponse.json({ error: 'Failed to create/update vote', details: String(error) }, { status: 500 });
    }
}