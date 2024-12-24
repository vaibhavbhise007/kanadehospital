import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        title: "Understanding Piles: Causes and Symptoms",
        excerpt: "Learn about the common causes of piles and how to identify the symptoms early...",
        author: "Dr. Arun Kanade",
        date: "2024-03-15",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Benefits of Laser Treatment for Piles",
        excerpt: "Discover why laser treatment is becoming the preferred choice for piles treatment...",
        author: "Dr. Priya Sharma",
        date: "2024-03-10",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Post-Treatment Care Guidelines",
        excerpt: "Essential tips and guidelines to follow after your piles treatment...",
        author: "Dr. Rajesh Patel",
        date: "2024-03-05",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
    }
];

export default function Blog() {
    return (
        <div className="bg-white">
            <div className="relative py-16 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
                        <p className="text-lg text-gray-300">Latest insights and medical updates</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Card key={index} className="overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <User className="h-4 w-4 mr-1" />
                                    <span className="mr-4">{post.author}</span>
                                    <Calendar className="h-4 w-4 mr-1" />
                                    <span>{new Date(post.date).toLocaleDateString()}</span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <Button variant="link" className="text-[#C5A572] hover:text-[#B39362] p-0">
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}