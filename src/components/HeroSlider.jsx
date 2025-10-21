import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper";

import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import image1 from "../assets/images/toy1.jpg";
import image2 from "../assets/images/toy2.png";
import image3 from "../assets/images/toy4.png";

import image4 from "../assets/images/toy3.png";

export default function HeroSlider() {
  return (
    <div>
      <h1 className="font-medium text-2xl text-center my-10">
        <span className="font-extrabold text-4xl"><span className="text-[#6EC1E4]">Toy</span>Topia</span> – A Local Kids Toy
        Store Platform
      </h1>

      <Swiper
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[500px] cursor-pointer">
            <img
              src={image1}
              className="h-full w-full object-cover "
              alt={""}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px] cursor-pointer">
            <img
              src={image2}
              className="h-full w-full object-cover "
              alt={""}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px] cursor-pointer">
            <img
              src={image3}
              className="h-full w-full object-cover "
              alt={""}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px] cursor-pointer">
            <img
              src={image4}
              className="h-full w-full object-cover "
              alt={""}
            />
          </div>
        </SwiperSlide>

        <div className="flex  items-center  ">
          <div className="swiper-button-prev">
            <FaChevronCircleLeft size={25} />
          </div>
          <div className="swiper-button-next">
            <FaChevronCircleRight size={25} />
          </div>
        </div>
      </Swiper>
    </div>
  );
}
