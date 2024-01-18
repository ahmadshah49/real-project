"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="px-4 z-40 h-20 p font-normal   fixed top-0  w-full bg-white/80 border-b text-black flex justify-evenly items-center">
        <div className="flex justify-between max-md:w-full max-md:justify-between w-full">
          <div className="flex gap-8 justify-start items-center">
            {nav ? (
              <Image
                src={"/logo.PNG"}
                width={800}
                height={800}
                className="w-[100px] hidden  "
              />
            ) : (
              <Image
                src={"/logo.PNG"}
                width={800}
                height={800}
                className="w-[100px]  "
              />
            )}
            <ul className="mx-auto  flex max-md:hidden font-bold">
              <li className="cursor-pointer py-2 transiton-all  ease-in-out px-4 rounded-3xl hover:bg-[#91d0f7]">
                <a href="/#home">Home</a>
              </li>
              <li className="cursor-pointer py-2 transiton-all  ease-in-out px-4 rounded-3xl hover:bg-[#91d0f7]">
                <a href="#" className="disabled:">
                  About
                </a>
              </li>
              <li className="cursor-pointer py-2 transiton-all  ease-in-out px-4 rounded-3xl hover:bg-[#91d0f7]">
                <a href="/#prices">Prices</a>
              </li>
              <li className="cursor-pointer py-2 transiton-all  ease-in-out px-4 rounded-3xl hover:bg-[#91d0f7]">
                <a href="/#services">Services</a>
              </li>
              <li className="cursor-pointer py-2 transiton-all  ease-in-out px-4 rounded-3xl hover:bg-[#91d0f7]">
                <Link href={"/terms"}>Terms & Conditons</Link>
              </li>
              <li className="cursor-pointer py-2 transiton-all  ease-in-out px-4 rounded-3xl hover:bg-[#91d0f7]">
                <Link href={"/terms"}>Contact us</Link>
              </li>
            </ul>
            <Image
              src={"/logo3.png"}
              width={50}
              height={50}
              className="object-cover max-sm:hidden"
            />
          </div>
          <div
            onClick={() => setNav((prev) => !prev)}
            className="md:hidden my-auto"
          >
            {nav ? <IoClose size={25} /> : <IoMenu size={25} />}
          </div>
        </div>

        {/* <div className="flex justify-evenly max-md:hidden items-center w-[50%]">
          <p className="font-bold">24/7</p>
          <div className="font-bold">
            <p>041 2638793</p>
            <p>0323 1110777</p>
          </div>
        </div> */}
      </div>
      {/* responsive Navbar */}

      <div
        className={
          nav
            ? "fixed top-0 left-0 px-4 lg:hidden h-screen w-[60%]  bg-white/80  transition-all ease-in-out delay-150 z-50"
            : "fixed top-0 -left-[100%] lg:hidden h-screen w-[60%]    bg-white/80  transition-all ease-in-out delay-150 z-50"
        }
      >
        <div>
          <Image src={"/logo.PNG"} width={100} height={100} />
          <ul className="my-8 flex flex-col gap-8 font-bold">
            <li className="cursor-pointer py-2 transiton-all  ease-in-out px-4 rounded-3xl hover:bg-[#91d0f7]">
              <a href="/#home">Home</a>
            </li>
            <li className="cursor-pointer py-2 transiton-all  ease-in-out px-4 rounded-3xl hover:bg-[#91d0f7]">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer py-2 transiton-all  ease-in-out px-4 rounded-3xl hover:bg-[#91d0f7]">
              <a href="/#prices">Prices</a>
            </li>
            <li className="cursor-pointer py-2 transiton-all  ease-in-out px-4 rounded-3xl hover:bg-[#91d0f7]">
              <a href="/#services">Services</a>
            </li>
            <li className="cursor-pointer py-2 transiton-all  ease-in-out px-4 rounded-3xl hover:bg-[#91d0f7]">
              <Link href={"/terms"}>Terms & Conditons</Link>
            </li>
            <li className="cursor-pointer py-2 transiton-all  ease-in-out px-4 rounded-3xl hover:bg-[#91d0f7]">
              <Link href={"#"}>Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
