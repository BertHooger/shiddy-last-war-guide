"use client"

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Comment } from "@/lib/interfaces/section/comment";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Tooltip } from "react-tooltip";
import { ThumbsUp, ThumbsDown, Trash2, Edit, MessageSquare, User } from "lucide-react";
import { useSession } from "next-auth/react";
import ReactMarkdown from 'react-markdown';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const CommentSection: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [editingComment, setEditingComment] = useState<Comment | null>(null);
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [replyContent, setReplyContent] = useState("");
    const [replyAuthorName, setReplyAuthorName] = useState("");
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const { data: session } = useSession();
    const { toast } = useToast();

    const fetchComments = useCallback(async (pageNum: number) => {
        try {
            const response = await fetch(`/api/comments?page=${pageNum}`);
            if (!response.ok) throw new Error('Failed to fetch comments');
            const data = await response.json();
            setComments(prevComments => pageNum === 1 ? data.comments : [...prevComments, ...data.comments]);
            setHasMore(data.hasMore);
        } catch (error) {
            console.error('Error fetching comments:', error);
            toast({
                title: "Error",
                description: "Failed to load comments. Please try again later.",
                variant: "destructive",
            });
        }
    }, [toast]);

    useEffect(() => {
        fetchComments(1);
    }, [fetchComments]);

    const addCommentToTree = useCallback((comments: Comment[], newComment: Comment): Comment[] => {
        if (!newComment.parentId) {
            return [newComment, ...comments];
        }

        return comments.map(comment => {
            if (comment.id === newComment.parentId) {
                return {
                    ...comment,
                    replies: [newComment, ...(comment.replies || [])]
                };
            } else if (comment.replies && comment.replies.length > 0) {
                return {
                    ...comment,
                    replies: addCommentToTree(comment.replies, newComment)
                };
            }
            return comment;
        });
    }, []);

    const handleAddComment = useCallback(async (parentId: string | null = null) => {
        const content = parentId ? replyContent : newComment;
        const author = parentId ? (replyAuthorName || 'Anonymous') : (authorName || 'Anonymous');

        if (content.trim() !== "") {
            try {
                const response = await fetch('/api/comments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ action: 'comment', content, author, parentId }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to add comment');
                }

                const addedComment: Comment = await response.json();

                setComments(prevComments => addCommentToTree(prevComments, addedComment));

                setNewComment("");
                setReplyContent("");
                setReplyAuthorName("");
                setReplyingTo(null);
                toast({
                    title: "Success",
                    description: "Your comment has been added.",
                });
            } catch (error) {
                console.error('Error adding comment:', error);
                toast({
                    title: "Error",
                    description: error instanceof Error ? error.message : "Failed to add comment. Please try again.",
                    variant: "destructive",
                });
            }
        } else {
            toast({
                title: "Error",
                description: "Please enter a comment.",
                variant: "destructive",
            });
        }
    }, [newComment, replyContent, authorName, replyAuthorName, toast, addCommentToTree]);

    const updateCommentInTree = useCallback((comments: Comment[], updatedComment: Partial<Comment> & { id: string }): Comment[] => {
        return comments.map(comment => {
            if (comment.id === updatedComment.id) {
                return { ...comment, ...updatedComment };
            }
            if (comment.replies && comment.replies.length > 0) {
                return {
                    ...comment,
                    replies: updateCommentInTree(comment.replies, updatedComment)
                };
            }
            return comment;
        });
    }, []);

    const handleVote = useCallback(async (commentId: string, voteType: 'like' | 'dislike') => {
        console.log(`Attempting to ${voteType} comment ${commentId}`);

        const findComment = (comments: Comment[], id: string): Comment | undefined => {
            for (const comment of comments) {
                if (comment.id === id) return comment;
                if (comment.replies) {
                    const found = findComment(comment.replies, id);
                    if (found) return found;
                }
            }
        };

        const comment = findComment(comments, commentId);
        if (!comment) return;

        const isRemovingVote = comment.userVote === voteType;
        const isChangingVote = comment.userVote && comment.userVote !== voteType;

        try {
            setComments(prevComments =>
                updateCommentInTree(prevComments, {
                    id: commentId,
                    likes: comment.likes + (voteType === 'like'
                        ? (isRemovingVote ? -1 : 1)
                        : (isChangingVote ? -1 : 0)),
                    dislikes: comment.dislikes + (voteType === 'dislike'
                        ? (isRemovingVote ? -1 : 1)
                        : (isChangingVote ? -1 : 0)),
                    userVote: isRemovingVote ? null : voteType
                })
            );

            const payload = { action: 'vote', commentId, voteType };
            console.log('Sending vote payload:', payload);

            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            console.log('Vote response status:', response.status);

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Vote response error:', errorData);
                throw new Error(errorData.error || `Failed to ${voteType} comment`);
            }

            const updatedComment = await response.json();
            console.log('Updated comment from server:', updatedComment);

            setComments(prevComments => updateCommentInTree(prevComments, updatedComment));
        } catch (error) {
            setComments(prevComments =>
                updateCommentInTree(prevComments, comment)
            );

            console.error(`Error voting on comment:`, error);
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : `Failed to vote on comment. Please try again.`,
                variant: "destructive",
            });
        }
    }, [comments, toast, updateCommentInTree]);

    const deleteCommentFromTree = useCallback((comments: Comment[], commentId: string): Comment[] => {
        return comments.filter(comment => {
            if (comment.id === commentId) {
                return false;
            }
            if (comment.replies.length > 0) {
                comment.replies = deleteCommentFromTree(comment.replies, commentId);
            }
            return true;
        });
    }, []);

    const handleDeleteComment = useCallback(async (commentId: string) => {
        if (session?.user?.role !== 'admin') {
            toast({
                title: "Error",
                description: "You don't have permission to delete comments.",
                variant: "destructive",
            });
            return;
        }

        try {
            const response = await fetch('/api/comments', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: commentId }),
            });
            if (!response.ok) throw new Error('Failed to delete comment');
            setComments(prevComments => deleteCommentFromTree(prevComments, commentId));
            toast({
                title: "Success",
                description: "Comment deleted successfully.",
            });
        } catch (error) {
            console.error('Error deleting comment:', error);
            toast({
                title: "Error",
                description: "Failed to delete comment. Please try again.",
                variant: "destructive",
            });
        }
    }, [session, toast, deleteCommentFromTree]);

    const handleEditComment = useCallback(async (commentId: string, newContent: string) => {
        try {
            const response = await fetch('/api/comments', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: commentId, action: 'edit', content: newContent }),
            });
            if (!response.ok) throw new Error('Failed to edit comment');
            const updatedComment = await response.json();
            setComments(prevComments => updateCommentInTree(prevComments, updatedComment));
            setEditingComment(null);
            toast({
                title: "Success",
                description: "Comment edited successfully.",
            });
        } catch (error) {
            console.error('Error editing comment:', error);
            toast({
                title: "Error",
                description: "Failed to edit comment. Please try again.",
                variant: "destructive",
            });
        }
    }, [toast, updateCommentInTree, setEditingComment]);

    const loadMoreComments = () => {
        if (hasMore) {
            setPage(prevPage => prevPage + 1);
            fetchComments(page + 1);
        }
    };

    const memoizedRenderComment = useMemo(() => {
        const renderComment = (comment: Comment, depth = 0): JSX.Element => (
            <div key={comment.id} className={`bg-pastel-gray bg-opacity-20 p-4 rounded-md mb-4 ${depth > 0 ? 'border-l-2 border-pastel-blue ml-4' : ''}`}>
                <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-pastel-blue flex items-center justify-center mr-2">
                        <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                        <p className="font-semibold text-pastel-yellow">{comment.author}</p>
                        <p className="text-pastel-lightBlue text-xs">
                            {new Date(comment.createdAt).toLocaleString()}
                        </p>
                    </div>
                </div>
                {editingComment?.id === comment.id ? (
                    <Textarea
                        value={editingComment.content}
                        onChange={(e) => setEditingComment({ ...editingComment, content: e.target.value })}
                        className="bg-pastel-white text-pastel-black mt-2 w-full"
                    />
                ) : (
                    <ReactMarkdown className="text-pastel-white mt-2">{comment.content}</ReactMarkdown>
                )}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                        <Button
                            onClick={() => handleVote(comment.id, 'like')}
                            className={`bg-pastel-blue text-pastel-black hover:bg-pastel-lightBlue ${comment.userVote === 'like' ? 'opacity-50' : ''}`}
                            size="sm"
                        >
                            <ThumbsUp className="mr-1 h-4 w-4" /> {comment.likes}
                        </Button>
                        <Button
                            onClick={() => handleVote(comment.id, 'dislike')}
                            className={`bg-pastel-red text-pastel-black hover:bg-pastel-lightRed ${comment.userVote === 'dislike' ? 'opacity-50' : ''}`}
                            size="sm"
                        >
                            <ThumbsDown className="mr-1 h-4 w-4" /> {comment.dislikes}
                        </Button>
                        <Button
                            onClick={() => setReplyingTo(comment.id)}
                            className="bg-pastel-green text-pastel-black hover:bg-pastel-lightGreen"
                            size="sm"
                        >
                            <MessageSquare className="mr-1 h-4 w-4" /> Reply
                        </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                        {(session?.user?.role === 'admin' || session?.user?.name === comment.author) && (
                            <Button
                                onClick={() => setEditingComment(comment)}
                                className="bg-pastel-yellow text-pastel-black hover:bg-pastel-lightYellow"
                                size="sm"
                            >
                                <Edit className="h-4 w-4" />
                            </Button>
                        )}
                        {session?.user?.role === 'admin' && (
                            <Button
                                onClick={() => handleDeleteComment(comment.id)}
                                className="bg-pastel-red text-pastel-black hover:bg-pastel-lightRed"
                                size="sm"
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        )}
                    </div>
                </div>
                {editingComment?.id === comment.id && (
                    <div className="mt-2">
                        <Button onClick={() => handleEditComment(comment.id, editingComment.content)}>Save</Button>
                        <Button onClick={() => setEditingComment(null)} variant="secondary" className="ml-2">Cancel</Button>
                    </div>
                )}
                {replyingTo === comment.id && (
                    <div className="mt-4 space-y-2">
                        <Input
                            type="text"
                            value={replyAuthorName}
                            onChange={(e) => setReplyAuthorName(e.target.value)}
                            placeholder="Your Name"
                            className="bg-pastel-white text-pastel-black w-full"
                        />
                        <Textarea
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            placeholder="Your reply"
                            className="bg-pastel-white text-pastel-black w-full"
                        />
                        <div className="mt-2">
                            <Button onClick={() => handleAddComment(comment.id)} className="bg-pastel-green text-pastel-black hover:bg-pastel-lightGreen">Post Reply</Button>
                            <Button onClick={() => {
                                setReplyingTo(null);
                                setReplyContent("");
                                setReplyAuthorName("");
                            }} variant="secondary" className="ml-2">Cancel</Button>
                        </div>
                    </div>
                )}
                {comment.replies && comment.replies.length > 0 && (
                    <div className="mt-4">
                        {comment.replies.map(reply => renderComment(reply, depth + 1))}
                    </div>
                )}
            </div>
        );
        return renderComment;
    }, [
        session,
        editingComment,
        replyingTo,
        replyContent,
        replyAuthorName,
        handleVote,
        handleDeleteComment,
        handleEditComment,
        handleAddComment,
    ]);

    return (
        <div className="bg-pastel-black p-6 rounded-lg shadow-md">
            <Tooltip id="vote-limit-tooltip" />
            <h2 className="text-2xl font-bold mb-4 text-pastel-yellow">Comments</h2>
            <div className="mb-6 space-y-4">
                <Input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Your Name"
                    className="bg-pastel-white text-pastel-black w-full"
                />
                <Textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Your Comment"
                    className="bg-pastel-white text-pastel-black w-full"
                />
                <div className="flex justify-between items-center">
                    <Button
                        onClick={() => handleAddComment()}
                        className="bg-pastel-green text-pastel-black hover:bg-pastel-lightGreen"
                    >
                        Add Comment
                    </Button>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-pastel-blue text-pastel-black hover:bg-pastel-lightBlue">
                                Formatting Help
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Markdown Formatting Guide</DialogTitle>
                            </DialogHeader>
                            <div className="prose dark:prose-invert">
                                <p>You can use Markdown to format your comments:</p>
                                <ul>
                                    <li><code>**bold**</code> for <strong>bold text</strong></li>
                                    <li><code>*italic*</code> for <em>italic text</em></li>
                                    <li><code>[link](http://example.com)</code> for <a href="http://example.com">links</a></li>
                                    <li><code>- item</code> for unordered lists</li>
                                    <li><code>1. item</code> for ordered lists</li>
                                    <li><code># Heading</code> for headings</li>
                                    <li><code>`code`</code> for <code>inline code</code></li>
                                </ul>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div className="space-y-4">
                {comments.map(comment => memoizedRenderComment(comment))}
                {hasMore && (
                    <Button onClick={loadMoreComments} className="w-full mt-4 bg-pastel-blue text-pastel-black hover:bg-pastel-lightBlue">
                        Load More Comments
                    </Button>
                )}
            </div>
        </div>
    );
};


export default CommentSection;