import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import Sidebar from '../components/layouts/Sidebar/Sidebar';
import AdminNavbar from '../components/layouts/Navbar/AdminNavbar';

const AdminLayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoadComplete = () => setLoading(false);
        const timer = setTimeout(handleLoadComplete, 2000); // Simulate loading time

        return () => clearTimeout(timer); // Cleanup
    }, []);

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Sidebar className="w-64 h-full overflow-y-auto shadow-lg" />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <div className="fixed w-full z-10 top-0 left-0">
                    <AdminNavbar className="w-full" />
                </div>

                {/* Main Section */}
                <main className="flex-1 overflow-y-auto p-4 pt-16"> {/* Add padding-top to avoid overlap with navbar */}
                    {loading ? (
                        <div className="flex justify-center items-center h-full">
                            <Loader />
                        </div>
                    ) : (
                        <Outlet />
                    )}
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;
