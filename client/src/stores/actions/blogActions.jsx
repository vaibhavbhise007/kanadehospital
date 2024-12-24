import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('blog/fetchPosts', async () => {
    const response = await fetch('/api/posts');
    return response.json();
});

export const createPost = createAsyncThunk('blog/createPost', async (post) => {
    const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
    });
    return response.json();
});

export const updatePost = createAsyncThunk('blog/updatePost', async (post) => {
    const response = await fetch(`/api/posts/${post.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
    });
    return response.json();
});

export const deletePost = createAsyncThunk('blog/deletePost', async (id) => {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    return id;
});

