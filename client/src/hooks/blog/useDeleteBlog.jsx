// src/hooks/useBlogOperations.js

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from '../../stores/actions/blogActions';

export default function useDeleteBlog() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const deleteBlog = async (blogId) => {
    setIsDeleting(true);
    try {
      const response = await axios.delete(`/api/blogs/${blogId}`);
      return response.data;
    } catch (err) {
      setError(err);
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteBlog, isDeleting, error };
}

