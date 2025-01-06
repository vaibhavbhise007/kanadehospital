import React, { useEffect } from 'react'; // Adjust the path as needed
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import useGetAllBlogs from '../../hooks/blog/useGetAllBlogs';

export default function Blog() {
      const{blogs, loading, error}=useGetAllBlogs();
      if(loading){
        return <div>Loading...</div>;
      }

    return (
        <div className="bg-white">
            <div className="relative py-16 bg-[#e6dfdf]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-black">
                        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
                        <p className="text-lg font-serif text-gray-600">Latest insights and medical updates</p>
                    </div>
                </div>
            </div>

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
                                    <Button
                                        variant="link"
                                        className="text-[rgb(107,71,55)] hover:text-[#B39362] p-0"
                                    >
                                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
