import React from "react";
import Image from "next/image";
import TestImg from "@/public/images/info.jpg";
import { UserRound } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="absolute w-full px-8 md:px-auto">
        <div className="fixed top-3 inset-0 md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap">
          <div className="flex gap-6 items-center">
            <a href="/landing">
              <div className="text-[#41B06E] text-xl font-bold">
                ATMA KITCHEN
              </div>
            </a>
            <div>
              <form className="max-w-md mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-white"
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
                    className="p-4 ps-10 w-96 text-md text-white border border-gray-300 rounded-xl bg-gray-50 bg-opacity-20 focus:ring-[#FDA403] focus:border-[#FDA403]"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="text-white order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between">
              <li className="md:px-4 md:py-2 text-[#8DECB4]">
                <a href="#">Beranda</a>
              </li>
              <li className="md:px-4 md:py-2 hover:text-[#8DECB4]">
                <a href="#">Menu</a>
              </li>
              <li className="md:px-4 md:py-2 hover:text-[#8DECB4]">
                <a href="#">Blog</a>
              </li>
              <li className="md:px-4 md:py-2 hover:text-[#8DECB4]">
                <a href="#">Tentang</a>
              </li>
              <li className="md:px-4 md:py-2 hover:text-[#8DECB4]">
                <a href="#">Kontak</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 order-2 md:order-3">
            <a
              href="/auth/login"
              className="px-4 py-2 text-white hover:bg-[#8DECB4] border border-white rounded-xl flex items-center gap-2"
            >
              <span>Masuk</span>
            </a>
            <a
              href="/auth/register"
              className="px-4 py-2 bg-[#41B06E] hover:bg-[#8DECB4] text-gray-50 rounded-xl flex items-center gap-2"
            >
              <span>Daftar</span>
            </a>
            <a href="/user_profile/profile">
              <div className="relative justify-center items-center bg-gray-300 overflow-hidden w-10 h-10 rounded-full">
                <Image className="absolute" src={TestImg} alt={""} />
              </div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
