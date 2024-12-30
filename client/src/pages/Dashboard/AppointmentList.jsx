import React from 'react';
import { Check, X, Clock } from 'lucide-react';

const mockAppointments = [
  {
    id: '1',
    patientName: 'John Doe',
    date: '2024-03-20',
    time: '10:00 AM',
    department: 'Cardiology',
    doctorName: 'Dr. Smith',
    status: 'pending'
  },
  // Add more mock data as needed
];

export default function AppointmentList() {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <Check className="text-green-500" />;
      case 'cancelled':
        return <X className="text-red-500" />;
      default:
        return <Clock className="text-yellow-500" />;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Appointments</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockAppointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.patientName}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {appointment.date}<br />
                  <span className="text-sm text-gray-500">{appointment.time}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.department}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.doctorName}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(appointment.status)}
                    <span className="ml-2 capitalize">{appointment.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-800">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
