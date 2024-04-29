import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-[url('/images/hero-img.jpg')] min-h-screen w-full bg-cover bg-center">
        <div className="max-w-7xl">
          <h1 className="text-9xl font-bold text-white">
            Belanja kapan saja dan di mana saja
          </h1>
          <button>Order Sekarang!</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
