import React from "react";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import CampImg1 from "../../assets/CapmSectionImage.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CampSection() {
  // Intersection observer hook
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
    triggerOnce: true, // Trigger only once
  });

  // Slick settings for carousel
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Autoplay interval
    arrows: false, // Optionally disable arrows
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      ref={ref}
      className={`px-6 sm:px-10 pb-8 bg-gray-100 pt-6 transition-opacity duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div className="text-center text-xl sm:text-2xl font-bold text-gray-800 mb-6">
        Free Women's Health & Gynecology Camp  - Rahata
      </div>
      <p className="text-center text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
        A Women's Health & Gynecology Camp has been organized to provide free
        consultations, health screenings, and educational support on topics
        like menstrual health, pregnancy, family planning, and menopause.
      </p>
      <div className="pt-6 max-w-2xl mx-auto">
        {" "}
        <Slider {...slickSettings}>
          {[...Array(8)].map((_, index) => (
            <div key={index}>
              <img
                src={CampImg1}
                alt={`Camp Image ${index + 1}`}
                className="rounded-md shadow-lg w-full max-h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
