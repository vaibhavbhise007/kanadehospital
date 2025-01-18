import React from "react";
import Slider from "react-slick";
import CampImg1 from "../../assets/CapmSectionImage.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CampSection() {
  // Slick settings for carousel
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Optionally disable arrows on mobile
    autoplay: true, // Enable autoplay
  };

  return (
    <section className="px-10 pb-8 bg-gray-100 pt-6">
      <div className="text-center text-xl font-bold mb-6">
        Free Disabile Help Camp - Rahata <br /> Free modern & sophisticated
        prosthetics for the disabled <br /> Modular feet, hands and calipers
      </div>

      {/* For desktop, show grid; for mobile, show carousel */}
      <div className="hidden md:grid md:grid-cols-4 md:gap-4 md:pt-6">
        {/* Grid of images */}
        {[...Array(8)].map((_, index) => (
          <img
            key={index}
            src={CampImg1}
            alt={`Camp Image ${index + 1}`}
            className="cursor-auto hover:border-2 border-black rounded-md shadow-lg"
          />
        ))}
      </div>

      {/* Mobile slider */}
      <div className="block md:hidden pt-6">
        <Slider {...slickSettings}>
          {[...Array(8)].map((_, index) => (
            <div key={index}>
              <img
                src={CampImg1}
                alt={`Camp Image ${index + 1}`}
                className="cursor-auto hover:border-2 border-black rounded-md shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
