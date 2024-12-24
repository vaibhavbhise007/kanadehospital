import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Textarea } from '../../components/ui/Textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <div className="bg-white">
            <div className="relative py-16 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                        <p className="text-lg text-gray-300">Get in touch with our medical team</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <Card className="p-6">
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                        <Input type="text" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                        <Input type="text" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <Input type="email" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <Input type="tel" placeholder="+91 123 456 7890" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <Textarea placeholder="How can we help you?" className="h-32" />
                                </div>
                                <Button className="w-full bg-[#C5A572] hover:bg-[#B39362] text-white">
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <Card className="p-6">
                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-[#C5A572] mr-4" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                                        <p className="text-gray-600">123 Hospital Road, Mumbai, Maharashtra, India</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6">
                                <div className="flex items-start">
                                    <Phone className="h-6 w-6 text-[#C5A572] mr-4" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                                        <p className="text-gray-600">+91 123 456 7890</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6">
                                <div className="flex items-start">
                                    <Mail className="h-6 w-6 text-[#C5A572] mr-4" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600">info@drkanade.com</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6">
                                <div className="flex items-start">
                                    <Clock className="h-6 w-6 text-[#C5A572] mr-4" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                                        <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                                        <p className="text-gray-600">Emergency: 24/7</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}