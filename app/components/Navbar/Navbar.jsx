import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="px-4 h-24 bg-black">
        <div>
          <div>
            <Image src={"/logo.PNG"} width={80} height={80} />
          </div>
          <div>
            <Link>Home</Link>
            <Link>Prices</Link>
            <Link>Services</Link>
            <Link>Support</Link>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
