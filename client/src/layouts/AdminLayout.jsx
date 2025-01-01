import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import Sidebar from '../components/layouts/Sidebar/Sidebar';

const AdminLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoadComplete = () => setLoading(false);
        const timer = setTimeout(handleLoadComplete, 2000); // Simulate loading time

        return () => clearTimeout(timer); // Cleanup
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar/>
            <main className="flex-1 overflow-auto">
                {loading ? (
                    <Loader />
                ) : (
                    <Outlet />
                )}
            </main >
        </div>
    );
}
export default AdminLayout;
