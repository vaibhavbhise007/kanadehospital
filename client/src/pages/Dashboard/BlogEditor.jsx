import React, { useState } from 'react';
import { Image, Save } from 'lucide-react';

export default function BlogEditor() {
  const [post, setPost] = useState({
    title: '',
    content: '',
    image: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle blog post submission
    console.log('Blog post:', post);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Create Blog Post</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
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
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Featured Image URL
          </label>
          <div className="flex gap-2 items-center">
            <input
              type="url"
              value={post.image}
              onChange={(e) => setPost({ ...post, image: e.target.value })}
              className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/image.jpg"
            />
            {post.image && (
              <img src={post.image} alt="Preview" className="w-16 h-16 rounded-lg border" />
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content
          </label>
          <textarea
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            className="w-full p-2 border rounded-lg h-64 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Save size={20} className="mr-2" />
          Save Post
        </button>
      </form>
    </div>
  );
}
