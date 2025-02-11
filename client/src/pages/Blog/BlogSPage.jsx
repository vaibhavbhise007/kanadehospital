import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../../stores/actions/blogActions";
import bgimg from "../../assets/blogs/blog.jpg";

function BlogSPage() {
    const { blogId } = useParams(); // ✅ Extracts the dynamic blogId
    const dispatch = useDispatch();

    const { blogs, loading, error } = useSelector((state) => state.blog);

    useEffect(() => {
        if (!blogs.length) {
            dispatch(fetchBlog());
        }
    }, [dispatch, blogs]);

    const blog = blogs?.find((t) => String(t._id) === String(blogId));

    if (loading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
    if (error) return <div className="text-red-500 text-center mt-8">Error: {error}</div>;
    if (!blog) return <div className="text-gray-500 text-center mt-8">Blog not found</div>;

    return (
        <div>
            {/* Hero Section */}
            <div className="relative py-20 pt-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="absolute inset-0 bg-cover z-0"
                        style={{ backgroundImage: `url(${bgimg || ""})` }}
                    ></div>
                    <div className="flex justify-center">
                        <div className="relative text-3xl sm:text-4xl md:text-5xl lg:text-4xl items-center font-bold text-black z-10 text-center">
                            <h2>{blog.title}</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Image */}
            <div className="px-4 sm:px-6 lg:px-20 py-12">
                {typeof blog.img === "string" ? (
                    <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-md"
                    />
                ) : (
                    <div className="w-full h-64 sm:h-96 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg shadow-md">
                        No Image Available
                    </div>
                )}
            </div>

            {/* Blog Content */}
            <div className="px-4 sm:px-6 lg:px-24 mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">{blog.title}</h1>
                <div className="prose mb-4">{blog.about}</div>

                {blog.subtitle1 && (
                    <>
                        <h2 className="text-xl sm:text-2xl font-bold mb-2">{blog.subtitle1}</h2>
                        <div className="prose mb-4">{blog.about1}</div>
                    </>
                )}

                {blog.subtitle2 && (
                    <>
                        <h2 className="text-xl sm:text-2xl font-bold mb-2">{blog.subtitle2}</h2>
                        <div className="prose mb-4">{blog.about2}</div>
                    </>
                )}

                {blog.subtitle3 && (
                    <>
                        <h2 className="text-xl sm:text-2xl font-bold mb-2">{blog.subtitle3}</h2>
                        <div className="prose mb-4">{blog.about3}</div>
                    </>
                )}
            </div>
        </div>
    );
}

export default BlogSPage;
