import prisma from '@/lib/prisma';

export async function deleteCommentAndReplies(commentId: string) {
    const replies = await prisma.comment.findMany({
        where: { parentId: commentId }
    });

    for (const reply of replies) {
        await deleteCommentAndReplies(reply.id);
    }

    await prisma.vote.deleteMany({
        where: { commentId: commentId }
    });

    await prisma.comment.delete({
        where: { id: commentId }
    });
}