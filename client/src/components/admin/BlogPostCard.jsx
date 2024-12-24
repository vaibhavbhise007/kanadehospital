import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Calendar, Edit2, Trash2 } from 'lucide-react';

function BlogPostCard({ title, excerpt, date, status, onEdit, onDelete }) {
    return (
        <Card className="p-6">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(date).toLocaleDateString()}</span>
                        <span
                            className={`ml-3 px-2 py-1 rounded-full text-xs ${status === 'published'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                                }`}
                        >
                            {status}
                        </span>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <Button variant="outline" size="icon" onClick={onEdit}>
                        <Edit2 className="h-4 w-4 text-gray-600" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={onDelete}
                        className="text-red-600 hover:text-red-700"
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <p className="text-gray-600">{excerpt}</p>
        </Card>
    );
}

export default BlogPostCard;
