"use client";

import { FilePenLine, Plus, Trash2 } from "lucide-react";
import { FC, useState } from "react";

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
                    onClick={() => {
                      setShowModal(false);
                    }}
                    type="button"
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
                        id="name"
                        name="name"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block pb-2" htmlFor="phone">
                        Nomor Telepon
                      </label>
                      <input
                        className="w-full rounded-xl border border-gray-300 bg-gray-50 p-2"
                        id="phone"
                        name="phone"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block pb-2" htmlFor="address">
                        Alamat
                      </label>
                      <textarea
                        className="block w-full rounded-xl border border-gray-300 bg-gray-50 p-2.5 text-sm"
                        id="address"
                        placeholder="Write your thoughts here..."
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <button
                    className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    onClick={() => {
                      setShowModal(false);
                    }}
                    type="button"
                  >
                    Keluar
                  </button>
                  <button
                    className="mb-1 mr-1 rounded-xl bg-[#FDA403] px-6 py-3 text-sm font-bold text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    onClick={() => {
                      setShowModal(false);
                    }}
                    type="button"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25" />
        </>
      ) : null}
      <div className="mx-auto w-9/12 pb-72 pt-32 lg:w-5/12">
        <div className="flex gap-4 pb-4 font-semibold">
          <a href="me">
            <p className="text-gray-500">Profil</p>
          </a>
          <a href="addresses">
            <p className="text-[#41B06E]">Alamat</p>
          </a>
          <a href="orders">
            <p className="text-gray-500">Histori Pemesanan</p>
          </a>
        </div>
        <div className="flex items-center justify-center gap-6">
          <div className="h-96 w-full gap-10 rounded-xl border p-5">
            <div className="flex justify-between pb-6">
              <h3 className="flex items-center text-xl font-semibold text-gray-500">Alamat Saya</h3>
              <button
                className="flex items-center gap-2 rounded-xl bg-[#41B06E] p-3 font-semibold text-white"
                onClick={() => {
                  setShowModal(true);
                }}
                type="button"
              >
                <Plus />
                Tambah Alamat
              </button>
            </div>
            <div className="border" />
            <div className="flex justify-between">
              <div className="w-3/6 pt-6">
                <div className="flex gap-6">
                  <h3 className="font-semibold">Stepanus Pramudya Filio Pambudi</h3>
                  <div className="border border-gray-500" />
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
                <button className="flex items-center rounded-lg bg-green-500 p-1 text-white">
                  <FilePenLine />
                </button>
                <button className="flex items-center rounded-lg bg-red-500 p-1 text-white">
                  <Trash2 />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
