import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BlogCard = ({ imageSrc, title, about, readMorePath }) => {
  const navigate = useNavigate();

  const handleReadMore = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    navigate(readMorePath);
  };

  return (
    <div className="p-8 hover:bg-slate-200 border-2 rounded-md">
      <div className="">
        <img src={imageSrc} alt="" className="bg-cover h-[300px] w-full" />
      </div>
      <div className="  px-2  left-0  md:max-w-full transition-transform duration-500 flex flex-col">
        <h1 className="font-bold text-center pt-2 text-xl ">{title}</h1>
        <p className="pt-2 pb-2 text-sm">{about}</p>
      </div>

      <button
        onClick={handleReadMore}
        className=" rounded-md  lg:w-full hover:bg-[rgb(107,71,55)]  hover:text-white border-2  border-black p-1"
      >
        Read More
      </button>
    </div>
  );
};
export default BlogCard;
