import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Advanced Laser Treatment for <span className="text-[#C5A572]">Piles</span>
                        </h1>
                        <p className="text-lg mb-8">
                            Experience painless, state-of-the-art treatment with minimal recovery time at Dr. Kanade Hospital.
                        </p>
                        <Button className="bg-[#C5A572] hover:bg-[#B39362] text-white">
                            Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                    <div className="relative">
                        <img
                            src="./src/assets/doctor.jpg"
                            alt="Modern hospital facility"
                            className="rounded-lg shadow-xl h-80 w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}