"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronUp, ChevronDown, MessageSquare } from 'lucide-react';
import PostForm from './form/PostForm';
import CommentForm from './form/CommentForm';
import Comment from './Comment';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';

interface Vote {
    id: string;
    value: number;
    userId: string;
}

interface Comment {
    id: string;
    content: string;
    authorName: string;
    createdAt: string;
    children?: Comment[];
    votes?: Vote[];
}

interface Post {
    id: string;
    title: string;
    content: string;
    authorName: string;
    votes?: Vote[];
    comments: Comment[];
}

const ThreadSection: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [expandedPost, setExpandedPost] = useState<string | null>(null);
    const [browserToken, setBrowserToken] = useState<string>('');

    const fetchPosts = useCallback(async () => {
        try {
            const response = await fetch('/api/posts');
            const data: Post[] = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
            toast({
                title: "Error",
                description: "Failed to fetch posts. Please try again later.",
                variant: "destructive",
            });
        }
    }, []);

    useEffect(() => {
        fetchPosts();
        const token = localStorage.getItem('browserToken') || Math.random().toString(36).substring(2);
        localStorage.setItem('browserToken', token);
        setBrowserToken(token);

        const intervalId = setInterval(fetchPosts, 30000); // Fetch posts every 30 seconds

        return () => clearInterval(intervalId);
    }, [fetchPosts]);

    const handleVote = async (postId: string | null, commentId: string | null, value: number) => {
        try {
            const response = await fetch('/api/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postId, commentId, value, browserToken }),
            });

            if (response.ok) {
                fetchPosts(); // Refetch posts to update the UI
            } else if (response.status === 404) {
                // Post not found, remove it from the client-side state
                setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
                toast({
                    title: "Post not found",
                    description: "This post may have been deleted.",
                    variant: "destructive",
                });
            } else {
                console.error('Failed to vote');
                toast({
                    title: "Error",
                    description: "Failed to register vote. Please try again.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.error('Error voting:', error);
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "An error occurred while voting. Please try again.",
                variant: "destructive",
            });
        }
    };

    const toggleComments = (postId: string) => {
        setExpandedPost(expandedPost === postId ? null : postId);
    };

    const calculateVoteScore = (votes?: Vote[]) => {
        return votes ? votes.reduce((acc, vote) => acc + vote.value, 0) : 0;
    };

    return (
        <div className="max-w-2xl mx-auto mt-8 space-y-8">
            <PostForm onPostCreated={fetchPosts} />
            {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                    <CardContent className="p-0">
                        <div className="flex items-start p-4">
                            <div className="flex flex-col items-center mr-4">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleVote(post.id, null, 1)}
                                    className="text-muted-foreground hover:text-primary"
                                >
                                    <ChevronUp className="h-5 w-5" />
                                </Button>
                                <span className="text-lg font-bold">{calculateVoteScore(post.votes)}</span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleVote(post.id, null, -1)}
                                    className="text-muted-foreground hover:text-destructive"
                                >
                                    <ChevronDown className="h-5 w-5" />
                                </Button>
                            </div>
                            <div className="flex-grow">
                                <CardHeader className="p-0">
                                    <CardTitle className="text-xl font-heading">{post.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground">Posted by {post.authorName}</p>
                                </CardHeader>
                                <p className="mt-2">{post.content}</p>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => toggleComments(post.id)}
                                    className="mt-2 text-muted-foreground hover:text-primary"
                                >
                                    <MessageSquare className="mr-1 h-4 w-4" />
                                    {post.comments.length} Comments
                                </Button>
                            </div>
                        </div>
                        {expandedPost === post.id && (
                            <>
                                <Separator />
                                <div className="p-4 bg-accent/50">
                                    <CommentForm postId={post.id} onCommentCreated={fetchPosts} />
                                    {post.comments && post.comments.length > 0 ? (
                                        post.comments.map((comment) => (
                                            <Comment
                                                key={comment.id}
                                                comment={comment}
                                                postId={post.id}
                                                onCommentCreated={fetchPosts}
                                                onVote={(commentId, value) => handleVote(null, commentId, value)}
                                                depth={0}
                                                currentUserId={browserToken}
                                            />
                                        ))
                                    ) : (
                                        <p className="text-muted-foreground">No comments yet.</p>
                                    )}
                                </div>
                            </>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default ThreadSection;