import { createSlice } from '@reduxjs/toolkit';
import { fetchBlog } from '../actions/blogActions';

const initialState = {
    blogs: [], // Consider normalizing if needed
    loading: false,
    error: null,
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Posts
            .addCase(fetchBlog.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // Fetch Posts Success
            .addCase(fetchBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.blogs = action.payload;
            })
            // Fetch Posts Failure
            .addCase(fetchBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch posts';
            })
    },
});

export default blogSlice.reducer;   
