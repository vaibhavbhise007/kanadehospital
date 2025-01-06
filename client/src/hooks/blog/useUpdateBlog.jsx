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

function useUpdateBlog() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);

  const updateBlog = async (blogId, updatedData) => {
    setIsUpdating(true);
    try {
      const response = await axios.put(`/api/blogs/${blogId}`, updatedData);
      return response.data;
    } catch (err) {
      setError(err);
    } finally {
      setIsUpdating(false);
    }
  };

  return { updateBlog, isUpdating, error };
}

