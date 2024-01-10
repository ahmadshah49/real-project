import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import { FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bgImg  relative h-screen">
      <div className="absolute w-full h-screen bg-black/90">
        {/* <Navbar /> */}
        <div className="w-full  h-full text-white flex  flex-col items-center justify-center">
          <Image
            src={"/logo.png"}
            width={500}
            height={500}
            className="max-sm:w-64"
          />
          {/* <h2 className="text-4xl text-transparent  h font-medium my-4">
            Galaxy ISP(Pvt) Limited.
          </h2> */}
          <p className="text-center px-2 max-md:w-full text-sm w-[32%] max-sm:w-full p">
            " Race Online Limited, One of the fastest growing ISP in the
            industry to provide Catv & internet connectivity to various grades
            of customers "
          </p>
          <div className="my-6  font-bold rounded-2xl wow animate-bounce bg-red-600/40  py-4 px-2">
            <button>We're Coming soon</button>
          </div>
          <div className="w-full text-center bg-black/40 px-4 absolute text-xs flex sm:gap-1 gap-4 items-center justify-center bottom-0 text-white">
            <h2 className="text-xs sm:text-[12px] my-4">
              Galaxy ISP(Pvt) Limited. <sub className="text-[12px]">©</sub>
            </h2>
            |
            <div className="flex text-sm sm:text-[12px] gap-1 items-center">
              <FaPhoneAlt />
              <span className="text-xs sm:text-[12px]">
                <p className="text-xs sm:text-[8px]">0300 8652993</p>
                {/* <p className="text-xs sm:text-[10px]">0323 1110777</p> */}
              </span>
            </div>
            |<h1 className="text-xs"> Copyright © 2024</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
