import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t py-8 border-[#E77A18]">
      <div className="flex gap-4 items-center justify-center">
        <div className="">
          <Image src={"/logo.PNG"} width={50} height={50} alt="logo" />
          <h2 className="text-xl font-bold text-[#E77A18]">
            Galaxy ISP (pvt) Limited.®
          </h2>
        </div>
        <div className="font-bold text-xl text-[#E77A18]"></div>
        <div></div>
      </div>
      {/* copy */}
    </div>
  );
};

export default Footer;
