import React, { useState, useEffect, useRef } from 'react';
import img from '../../assets/intro.jpg';

export default function Introduction() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Trigger the transition when the section comes into view
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is in view
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current); // Clean up the observer when the component unmounts
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative text-black py-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative animate__animated animate__fadeInLeft">
                        <img
                            src={img}
                            alt="Modern hospital facility"
                            className="rounded-lg shadow-xl h-[620px] w-full"
                        />
                    </div>

                    {/* Text Section with Transition */}
                    <div
                        className={`transition-all duration-700 transform ${
                            isVisible ? 'opacity-100 translate-x-0 animate__fadeInRight' : 'opacity-0 translate-x-10'
                        }`}
                    >
                        <h1 className="text-2xl font-bold mb-6">
                            Welcome To Dr. Kanade Hospital and Laparoscopy Center
                        </h1>
                        <p className="text-lg font-serif mb-8">
                            Dr. Kanade Hospital, situated on Nagar-Manmad Road, Rahata (Shirdi), Ahmednagar, is a distinguished
                            multispecialty healthcare center renowned for its advanced medical treatments and state-of-the-art facilities.
                            The hospital is equipped with cutting-edge technology, including a Canada-made photonics laser system, and is
                            committed to delivering minimally invasive procedures that ensure reduced discomfort and expedited recovery.
                        </p>
                        <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                            Harmony Laser Clinic
                        </h3>
                        <p className="text-lg font-serif mb-8">
                            The Harmony Laser Clinic, a specialized division of the hospital, offers expertise in cosmetic gynecology and
                            andrology, addressing a wide range of medical needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
