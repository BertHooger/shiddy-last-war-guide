// File: src/app/api/user/ban/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/auth"

export async function POST(request: Request) {
    const session = await getServerSession(authOptions)

    if (session?.user?.role !== 'admin') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    const { browserToken, banReason, banDuration } = await request.json();

    const bannedUntil = banDuration ? new Date(Date.now() + banDuration) : null;

    try {
        const updatedUser = await prisma.user.update({
            where: { browserToken },
            data: {
                isBanned: true,
                banReason,
                bannedUntil
            },
        });

        return NextResponse.json({
            message: 'User banned successfully',
            userId: updatedUser.id,
            bannedUntil: updatedUser.bannedUntil,
            banReason: updatedUser.banReason
        });
    } catch (error) {
        console.error('Error banning user:', error);
        return NextResponse.json({ error: 'Failed to ban user' }, { status: 500 });
    }
}