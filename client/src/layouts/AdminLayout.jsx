import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const AdminLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoadComplete = () => setLoading(false);
        const timer = setTimeout(handleLoadComplete, 2000); // Simulate loading time

        return () => clearTimeout(timer); // Cleanup
    }, []);

    return (
        <div>
            <main>
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
