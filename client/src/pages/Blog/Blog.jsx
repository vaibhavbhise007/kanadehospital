import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../stores/actions/blogActions";
import bgimg from "../../assets/blogs/blog.jpg";
import BlogCard from "../../components/ui/BlogCard";
import Skeleton from "react-loading-skeleton"; // Import Skeleton component
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton styles

export default function Blog() {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <div className="bg-white pt-24">
        <div className="relative py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-black">
              <div
                className="absolute opacity-100 inset-0 h-[200px] w-full bg-cover z-0"
                style={{ backgroundImage: `url(${bgimg || ""})` }}
              ></div>
              <h1 className="relative text-4xl font-bold mb-4">Our Blog</h1>
              <p className="relative text-lg font-serif text-gray-600">
                Latest insights and medical updates
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          // Skeleton Loader when content is still loading
          <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-8">
            {Array(6)
              .fill()
              .map((_, index) => (
                <div key={index} className="flex flex-col">
                  <Skeleton height={200} width={350} />
                  <Skeleton height={40} width={250} className="mt-4" />
                  <Skeleton height={15} width={300} className="mt-2" />
                </div>
              ))}
          </div>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-600">No blog posts available.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-8">
            {blogs.map((blog) => (
              <BlogCard
                key={blog._id} // Ensure a unique key for each blog
                imageSrc={blog.img}
                title={blog.title}
                about={blog.about}
                readMorePath={`/blog/${blog._id}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
