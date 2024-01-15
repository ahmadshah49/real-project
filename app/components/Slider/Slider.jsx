import Image from "next/image";
import React from "react";

const Slider = ({ title, pera, src, width, height }) => {
  return (
    <div className=" px-4 w-full h-full flex max-sm:flex-col  items-center justify-center">
      <div className="w-[50%] px-6 flex flex-col justify-center max-sm:w-full">
        <h1 className="max-sm:text-5xl  max-md:text-5xl  lg:text-7xl py-4 text-[#E77A18] font-extrabold">
          {title}
        </h1>
        <p className="italic p w-[60%] max-sm:w-full">{pera}</p>
      </div>
      <div className="w-[50%] overflow-hidden  flex items-center justify-center max-sm:w-full">
        <Image
          src={src}
          alt="Something Went Wronge With Image"
          width={width}
          height={height}
        />
      </div>
    </div>
  );
};

export default Slider;
