import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../../ui/Button';
import logo from '../../../assets/svg/Kanadelogo.svg';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link to="/" className="flex items-center" onClick={handleLinkClick}>
                            <img src={logo} className='h-10 w-10' alt="Logo" />
                            <span className="ml-2 text-xl font-bold text-gray-800">Dr. Kanade Hospital</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <Link to="/" className="text-black hover:text-[rgb(107,71,55)] font-medium px-3 py-2 rounded-md">Home</Link>
                        <Link to="/about" className="text-black hover:text-[rgb(107,71,55)] font-medium px-3 py-2 rounded-md">About</Link>
                        <Link to="/treatments" className="text-black hover:text-[rgb(107,71,55)] font-medium px-3 py-2 rounded-md">Treatments</Link>
                        <Link to="/blog" className="text-black hover:text-[rgb(107,71,55)] font-medium px-3 py-2 rounded-md">Blog</Link>
                        <Link to="/contact" className="text-black hover:text-[rgb(107,71,55)] font-medium px-3 py-2 rounded-md">Contact</Link>
                        <Button onClick={()=>navigate("/appointment")} variant="default" className="bg-[rgb(107,71,55)] hover:bg-[#B39362] text-white">
                            Book Appointment
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#C5A572]"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block text-gray-700 hover:text-[#C5A572] px-3 py-2 rounded-md" onClick={handleLinkClick}>
                            Home
                        </Link>
                        <Link to="/about" className="block text-gray-700 hover:text-[#C5A572] px-3 py-2 rounded-md" onClick={handleLinkClick}>
                            About
                        </Link>
                        <Link to="/treatments" className="block text-gray-700 hover:text-[#C5A572] px-3 py-2 rounded-md" onClick={handleLinkClick}>
                            Treatments
                        </Link>
                        <Link to="/blog" className="block text-gray-700 hover:text-[#C5A572] px-3 py-2 rounded-md" onClick={handleLinkClick}>
                            Blog
                        </Link>
                        <Link to="/contact" className="block text-gray-700 hover:text-[#C5A572] px-3 py-2 rounded-md" onClick={handleLinkClick}>
                            Contact
                        </Link>
                        <Button
                            variant="default"
                            className="w-full bg-[#C5A572] hover:bg-[#B39362] text-white mt-4"
                            onClick={handleLinkClick}
                        >
                            Book Appointment
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
