import { Star, Clock, Award } from 'lucide-react';
import { Card } from '../ui/Card';

const features = [
    {
        icon: <Star className="h-8 w-8 text-[#C5A572] font-serif" />,
        title: "Expert Care",
        description: "Experienced specialists using cutting-edge laser technology"
    },
    {
        icon: <Clock className="h-8 w-8 text-[#C5A572] font-serif" />,
        title: "Quick Recovery",
        description: "Minimal downtime with our advanced treatment methods"
    },
    {
        icon: <Award className="h-8 w-8 text-[#C5A572] font-serif" />,
        title: "Proven Results",
        description: "Hundreds of successful treatments performed"
    }
];

export default function FeaturesSection() {
    return (
        <section className=" bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                    <p className="text-black font-serif">Leading the way in advanced piles treatment</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col items-center text-center">
                                {feature.icon}
                                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                                <p className="mt-2 text-black">{feature.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
