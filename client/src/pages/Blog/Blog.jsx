import React, { useEffect, useState } from "react"; // Adjust the path as needed
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Calendar, User, ArrowRight } from "lucide-react";
import useGetAllBlogs from "../../hooks/blog/useGetAllBlogs";
import Loader from "../../components/Loader/Loader";
import BlogCard from "../../components/ui/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../stores/actions/blogActions";
import bgimg from "../../assets/blogs/blog.jpg";
import { Skeleton } from "@mui/material";
export default function Blog() {

  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  const [xloading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoadComplete = () => setLoading(false);
    const timer = setTimeout(handleLoadComplete, 1000); // Simulate loading time

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className="flex flex-col">
      {xloading ? (
        <div className="flex justify-center items-center bg-white h-screen ">
          <Skeleton/>{" "}
        </div>
      ) : (
        <div className="bg-white pt-24">
          <div className="relative py-16 ">
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

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {loading && <p className="text-center text-gray-600">Loading...</p>}
            {error && <p className="text-center text-red-500">Error: {error}</p>}

            {!loading && !error && blogs.length === 0 && (
              <p className="text-center text-gray-600">No blog posts available.</p>
            )}

            {!loading && !error && blogs.length > 0 && (
              <div className="grid md:grid-cols-2  gap-8">
                {blogs.map((blog) => (
                  <BlogCard
                    key={blog._id} // ✅ Ensure a unique key for each blog
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
      )}
    </div>
  );
}
