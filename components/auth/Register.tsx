"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <section className="bg-gray-50 ">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <a href="#" className="mb-6 flex items-center text-3xl font-semibold text-[#41B06E]">
            ATMA KITCHEN
          </a>
          <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 ">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Daftar Sekarang
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Username
                  </label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm "
                    placeholder="johndoe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm "
                    placeholder="name@example.com"
                  />
                </div>

                <div className="max-w-sm">
                  <label htmlFor="password" className="mb-2 block text-sm">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={togglePassword}
                      data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
                      className="absolute end-0 top-0 rounded-e-md p-3.5"
                    >
                      <svg
                        className="size-3.5 flex-shrink-0 text-gray-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {showPassword ? (
                          <>
                            <path d="M6 12s2-3 6-3s6 3 6 3s-2 3-6 3s-6-3-6-3Z" />
                            <circle cx="12" cy="12" r="3"></circle>
                          </>
                        ) : (
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                        )}
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                        <line x1="2" x2="22" y1="2" y2="22"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="max-w-sm">
                  <label htmlFor="password" className="mb-2 block text-sm">
                    Konfirmasi Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirm-password"
                      type={showPassword ? "text" : "password"}
                      className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={togglePassword}
                      data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
                      className="absolute end-0 top-0 rounded-e-md p-3.5"
                    >
                      <svg
                        className="size-3.5 flex-shrink-0 text-gray-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {showPassword ? (
                          <>
                            <path d="M6 12s2-3 6-3s6 3 6 3s-2 3-6 3s-6-3-6-3Z" />
                            <circle cx="12" cy="12" r="3"></circle>
                          </>
                        ) : (
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                        )}
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                        <line x1="2" x2="22" y1="2" y2="22"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex items-start"></div>
                <button
                  type="submit"
                  className="hover:bg-primary-700 focus:ring-primary-300 w-full rounded-lg bg-[#41B06E] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                >
                  Daftar
                </button>
                <p className="text-center text-sm font-light text-gray-500">
                  Sudah punya akun?{" "}
                  <a href="/auth/login" className="font-medium text-[#41B06E] hover:underline">
                    Masuk
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
