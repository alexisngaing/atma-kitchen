import TestImg from "@/public/images/info.jpg";
import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <>
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
                  <Image className="w-full" src={TestImg} alt="" />
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
                    <label htmlFor="name" className="font-normal">
                      Nama
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="w-full rounded-xl border p-2"
                    />
                  </div>
                  <div className="py-2">
                    <label htmlFor="tanggal-lahir" className="font-normal">
                      Tanggal Lahir
                    </label>
                    <input
                      type="date"
                      name="tanggal-lahir"
                      id="tanggal-lahir"
                      className="w-full rounded-xl border p-2"
                    />
                  </div>
                  <div className="py-2">
                    <label htmlFor="gender" className="font-normal">
                      Jenis Kelamin
                    </label>
                    <select
                      name="gender"
                      id="gender"
                      className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm  "
                    >
                      <option value="male">Laki-laki</option>
                      <option value="female">Perempuan</option>
                    </select>
                  </div>
                </div>
                <div className="py-6 text-lg font-semibold text-gray-500">
                  <h3>Kontak Saya</h3>
                  <div className="py-2">
                    <label htmlFor="email" className="font-normal">
                      Email
                    </label>
                    <p>emailsaya@gmail.com</p>
                  </div>
                  <div className="py-2">
                    <label htmlFor="phone" className="font-normal">
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
    </>
  );
};

export default Profile;
