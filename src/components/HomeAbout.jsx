"use client";
import Image from "next/image";
import React from "react";

const HomeAbout = () => {
  return (
    <div className="px-32 my-16 grid grid-cols-2">
      <div className="relative mb-10">
        <Image
          src={"/assets/images/about_us/person.jpg"}
          width={400}
          height={550}
          alt="a man"
          className="h-[350px] object-cover rounded-md"
        />
        <div className="absolute z-10 top-[45%] right-10">
          <Image
            src={"/assets/images/about_us/parts.jpg"}
            width={250}
            height={100}
            alt="a man"
            className="w-[300px] h-[250px] object-cover rounded-md p-2 bg-white"
          />
        </div>
      </div>
      <div className="space-y-5 w-[80%]">
        <h3 className="text-main">About Us</h3>
        <h1 className="text-4xl font-bold text-black">
          We are qualified & of experience in this field
        </h1>
        <p className="text-pragrapText">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p className="text-pragrapText">
          {" "}
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <button className="py-3 rounded-md text-white bg-main px-4">
          Get More Info
        </button>{" "}
      </div>
    </div>
  );
};

export default HomeAbout;
