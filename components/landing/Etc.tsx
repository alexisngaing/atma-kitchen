import { ChevronRight } from "lucide-react";
import React from "react";

const Etc = () => {
  return (
    <div className="flex items-center justify-center pb-40 pt-16">
      <a href="#">
        <button className="flex rounded-xl bg-[#41B06E] p-4 text-2xl font-semibold text-white shadow-xl">
          Lihat Semua Produk
          <ChevronRight />
        </button>
      </a>
    </div>
  );
};

export default Etc;
