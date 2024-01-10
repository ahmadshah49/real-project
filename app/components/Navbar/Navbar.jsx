import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="text-white  fixed shadow-md shadow-white/20 wow w-full bg-white/30 flex items-center justify-between py-2 px-6 text-2xl">
      <Image src={"/logo.PNG"} width={500} height={500} className="w-16 h-12" />
      <div className="flex text-sm sm:text-[12px] gap-1 items-center">
        <FaPhoneAlt />
        <span className="text-base max-sm:text-[12px]">
          <p className="text-xs max-sm:text-[12px]">0300 8652993</p>
          {/* <p className="text-xs sm:text-[10px]">0323 1110777</p> */}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
