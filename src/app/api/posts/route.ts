import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { Comment } from '@prisma/client'

type CommentWithChildren = Comment & {
    author: { browserToken: string; id: string; displayName: string | null; isBanned: boolean; banReason: string | null; bannedUntil: Date | null; } | null;
    children: CommentWithChildren[];
}

async function getCommentsRecursively(parentId: string | null = null, postId: string): Promise<CommentWithChildren[]> {
    const comments = await prisma.comment.findMany({
        where: {
            postId: postId,
            parentId: parentId,
        },
        include: {
            author: true,
        },
        orderBy: {
            createdAt: 'asc',
        },
    });

    const commentsWithChildren: CommentWithChildren[] = await Promise.all(
        comments.map(async (comment) => {
            const children = await getCommentsRecursively(comment.id, postId);
            return { ...comment, children };
        })
    );

    return commentsWithChildren;
}

export async function GET() {
    console.log('GET request received for posts');
    const posts = await prisma.post.findMany({
        include: {
            author: true,
            votes: true,
        },
        orderBy: { createdAt: 'desc' },
    });

    console.log(`Found ${posts.length} posts in the database`);
    console.log('Posts:', posts.map(p => ({ id: p.id, title: p.title, lastUpdated: p.lastUpdated })));

    const postsWithComments = await Promise.all(posts.map(async (post) => {
        const comments = await getCommentsRecursively(null, post.id);
        return { ...post, comments };
    }));

    console.log('Posts with comments:', postsWithComments.map(p => ({ id: p.id, title: p.title, commentCount: p.comments.length })));

    return NextResponse.json(postsWithComments);
}

export async function POST(request: Request) {
    console.log('POST request received for creating a new post');
    const { title, content, authorName, browserToken } = await request.json();
    console.log('Received post creation request:', { title, authorName, browserToken });

    let user = null;
    if (browserToken) {
        user = await prisma.user.findUnique({
            where: { browserToken },
        });
        console.log('User found for post creation:', user ? user.id : 'No user found');

        if (!user) {
            user = await prisma.user.create({
                data: { browserToken, displayName: authorName },
            });
            console.log('New user created for post creation:', user.id);
        }

        if (user.isBanned) {
            console.log('Banned user attempted to create a post:', user.id);
            return NextResponse.json(
                { error: 'User is banned', reason: user.banReason, bannedUntil: user.bannedUntil },
                { status: 403 }
            );
        }
    }

    const post = await prisma.post.create({
        data: {
            title,
            content,
            authorName,
            author: user ? { connect: { id: user.id } } : undefined,
        },
        include: { author: true },
    });

    console.log('New post created:', { id: post.id, title: post.title, authorId: post.author?.id });

    return NextResponse.json(post);
}