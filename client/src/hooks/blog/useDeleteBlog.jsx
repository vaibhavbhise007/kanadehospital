// src/hooks/useBlogOperations.js
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteBlog as deleteBlogAction } from '../../stores/actions/blogActions';



export default function useDeleteBlog() {
  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteBlog = async (blogId) => {
    setIsDeleting(true);
      // Dispatch the Redux action for deleting a blog
      await dispatch(deleteBlogAction(blogId)).unwrap();
      // Redirect to the blog list page after deletion
      // navigate('/blogshow');
  
  };

  return { deleteBlog, isDeleting };
}
