import React from "react";

const HistoriPemesanan = () => {
  return (
    <>
      <div className="mx-auto w-9/12 py-32 lg:w-5/12">
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
        <div className="flex items-center justify-center gap-6">
          <div className="h-96 w-full gap-10 rounded-xl border p-5">
            <form className="max-w-md pb-6">
              <label
                htmlFor="default-search"
                className="sr-only mb-2 text-sm font-medium text-gray-900"
              >
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                  <svg
                    className="h-4 w-4"
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
                  className="text-md w-96 rounded-xl border border-gray-300 bg-gray-50 bg-opacity-20 p-4 ps-10 focus:border-[#FDA403] focus:ring-[#FDA403]"
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
