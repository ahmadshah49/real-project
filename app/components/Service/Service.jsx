import { PiTelevisionSimple } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import Image from "next/image";
import { FiMonitor } from "react-icons/fi";
import { PiTelevisionFill } from "react-icons/pi";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import Bolls from "../bolls/bolls";

const Services = () => {
  return (
    <div id="services" className=" my-36  w-full h-full">
      <div className="flex items-center mt-16 justify-center max-sm:gap-4 px-4 gap-8">
        <div className="w-40  h-40 max-sm:w-28 max-sm:h-28 text-white flex flex-col items-center justify-center bg-green-400 hover:invert transition-all ease-in-out delay-150 imgup  rounded-full">
          <FiMonitor size={30} />
          <h1 className="p-1">INTERNET</h1>
        </div>
        <div className="w-40 h-40 max-sm:w-28 max-sm:h-28 text-white flex flex-col items-center justify-center bg-red-400 hover:invert transition-all ease-in-out delay-150 imgdown rounded-full">
          <PiTelevisionFill size={30} />
          <h1 className="p-1">TV</h1>
        </div>
        <div className="w-40 h-40 max-sm:w-28 max-sm:h-28  text-white flex flex-col items-center justify-center bg-amber-500 hover:invert transition-all ease-in-out delay-150 imgup rounded-full">
          <TbDeviceLandlinePhone size={30} />
          <h1 className="p-1">PHONE</h1>
        </div>
      </div>
      {/* <Bolls /> */}
      <h1 className="text-center mt-6 text-6xl font-bold p text-[#E77A18]">
        Services
      </h1>
      <p className="py-8 px-4 text-center font-medium text-4xl max-sm:text-2xl p">
        Experience lightning-fast internet with our ISP service! Enjoy seamless
        streaming, lag-free gaming, and reliable connectivity. Choose us for
        high-speed internet and unparalleled customer support. Connect with the
        future today!
      </p>

      <div className="flex p items-center justify-center gap-8 max-sm:flex-col px-8 text-center py-8">
        <div className="w-[40%] max-sm:w-full p-6 bg-[#bcdbef] transition-all ease-linear delay-50 rounded-md hover:bg-[#91d0f7] ">
          <PiTelevisionSimple size={25} className="mx-auto " />
          <h1 className="py-4 text-2xl font-semibold">CATV</h1>
          <p>
            Immerse yourself in entertainment with our CATV service! Enjoy a
            vast array of channels in stunning HD quality. Uninterrupted
            viewing, diverse programming, and exceptional clarity redefine your
            television experience.
          </p>
        </div>
        <div className="w-[40%] max-sm:w-full p-6 bg-[#bcdbef] transition-all ease-linear delay-50 rounded-md hover:bg-[#91d0f7]">
          <FaWifi size={25} className="mx-auto" />
          <h1 className="py-4 text-2xl font-semibold">INTERNET</h1>
          <p>
            Experience the pinnacle of connectivity with our high-speed internet
            service. Enjoy seamless browsing, fast downloads, and reliable
            streaming. Elevate your online experience with our robust and
            efficient internet solutions.
          </p>
        </div>
      </div>
      <div className="flex p mt-20 flex-row-reverse max-sm:flex-col items-center justify-center px-8 w-full">
        <div className="w-[40%] max-sm:w-full mx-auto">
          <h1 className="py-4 text-xl font-semibold text-[#E77A18]">
            {" "}
            Explore non-stop with high-speed WiFi
          </h1>
          <p className="py-2">
            Embark on an exploration without bounds with our high-speed WiFi.
            Immerse yourself in uninterrupted connectivity, as we redefine your
            online experience.
          </p>
          <p className="py-2">
            Stream seamlessly, browse limitlessly, and indulge in non-stop
            adventures.
          </p>
          <p className="py-2">
            Our reliable service ensures a world of possibilities, keeping you
            connected with speed, precision, and unmatched reliability.
          </p>
        </div>
        <div className="w-[50%] max-sm:w-full  flex items-center justify-center">
          <Image src={"/browser.png"} width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Services;
