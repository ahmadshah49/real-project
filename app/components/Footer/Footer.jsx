import Image from "next/image";
import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="border-t  px-8 mt-4 border-[#E77A18]">
      <div className="grid  lg:grid-cols-3   md:grid-cols-3 py-4 items-center justify-center gap-4 ">
        <div className="lg:mx-auto ">
          <h1 className="font-bold my-2 text-xl text-[#E77A18]">Links</h1>
          <ul>
            <li className="py-1">
              <a className="hover:text-[#E77A18] font-semibold" href="#home">
                Home
              </a>
            </li>
            <li className="py-1">
              <a className="hover:text-[#E77A18] font-semibold " href="#prices">
                Prices
              </a>
            </li>
            <li className="py-1">
              <a
                className="hover:text-[#E77A18] font-semibold"
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="py-1">
              <a className="hover:text-[#E77A18] font-semibold" href="/terms">
                Terms & Conditons{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:mx-auto">
          <Image
            src={"/changelogo.jpg"}
            width={150}
            className="w-40 mx-auto max-sm:mx-0"
            height={150}
            alt="logo"
          />
          <Image
            src={"/fun.png"}
            width={150}
            className="w-40 -mt-3 mx-auto max-sm:mx-0"
            height={150}
            alt="logo"
          />
          <h2 className="text-xl font-bold my-4 text-[#E77A18] max-sm:py-4">
            Galaxy ISP Private Limited.
          </h2>
        </div>

        <div className="lg:mx-auto">
          <h1 className="font-bold my-2 text-xl text-[#E77A18]">About</h1>
          <div>
            <div className="flex py-1 items-center gap-2">
              <MdLocalPhone size={25} />{" "}
              <div className="flex flex-col">
                <span className="font-semibold">041 2638793</span>
                <span className="font-semibold">(+92)323 1110777</span>
              </div>
            </div>
            <div className="flex  py-1 items-center gap-2">
              <MdEmail size={25} />{" "}
              <span className="font-semibold">galaxyisp9@gmail.com</span>
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
