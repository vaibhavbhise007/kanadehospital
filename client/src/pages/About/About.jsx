import { Award, Users, Heart } from 'lucide-react';
import { Card } from '../../components/ui/Card';

export default function About() {
    return (
        <div className="bg-white">
            <div className="relative py-16 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold mb-4">About Dr. Kanade Hospital</h1>
                        <p className="text-lg text-gray-300">Leading the way in advanced piles treatment</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-gray-600 mb-6">
                            At Dr. Kanade Hospital, we are committed to providing advanced, painless treatments
                            for piles using cutting-edge laser technology. Our mission is to ensure every patient
                            receives the highest quality care with minimal recovery time.
                        </p>
                        <p className="text-gray-600">
                            With years of experience and thousands of successful treatments, we have established
                            ourselves as a leading center for piles treatment in the region.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=800"
                            alt="Modern hospital interior"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            icon: <Award className="h-8 w-8 text-[#C5A572]" />,
                            title: "15+ Years Experience",
                            description: "Dedicated years of service in advanced medical care"
                        },
                        {
                            icon: <Users className="h-8 w-8 text-[#C5A572]" />,
                            title: "10,000+ Patients",
                            description: "Successfully treated patients from across the country"
                        },
                        {
                            icon: <Heart className="h-8 w-8 text-[#C5A572]" />,
                            title: "98% Success Rate",
                            description: "High success rate with minimal recovery time"
                        }
                    ].map((stat, index) => (
                        <Card key={index} className="p-6 text-center">
                            <div className="flex flex-col items-center">
                                {stat.icon}
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">{stat.title}</h3>
                                <p className="mt-2 text-gray-600">{stat.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="bg-gray-50 rounded-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Dr. Arun Kanade",
                                role: "Chief Surgeon",
                                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300"
                            },
                            {
                                name: "Dr. Priya Sharma",
                                role: "Senior Surgeon",
                                image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300"
                            },
                            {
                                name: "Dr. Rajesh Patel",
                                role: "Specialist",
                                image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300"
                            }
                        ].map((member, index) => (
                            <Card key={index} className="p-6 text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}