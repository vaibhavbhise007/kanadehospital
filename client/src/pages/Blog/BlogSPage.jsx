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

    console.log("URL Param blogId:", blogId);
    console.log("Available Blogs:", blogs);

    const blog = blogs?.find((t) => String(t._id) === String(blogId));

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">Error: {error}</div>;
    if (!blog) return <div className="text-gray-500">Blog not found</div>;

    return (
        <div>
            <div className="relative py-20 pt-40">
                <div className="max-w-7xl mx-auto px-4 sm:px- lg:px-4">

                    <div
                        className="absolute opacity-100 inset-0 bg-cover z-0"
                        style={{ backgroundImage: `url(${bgimg || ""})` }}
                    ></div>

                    <div  className="flex justify-center ">
                        <div className="relative text-3xl items-center pt-2 font-bold text-black z-10">
                            <h2>{blog.title}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-20 py-12">
                {typeof blog.img === "string" ? (
                    <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-96 object-cover rounded-lg shadow-md"
                    />
                ) : (
                    <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-gray-500">
                        No Image Available
                    </div>
                )}
            </div>
            <div  className="px-24 mb-8">
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <div className="prose mb-2">{blog.about}</div>
                <h1 className="text-xl font-bold mb-2">{blog.subtitle1}</h1>
                <div className="prose mb-2">{blog.about1}</div>
                <h1 className="text-xl font-bold mb-2">{blog.subtitle2}</h1>
                <div className="prose mb-2">{blog.about2}</div>
                <h1 className="text-xl font-bold mb-2">{blog.subtitle3}</h1>
                <div className="prose mb-2">{blog.about3}</div>
            </div>
        </div>
    );
}

export default BlogSPage;
