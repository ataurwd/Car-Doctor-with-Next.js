"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, History } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Hero = () => {
  return (
    <div className="px-20 mt-5 rounded-md relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        // history={{
        //   key: "slide",
        // }}
        modules={[Navigation, Pagination, History]}
        className="mySwiper"
      >
        <SwiperSlide className="z-0">
          <div className="text-center flex flex-col justify-center absolute h-full z-50 bg-black bg-opacity-60 w-full">
            <div className="w-1/2 mx-auto space-y-4">
              <h1 className="text-5xl font-bold text-white">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-white">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="py-3 rounded-md text-white ml-3 bg-main px-4">
                Discover More
              </button>
              <button className="py-3 text-white ml-3 border px-3 rounded-md">
                Latest Project
              </button>
            </div>
          </div>
          <Image
            alt="banner"
            src={"/assets/images/banner/1.jpg"}
            width={1000}
            className="w-full h-[80vh] object-cover rounded-md"
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            alt="banner"
            src={"/assets/images/banner/2.jpg"}
            width={1000}
            className="w-full h-[80vh] object-cover rounded-md"
            height={100}
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            alt="banner"
            src={"/assets/images/banner/3.jpg"}
            width={1000}
            className="w-full h-[80vh] object-cover rounded-md"
            height={100}
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            alt="banner"
            src={"/assets/images/banner/4.jpg"}
            width={1000}
            className="w-full h-[80vh] object-cover rounded-md"
            height={100}
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            alt="banner"
            src={"/assets/images/banner/5.jpg"}
            width={1000}
            className="w-full h-[80vh] object-cover rounded-md"
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            alt="banner"
            src={"/assets/images/banner/6.jpg"}
            width={1000}
            className="w-full h-[80vh] object-cover rounded-md"
            height={100}
          />{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
