import { createAsyncThunk } from '@reduxjs/toolkit';
import { POST, GET, PUT, DELETE } from "../../utils/http";
import { handleError } from "../../utils/error";

// Fetch all blogs
export const fetchBlog = createAsyncThunk('blog/fetchBlog', async (_, { rejectWithValue }) => {
    try {
        const { response, json } = await GET("/blogs");
        if (response.status === 200) {
            return json;
        }
        return rejectWithValue(handleError(json));
    } catch (error) {
        return rejectWithValue(handleError(error));
    }
});

// Post a new blog
export const postBlog = createAsyncThunk('blog/postBlog', async (blogData, { rejectWithValue }) => {
    try {
        const { response, json } = await POST("/blogs/", blogData);
        // console.log(response);
        console.log(json);
        if (response.status === 201) {
            return json;
        }
        return rejectWithValue(handleError(json));
    } catch (error) {
        return rejectWithValue(handleError(error));
    }
});

// Update an existing blog by ID
export const updateBlog = createAsyncThunk('blog/updateBlog', async ({ id, blogData }, { rejectWithValue }) => {
    try {
        const { response, json } = await PUT(`/blogs/${id}`, blogData);
        if (response.status === 200) {
            return json;
        }
        return rejectWithValue(handleError(json));
    } catch (error) {
        return rejectWithValue(handleError(error));
    }
});

// Delete a blog by ID
export const deleteBlog = createAsyncThunk('blog/deleteBlog', async (id, { rejectWithValue }) => {
    try {
        const { response, json } = await DELETE(`/blogs/${id}`);
        if (response.status === 200) {
            return json;
        }
        return rejectWithValue(handleError(json));
    } catch (error) {
        return rejectWithValue(handleError(error));
    }
});
