"use client";

import React, { useState } from "react";
import swal from "sweetalert";

async function loginUser(credentials: any) {
  return fetch("https://api.atmakitchen.ninja/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(credentials),
    mode: "cors",
  }).then((data) => data.json());
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
    });
    if ("accessToken" in response) {
      swal("Success", response.message, "success", {
        buttons: [],
        timer: 2000,
      }).then((value) => {
        localStorage.setItem("accessToken", response["accessToken"]);
        localStorage.setItem("user", JSON.stringify(response["user"]));
        window.location.href = "/landing";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  };

  return (
    <>
      <section className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-3xl font-semibold text-[#41B06E]"
          >
            ATMA KITCHEN
          </a>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Login
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                noValidate
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                    placeholder="johndoe@atmakitchen.ninja"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="max-w-sm">
                  <label htmlFor="password" className="block text-sm mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="••••••••"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={togglePassword}
                      data-hs-toggle-password='{
        "target": "#hs-toggle-password"
      }'
                      className="absolute top-0 end-0 p-3.5 rounded-e-md"
                    >
                      <svg
                        className="flex-shrink-0 size-3.5 text-gray-400"
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
                <p className="text-sm text-end font-light text-gray-500">
                  <a href="#" className="font-medium hover:underline">
                    Lupa username atau password?
                  </a>
                </p>
                <button
                  type="submit"
                  className="w-full text-white bg-[#41B06E] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>
                <p className="text-sm text-center font-light text-gray-500">
                  Belum punya akun?{" "}
                  <a
                    href="/auth/register"
                    className="font-medium hover:underline"
                  >
                    <span className="text-[#41B06E]">Daftar</span>
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

export default Login;
