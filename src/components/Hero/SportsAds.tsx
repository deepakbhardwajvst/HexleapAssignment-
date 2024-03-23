import Image from "next/image";
import React from "react";

const SportsAds = () => {
  return (
    <>
      <div className="lg:max-w-[20rem] xl:max-w-[17rem] mx-auto overflow-hidden shadow-md p-2 dark:bg-[#3B3E47] sm:sticky top-10 h-fit">
        <div className="relative">
          <Image
            width={600}
            height={10000}
            className="w-full h-64 object-cover drop-shadow-md"
            src="/Sports/ads.jpeg"
            alt="Image"
          />
          <div className="absolute top-0 right-0">
            <div className="w-14 h-8 absolute top-0 right-0">
              <div className="h-full w-full bg-black text-white text-center leading-8 font-semibold">
                Ad
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 border-b border-x border-[#006555]">
          <h3 className="text-xl font-semibold mb-2 dark:text-white">
            Advertisement title
          </h3>
          <p className="text-gray-700 text-sm dark:text-[#DFDFDF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet consectetur adipisicing !
          </p>
        </div>
      </div>
    </>
  );
};

export default SportsAds;
