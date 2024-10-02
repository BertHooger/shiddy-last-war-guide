// File: src/app/admin/dashboard/page.tsx

'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface Post {
    id: string;
    title: string;
    content: string;
    authorName: string;
    comments: Comment[];
}

interface Comment {
    id: string;
    content: string;
    authorName: string;
}

export default function AdminDashboard() {
    const [posts, setPosts] = useState<Post[]>([])
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/admin/login')
        } else if (status === 'authenticated') {
            fetchPosts()
        }
    }, [status, router])

    const fetchPosts = async () => {
        const res = await fetch('/api/posts')
        const data = await res.json()
        setPosts(data)
    }

    const deletePost = async (postId: string) => {
        if (confirm('Are you sure you want to delete this post?')) {
            const res = await fetch(`/api/posts/${postId}`, { method: 'DELETE' })
            if (res.ok) {
                fetchPosts()
            } else {
                alert('Failed to delete post')
            }
        }
    }

    const deleteComment = async (postId: string, commentId: string) => {
        if (confirm('Are you sure you want to delete this comment?')) {
            const res = await fetch(`/api/comments/${commentId}`, { method: 'DELETE' })
            if (res.ok) {
                fetchPosts()
            } else {
                alert('Failed to delete comment')
            }
        }
    }

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (!session) {
        return <div>Access Denied</div>
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            {posts.map((post) => (
                <div key={post.id} className="mb-8 p-4 border rounded">
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p>{post.content}</p>
                    <p className="text-sm text-gray-500">By {post.authorName}</p>
                    <button
                        onClick={() => deletePost(post.id)}
                        className="mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Delete Post
                    </button>
                    <h3 className="mt-4 font-bold">Comments:</h3>
                    {post.comments.map((comment) => (
                        <div key={comment.id} className="ml-4 mt-2 p-2 border-l">
                            <p>{comment.content}</p>
                            <p className="text-sm text-gray-500">By {comment.authorName}</p>
                            <button
                                onClick={() => deleteComment(post.id, comment.id)}
                                className="mt-1 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                            >
                                Delete Comment
                            </button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}