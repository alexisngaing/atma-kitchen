import React from "react";

const HistoriPemesanan = () => {
  return (
    <>
      <div className="py-32 mx-auto w-9/12 lg:w-5/12">
        <div className="flex gap-4 pb-4 font-semibold">
          <a href="/user_profile/profile">
            <p className="text-gray-500">Profil</p>
          </a>
          <a href="/user_profile/address">
            <p className="text-gray-500">Alamat</p>
          </a>
          <a href="/user_profile/histori_pemesanan">
            <p className="text-[#41B06E]">Histori Pemesanan</p>
          </a>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <div className="border rounded-xl w-full p-5 gap-10 h-96">
            <form className="max-w-md pb-6">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="p-4 ps-10 w-96 text-md border border-gray-300 rounded-xl bg-gray-50 bg-opacity-20 focus:ring-[#FDA403] focus:border-[#FDA403]"
                  placeholder="Cari histori pemesanan"
                />
              </div>
            </form>
            <div className="border"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoriPemesanan;
