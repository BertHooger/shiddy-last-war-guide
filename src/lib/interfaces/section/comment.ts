export interface Comment {
    id: string;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
    likes: number;
    dislikes: number;
    userId: string | null;
    parentId: string | null;
    replies: Comment[];
    userVote: 'like' | 'dislike' | null;
}