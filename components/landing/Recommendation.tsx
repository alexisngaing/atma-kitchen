import React from "react";
import Image from "next/image";
import TestImg from "@/public/images/info.jpg";

const Recommendation = () => {
  return (
    <>
      <div className="py-16 md:px-24 lg:px-64">
        <h1 className="text-center font-medium text-3xl pb-6">Rekomendasi</h1>
        <div className="flex gap-6 justify-center items-center">
          <div className="bg-[#E5C287] max-w-2xl rounded-xl overflow-hidden shadow-lg">
            <a href="#">
              <Image className="w-full" src={TestImg} alt="" />
              <div className="px-6 py-6 first-line:font-semibold text-center text-2xl mb-2">
                Cake
              </div>
            </a>
          </div>
          <div className="bg-[#E5C287] max-w-2xl rounded-xl overflow-hidden shadow-lg">
            <a href="#">
              <Image className="w-full" src={TestImg} alt="" />
              <div className="px-6 py-6 first-line:font-semibold text-center text-2xl mb-2">
                Cake
              </div>
            </a>
          </div>
          <div className="bg-[#E5C287] max-w-2xl rounded-xl overflow-hidden shadow-lg">
            <a href="#">
              <Image className="w-full" src={TestImg} alt="" />
              <div className="px-6 py-6 first-line:font-semibold text-center text-2xl mb-2">
                Cake
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommendation;
