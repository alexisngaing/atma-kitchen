import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex min-h-screen w-full items-center  justify-center bg-[url('/images/hero-img-3-copy.jpg')] bg-cover bg-center">
      <div className="flex min-h-screen w-full items-center justify-center bg-black bg-opacity-30 bg-cover bg-center">
        <div className="grid grid-cols-2 gap-4 px-64">
          <div className="" />
          <div className="">
            <h1 className="pb-6 text-8xl font-bold text-white">
              Belanja kapan saja dan di mana saja
            </h1>
            <a href="#">
              <button className="flex rounded-xl bg-[#41B06E] p-4 text-2xl font-semibold text-white shadow-xl">
                Order Sekarang!
                <ChevronRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
