import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { postBlog } from '../../stores/actions/blogActions';
import { useForm } from 'react-hook-form';

export default function useCreateBlog() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  const [post, setPost] = useState({ title: '', category: '', content: '', imageFile: null, imagePreview: '' });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onBlur" });

  // Handle image selection and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPost((prevPost) => ({ ...prevPost, imageFile: file, imagePreview: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    setSuccessMessage("");
    setErrorMessage("");

    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('category', post.category);
    formData.append('content', post.content);
content.map((can,index)=>{
  formData.append(`content[${index}]`, can)
})
    if (post.imageFile) {
      formData.append('img', post.imageFile); // Ensure 'img' matches the backend's expected field
    } else {
      setErrorMessage("Image is required.");
      return; // Prevent form submission without an image
    }

    try {
      const res = await dispatch(postBlog(formData)).unwrap();
      setSuccessMessage("Blog post created successfully.");
      reset();
      setPost({ title: '', category: '', content: '', imageFile: null, imagePreview: '' });
    } catch (error) {
      setErrorMessage(error.message || "An error occurred while creating the blog post.");
    }
  };

  return {
    handleImageChange,
    register,
    setPost,
    post,
    isLoading,
    handleSubmit,
    error,
    errors,
    errorMessage,
    successMessage,
    onSubmit
  };
}
