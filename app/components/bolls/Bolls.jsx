import { FiMonitor } from "react-icons/fi";
import { PiTelevisionFill } from "react-icons/pi";
import { TbDeviceLandlinePhone } from "react-icons/tb";
const Bolls = () => {
  return (
    <div className="flex items-center mt-16 justify-center max-sm:gap-4 px-4 gap-8">
      <div className="w-36 h-36 max-sm:w-h-24 max-sm:h-24 text-white flex flex-col items-center justify-center bg-green-400 hover:invert transition-all ease-in-out delay-150 imgup  rounded-full">
        <FiMonitor size={30} />
        <h1 className="p-1">INTERNET</h1>
      </div>
      <div className="w-36 h-36 max-sm:w-h-24 max-sm:h-24 text-white flex flex-col items-center justify-center bg-red-400 hover:invert transition-all ease-in-out delay-150 imgdown rounded-full">
        <PiTelevisionFill size={30} />
        <h1 className="p-1">TV</h1>
      </div>
      <div className="w-36 h-36 max-sm:w-h-24 max-sm:h-24 text-white flex flex-col items-center justify-center bg-amber-500 hover:invert transition-all ease-in-out delay-150 imgup rounded-full">
        <TbDeviceLandlinePhone size={30} />
        <h1 className="p-1">PHONE</h1>
      </div>
    </div>
  );
};

export default Bolls;
