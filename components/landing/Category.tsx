import React from "react";
import Image from "next/image";
import Roti from "@/public/images/roti.jpg";

const Category = () => {
  return (
    <>
      <div className="py-16 md:px-24 lg:px-64">
        <h1 className="text-center font-medium text-3xl pb-6">Kategori</h1>
        <div className="flex gap-6 justify-center items-center">
          <div className="bg-[#E5C287] max-w-md rounded-xl overflow-hidden shadow-lg">
            <a href="#">
              <Image className="w-full" src={Roti} alt="" />
              <div className="px-6 py-6 first-line:font-semibold text-center text-2xl mb-2">
                Cake
              </div>
            </a>
          </div>
          <div className="bg-[#E5C287] max-w-md rounded-xl overflow-hidden shadow-lg">
            <a href="#">
              <Image className="w-full" src={Roti} alt="" />
              <div className="px-6 py-6 first-line:font-semibold text-center text-2xl mb-2">
                Roti
              </div>
            </a>
          </div>
          <div className="bg-[#E5C287] max-w-md rounded-xl overflow-hidden shadow-lg">
            <a href="#">
              <Image className="w-full" src={Roti} alt="" />
              <div className="px-6 py-6 first-line:font-semibold text-center text-2xl mb-2">
                Minuman
              </div>
            </a>
          </div>
          <div className="bg-[#E5C287] max-w-md rounded-xl overflow-hidden shadow-lg">
            <a href="#">
              <Image className="w-full" src={Roti} alt="" />
              <div className="px-6 py-6 first-line:font-semibold text-center text-2xl mb-2">
                Hampers
              </div>
            </a>
          </div>
          <div className="bg-[#E5C287] max-w-md rounded-xl overflow-hidden shadow-lg">
            <a href="#">
              <Image className="w-full" src={Roti} alt="" />
              <div className="px-6 py-6 first-line:font-semibold text-center text-2xl mb-2">
                Lainnya
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
