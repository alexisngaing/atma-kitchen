import { ChevronRight } from "lucide-react";

const Etc = () => {
  return (
    <div className="flex items-center justify-center pb-40 pt-16">
      <a href="/products">
        <button
          className="flex rounded-xl bg-[#41B06E] p-4 text-2xl font-semibold text-white shadow-xl"
          type="button"
        >
          Lihat Semua Produk
          <ChevronRight />
        </button>
      </a>
    </div>
  );
};

export default Etc;
