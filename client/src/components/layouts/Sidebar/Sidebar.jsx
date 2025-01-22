import React from 'react';
import { LayoutDashboard, Calendar, Users, FileText, Menu, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import useLogout from '../../../hooks/Authentication/useLogout ';

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(true);
  const {handleLogout} =useLogout();
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Calendar, label: 'Appointments', path: '/appointments' },
    { icon: Users, label: 'Experts', path: '/expert' },
    { icon: FileText, label: 'Blog Posts', path: '/blogeditor' },
    { icon: FileText, label: 'Blog Show', path: '/blogshow' },
  ];

  return (
    <div className={`bg-gray-400 h-screen shadow-lg ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 lg:block hidden `}>
      <div className="p-4 flex items-center justify-between">
        {isOpen && <h2 className="text-xl font-bold text-blue-600">Hospital Admin</h2>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg"
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <Menu size={24} />
        </button>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center p-4 ${
              location.pathname === item.path ? 'bg-blue-50 text-[rgb(107,71,55)]' : 'text-gray-600'
            } hover:bg-blue-50 transition-colors`}
            aria-label={item.label}
          >
            <item.icon size={20} />
            {isOpen && <span className="ml-4">{item.label}</span>}
            {!isOpen && (
              <span className="absolute left-16 bg-gray-700 text-white text-xs rounded-lg p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-4 w-full">
        <button
          className="flex items-center p-4 w-64 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
          aria-label="Logout"
          onClick={()=>{handleLogout()}}
        >
          <LogOut size={20} />
          {isOpen && <span className="ml-4">Logout</span>}
        </button>
      </div>
    </div>
  );
}
