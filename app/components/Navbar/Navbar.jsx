import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="text-white/60 fixed shadow-md shadow-white/20 wow w-full bg-white/30 flex items-center py-2 px-6 text-2xl">
      <Image src={"/logo.png"} width={500} height={500} className="w-16 h-12" />
    </div>
  );
};

export default Navbar;
