import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../components/layouts/Footer/Footer';
import Navbar from '../components/layouts/Navbar/Navbar';
import Loader from '../components/Loader/Loader';
function MainLayout() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoadComplete = () => setLoading(false);
        const timer = setTimeout(handleLoadComplete, 2000); // Simulate loading time

        return () => clearTimeout(timer); // Cleanup
    }, []);

    return (
        <div>
            <Navbar />
            <main>
                {loading ? (
                    <div className='flex justify-center items-center bg-black h-200px '><Loader /> </div>
                ) : (
                    <Outlet />
                )}
            </main >
            <Footer />
        </div>
    );
}

export default MainLayout;
