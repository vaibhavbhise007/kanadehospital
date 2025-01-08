import React, { useState } from 'react';
import { ChevronDown, Search, Bell, MessageCircle, Menu } from 'lucide-react';
import profile from '../../../assets/admin/profile.png';

function AdminNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="flex fixed top-0 w-full justify-between items-center p-4 bg-white text-gray-800 shadow z-10">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2"
        onClick={toggleMobileMenu}
      >
        <Menu size={20} />
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-gray-800 shadow-lg lg:hidden">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}

      {/* Search Bar */}
      <div className="flex items-center w-full lg:w-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for..."
          className="pl-4 pr-8 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-[300px] mr-2"
        />
        <button className="p-2 bg-blue-500 text-white rounded-lg hidden lg:block">
          <Search size={20} />
        </button>
      </div>

      {/* Notifications (commented for now) */}
      {/* <div className="flex items-center space-x-4">
        <button className="relative p-2">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </button>
        <button className="relative p-2">
          <MessageCircle size={20} className="text-gray-600" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">2</span>
        </button>
      </div> */}

      {/* Profile Section */}
      <div className="relative">
        <button className="flex items-center space-x-2" onClick={toggleDropdown}>
          <img
            src={profile}
            alt="User Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="hidden lg:inline">Valerie Luna</span>
          <ChevronDown className="w-5 h-5" />
        </button>

        {/* Desktop Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg w-48 lg:block">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default AdminNavbar;
