import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
    const { postId, parentId, content, authorName, browserToken } = await request.json();

    // Check if the user is banned
    if (browserToken) {
        const user = await prisma.user.findUnique({
            where: { browserToken },
        });

        if (user && user.isBanned) {
            if (user.bannedUntil && user.bannedUntil < new Date()) {
                // If the ban has expired, lift the ban
                await prisma.user.update({
                    where: { browserToken },
                    data: { isBanned: false, banReason: null, bannedUntil: null },
                });
            } else {
                // If the user is still banned, return an error
                return NextResponse.json(
                    { error: 'User is banned', reason: user.banReason, bannedUntil: user.bannedUntil },
                    { status: 403 }
                );
            }
        }
    }

    // Create the comment
    const comment = await prisma.comment.create({
        data: {
            content,
            authorName,
            post: { connect: { id: postId } },
            parent: parentId ? { connect: { id: parentId } } : undefined,
            author: browserToken ? { connect: { browserToken } } : undefined,
        },
    });

    return NextResponse.json(comment);
}