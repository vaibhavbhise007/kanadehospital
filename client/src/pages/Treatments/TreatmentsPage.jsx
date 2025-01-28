import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import bgimg from "../../assets/bgdoctor.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/Breadcrumb";

function TreatmentsPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo(0, 0); // Scroll to the top
    }
  }, [location]);

  // Scrolling
  const titleSection = useRef(null);
  const aboutSection = useRef(null);
  const descriptiomSection = useRef(null);
  const causeSection = useRef(null);
  const symptomsSection = useRef(null);
  const treatmentSection = useRef(null);

  const scrollToSection = (ref) => {
    const offset = 110;
    const elementPosition =
      ref.current.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const { treatmentId } = useParams(); // Fetch treatmentId from URL
  const { treatments, loading, error } = useSelector(
    (state) => state.treatment
  );

  // Check for loading state or errors
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  // Find the treatment based on treatmentId
  const treatment = treatments?.find((t) => t._id === treatmentId);

  // If no treatment is found, show an error message
  if (!treatment)
    return <div className="text-center text-red-500">Treatment not found!</div>;

  // Utility function to handle text splitting on periods
  function formatTextWithLineBreaks(text) {
    const sentences = text.split(".").map((sentence) => sentence.trim());
    return sentences.map((sentence, index) => (
      <p key={index} className="text-gray-600 text-xl font-serif mt-4">
        {sentence}
        {index !== sentences.length - 1 && "."}
      </p>
    ));
  }

  return (
    <div className="flex flex-col">
      <div className="bg-white pt-24">
        <div className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px- lg:px-4">
            {/* Background Image */}
            <div
              className="absolute opacity-100 inset-0 bg-cover z-0"
              style={{ backgroundImage: `url(${bgimg || ""})` }}
            ></div>

            {/* Treatment Title */}
            <div ref={titleSection} className="flex justify-center ">
              <div className="relative text-4xl font-bold text-black z-10">
                <h2>{treatment.title}</h2>
              </div>

              {/* Breadcrumbs - Fully Dynamic */}
            </div>
          </div>
        </div>
        <div className="absolute z-10  items-center py-4 pl-16">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/treatments">
                  Treatments
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{treatment.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Treatment Details */}
        <div className="flex flex-col-reverse lg:flex-row  gap-4 justify-center p-4 px-16 pt-14">
          {/* Text Content Section */}
          <div className="basis-1/2 px-8">
            <h2 ref={aboutSection} className="text-3xl font-bold text-black">
              About {treatment.title}
            </h2>
            <p className="text-gray-600 text-xl font-serif mt-4">
              {treatment.about}
            </p>
            <h2
              ref={descriptiomSection}
              className="text-2xl font-bold text-black pt-8"
            >
              Overview: What is <span>{treatment.title}</span>?
            </h2>
            <p className="text-gray-600 text-xl font-serif mt-4">
              {treatment.description}
            </p>
            <h2
              ref={causeSection}
              className="text-2xl font-bold text-black pt-8"
            >
              Causes And Risk Factors
            </h2>
            {formatTextWithLineBreaks(treatment.causes)}

            <h2
              ref={symptomsSection}
              className="text-2xl font-bold text-black pt-8"
            >
              Symptoms of <span>{treatment.title}</span>
            </h2>
            {formatTextWithLineBreaks(treatment.symptoms)}

            <h2
              ref={treatmentSection}
              className="text-2xl font-bold text-black pt-8"
            >
              Treatment Details
            </h2>
            {formatTextWithLineBreaks(treatment.treatmentdetails)}
          </div>

          {/* Image and Sticky Navigation Section */}
          <div className="basis-1/2">
            {typeof treatment.img === "string" ? (
              <img
                src={treatment.img}
                alt={treatment.title}
                className="w-full max-h-96 object-cover rounded-lg shadow-md"
              />
            ) : (
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-gray-500">
                No Image Available
              </div>
            )}

            {/* Sticky Navigation */}
            <div className="p-3 md:sticky md:top-20">
              <div className="hidden md:grid pt-14 md:grid-rows-6 gap-4 justify-center">
                <div
                  onClick={() => scrollToSection(titleSection)}
                  className="text-black p-2 text-center pt-2 text-lg rounded-md w-52 cursor-pointer bg-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
                >
                  Title
                </div>
                <div
                  onClick={() => scrollToSection(aboutSection)}
                  className="bg-gray-300 text-black p-2 text-lg text-center pt-2 rounded-md w-52 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors"
                >
                  About
                </div>
                <div
                  onClick={() => scrollToSection(descriptiomSection)}
                  className="bg-gray-300 text-black p-2 text-lg text-center pt-2 rounded-md w-52 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors"
                >
                  Description
                </div>
                <div
                  onClick={() => scrollToSection(causeSection)}
                  className="bg-gray-300 text-black p-2 text-lg text-center pt-2 rounded-md w-52 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors"
                >
                  Causes
                </div>
                <div
                  onClick={() => scrollToSection(symptomsSection)}
                  className="bg-gray-300 text-black p-2 text-lg text-center pt-2 rounded-md w-52 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors"
                >
                  Symptoms
                </div>
                <div
                  onClick={() => scrollToSection(treatmentSection)}
                  className="bg-gray-300 text-black p-2 text-lg text-center pt-2 rounded-md w-52 cursor-pointer hover:bg-gray-600 hover:text-white transition-colors"
                >
                  Treatment Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TreatmentsPage;
