import React, { useState } from "react";
import { Button } from "../ui/Button";
import s1 from "../../assets/services/s1.jpg";
import s2 from "../../assets/services/s2.jpg";
import s3 from "../../assets/services/s3.jpg";
import s4 from "../../assets/services/s4.jpg";
import s5 from "../../assets/services/s5.jpg";
import s6 from "../../assets/services/s6.jpg";
import s7 from "../../assets/services/s7.jpg";
import s8 from "../../assets/services/s8.jpg";
import s9 from "../../assets/services/s9.jpg";
import s10 from "../../assets/services/s10.jpg";
import s11 from "../../assets/services/s11.jpg";
import textureimg from "../../assets/texture1.jpg";
import { useNavigate } from "react-router-dom";

function OurServices() {
  const navigate = useNavigate();

  const services = [
    { id: 1, title: "Endometriosis laparoscopic treatment", image: s1 },
    { id: 2, title: "Uterine cancer", image: s2 },
    { id: 3, title: "Tubal Recanalization", image: s3 },
    { id: 4, title: "TOT", image: s4 },
    { id: 5, title: "MTP and family planning tubectomy operation", image: s5 },
    { id: 6, title: "Sonography facility", image: s6 },
    { id: 7, title: "Pathology facility", image: s7 },
    { id: 8, title: "NDVH", image: s8 },
    { id: 9, title: "vNOTES Hysterectomy", image: s9 },
    { id: 10, title: "Laser piles treatment", image: s10 },
    { id: 11, title: "G spot", image: s11 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative py-8  px-4 lg:px-8">
      <div
        className="absolute inset-0 bg-cover -z-10"
        style={{
          backgroundImage: `url(${textureimg})`,
          opacity: 0.3, // Increased opacity for better visibility of background
        }}
      ></div>

      <div className="relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-fira font-bold text-gray-900">
            Treatments Available At Kanade Hospital
          </h1>
        </div>

        {/* Grid Layout for Desktop */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5 px-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-blue-100 shadow-lg hover:border-2 border-black overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 top-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex rounded-sm bg-gradient-to-r from-blue-600 to-teal-400 bg-opacity-30 p-5 items-center border-black">
                  <p className="text-black text-lg font-semibold">
                    {service.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel for Mobile View */}
        <div id="default-carousel" className="relative w-full sm:hidden">
          <div className="relative h-56 overflow-hidden rounded-lg">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`absolute w-full transition-opacity duration-700 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-black text-xl font-semibold">
                  {service.title}
                </p>
                <img
                  src={service.image}
                  alt={service.title}
                  className="block w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Slider Indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {services.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Slider Controls */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 9 5 5 1 1"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="flex justify-center items-center mt-10">
          <Button
            onClick={() => navigate("/treatments")}
            className="bg-sky-300 text-black px-6 py-3 text-lg rounded shadow-lg transition-transform transform hover:scale-105"
          >
            View all Treatments
          </Button>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
