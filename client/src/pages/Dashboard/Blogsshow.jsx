// controller->action->slice->hooks->view(page) delete procesure
import React, { useEffect } from 'react'; // Adjust the path as needed
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Calendar, User, ArrowRight, Link, Delete } from 'lucide-react';
import useDeleteBlog from '../../hooks/blog/useDeleteBlog';
import { useSelector } from 'react-redux';

export default function Blogsshow() {
   const{blogs,loading, error}= useSelector((state) => state.blog);

    const { deleteBlog, isDeleting } = useDeleteBlog();
    if (loading) {
        return <div>Loading...</div>;
    }
    const handleDelete = async (blogId) => {
        await deleteBlog(blogId);
    };

    // console.log(deleteBlog);

    return (
        <div className="bg-white h-[100%]">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {loading && <p className="text-center text-gray-600">Loading...</p>}
                {error && <p className="text-center text-red-500">Error: {error}</p>}

                {!loading && !error && blogs.length === 0 && (
                    <p className="text-center text-gray-600">No blog posts available.</p>
                )}
                

                {!loading && !error && blogs.length > 0 && (
                    <div className="grid md:grid-cols-3 gap-8">
                        {blogs.map((post, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">

                                <img
                                    src={post.img || 'https://via.placeholder.com/800x400'} // Default image if none provided
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <User className="h-4 w-4 mr-1" />
                                        <span className="mr-4">{post.author || 'Unknown'}</span>
                                        <Calendar className="h-4 w-4 mr-1" />
                                        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <h2 className="text-xl font-serif text-gray-900 mb-2">{post.title}</h2>

                                    <p className="text-gray-600 font-serif mb-4">{post.content}</p>
                                    <div className='flex justify-between'>
                                        <Button
                                            variant="link"
                                            className="text-[rgb(107,71,55)] hover:text-[#B39362] p-0"
                                        >
                                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>

                                        {/* <Button
                                            variant="link"
                                            className="text-[rgb(225,85,75)] hover:text-[#B39362] p-0"
                                        >
                                            Delete <Delete className="ml-2 h-4 w-4" />
                                        </Button> */}
                                         {/* { console.log(post)} */}
                                        <Button
                                            variant="link"
                                            className="text-[rgb(225,85,75)] hover:text-[#B39362] p-0"
                                          
                                            onClick={() => handleDelete(post._id)} // Ensure post.id is correct
                    
                                        >
                                            Delete <Delete className="ml-2 h-4 w-4" />
                                        </Button >
                                        
                                    </div>

                                </div>
                            </Card>
                        ))}+
                    </div>
                )}
            </div>
        </div>
    );
}
