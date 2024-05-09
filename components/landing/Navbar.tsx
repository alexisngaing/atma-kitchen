import TestImg from "@/public/images/info.jpg";
import { UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="md:px-auto absolute w-full px-8">
        <div className="container fixed inset-0 top-3 mx-auto flex h-28 flex-wrap items-center justify-between md:h-16 md:px-4">
          <div className="flex items-center gap-6">
            <a href="/landing">
              <div className="text-xl font-bold text-[#41B06E]">ATMA KITCHEN</div>
            </a>
            <div>
              <form className="mx-auto max-w-md">
                <label
                  htmlFor="default-search"
                  className="sr-only mb-2 text-sm font-medium text-gray-900"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <svg
                      className="h-4 w-4 text-white"
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
                    className="text-md w-96 rounded-xl border border-gray-300 bg-gray-50 bg-opacity-20 p-4 ps-10 text-white focus:border-[#FDA403] focus:ring-[#FDA403]"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="order-3 w-full text-white md:order-2 md:w-auto">
            <ul className="flex justify-between font-semibold">
              <li className="text-[#8DECB4] md:px-4 md:py-2">
                <a href="#">Beranda</a>
              </li>
              <li className="hover:text-[#8DECB4] md:px-4 md:py-2">
                <a href="#">Menu</a>
              </li>
              <li className="hover:text-[#8DECB4] md:px-4 md:py-2">
                <a href="#">Blog</a>
              </li>
              <li className="hover:text-[#8DECB4] md:px-4 md:py-2">
                <a href="#">Tentang</a>
              </li>
              <li className="hover:text-[#8DECB4] md:px-4 md:py-2">
                <a href="#">Kontak</a>
              </li>
            </ul>
          </div>
          <div className="order-2 flex gap-2 md:order-3">
            <a
              href="/auth/login"
              className="flex items-center gap-2 rounded-xl border border-white px-4 py-2 text-white hover:bg-[#8DECB4]"
            >
              <span>Masuk</span>
            </a>
            <a
              href="/auth/register"
              className="flex items-center gap-2 rounded-xl bg-[#41B06E] px-4 py-2 text-gray-50 hover:bg-[#8DECB4]"
            >
              <span>Daftar</span>
            </a>
            <a href="/user_profile/profile">
              <div className="relative h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-300">
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
