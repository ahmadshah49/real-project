import Image from "next/image";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="bgImg  relative h-screen">
      <div className="absolute w-full h-screen bg-black/90">
        <Navbar />
        <div className="w-full  h-full text-white flex  flex-col items-center justify-center">
          <Image
            src={"/logo.PNG"}
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
          <div className="w-full text-center bg-black/40 px-4  absolute text-xs flex  items-center justify-center gap-4  bottom-0 text-white">
            <h2 className="text-xs sm:text-[12px] my-4">
              Galaxy | ISP & CATV | Copyright 2024 | All Rights Reserved.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
