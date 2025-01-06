// src/hooks/useBlogOperations.js

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from '../../stores/actions/blogActions';

export default function useGetAllBlogs() {
    const { loading, blogs, error } = useSelector((state) => state.blog);
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlog());
  }, []);

  return { blogs, loading, error };
}

function useGetBlogById(blogId) {
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/api/blogs/${blogId}`);
        setBlog(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  return { blog, isLoading, error };
}

