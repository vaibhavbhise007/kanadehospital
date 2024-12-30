import React from 'react';
import { LayoutDashboard, Calendar, Users, FileText, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(true);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Calendar, label: 'Appointments', path: '/admin/appointments' },
    { icon: Users, label: 'Experts', path: '/admin/experts' },
    { icon: FileText, label: 'Blog Posts', path: '/admin/blog' },
  ];

  return (
    <div className={`bg-white h-screen shadow-lg ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
      <div className="p-4 flex items-center justify-between">
        {isOpen && <h2 className="text-xl font-bold text-blue-600">Hospital Admin</h2>}
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
          <Menu size={24} />
        </button>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center p-4 ${
              location.pathname === item.path ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
            } hover:bg-blue-50 transition-colors`}
          >
            <item.icon size={20} />
            {isOpen && <span className="ml-4">{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}