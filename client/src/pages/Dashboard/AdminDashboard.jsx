import React, { useState, useEffect } from 'react';
import { Users, Calendar, FileText, Activity } from 'lucide-react';

const stats = [
  { label: 'Total Appointments', value: '124', icon: Calendar, color: 'bg-blue-500' },
  { label: 'Active Doctors', value: '48', icon: Users, color: 'bg-green-500' },
  { label: 'Blog Posts', value: '32', icon: FileText, color: 'bg-purple-500' },
  { label: 'Patient Visits', value: '2,847', icon: Activity, color: 'bg-yellow-500' },
];

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
      setAppointments([
        { id: 1, name: 'John Doe', time: '10:00 AM' },
        { id: 2, name: 'Jane Smith', time: '11:30 AM' },
      ]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow p-6">
            <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <stat.icon className="text-white" size={24} aria-label={stat.label} />
            </div>
            <h3 className="text-gray-600 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Appointments</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : appointments.length > 0 ? (
            <ul>
              {appointments.map((appointment) => (
                <li key={appointment.id} className="border-b py-2">
                  {appointment.name} - {appointment.time}
                </li>
              ))}
            </ul>
          ) : (
            <p>No appointments found</p>
          )}
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Latest Blog Posts</h2>
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
}
