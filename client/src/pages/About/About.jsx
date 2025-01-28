import { Target, Globe } from "lucide-react";
import backgroundImage1 from "../../assets/AboutsUsBackgroundImage.jpg";
import DoctorPhoto from "../../assets/DoctorPhoto.png";
import OurSpecialists from "../../components/home/OurSpecialists";
import ProfileSlider from "../../components/about/ProfileSlider";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo(0, 0); // Scroll to the top
    }
  }, [location]);
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
      iconClass: "top-[-80px] left-[110px]",
      bgClass: "bg-[#c07e7e]",
    },
    {
      title: "Advance Technology",
      description:
        "Our commitment to technological advancement ensures that we are always at the forefront of medical innovative medical technology, which allows us to provide more accurate diagnoses, more effective treatments, and a more personalized patient experience.",
      iconClass: "top-[-80px] left-[110px]",
      bgClass: "bg-[#c07e7e]",
    },
    {
      title: "Patient Centric approach",
      description:
        "Committed to patient-centered care, we tailor our approach to individual needs, emphasizing open communication and collaboration between patients and healthcare providers for optimal health outcomes.",
      iconClass: "top-[-80px] left-[110px]",
      bgClass: "bg-[#c07e7e]",
    },
  ];

  return (
    <>
      <div className="bg-white">
        <div className="bg-white pt-16">
          <div className="py-16 mb-8 bg-[#e6dfdf]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-black">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                  About Dr. Kanade Hospital
                </h1>
                <p className="text-base sm:text-lg font-serif text-gray-600">
                  Leading the way in advanced Laser surgery for piles, fistulas,
                  fissures, varicose veins, and more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative ">
          <div
            className="absolute opacity-40 inset-0 bg-cover -z-60"
            style={{
              backgroundImage: `url(${backgroundImage1})`,
            }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-[60%,40%] gap-8 items-center">
              <div className="z-40 pt-10 sm:pt-32 pb-8">
                <h2 className="text-3xl font-bold text-black mb-4">
                  About Dr. Datta Kanade
                </h2>
                <div className="w-24 h-1 bg-[rgb(107,71,55)] mb-6"></div>
                <p className="text-black text-lg font-serif mb-4">
                  Dr. Datta Kanade is a highly qualified medical professional
                  holding an MBBS degree and a DGO specialization. He is an
                  accomplished Gynaecologist with extensive experience in the
                  field of Cosmetic Gynaecology and Laparoscopic Surgery. His
                  expertise extends to being an Obstetrician as well as a
                  renowned specialist in NDVH (Non-Descent Vaginal Hysterectomy)
                  and vNOTE (Vaginal Natural Orifice Transluminal Endoscopic
                  Surgery) Hysterectomy techniques. With a dedication to
                  providing exceptional care, Dr. Kanade combines his surgical
                  precision with a compassionate approach to address the diverse
                  needs of his patients.
                </p>
                <button className="bg-[rgb(107,71,55)] text-white px-6 py-2 rounded-full shadow-lg hover:bg-red-700">
                  Read More
                </button>
              </div>

              <div className="pt-10 sm:pt-0 flex justify-center pb-8">
                <img
                  src={DoctorPhoto}
                  alt="Dr. Datta Kanade"
                  className="z-40 rounded-lg bg-cover bg-gray-500 h-[450px] md:w-2/3 sm:w-1/2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center ">
            <div>
              <div className="flex">
                <Target className="h-10 w-10 text-[rgb(107,71,55)] mr-4" />
                <div>
                  <h2 className="text-2xl font-serif text-[rgb(107,71,55)] mb-6">
                    Our Vision
                  </h2>
                </div>
              </div>
              <p className="text-black text-lg font-serif mb-6">
                Excellence First and Always
              </p>

              <div className="flex">
                <Globe className="h-10 w-10 text-[rgb(107,71,55)] mr-4" />
                <div>
                  <h2 className="text-2xl font-serif text-[rgb(107,71,55)] mb-6">
                    Our Mission
                  </h2>
                </div>
              </div>
              <p className="text-black text-lg font-serif flex items-center">
                Compassionate Quality Healthcare
              </p>
            </div>
          </div>
        </div>

        {/* <div className="bg-[#e6dfdf] ">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-8">
          <div className="grid md:grid-cols-3 gap-8 ">
            {[
              {
                icon: <Award className="h-8 w-8 text-[rgb(107,71,55)] " />,
                title: "15+ Years Experience",
                description:
                  "Dedicated years of service in advanced medical care",
              },
              {
                icon: <Users className="h-8 w-8 text-[rgb(107,71,55)]" />,
                title: "10,000+ Patients",
                description:
                  "Successfully treated patients from across the country",
              },
              {
                icon: <Heart className="h-8 w-8 text-[rgb(107,71,55)]" />,
                title: "98% Success Rate",
                description: "High success rate with minimal recovery time",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-shadow bg-white"
              >
                <div className="flex flex-col items-center">
                  {stat.icon}
                  <h3 className="mt-4 text-xl font-serif text-black">
                    {stat.title}
                  </h3>
                  <p className="mt-2 text-gray-600 font-serif">
                    {stat.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div> */}
        <ProfileSlider />
      </div>
      <OurSpecialists />
    </>
  );
}
