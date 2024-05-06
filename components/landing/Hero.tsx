import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-[url('/images/hero-img.jpg')]  min-h-screen w-full bg-cover bg-center">
        <div className="flex items-center justify-center bg-black bg-opacity-30 min-h-screen w-full bg-cover bg-center">
          <div className="grid grid-cols-2 gap-4 px-64">
            <div className=""></div>
            <div className="">
              <h1 className="text-8xl font-bold text-white pb-6">
                Belanja kapan saja dan di mana saja
              </h1>
              <a href="#">
                <button className="flex bg-[#FDA403] text-white rounded-xl shadow-xl p-4 font-semibold text-2xl">
                  Order Sekarang!
                  <ChevronRight />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
