import React from "react";
import { ChevronRight } from "lucide-react";

const Etc = () => {
  return (
    <>
      <div className="pt-16 pb-40 flex items-center justify-center">
        <a href="#">
          <button className="flex bg-[#FDA403] text-white rounded-xl shadow-xl p-4 font-semibold text-2xl">
            Lihat Semua Produk
            <ChevronRight />
          </button>
        </a>
      </div>
    </>
  );
};

export default Etc;
