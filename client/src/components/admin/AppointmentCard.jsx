import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Calendar, Clock, User } from 'lucide-react';

function AppointmentCard({ patientName, date, time, type, status, onStatusChange }) {
    const statusColors = {
        confirmed: 'bg-green-100 text-green-800',
        pending: 'bg-yellow-100 text-yellow-800',
        cancelled: 'bg-red-100 text-red-800',
    };

    return (
        <Card className="p-6">
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center mb-2">
                        <User className="h-5 w-5 text-[#C5A572] mr-2" />
                        <h3 className="text-lg font-semibold text-gray-900">{patientName}</h3>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{date}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>{time}</span>
                        </div>
                        <div className="text-[#C5A572]">{type}</div>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <span className={`px-3 py-1 rounded-full text-sm ${statusColors[status]}`}>
                        {status}
                    </span>
                    <div className="mt-4 space-x-2">
                        <Button
                            size="sm"
                            variant={status === 'confirmed' ? 'default' : 'outline'}
                            className={status === 'confirmed' ? 'bg-[#C5A572] hover:bg-[#B39362]' : ''}
                            onClick={() => onStatusChange('confirmed')}
                        >
                            Confirm
                        </Button>
                        <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => onStatusChange('cancelled')}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default AppointmentCard;
