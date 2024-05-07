import React from "react";
import Image from "next/image";
import TestImg from "@/public/images/info.jpg";

import getAllProducts from "@/services/product-service";

const Recommendation = async () => {
  const products = await getAllProducts();
  return (
    <>
      <div className="py-16 md:px-24 lg:px-64">
        <h1 className="text-center font-medium text-3xl pb-6">Rekomendasi</h1>
        <div className="flex gap-6 justify-center items-center text-white">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-[#41B06E] max-w-2xl rounded-xl overflow-hidden shadow-lg"
              >
                <a href="#">
                  <img
                    className="w-full w-64 h-64"
                    src={`https://admin.atmakitchen.ninja/assets/${product.image}`}
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                  />
                  <div className="px-6 py-6 first-line:font-semibold text-center text-2xl mb-2">
                    {product.name}
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

export default Recommendation;
