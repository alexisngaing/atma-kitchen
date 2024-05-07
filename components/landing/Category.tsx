import React from "react";
import Image from "next/image";
import Roti from "@/public/images/roti.jpg";
import Cake from "@/public/images/cake.jpeg";
import Minuman from "@/public/images/minuman.webp";
import Hampers from "@/public/images/hampers.jpeg";

import getAllCategories from "@/services/category-service";

const Category = async () => {
  const productCategories = await getAllCategories();

  return (
    <>
      <div className="py-16 md:px-24 lg:px-64">
        <h1 className="text-center font-medium text-3xl pb-6">Kategori</h1>
        <div className="flex gap-6 justify-center items-center text-white">
          {productCategories.map((category) => {
            return (
              <div
                key={category.id}
                className="bg-[#41B06E] max-w-md rounded-xl overflow-hidden shadow-lg"
              >
                <a href="#">
                  <Image className="w-96 h-56" src={Cake} alt="" />
                  <div className="px-6 py-6 first-line:font-semibold text-center text-2xl mb-2">
                    {category.name}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
