import React from "react";

const Pricing = () => {
  return (
    <div id="prices" className="">
      <h1 className="text-center  text-6xl font-bold  text-[#E77A18]">
        Pricing
      </h1>
      <div className="flex flex-wrap items-center max-md:flex-col max-sm:flex-col justify-center py-8  gap-6 ">
        {/* 1 */}
        <div className="w-[20%] bg-green-300 max-md:w-[50%] max-sm:w-[70%] hover:scale-105 transiton delay-300 hover:bg-slate-200 ease-in-out  border-2 py-4 px-2 text-center rounded-2xl border-black">
          <h1 className="text-2xl font-medium py-2 mb-2">Basic Plan</h1>
          <h2 className="font-black  py-1   text-white  text-3xl ">
            6Mbps
          </h2>
          <h2 className="font-medium">Fast Essentials</h2>
          <p className="font-medium">
            Explore the Web with Our Basic 6Mbps Plan
          </p>
          <h1 className="cursor-pointer transiton-all delay-75  ease-linear hover:bg-[#f39340] py-2 px-4 bg-[#E77A18] text-white font-extrabold text-xl my-8 rounded-lg">
            Unlimted Data
          </h1>
        </div>
        {/* 2 */}
        <div className="w-[20%] bg-teal-300 max-md:w-[50%] max-sm:w-[70%] hover:scale-105 transiton delay-300 hover:bg-slate-200 ease-in-out border-2 py-4 px-2 text-center rounded-2xl border-black">
          <h1 className="text-2xl font-medium py-2 mb-2">Advance Plan</h1>
          <h2 className=" font-black py-1   text-white  text-3xl ">
            8Mbps
          </h2>
          <h2 className="font-medium">Seamless Browsing</h2>
          <p className="font-medium">Upgrade to Our Advanced 8Mbps Plan</p>
          <h1 className="cursor-pointer transiton-all delay-75  ease-linear hover:bg-[#f39340] py-2 px-4 bg-[#E77A18] text-white font-extrabold text-xl my-8 rounded-lg">
            Unlimted Data
          </h1>
        </div>
        {/* 3 */}
        <div className="w-[20%] bg-lime-300 max-md:w-[50%] max-sm:w-[70%] hover:scale-105 transiton delay-300 hover:bg-slate-200 ease-in-out border-2 py-4 px-2 text-center rounded-2xl border-black">
          <h1 className="text-2xl font-medium py-2 mb-2 ">Medium Plan</h1>
          <h2 className=" font-black py-1  text-white text-3xl">12Mbps</h2>
          <h2 className="font-medium">Midway Excellence</h2>
          <p className="font-medium">
            Elevate Your Experience with the 12Mbps Plan
          </p>
          <h1 className="cursor-pointer transiton-all delay-75  ease-linear hover:bg-[#f39340] py-2 px-4 bg-[#E77A18] text-white font-extrabold text-xl my-8 rounded-lg">
            Unlimted Data
          </h1>
        </div>
        {/* 4 */}
        <div className="w-[20%]  bg-indigo-300 max-md:w-[50%] max-sm:w-[70%] hover:scale-105 transiton delay-300 hover:bg-slate-200 ease-in-out border-2 py-4 px-2 text-center rounded-2xl border-black">
          <h1 className="text-2xl font-medium py-2 mb-2 ">Most Famous</h1>
          <h2 className=" font-black text-white  py-1 text-3xl">
            20Mbps
          </h2>
          <h2 className="font-medium">Peak Performance</h2>
          <p className="font-medium">Unleash Speed with Our 20Mbps Plan</p>
          <h1 className="cursor-pointer transiton-all delay-75  ease-linear hover:bg-[#f39340] py-2 px-4 bg-[#E77A18] text-white font-extrabold text-xl my-8 rounded-lg">
            Unlimted Data
          </h1>
        </div>
        <div className="w-[20%] bg-[#c593e0] max-md:w-[50%] max-sm:w-[70%] hover:scale-105 transiton delay-300 hover:bg-slate-200 ease-in-out border-2 py-4 px-2 text-center rounded-2xl border-black">
          <h1 className="text-2xl font-medium py-2 mb-2 ">Fast Speed Plan</h1>
          <h2 className=" font-black py-1 text-white  text-3xl">
            30Mbps
          </h2>
          <h2 className="font-medium">Peak Performance</h2>
          <p className="font-medium">Watch Movies </p>
          <h1 className="cursor-pointer transiton-all delay-75  ease-linear hover:bg-[#f39340] py-2 px-4 bg-[#E77A18] text-white font-extrabold text-xl my-8 rounded-lg">
            Unlimted Data
          </h1>
        </div>
        <div className="w-[20%] bg-[#e68686] max-md:w-[50%] max-sm:w-[70%] hover:scale-105 transiton delay-300 hover:bg-slate-200 ease-in-out border-2 py-4 px-2 text-center rounded-2xl border-black">
          <h1 className="text-2xl font-medium py-2 mb-2 ">Premium Plan</h1>
          <h2 className=" font-black py-1 text-white  text-3xl">
            50Mbps
          </h2>
          <h2 className="font-medium">Peak Performance</h2>
          <p className="font-medium">Play Gaming on Clouds</p>
          <h1 className="cursor-pointer transiton-all delay-75  ease-linear hover:bg-[#f39340] py-2 px-4 bg-[#E77A18] text-white font-extrabold text-xl my-8 rounded-lg">
            Unlimted Data
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
