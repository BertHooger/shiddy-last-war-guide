import { ReactNode, } from 'react';

export interface ProtectedRouteProps {
    children: ReactNode;
    allowedRoles?: string[];
}

interface User {
    id: string;
    name: string | null;
    image: string | null;
}

interface Vote {
    id: string;
    userId: string | null;
    type: string;
    commentId: string;
    ip: string;
    userAgent: string;
}

export interface PrismaComment {
    id: string;
    ip: string | null;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
    likes: number;
    dislikes: number;
    userId: string | null;
    parentId: string | null;
    user: User | null;
    replies: PrismaComment[];
    votes: Vote[];
}

export interface MappedComment {
    id: string;
    ip: string | null;
    content: string;
    author: string;
    createdAt: Date;
    updatedAt: Date;
    likes: number;
    dislikes: number;
    userId: string | null;
    parentId: string | null;
    userImage: string | null;
    replies: MappedComment[];
    userVote: string | null;
}