import Image from "next/image";
import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="border-t py-8 border-[#E77A18]">
      <div className="flex gap-4 items-start justify-evenly">
        <div className="">
          <Image src={"/logo.PNG"} width={50} height={50} alt="logo" />
          <h2 className="text-lg font-bold text-[#E77A18]">
            Galaxy ISP (pvt) Limited.®
          </h2>
        </div>
        <div className="">
          <h1 className="font-bold my-2 text-xl text-[#E77A18]">Links</h1>
          <ul>
            <li>
              <a className="hover:text-[#E77A18]" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-[#E77A18]" href="#prices">
                Prices
              </a>
            </li>
            <li>
              <a className="hover:text-[#E77A18]" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-[#E77A18]" href="/terms">
                Terms & Conditons{" "}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold my-2 text-xl text-[#E77A18]">About</h1>
          <div>
            <div className="flex items-center gap-2">
              <MdLocalPhone size={25} /> <span>041 2638793</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail size={25} /> <span>sohailmashraf@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <IoLocationSharp size={25} /> <span>office: p-1087</span>
            </div>
          </div>
        </div>
      </div>
      {/* copy */}
    </div>
  );
};

export default Footer;
