"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slider from "../Slider/Slider";

const Hero = () => {
  return (
    <div
      id="home"
      className=" color-change-2x relative overflow-hidden w-full   h-[80vh] max-sm:h-screen"
    >
      <div className="absolute inset-0 wow3 flex items-center   ">
        <Swiper
          className="w-full max-sm:h-[100vh] h-[80vh]"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Slider
              title={"Galaxy"}
              pera={
                " Race Online Limited, One of the fastest growing ISP in the Faisalabad to provide Catv & internet connectivity."
              }
              src={"/logo2.jpg"}
              width={400}
              height={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              title={"Gateway to Digital Connectivity"}
              pera={
                "Step through the Gateway to Digital Connectivity, where seamless internet access meets limitless possibilities. "
              }
              src={"/isp.png"}
              width={600}
              height={600}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              title={"Constant Companion, 24/7"}
              pera={
                "Meet the 'Constant Companion'  our commitment to providing 24/7 support. Just like the reliable presence of a trusted friend.  "
              }
              src={"/24.png"}
              width={400}
              height={400}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              title={"Wi-Fi Wonders for Family"}
              pera={
                "Elevate family experience: potent Wi-Fi for seamless streaming, smooth browsing and uninterrupted connections."
              }
              width={500}
              height={500}
              src={"/family.png"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
