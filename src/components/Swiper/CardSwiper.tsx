"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export const CardSwiper = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const imageData = [
    {
      title: "Las Vegas Aviators",
      date: "OCT 15 SUN",
      time: "4:30 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
      imageUrl: "/Collection/img-1.jpeg",
    },
    {
      title: "Sacramento River Cats",
      date: "OCT 15 SUN",
      time: "4:30 PM",
      location: "Sutter Health Park, Sacramento, California",
      imageUrl: "/Collection/img-2.jpeg",
    },
    {
      title: "Las Vegas Aviators",
      date: "OCT 15 SUN",
      time: "4:30 PM",
      location: "Las Vegas Ballpark, Las Vegas, Nevada",
      imageUrl: "/Collection/img-1.jpeg",
    },
  ];
  const sliderImages = [
    "/Collection/img-1.jpeg",
    "/Collection/img-2.jpeg",
    "/Collection/img-1.jpeg",
    "/Collection/img-2.jpeg",
    "/Collection/img-1.jpeg",
    "/Collection/img-2.jpeg",
    "/Collection/img-1.jpeg",
    "/Collection/img-2.jpeg",
    "/Collection/img-1.jpeg",
  ];
  const prevSlider = () => {
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1
    );
  };
  const nextSlider = useCallback(() => {
    setCurrentSlider((currentSlider) =>
      currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1
    );
  }, [sliderImages.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider, currentSlider]);

  return (
    <div className="relative mx-auto w-fit">
      <button
        onClick={prevSlider}
        className="absolute -left-4 md:-left-16 top-1/2 flex h-6 w-6 items-center justify-center md:h-10 md:w-10"
      >
        <svg
          viewBox="0 0 1024 1024"
          className="icon h-4 w-6 md:h-8 md:w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#0095FF"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </g>
        </svg>
      </button>
      <button
        onClick={nextSlider}
        className="absolute -right-4 md:-right-16 top-1/2 flex h-6 w-6 items-center justify-center md:h-10 md:w-10"
      >
        <svg
          viewBox="0 0 1024 1024"
          className="icon h-4 w-6 md:h-8 md:w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          transform="rotate(180)"
        >
          <g strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#0095FF"
              d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
            ></path>
          </g>
        </svg>
      </button>
      <div className="w-full overflow-hidden">
        <div
          className="flex transform-gpu duration-500 ease-linear"
          style={{ transform: `translateX(-${currentSlider * 33.33}%)` }}
        >
          {sliderImages.map((slide, inx) => (
            <Image
              width={500}
              height={500}
              key={inx}
              src={slide}
              className=" h-full min-w-[33.33%] rounded-2xl border-8 border-transparent object-cover overflow-hidden"
              alt={`Slider - ${inx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
