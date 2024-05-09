import Cake from "@/public/images/cake.jpeg";
import Hampers from "@/public/images/hampers.jpeg";
import Minuman from "@/public/images/minuman.webp";
import Roti from "@/public/images/roti.jpg";
import getAllCategories from "@/services/category-service";
import Image from "next/image";
import React from "react";

const Category = async () => {
  const productCategories = await getAllCategories();

  return (
    <>
      <div className="py-16 md:px-24 lg:px-64">
        <h1 className="pb-6 text-center text-3xl font-medium">Kategori</h1>
        <div className="flex items-center justify-center gap-6 text-white">
          {productCategories.map((category) => {
            return (
              <div
                key={category.id}
                className="max-w-md overflow-hidden rounded-xl bg-[#41B06E] shadow-lg"
              >
                <a href="#">
                  <Image className="h-56 w-96" src={Cake} alt="" />
                  <div className="mb-2 px-6 py-6 text-center text-2xl first-line:font-semibold">
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
