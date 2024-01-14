import Image from "next/image";
import React from "react";

const Main1 = () => {
  return (
    <div className="fixed flex items-center justify-center w-full h-full -z-50">
      <Image src={"/logo.PNG"} width={1000} height={1000} />
    </div>
  );
};

export default Main1;
