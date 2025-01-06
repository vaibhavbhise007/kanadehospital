import { Card } from '../../components/ui/Card';
import { Users, Calendar, FileText, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                    { title: "Total Patients", value: "1,234", icon: <Users className="h-8 w-8 text-[#C5A572]" /> },
                    { title: "Appointments Today", value: "12", icon: <Calendar className="h-8 w-8 text-[#C5A572]" /> },
                    { title: "Blog Posts", value: "45", icon: <FileText className="h-8 w-8 text-[#C5A572]" /> },
                    { title: "Monthly Growth", value: "+15%", icon: <TrendingUp className="h-8 w-8 text-[#C5A572]" /> }
                ].map((stat, index) => (
                    <Card key={index} className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600">{stat.title}</p>
                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            </div>
                            {stat.icon}
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Recent Appointments</h2>
                    <div className="space-y-4">
                        {[
                            { name: "Amit Shah", date: "Today, 10:00 AM", status: "Confirmed" },
                            { name: "Meera Desai", date: "Today, 11:30 AM", status: "Pending" },
                            { name: "Rahul Kumar", date: "Today, 2:00 PM", status: "Confirmed" }
                        ].map((appointment, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900">{appointment.name}</p>
                                    <p className="text-sm text-gray-600">{appointment.date}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-sm ${appointment.status === 'Confirmed'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {appointment.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-xl font-semibold mb-4"> Blog Posts</h2>
                    <div className="space-y-4">
                        {[
                            { title: "Understanding Piles Treatment", date: "2 days ago", views: "234" },
                            { title: "Benefits of Laser Surgery", date: "5 days ago", views: "456" },
                            { title: "Post-Treatment Care Guide", date: "1 week ago", views: "789" }
                        ].map((post, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div>
                                    <p className="font-medium text-gray-900">{post.title}</p>
                                    <p className="text-sm text-gray-600">{post.date}</p>
                                </div>
                                <span className="text-sm text-gray-600">{post.views} views</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}
