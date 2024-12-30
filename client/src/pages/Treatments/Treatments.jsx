import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Treatments() {
    return (
        <div className="bg-white">
            <div className="relative py-16 bg-[#e6dfdf]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center  text-black">
                        <h1 className="text-4xl font-bold mb-4">Our Treatments</h1>
                        <p className="text-lg font-serif text-gray-600">Advanced laser treatments for better outcomes</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12 mb-1">
                    {[
                        {
                            title: "Laser Treatment for Piles",
                            description: "Advanced laser procedure for painless hemorrhoid treatment",
                            benefits: [
                                "Minimally invasive procedure",
                                "Quick recovery time",
                                "No hospital stay required",
                                "Minimal post-operative pain"
                            ],
                            image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=800"
                        },
                        {
                            title: "Fistula Treatment",
                            description: "Effective treatment for fistula using latest techniques",
                            benefits: [
                                "Precise treatment",
                                "Reduced risk of recurrence",
                                "Faster healing process",
                                "Minimal scarring"
                            ],
                            image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=800"
                        },
                        {
                            title: "Fistula Treatment",
                            description: "Effective treatment for fistula using latest techniques",
                            benefits: [
                                "Precise treatment",
                                "Reduced risk of recurrence",
                                "Faster healing process",
                                "Minimal scarring"
                            ],
                            image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=800"
                        },
                        {
                            title: "Fistula Treatment",
                            description: "Effective treatment for fistula using latest techniques",
                            benefits: [
                                "Precise treatment",
                                "Reduced risk of recurrence",
                                "Faster healing process",
                                "Minimal scarring"
                            ],
                            image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=800"
                        }
                    ].map((treatment, index) => (
                        <Card key={index} className="overflow-hidden">
                            <img
                                src={treatment.image}
                                alt={treatment.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">{treatment.title}</h2>
                                <p className="text-gray-600 font-serif mb-4">{treatment.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {treatment.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center font-serif text-gray-600">
                                            <CheckCircle2 className="h-5 w-5 text-[rgb(107,71,55)] mr-2" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="bg-[rgb(107,71,55)] hover:bg-[#B39362] text-white hover:text-black">
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>


            </div>

            <div className="text- center bg-[#e6dfdf] mb-16 py-16 w-full ">
                <h2 className="text-3xl font-bold text-gray-900 text-center px-16 mb-12 ">Treatment Process</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { step: "1", title: "Consultation", description: "Initial examination and diagnosis" },
                        { step: "2", title: "Planning", description: "Customized treatment plan" },
                        { step: "3", title: "Treatment", description: "Advanced laser procedure" },
                        { step: "4", title: "Follow-up", description: "Post-treatment care and monitoring" }
                    ].map((phase, index) => (
                        <div key={index} className="text-center">
                            <div className="w-12 h-12 bg-[rgb(107,71,55)] text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xl font-bold">
                                {phase.step}
                            </div>
                            <h3 className="text-xl font-serif text-gray-900 mb-2">{phase.title}</h3>
                            <p className="text-gray-600 font-serif">{phase.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}