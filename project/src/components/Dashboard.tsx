import React from 'react';
import { Users, Calendar, FileText, Activity } from 'lucide-react';

const stats = [
  { label: 'Total Appointments', value: '124', icon: Calendar, color: 'bg-blue-500' },
  { label: 'Active Doctors', value: '48', icon: Users, color: 'bg-green-500' },
  { label: 'Blog Posts', value: '32', icon: FileText, color: 'bg-purple-500' },
  { label: 'Patient Visits', value: '2,847', icon: Activity, color: 'bg-yellow-500' },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow p-6">
            <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <stat.icon className="text-white" size={24} />
            </div>
            <h3 className="text-gray-600 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Appointments</h2>
          {/* Add appointment list component here */}
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Latest Blog Posts</h2>
          {/* Add blog posts list component here */}
        </div>
      </div>
    </div>
  );
}