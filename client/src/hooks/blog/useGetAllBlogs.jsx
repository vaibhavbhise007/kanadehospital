import { useEffect } from 'react';
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
