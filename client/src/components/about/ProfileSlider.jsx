import React from "react";
import Slider from "react-slick";
function ProfileSlider() {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const features = [
    {
      title: "World Class Doctors",
      description:
        "Our dedicated team of skilled healthcare professionals stays current on the latest medical advancements and utilizes cutting-edge technologies to ensure the highest quality care for our patients.",
      iconClass: "top-[-80px] left-[99px]",
      bgClass: "bg-[#c07e7e]",
    },
    {
      title: "Advance Technology",
      description:
        "Our commitment to technological advancement ensures that we are always at the forefront of medical innovative medical technology, which allows us to provide more accurate diagnoses, more effective treatments, and a more personalized patient experience.",
      iconClass: "top-[-80px] left-[99px]",
      bgClass: "bg-[#c07e7e]",
    },
    {
      title: "Patient Centric approach",
      description:
        "Committed to patient-centered care, we tailor our approach to individual needs, emphasizing open communication and collaboration between patients and healthcare providers for optimal health outcomes.",
      iconClass: "top-[-80px] left-[99px]",
      bgClass: "bg-[#c07e7e]",
    },
  ];
  return (
    <>
      <div className="hidden lg:block bg-[#e6dfdf] p-4 pl-20">
        <h1 className="text-xl font-bold">Why We Stand Out?</h1>
        <h1 className="w-40 border-t-4 border-orange-950"></h1> <br />
        <div className="p-6 px-24 pt-20 flex flex-row gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative basis-1/2 ${feature.bgClass} rounded-3xl h-80 p-4 pt-16 group hover:scale-110 transition-all duration-200 hover:bg-[#803e3e] cursor-default`}
            >
              <div
                className={`absolute ${feature.iconClass} rounded-full bg-gray-300 p-16 h-10 w-12`}
              ></div>
              <h1 className="text-center text-white font-bold text-xl">
                {feature.title}
              </h1>
              <p className="text-center text-md pt-4 group-hover:text-white font-serif">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* For Mobile */}
      <div className="sm:block  lg:hidden bg-[#e6dfdf] p-2 ">
        <div className="flex items-center flex-col pt-8">
          <h1 className="text-xl font-bold">Why We Stand Out?</h1>
          <h1 className="w-40 border-t-4 mb-10 border-orange-950"></h1>
        </div>
        {/* Slider component */}
        <Slider {...slickSettings}>
          {features.map((feature, index) => (
            <div className="pt-10">
              <div className="p-12 flex items-center">
                <div
                  key={index}
                  className="relative bg-[#c07e7e] rounded-3xl h-80 p-4 pt-16 group hover:bg-[#803e3e] cursor-default"
                >
                  <div
                    className={`absolute ${feature.iconClass} rounded-full border-2 border-gray-800 bg-gray-300 p-16 h-10 w-12`}
                  ></div>
                  <h1 className="text-center text-white font-bold text-xl">
                    {feature.title}
                  </h1>
                  <p className="text-center text-md pt-4 group-hover:text-white font-serif">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default ProfileSlider;
