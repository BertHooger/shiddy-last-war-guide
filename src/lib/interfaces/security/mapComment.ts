// lib/interfaces/security/mapComment.ts
import { PrismaComment, MappedComment } from '@/lib/interfaces/security/routes';

export const mapComment = (comment: PrismaComment): MappedComment => {
    if (!comment) {
        console.error('Received null or undefined comment in mapComment');
        return null as unknown as MappedComment;
    }
    return {
        id: comment.id,
        content: comment.content,
        author: comment.user?.name || comment.author,
        createdAt: comment.createdAt,
        updatedAt: comment.updatedAt,
        likes: comment.likes,
        dislikes: comment.dislikes,
        userId: comment.userId,
        parentId: comment.parentId,
        userImage: comment.user?.image || null,
        ip: comment.ip,  // Don't change null to 'unknown' here
        replies: Array.isArray(comment.replies) ? comment.replies.map(mapComment).filter(Boolean) : [],
        userVote: comment.votes?.find(vote => vote.userId === comment.userId)?.type || null
    };
};