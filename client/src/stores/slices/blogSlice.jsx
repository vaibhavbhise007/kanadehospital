import { createSlice } from '@reduxjs/toolkit';

import { fetchPosts, createPost, updatePost, deletePost } from '../actions/blogActions'
const initialState = {
    posts: [],
    loading: false,
    error: null,
};
const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch posts';
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                const index = state.posts.findIndex((post) => post.id === action.payload.id);
                if (index !== -1) {
                    state.posts[index] = action.payload;
                }
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter((post) => post.id !== action.payload);
            });
    },
});

export default blogSlice.reducer;
