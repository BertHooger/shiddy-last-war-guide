"use client"

import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, ChevronRight, MessageSquare } from 'lucide-react';
import CommentForm from './form/CommentForm';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import { getCommentColor } from '@/lib/config/colorScheme';

interface Vote {
    id: string;
    value: number;
    userId: string;
}

interface CommentData {
    id: string;
    content: string;
    authorName: string;
    createdAt: string;
    children?: CommentData[];
    votes?: Vote[];
}

interface CommentProps {
    comment: CommentData;
    postId: string;
    onCommentCreated: () => void;
    onVote: (commentId: string, value: number) => Promise<void>;
    depth?: number;
    currentUserId: string;
    colorIndex?: number;
}

const MAX_VISIBLE_REPLIES = 3;
const MAX_DEPTH = 5;

const Comment: React.FC<CommentProps> = ({
    comment,
    postId,
    onCommentCreated,
    onVote,
    depth = 0,
    currentUserId,
    colorIndex = 0
}) => {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [voteScore, setVoteScore] = useState(0);
    const [userVote, setUserVote] = useState<number>(0);
    const [visibleReplies, setVisibleReplies] = useState(MAX_VISIBLE_REPLIES);

    const commentColor = getCommentColor(depth, colorIndex);

    useEffect(() => {
        if (comment.votes) {
            const newVoteScore = comment.votes.reduce((acc, vote) => acc + vote.value, 0);
            setVoteScore(newVoteScore);

            const userVote = comment.votes.find(vote => vote.userId === currentUserId);
            setUserVote(userVote ? userVote.value : 0);
        } else {
            setVoteScore(0);
            setUserVote(0);
        }
    }, [comment.votes, currentUserId]);

    const handleVote = async (value: number) => {
        if (userVote === value) {
            toast({
                title: "Already voted",
                description: "You have already voted this way on this comment",
                variant: "default",
            });
            return;
        }

        try {
            await onVote(comment.id, value);
            setVoteScore(prevScore => prevScore + value - userVote);
            setUserVote(value);
        } catch (error) {
            console.error('Error voting on comment:', error);
            toast({
                title: "Error",
                description: "Failed to register vote. Please try again.",
                variant: "destructive",
            });
        }
    };

    const formatTimestamp = (timestamp: string) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    const getTotalReplies = (comment: CommentData): number => {
        if (!comment.children) return 0;
        return comment.children.reduce((total, child) => total + 1 + getTotalReplies(child), 0);
    };

    const totalReplies = getTotalReplies(comment);
    const hasMoreReplies = comment.children && comment.children.length > visibleReplies;

    // const depthColor = `hsl(${depth * 60 % 360}, 70%, 60%)`;

    return (
        <div className={`mt-4 ${depth > 0 ? 'ml-4' : ''}`}>
            <div className={`relative ${depth > 0 ? 'pl-4' : ''}`}>
                {depth > 0 && depth <= MAX_DEPTH && (
                    <div
                        className="absolute left-0 top-0 bottom-0 w-0.5"
                        style={{ backgroundColor: commentColor }}
                    ></div>
                )}
                <div className="relative flex">
                    <div className="flex flex-col items-center mr-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleVote(1)}
                            className={`text-muted-foreground ${userVote === 1 ? 'text-primary' : 'hover:text-primary'}`}
                        >
                            <ChevronUp className="h-4 w-4" />
                        </Button>
                        <span className="text-sm font-bold">{voteScore}</span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleVote(-1)}
                            className={`text-muted-foreground ${userVote === -1 ? 'text-destructive' : 'hover:text-destructive'}`}
                        >
                            <ChevronDown className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="flex-grow">
                        <div
                            className="p-3 rounded-md"
                            style={{
                                backgroundColor: `${commentColor}20`, // 20 is for 12.5% opacity
                                borderColor: commentColor,
                                borderWidth: '1px',
                                borderStyle: 'solid'
                            }}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <p className="font-bold">{comment.authorName}</p>
                                <p className="text-xs text-muted-foreground">{formatTimestamp(comment.createdAt)}</p>
                            </div>
                            <p className="mt-1">{comment.content}</p>
                            <div className="mt-2 flex items-center space-x-4">
                                <Button
                                    variant="link"
                                    size="sm"
                                    onClick={() => setShowReplyForm(!showReplyForm)}
                                    className="p-0 h-auto font-semibold"
                                >
                                    Reply
                                </Button>
                                {totalReplies > 0 && (
                                    <span className="text-xs text-muted-foreground flex items-center">
                                        <MessageSquare className="h-3 w-3 mr-1" />
                                        {totalReplies} {totalReplies === 1 ? 'reply' : 'replies'}
                                    </span>
                                )}
                            </div>
                        </div>
                        {showReplyForm && (
                            <>
                                <Separator className="my-2" />
                                <CommentForm
                                    postId={postId}
                                    parentId={comment.id}
                                    onCommentCreated={() => {
                                        onCommentCreated();
                                        setShowReplyForm(false);
                                    }}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
            {comment.children && comment.children.length > 0 && (
                <div className="mt-2">
                    {comment.children.slice(0, visibleReplies).map((childComment, index) => (
                        <Comment
                            key={childComment.id}
                            comment={childComment}
                            postId={postId}
                            onCommentCreated={onCommentCreated}
                            onVote={onVote}
                            depth={depth + 1}
                            currentUserId={currentUserId}
                            colorIndex={depth === 0 ? index : colorIndex}
                        />
                    ))}
                    {hasMoreReplies && (
                        <Button
                            variant="link"
                            size="sm"
                            onClick={() => setVisibleReplies(prev => prev + MAX_VISIBLE_REPLIES)}
                            className="mt-2 flex items-center text-muted-foreground hover:text-primary"
                        >
                            <ChevronRight className="h-4 w-4 mr-1" />
                            Load more replies
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
}

export default Comment;