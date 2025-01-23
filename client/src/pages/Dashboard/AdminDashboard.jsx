import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog } from '../../stores/actions/blogActions';
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
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAppointments([ 
        { id: 1, name: 'John Doe', time: '10:00 AM' },
        { id: 2, name: 'Jane Smith', time: '11:30 AM' },
      ]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  const latestBlog = blogs && blogs.length > 0 ? blogs[1] : null;

  return (
    <div className="py-4 px-4 sm:px-6 lg:px-12">
      <div className="text-center lg:text-left mb-6">
        <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center lg:items-start">
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <stat.icon className="text-white" size={24} aria-label={stat.label} />
              </div>
              <h3 className="text-gray-600 text-sm text-center lg:text-left">{stat.label}</h3>
              <p className="text-2xl font-bold mt-1 text-center lg:text-left">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Appointments and Latest Blog Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Recent Appointments */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Appointments</h2>
            {isLoading ? (
              <p>Loading...</p>
            ) : appointments.length > 0 ? (
              <ul className="space-y-2">
                {appointments.map((appointment) => (
                  <li key={appointment.id} className="flex justify-between border-b pb-2 last:border-b-0">
                    <span className="font-medium">{appointment.name}</span>
                    <span className="text-gray-600">{appointment.time}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No appointments found.</p>
            )}
          </div>

          {/* Latest Blog Post */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Latest Blog Post</h2>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : latestBlog ? (
              <div className="space-y-4">
                <img
                  src={latestBlog.img || 'https://via.placeholder.com/800x400'}
                  alt={latestBlog.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-lg font-bold">{latestBlog.title}</h3>
                <p className="text-gray-600">{latestBlog.content}</p>
              </div>
            ) : (
              <p>No blogs found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
