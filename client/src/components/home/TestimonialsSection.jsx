import { Users } from 'lucide-react';
import { Card } from '../ui/Card';

const testimonials = [
    {
        name: "Rajesh Patel",
        text: "The laser treatment was completely painless. I was able to return to work within days. Highly recommended!"
    },
    {
        name: "Priya Sharma",
        text: "Dr. Kanade and the staff were very professional and caring. The results have been excellent."
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Testimonials</h2>
                    <p className="text-gray-600">What our patients say about their experience</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex items-start">
                                <Users className="h-10 w-10 text-[#C5A572] mr-4" />
                                <div>
                                    <p className="text-gray-600 mb-4">{testimonial.text}</p>
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}