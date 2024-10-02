// File: src/app/api/comments/[id]/route.ts

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
        await prisma.comment.delete({
            where: { id },
        })

        return NextResponse.json({ message: 'Comment deleted successfully' })
    } catch (error) {
        console.error('Error deleting comment:', error)
        return NextResponse.json({ error: 'Failed to delete comment' }, { status: 500 })
    }
}