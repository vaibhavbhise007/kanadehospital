import React from "react";
import { useNavigate } from "react-router-dom";

const TreatmentCard = ({ imageSrc, title, description, readMorePath }) => {
  const navigate = useNavigate();

  const handleReadMore = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    navigate(readMorePath, { state: { scrollToTop: true } });
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl">
      <div className="relative flex p-2 max-w-xl rounded-md mb-40">
        <div className="bg-white relative w-full h-64">
          <img
            src={imageSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-center rounded-md"
          />
        </div>
        <div className="absolute  px-2 sm:m-8 left-0 bg-white md:max-w-full transition-transform duration-500 hover:scale-110 top-36  pt-2  flex flex-col text-center">
          <h1 className="font-bold">{title}</h1>
          <h3>{description}</h3>
          <button
            onClick={handleReadMore}
            className=" rounded-md max-w-md hover:bg-[rgb(107,71,55)]  hover:text-white border-2 border-black p-1"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
export default TreatmentCard;
