import { useEffect } from 'react';
import { Button } from '../../components/ui/Button';
import { Plus } from 'lucide-react';
import BlogPostCard from '../../components/admin/BlogPostCard';
import { useAppSelector } from '../../hooks/useSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
// import { fetchPosts, deletePost } from '../../stores/actions/blogActions';

export default function AdminBlogPosts() {
    const dispatch = useAppDispatch();
    const { posts, loading, error } = useAppSelector(state => state.blog);

    useEffect(() => {
        // dispatch(fetchPosts());
    }, [dispatch]);

    const handleEdit = (id) => {
        // Handle edit in a separate component
        console.log('Edit post:', id);
    };

    const handleDelete = (id) => {
        // dispatch(deletePost(id));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-8 w-screen">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
                <Button className="bg-[#C5A572] hover:bg-[#B39362]">
                    <Plus className="h-5 w-5 mr-2" /> New Post
                </Button>
            </div>

            <div className="space-y-6">
                {posts.map((post) => (
                    <BlogPostCard
                        key={post.id}
                        title={post.title}
                        excerpt={post.excerpt}
                        date={post.date}
                        status={post.status}
                        onEdit={() => handleEdit(post.id)}
                        onDelete={() => handleDelete(post.id)}
                    />
                ))}
            </div>
        </div>
    );
}
