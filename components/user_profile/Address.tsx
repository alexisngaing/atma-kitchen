"use client";

import React, { FC, useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { FilePenLine } from "lucide-react";
import { Trash2 } from "lucide-react";

const Address: FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-7/12 lg:w-4/12 py-6 mx-auto">
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Tambahkan Alamat</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="block pb-2" htmlFor="name">
                        Nama Penerima
                      </label>
                      <input
                        className="border border-gray-300 bg-gray-50 rounded-xl p-2 w-full"
                        type="text"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div>
                      <label className="block pb-2" htmlFor="phone">
                        Nomor Telepon
                      </label>
                      <input
                        className="border border-gray-300 bg-gray-50 rounded-xl p-2 w-full"
                        type="text"
                        id="phone"
                        name="phone"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block pb-2">
                        Alamat
                      </label>
                      <textarea
                        id="address"
                        rows={4}
                        className="block p-2.5 w-full text-sm bg-gray-50 rounded-xl border border-gray-300"
                        placeholder="Write your thoughts here..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Keluar
                  </button>
                  <button
                    className="bg-[#FDA403] text-white active:bg-emerald-600 font-bold text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="pt-32 pb-72 mx-auto w-9/12 lg:w-5/12">
        <div className="flex gap-4 pb-4 font-semibold">
          <a href="/user_profile/profile">
            <p className="text-gray-500">Profil</p>
          </a>
          <a href="/user_profile/address">
            <p className="text-[#41B06E]">Alamat</p>
          </a>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <div className="border rounded-xl w-full p-5 gap-10 h-96">
            <div className="flex justify-between pb-6">
              <h3 className="flex items-center font-semibold text-gray-500 text-xl">
                Alamat Saya
              </h3>
              <button
                onClick={() => setShowModal(true)}
                type="button"
                className="flex gap-2 bg-[#41B06E] items-center rounded-xl p-3 font-semibold text-white"
              >
                <Plus />
                Tambah Alamat
              </button>
            </div>
            <div className="border"></div>
            <div className="flex justify-between">
              <div className="pt-6 w-3/6">
                <div className="flex gap-6">
                  <h3 className="font-semibold">
                    Stepanus Pramudya Filio Pambudi
                  </h3>
                  <div className="border border-gray-500"></div>
                  <h3>0812345696969</h3>
                </div>
                <div className="pt-3">
                  <p>
                    Jl. Babarsari No.44, Janti, Caturtunggal, Kec. Depok,
                    Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a href="">
                  <button className="flex items-center rounded-lg p-1 text-white bg-green-500">
                    <FilePenLine />
                  </button>
                </a>
                <a href="">
                  <button className="flex items-center rounded-lg p-1 text-white bg-red-500">
                    <Trash2 />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
