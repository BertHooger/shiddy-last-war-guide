// lib/banCheck.ts

import prisma from '@/lib/prisma';

export async function isUserBanned(userId: string | null, ip: string | null): Promise<boolean> {
    const now = new Date();

    const ban = await prisma.ban.findFirst({
        where: {
            OR: [
                { userId: userId },
                { ip: ip || undefined }
            ],
            AND: [
                {
                    OR: [
                        { expiresAt: null },
                        { expiresAt: { gt: now } }
                    ]
                }
            ]
        }
    });

    return !!ban;
}