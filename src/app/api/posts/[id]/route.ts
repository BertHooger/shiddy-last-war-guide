// File: src/app/api/posts/[id]/route.ts

import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/auth"
import prisma from '@/lib/prisma'

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions)

    if (!session || session.user?.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { id } = params

    try {
        // Delete all comments associated with the post
        await prisma.comment.deleteMany({
            where: { postId: id },
        })

        // Delete all votes associated with the post
        await prisma.vote.deleteMany({
            where: { postId: id },
        })

        // Delete the post
        await prisma.post.delete({
            where: { id },
        })

        return NextResponse.json({ message: 'Post and associated data deleted successfully' })
    } catch (error) {
        console.error('Error deleting post:', error)
        return NextResponse.json({ error: 'Failed to delete post and associated data' }, { status: 500 })
    }
}