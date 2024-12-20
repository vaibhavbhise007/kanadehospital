export default function Navbar() {
    return (
        <nav className="bg-[#9C27B0] shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <img
                        src="src/assets/logo.jpeg" // Replace with your logo URL
                        alt="Logo"
                        className="h-10"
                    />
                    <h1 className="text-xl font-bold text-white">Kanade Hospital</h1>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-6 text-lg font-semibold">
                <li className="relative group">
                        <span className="cursor-pointer">About Us</span>
                        <ul className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2 w-40">
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                Our Story
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                Leadership
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                Vision & Mission
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                Accreditations & Awards
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                Quality Policy
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                                CSR Initiatives
                            </li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <span className="cursor-pointer">Patient Care</span>
                        <ul className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2 w-40">
                            <li className="px-4 py-2 hover:bg-gray-200">Facilities</li>
                            <li className="px-4 py-2 hover:bg-gray-200">Guidelines</li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <span className="cursor-pointer">Services</span>
                        <ul className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2 w-40">
                            <li className="px-4 py-2 hover:bg-gray-200">Specialties</li>
                            <li className="px-4 py-2 hover:bg-gray-200">Departments</li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <span className="cursor-pointer">Academics</span>
                        <ul className="absolute hidden group-hover:block bg-white text-black rounded shadow-lg mt-2 w-40">
                            <li className="px-4 py-2 hover:bg-gray-200">Research</li>
                            <li className="px-4 py-2 hover:bg-gray-200">Training</li>
                        </ul>
                    </li>
                </ul>

                {/* Action Buttons and Icons */}
                <div className="flex items-center space-x-4">
                    <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow hover:bg-red-700">
                        +91 1234567891
                    </button>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-full shadow hover:bg-orange-600">
                        Our Specialties
                    </button>
                    <span className="cursor-pointer text-black hover:text-gray-700">
                        🔍 {/* Search Icon */}
                    </span>
                    <span className="cursor-pointer text-black hover:text-gray-700">
                        ☰ {/* Hamburger Menu Icon */}
                    </span>
                </div>
            </div>
        </nav>
    );
}
