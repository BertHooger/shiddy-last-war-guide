// File: src/app/api/user/route.ts

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    const { browserToken, displayName } = await request.json();

    let user = await prisma.user.findUnique({
        where: { browserToken },
    });

    if (!user) {
        user = await prisma.user.create({
            data: { browserToken, displayName },
        });
    } else if (displayName && user.displayName !== displayName) {
        user = await prisma.user.update({
            where: { browserToken },
            data: { displayName },
        });
    }

    // Check if the user is banned
    if (user.isBanned) {
        if (user.bannedUntil && user.bannedUntil < new Date()) {
            // If the ban has expired, lift the ban
            user = await prisma.user.update({
                where: { browserToken },
                data: { isBanned: false, banReason: null, bannedUntil: null },
            });
        } else {
            // If the user is still banned, return an error
            return NextResponse.json(
                {
                    error: 'User is banned',
                    reason: user.banReason,
                    bannedUntil: user.bannedUntil
                },
                { status: 403 }
            );
        }
    }

    // Prepare the response object
    const response = {
        id: user.id,
        browserToken: user.browserToken,
        displayName: user.displayName,
    };

    // Only include ban information if the user is banned
    if (user.isBanned) {
        Object.assign(response, {
            isBanned: user.isBanned,
            banReason: user.banReason,
            bannedUntil: user.bannedUntil,
        });
    }

    return NextResponse.json(response);
}