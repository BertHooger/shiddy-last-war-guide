import React, { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface CommentFormProps {
    postId: string;
    parentId?: string;
    onCommentCreated: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId, parentId, onCommentCreated }) => {
    const [content, setContent] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [browserToken, setBrowserToken] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('browserToken') || Math.random().toString(36).substring(2);
        localStorage.setItem('browserToken', token);
        setBrowserToken(token);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postId, parentId, content, authorName, browserToken }),
            });

            if (response.ok) {
                setContent('');
                setAuthorName('');
                onCommentCreated();
            } else {
                const data = await response.json();
                if (data.error === 'User is banned') {
                    setError(`You are banned from commenting. Reason: ${data.reason}. ${data.bannedUntil ? `Ban expires: ${new Date(data.bannedUntil).toLocaleString()}` : 'This is a permanent ban.'}`);
                } else {
                    setError('Failed to create comment. Please try again.');
                }
            }
        } catch (error) {
            console.error('Error creating comment:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
                <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            <div className="space-y-2">
                <Label htmlFor="comment-content">Comment</Label>
                <Textarea
                    id="comment-content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write a comment..."
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="comment-author">Your Name</Label>
                <Input
                    id="comment-author"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Your name"
                    required
                />
            </div>
            <Button type="submit">Submit Comment</Button>
        </form>
    );
};

export default CommentForm;