import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import drimage from "../../assets/dr.png";
import { useNavigate } from "react-router-dom";
import hero from "../../assets/svg/herosection.svg";
import React, { useEffect, useState } from "react";
import textureimg from "../../assets/texture.jpg";
import BlurText from "../ui/BlurText";
import ErrorBoundary from "../error/ErrorBoundary";
import backgroundImg from "../../assets/landingpageimg.jpg";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-[#f3bfbf] text-black py-20 rounded overflow-hidden pt-36">
      <div
        className="absolute inset-0 -z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          opacity: 0.7, // Adjust opacity here (lower is more transparent)
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <ErrorBoundary>
              <BlurText
                text="Dr. Kanade Hospital & Harmony Laser Clinic"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl"
              />
            </ErrorBoundary>
            {/* <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Dr. Kanade Hospital & Harmony Laser Clinic
                        </h1> */}
            <p className="text-lg font-serif mb-8">
              Experience in various cosmetic gynecology and men's health
              treatments with minimal recovery time at Dr. Kanade Hospital.
            </p>
            <Button
              onClick={() => navigate("/appointment")}
              className="bg-[rgb(107,71,55)] hover:bg-[#B39362] text-white px-6 py-3 text-lg rounded shadow-lg transition-transform transform hover:scale-105"
            >
              Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Image Section */}
          <div className="relative hidden md:block">
            <div className="relative w-full h-full flex justify-center">
              <img
                src={drimage}
                alt="Doctor"
                className="relative max-h-[300px] md:max-h-[400px] z-10 rounded-b-xl drop-shadow-md"
              />
            </div>
          </div>
          <div
            className="absolute -bottom-0.5 left-8 right-8"
            style={{ height: "2px", backgroundColor: "black" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
