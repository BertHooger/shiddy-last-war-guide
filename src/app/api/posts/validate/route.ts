import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    const { postIds } = await request.json();
    console.log('Received validation request for post IDs:', postIds);

    const validPosts = await prisma.post.findMany({
        where: {
            id: { in: postIds },
        },
        select: {
            id: true,
            lastUpdated: true,
        },
    });

    console.log('Valid posts:', validPosts);

    return NextResponse.json(validPosts);
}