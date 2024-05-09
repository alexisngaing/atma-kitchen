import TestImg from "@/public/images/info.jpg";
import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="mx-auto w-9/12 py-32 lg:w-5/12">
      <div className="flex gap-4 pb-4 font-semibold">
        <a href="/user_profile/profile">
          <p className="text-[#41B06E]">Profil</p>
        </a>
        <a href="/user_profile/address">
          <p className="text-gray-500">Alamat</p>
        </a>
        <a href="/user_profile/histori_pemesanan">
          <p className="text-gray-500">Histori Pemesanan</p>
        </a>
      </div>
      <div className="flex items-center justify-center gap-6">
        <div className="flex w-full gap-10 rounded-xl border p-5">
          <div>
            <div className="max-w-96 overflow-hidden rounded-xl border bg-white p-5 shadow-lg">
              <a href="#">
                <Image alt="" className="w-full" src={TestImg} />
                <div className="py-6 text-center text-xl font-semibold">
                  <button className="w-full rounded-lg border p-4">Pilih Gambar</button>
                </div>
              </a>
            </div>
            <div className="pt-6 text-center text-lg font-semibold">
              <a href="">
                <button className="w-full rounded-xl border border-gray-300 p-5">
                  Ubah Password
                </button>
              </a>
            </div>
          </div>
          <form action="">
            <div className="">
              <div className="text-lg font-semibold text-gray-500">
                <h3>Profil Saya</h3>
                <div className="py-2">
                  <label className="font-normal" htmlFor="name">
                    Nama
                  </label>
                  <input
                    className="w-full rounded-xl border p-2"
                    id="name"
                    name="name"
                    type="text"
                  />
                </div>
                <div className="py-2">
                  <label className="font-normal" htmlFor="tanggal-lahir">
                    Tanggal Lahir
                  </label>
                  <input
                    className="w-full rounded-xl border p-2"
                    id="tanggal-lahir"
                    name="tanggal-lahir"
                    type="date"
                  />
                </div>
                <div className="py-2">
                  <label className="font-normal" htmlFor="gender">
                    Jenis Kelamin
                  </label>
                  <select
                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm  "
                    id="gender"
                    name="gender"
                  >
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                  </select>
                </div>
              </div>
              <div className="py-6 text-lg font-semibold text-gray-500">
                <h3>Kontak Saya</h3>
                <div className="py-2">
                  <label className="font-normal" htmlFor="email">
                    Email
                  </label>
                  <p>emailsaya@gmail.com</p>
                </div>
                <div className="py-2">
                  <label className="font-normal" htmlFor="phone">
                    Nomor HP
                  </label>
                  <div className="flex gap-4 font-normal">
                    <p>08123456789</p>
                    <a href="">
                      <p className="text-base underline">Ubah No. HP</p>
                    </a>
                  </div>
                </div>
              </div>
              <button className="w-40 rounded-xl bg-[#41B06E] p-3 font-semibold text-white">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
