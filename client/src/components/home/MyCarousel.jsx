import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/Carousel"; // Adjust the path if needed

const images = [
  "/docs/images/carousel/carousel-1.svg",
  "/docs/images/carousel/carousel-2.svg",
  "/docs/images/carousel/carousel-3.svg",
  "/docs/images/carousel/carousel-4.svg",
  "/docs/images/carousel/carousel-5.svg",
];

const MyCarousel = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* Carousel Container */}
      <Carousel orientation="horizontal" opts={{ loop: true, speed: 500 }}>
        {/* Carousel Content */}
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Previous and Next Buttons */}
        <CarouselPrevious className="text-gray-800 bg-white shadow-md hover:bg-gray-200" />
        <CarouselNext className="text-gray-800 bg-white shadow-md hover:bg-gray-200" />
      </Carousel>
    </div>
  );
};

export default MyCarousel;
