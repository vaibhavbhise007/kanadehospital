import React from "react";
import bg from "../../assets/texture.jpg";
import f1 from "../../assets/f1.jpg";
import f2 from "../../assets/f2.jpg";
import f3 from "../../assets/f3.jpg";
import f4 from "../../assets/f4.jpg";
import f5 from "../../assets/f5.jpg";
import f6 from "../../assets/f6.jpg";

function FacilitiesSection() {
  return (
    <section className="relative px-4 lg:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          opacity: 0.2,
        }}
      ></div>
      <div className="text-center py-4 ">
        <h1 className="text-4xl font-bold text-gray-900 py-4">
          Amenities In Kanade Hospital
        </h1>
        <p>
          Kanade Hospital, Rahata offers a variety of amenities to make your
          stay with us as easy and comfortable as possible. Right from using
          highly advanced medical equipment to delivering personalized care to
          patients, we leave no stone unturned to deliver you simply the best.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pb-8">
        {/* Facility 1 */}
        <div className="bg-white hover:shadow-xl p-6 flex flex-col sm:flex-row items-center sm:space-x-4 sm:space-y-0 border-1 border-black transition-transform transform hover:scale-105 group overflow-hidden">
          <div className="absolute w-full h-60 -top-6 -left-96 rounded-r-full bg-black  text-center group-hover:opacity-100 group-hover:left-0 opacity-0 transition-all duration-500 text-white pt-10">
            Kaustubh
          </div>
          <img
            src={f1}
            alt="Hospital Pharmacy"
            className="w-full sm:w-60 h-34 object-cover sm:mb-0"
          />
          <h2 className="text-lg font-bold text-black text-center sm:text-left mb-4 sm:mb-0">
            Hospital Pharmacy
          </h2>
        </div>

        {/* Facility 2 */}
        <div className="bg-white hover:shadow-lg p-6 flex flex-col sm:flex-row items-center sm:space-x-4 sm:space-y-0 border-1 border-black transition-transform transform hover:scale-105">
          <img
            src={f2}
            alt="Ample Parking Space"
            className="w-full sm:w-60 h-34 object-cover sm:mb-0"
          />
          <h2 className="text-lg font-bold text-black text-center sm:text-left mb-4 sm:mb-0">
            Ample Parking Space
          </h2>
        </div>

        {/* Facility 3 */}
        <div className="bg-white hover:shadow-xl p-6 flex flex-col sm:flex-row items-center sm:space-x-4 sm:space-y-0 border-1 border-black transition-transform transform hover:scale-105">
          <img
            src={f3}
            alt="Emergency Response System"
            className="w-full sm:w-60 h-34 object-cover sm:mb-0"
          />
          <h2 className="text-lg font-bold text-black text-center sm:text-left mb-4 sm:mb-0">
            Emergency Response System
          </h2>
        </div>

        {/* Facility 4 */}
        <div className="bg-white hover:shadow-lg p-6 flex flex-col sm:flex-row items-center sm:space-x-4 sm:space-y-0 border-1 border-black transition-transform transform hover:scale-105">
          <img
            src={f4}
            alt="Cardiac Life Support Ambulances"
            className="w-full sm:w-60 h-34 object-cover sm:mb-0"
          />
          <h2 className="text-lg font-bold text-black text-center sm:text-left mb-4 sm:mb-0">
            Cardiac Life Support Ambulances
          </h2>
        </div>

        {/* Facility 5 */}
        <div className="bg-white hover:shadow-xl p-6 flex flex-col sm:flex-row items-center sm:space-x-4 sm:space-y-0 border-1 border-black transition-transform transform hover:scale-105">
          <img
            src={f5}
            alt="Pathology Lab Services"
            className="w-full sm:w-60 h-34 object-cover sm:mb-0"
          />
          <h2 className="text-lg font-bold text-black text-center sm:text-left mb-4 sm:mb-0">
            Pathology Lab Services
          </h2>
        </div>

        {/* Facility 6 */}
        <div className="bg-white hover:shadow-lg p-6 flex flex-col sm:flex-row items-center sm:space-x-4 sm:space-y-0 border-1 border-black transition-transform transform hover:scale-105">
          <img
            src={f6}
            alt="Special Rooms & General Ward"
            className="w-full sm:w-60 h-34 object-cover sm:mb-0"
          />
          <h2 className="text-lg font-bold text-black text-center sm:text-left mb-4 sm:mb-0">
            Special Rooms & General Ward
          </h2>
        </div>
      </div>
    </section>
  );
}

export default FacilitiesSection;
