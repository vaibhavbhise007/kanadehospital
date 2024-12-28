import React from 'react'

export default function Introduction() {
    return (
        <section className="relative text-black py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <img
                            src="./src/assets/doctor.jpg"
                            alt="Modern hospital facility"
                            className="rounded-lg shadow-xl h-80 w-full"
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl  font-bold mb-6">
                            Welcome To Dr. Kanade Hospital and Laparoscopy Center
                        </h1>
                        <p className="text-lg font-serif mb-8">
                            Dr. Kanade Hospital, situated on Nagar-Manmad Road, Rahata (Shirdi), Ahmednagar, is a distinguished
                            multispecialty healthcare center renowned for its advanced medical treatments and state-of-the-art facilities.
                            The hospital is equipped with cutting-edge technology, including a Canada-made photonics laser system, and is
                            committed to delivering minimally invasive procedures that ensure reduced discomfort and expedited recovery.
                        </p>
                        <h3 className="text-xl md:text-2xl font-semibold text-black  mb-4">
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
    )
}


