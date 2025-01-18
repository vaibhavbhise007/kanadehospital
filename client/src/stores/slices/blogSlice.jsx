import { createSlice } from "@reduxjs/toolkit";
import { deleteBlog, fetchBlog, updateBlog } from "../actions/blogActions";
import { postBlog } from "../actions/blogActions";

const initialState = {
  blogs: [], // Consider normalizing if needed
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: "blog",
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
        state.error = action.error.message || "Failed to fetch posts";
      })

      // **Post New Blog**
      .addCase(postBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs.push(action.payload); // Add new blog to the list
        state.success = true;
      })
      .addCase(postBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to post blog";
      })

      // **Update Blog**
      .addCase(updateBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.loading = false;
        const updatedBlog = action.payload;
        state.blogs = state.blogs.map((blog) =>
          blog.id === updatedBlog.id ? updatedBlog : blog
        );
        state.success = true;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update blog";
      })

      // **Delete Blog**
      .addCase(deleteBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        // console.)log( action.payload)
        // console.log(blogs;
        state.loading = false;
        state.blogs = action.payload.blogs;
        state.success = true;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete blog";
      });
  },
});

export default blogSlice.reducer;
