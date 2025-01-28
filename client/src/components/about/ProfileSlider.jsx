import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/WhyWeStandOut/AdvancedTechnologyImg.webp";
import Img2 from "../../assets/WhyWeStandOut/PatientCentricApproach.webp";
import Img3 from "../../assets/WhyWeStandOut/DoctorImg.webp";

function ProfileSlider() {
  const slickSettings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
  };

  const features = [
    {
      title: "Best Doctors",
      description:
        "Our dedicated team of skilled healthcare professionals stays current on the latest medical advancements and utilizes cutting-edge technologies to ensure the highest quality care for our patients.",
      iconClass: "top-[-80px] left-[130px]",
      image: Img3,
      bgClass: "bg-[#c07e7e]",
    },
    {
      title: "Advanced Technology",
      description:
        "Our commitment to technological advancement ensures that we are always at the forefront of medical innovative technology, which allows us to provide more accurate diagnoses, more effective treatments, and a more personalized patient experience.",
      iconClass: "top-[-80px] left-[130px]",
      image: Img1,
      bgClass: "bg-[#c07e7e]",
    },
    {
      title: "Patient-Centric Approach",
      description:
        "Committed to patient-centered care, we tailor our approach to individual needs, emphasizing open communication and collaboration between patients and healthcare providers for optimal health outcomes.",
      iconClass: "top-[-80px] left-[130px]",
      image: Img2,
      bgClass: "bg-[#c07e7e]",
    },
  ];

  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block bg-[#e6dfdf] p-4 pl-20">
        <h1 className="text-xl font-bold">Why We Stand Out?</h1>
        <div className="w-40 border-t-4 border-orange-950"></div>
        <br />
        <div className="p-6 px-24 pt-20 flex flex-row gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative basis-1/2 ${feature.bgClass} rounded-3xl h-80 p-4 pt-16 group hover:scale-110 transition-all duration-200 hover:bg-[#803e3e] cursor-default`}
            >
              <div
                className={`absolute ${feature.iconClass} rounded-full bg-black p-1`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="bg-cover"
                />
              </div>
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

      {/* Mobile View */}
      <div className="sm:block lg:hidden bg-[#e6dfdf] p-2">
        <div className="flex items-center flex-col pt-8">
          <h1 className="text-xl font-bold">Why We Stand Out?</h1>
          <div className="w-40 border-t-4 mb-10 border-orange-950"></div>
        </div>
        <Slider {...slickSettings}>
          {features.map((feature, index) => (
            <div key={index} className="pt-10 ">
              <div className="p-12 flex items-center ">
                <div
                  className={`relative bg-[#c07e7e] rounded-3xl p-2 pb-4 pt-16 group hover:bg-[#803e3e] cursor-default `}
                >
                  <div
                    className={`absolute ${feature.iconClass} rounded-full border-2 border-gray-800 bg-gray-300`}
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="bg-cover"
                    />
                  </div>
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
