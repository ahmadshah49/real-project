import Image from "next/image";
import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="border-t px-8 mt-4 border-[#E77A18]">
      <div className="grid  lg:grid-cols-3 md:grid-cols-3 py-4 items-center justify-center gap-4 ">
        <div className="">
          <Image src={"/logo.PNG"} width={50} height={50} alt="logo" />
          <h2 className="text-lg font-bold text-[#E77A18] max-sm:py-4">
            Galaxy ISP (pvt) Limited.®
          </h2>
        </div>
        <div className="">
          <h1 className="font-bold my-2 text-xl text-[#E77A18]">Links</h1>
          <ul>
            <li className="py-1">
              <a className="hover:text-[#E77A18]" href="#home">
                Home
              </a>
            </li>
            <li className="py-1">
              <a className="hover:text-[#E77A18]" href="#prices">
                Prices
              </a>
            </li>
            <li className="py-1">
              <a className="hover:text-[#E77A18]" href="#services">
                Services
              </a>
            </li>
            <li className="py-1">
              <a className="hover:text-[#E77A18]" href="/terms">
                Terms & Conditons{" "}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold my-2 text-xl text-[#E77A18]">About</h1>
          <div>
            <div className="flex py-1 items-center gap-2">
              <MdLocalPhone size={25} /> <span>041 2638793</span>
            </div>
            <div className="flex  py-1 items-center gap-2">
              <MdEmail size={25} /> <span>sohailmashraf@gmail.com</span>
            </div>
            <div className="flex py-1 items-center gap-2">
              <IoLocationSharp size={25} />{" "}
              <span>
                office: p-1087, 1st Floor ,Lal Mills Chowk,Factory
                Area,Faisalabad{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* copy */}
      <h1 className="text-center pt-4">
        Copyright © 2024 | All Rights Reserved.
      </h1>
    </div>
  );
};

export default Footer;
