import React from 'react'
import bg from '../../assets/texture2.jpg';
import f1 from '../../assets/f1.jpg';
import f2 from '../../assets/f2.jpg';
import f3 from '../../assets/f3.jpg';
import f4 from '../../assets/f4.jpg';
import f5 from '../../assets/f5.jpg';
import f6 from '../../assets/f6.jpg';
function FacilitiesSection() {
    return (
        <section className='relative max-w-7xl mx-auto px-4 lg:px-8 mb-8'>
            <div
                className="absolute inset-0 bg-cover bg-center -z-10"
                style={{
                    backgroundImage: `url(${bg})`,
                    opacity: 0.2,
                }}
            ></div>
            <div className="text-center py-14 ">
                <h1 className="text-4xl font-bold text-gray-900 py-4">
                    Amenities In Kanade Hospital
                </h1>
                <p>Kanade Hospital, Rahata offers a variety of amenities to make your stay
                    with us as easy and comfortable as possible. Right from using highly advanced
                    medical equipment to delivering personalized care to patients, we leave no stone
                    unturned to deliver you simply the best.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2  sm:grid-cols-1 gap-1 px-12">


                <div className="bg-white hover:shadow-xl  p-6  flex items-center space-x-2 border-1 border-black transition-transform transform hover:scale-105 ">
                    <img
                        src={f1}// Replace with your image URL
                        alt="Hospital Pharmacy"
                        className="w-60 h-34 object-cover px-8"
                    />
                    <h2 className="text-xl font-bold text-black">Hospital Pharmacy</h2>
                </div>

                <div className="bg-white hover:shadow-lg p-6  flex items-center space-x-2 border-1 border-black transition-transform transform hover:scale-105">
                    <img
                        src={f2}// Replace with your image URL
                        alt="Hospital Pharmacy"
                        className="w-60 h-34  object-cover px-8"
                    />
                    <h2 className="text-xl font-bold text-black">Ample Parking Space</h2>
                </div>

                <div className="bg-white hover:shadow-xl  p-6  flex items-center space-x-2 border-1 border-black transition-transform transform hover:scale-105 ">
                    <img
                        src={f3}// Replace with your image URL
                        alt="Hospital Pharmacy"
                        className="w-60 h-34 object-cover px-8"
                    />
                    <h2 className="text-xl font-bold text-black">Emergency Response System</h2>
                </div>

                <div className="bg-white hover:shadow-lg p-6  flex items-center space-x-2 border-1 border-black transition-transform transform hover:scale-105">
                    <img
                        src={f4}// Replace with your image URL
                        alt="Hospital Pharmacy"
                        className="w-60 h-34  object-cover px-8"
                    />
                    <h2 className="text-xl font-bold text-black">Cardiac Life Support Ambulances</h2>
                </div>

                <div className="bg-white hover:shadow-xl  p-6  flex items-center space-x-2 border-1 border-black transition-transform transform hover:scale-105 ">
                    <img
                        src={f5}// Replace with your image URL
                        alt="Hospital Pharmacy"
                        className="w-60 h-34 object-cover px-8"
                    />
                    <h2 className="text-xl font-bold text-black">Pathology Lab Services</h2>
                </div>

                <div className="bg-white hover:shadow-lg p-6  flex items-center space-x-2 border-1 border-black transition-transform transform hover:scale-105">
                    <img
                        src={f6}// Replace with your image URL
                        alt="Hospital Pharmacy"
                        className="w-60 h-34  object-cover px-8"
                    />
                    <h2 className="text-xl font-bold text-black">Special Rooms& General ward</h2>
                </div>
            </div>
        </section>
    )
}

export default FacilitiesSection;
