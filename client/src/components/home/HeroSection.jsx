import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export default function HeroSection() {
    return (
        <section className="relative bg-[#e6dfdf] text-black py-20 rounded">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Dr. Kanade Hospital & Harmony Laser Clinic
                        </h1>
                        <p className="text-lg font-serif mb-8">
                            Experience in various cosmetic gynecology and men's health treatments with minimal recovery time at Dr. Kanade Hospital.
                        </p>
                        <Button className="bg-[rgb(107,71,55)] hover:bg-[#B39362] text-white">
                            Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
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