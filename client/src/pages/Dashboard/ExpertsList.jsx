import React from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';

const mockExperts = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 12,
    availability: 'Mon, Wed, Fri'
  },
  // Add more mock data as needed
];

export default function ExpertsList() {
  return (
    <div className="p-6 mt-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Medical Experts</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={20} className="mr-2" />
          Add Expert
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockExperts.map((expert) => (
          <div key={expert.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{expert.name}</h3>
              <p className="text-blue-600">{expert.specialization}</p>
              <p className="text-sm text-gray-600 mt-2">
                {expert.experience} years experience
              </p>
              <p className="text-sm text-gray-600">
                Available: {expert.availability}
              </p>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 flex items-center justify-center p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Edit size={18} className="mr-2" />
                  Edit
                </button>
                <button className="flex-1 flex items-center justify-center p-2 text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash2 size={18} className="mr-2" />
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
