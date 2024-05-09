"use client";

import { Plus } from "lucide-react";
import { FilePenLine } from "lucide-react";
import { Trash2 } from "lucide-react";
import React, { FC, useEffect, useState } from "react";

const Address: FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto w-7/12 py-6 lg:w-4/12">
              <div className="relative flex w-full flex-col rounded-xl border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
                  <h3 className="text-3xl font-semibold">Tambahkan Alamat</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative flex-auto p-6">
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="block pb-2" htmlFor="name">
                        Nama Penerima
                      </label>
                      <input
                        className="w-full rounded-xl border border-gray-300 bg-gray-50 p-2"
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
                        className="w-full rounded-xl border border-gray-300 bg-gray-50 p-2"
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
                        className="block w-full rounded-xl border border-gray-300 bg-gray-50 p-2.5 text-sm"
                        placeholder="Write your thoughts here..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <button
                    className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Keluar
                  </button>
                  <button
                    className="mb-1 mr-1 rounded-xl bg-[#FDA403] px-6 py-3 text-sm font-bold text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
      <div className="mx-auto w-9/12 pb-72 pt-32 lg:w-5/12">
        <div className="flex gap-4 pb-4 font-semibold">
          <a href="/user_profile/profile">
            <p className="text-gray-500">Profil</p>
          </a>
          <a href="/user_profile/address">
            <p className="text-[#41B06E]">Alamat</p>
          </a>
          <a href="/user_profile/histori_pemesanan">
            <p className="text-gray-500">Histori Pemesanan</p>
          </a>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="h-96 w-full gap-10 rounded-xl border p-5">
            <div className="flex justify-between pb-6">
              <h3 className="flex items-center text-xl font-semibold text-gray-500">Alamat Saya</h3>
              <button
                onClick={() => setShowModal(true)}
                type="button"
                className="flex items-center gap-2 rounded-xl bg-[#41B06E] p-3 font-semibold text-white"
              >
                <Plus />
                Tambah Alamat
              </button>
            </div>
            <div className="border"></div>
            <div className="flex justify-between">
              <div className="w-3/6 pt-6">
                <div className="flex gap-6">
                  <h3 className="font-semibold">Stepanus Pramudya Filio Pambudi</h3>
                  <div className="border border-gray-500"></div>
                  <h3>0812345696969</h3>
                </div>
                <div className="pt-3">
                  <p>
                    Jl. Babarsari No.44, Janti, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah
                    Istimewa Yogyakarta 55281
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a href="">
                  <button className="flex items-center rounded-lg bg-green-500 p-1 text-white">
                    <FilePenLine />
                  </button>
                </a>
                <a href="">
                  <button className="flex items-center rounded-lg bg-red-500 p-1 text-white">
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
