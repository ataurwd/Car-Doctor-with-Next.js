import { IoIosArrowRoundForward } from "react-icons/io";
import dbConnect from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

const Services = async () => {
  const serviceCollections = dbConnect("product");
  const data = await serviceCollections.find({}).toArray();
  return (
    <div className="px-20 my-16">
      <div className="grid place-items-center space-y-3 my-10">
        <h4 className="text-text">Service</h4>
        <h1 className="font-bold text-2xl md:text-5xl">Our Service Area</h1>
        <p className="md:w-1/2 mx-auto text-center text-pragrapText">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <Image
              src={item.img}
              width={314}
              height={200}
              className="w-full h-52 object-cover"
              alt={item.title}
            />
            <div className="p-4">
              <h1 className="font-semibold text-xl text-gray-800">
                {item.title}
              </h1>
              <div className="flex justify-between items-center mt-3">
                <p className="text-text font-medium">
                  Price: ${item.price}
                </p>
                        <Link href={`/services/${item._id}`}>
                        <IoIosArrowRoundForward className="text-text text-2xl hover:text-gray-800 transition" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
