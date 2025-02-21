import React from "react";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const ServiceDetails = async ({ params }) => {
  const p = await params;

  // get data from the database
  const serviceCollections = dbConnect("product");
  const data = await serviceCollections.findOne({ _id: new ObjectId(p.id) });

  const servicesData = [
    {
      id: 1,
      title: "Full Car Repair",
    },
    {
      id: 2,
      title: "Engine Repair",
    },
    {
      id: 3,
      title: "Automatic Services",
    },
    {
      id: 4,
      title: "Engine Oil Change",
    },
    {
      id: 5,
      title: "Battery Charge",
    },
  ];
  return (
    <div className="mx-20 mt-10">
      <div
        className="relative h-52 rounded-md rounded-l-lg bg-no-repeat bg-cover w-full"
        style={{
          backgroundImage: "url('/assets/images/checkout/checkout.png')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-transparent"></div>

        {/* Text Content */}
        <h1 className="relative text-white text-4xl font-bold pt-20 pl-10 z-10">
          Service Details
        </h1>
        <div className="bg-text w-1/5 absolute bottom-0 left-[40%]">
          <p className="text-center py-2 text-white">Home/Service Details</p>
        </div>
      </div>

      {/* for services details  */}
      <div className="grid md:grid-cols-7 mt-10 gap-5">
        <div className="col-span-5">
          <Image
            src={data.img}
            height={450}
            width={450}
            alt={data.title}
            className="w-full h-[410px] rounded-md"
          />
          <h1 className="text-4xl object-none font-bold text-black my-5">
            {data.title}
          </h1>
          <p className="text-pragrapText my-3">{data.description}</p>
          <div className="grid grid-cols-2 gap-5">
            {data.facility.map((item) => (
              <div className="bg-[#F3F3F3] p-10 space-y-3 rounded-md border-t-2 border-text">
                <h1 className="text-xl font-bold">{item.name}</h1>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 px-2">
          <div className="bg-gray-200 p-5 rounded-md">
            <h1 className="text-2xl font-bold text-black">Services</h1>
            <div className="space-y-2">
              {servicesData.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-white py-2 px-5 rounded-md hover:bg-text hover:text-white cursor-pointer transition "
                >
                  <h1>{item.title}</h1>
                  <IoIosArrowRoundForward className="text-text text-2xl hover:text-white" />
                </div>
              ))}
            </div>
          </div>
          <h1 className="text-3xl font-bold my-3">Price: {data.price}</h1>
          <button className="bg-text w-full text-center text-white py-2 rounded-md">
            Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
