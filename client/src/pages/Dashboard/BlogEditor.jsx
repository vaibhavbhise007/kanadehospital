import React, { useState } from 'react';
import { Image, Save } from 'lucide-react';
import useCreateBlog from '../../hooks/blog/useCreateBlog';

export default function BlogEditor() {
  const { 
    isLoading, 
    handleSubmit, 
    handleImageChange,
    onSubmit, 
    serverError, 
    successMessage,
    errors,
    post,
    setPost,
    register,
  } = useCreateBlog();

  return (
    <div className="p-6 mt-10">
      <h1 className="text-2xl font-bold mb-6">Create Blog Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            {...register('title', { required: 'Title is required' })}
            value={post.title} // Controlled value
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.title && <span className="text-red-500 text-xs">{errors.title.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            {...register('category', { required: 'Category is required' })}
            value={post.category}
            onChange={(e) => setPost({ ...post, category: e.target.value })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select category</option>
            <option value="health-tips">Health Tips</option>
            <option value="medical-news">Medical News</option>
            <option value="hospital-updates">Hospital Updates</option>
          </select>
          {errors.category && <span className="text-red-500 text-xs">{errors.category.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
          <div className="flex gap-2 items-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {post.imagePreview && (
              <img src={post.imagePreview} alt="Preview" className="w-16 h-16 rounded-lg border" />
            )}
            <button
              type="button"
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <Image size={20} />
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
          <textarea
            {...register('content', { required: 'Content is required' })}
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            className="w-full p-2 border rounded-lg h-64 focus:ring-2 focus:ring-blue-500"
            required
          />
          {errors.content && <span className="text-red-500 text-xs">{errors.content.message}</span>}
        </div>

        {serverError && <div className="text-red-500">{serverError}</div>}
        {successMessage && <div className="text-green-500">{successMessage}</div>}

        <button
          type="submit"
          className="flex items-center justify-center w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          disabled={isLoading}
        >
          <Save size={20} className="mr-2" />
          {isLoading ? 'Saving...' : 'Save Post'}
        </button>
      </form>
    </div>
  );
}
