import React from "react";
import Image from "next/image";
import TestImg from "@/public/images/info.jpg";

const Profile = () => {
  return (
    <>
      <div className="py-32 mx-auto w-9/12 lg:w-5/12">
        <div className="flex gap-4 pb-4">
          <p>Profil</p>
          <p>Alamat</p>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <div className="flex border rounded-xl w-full p-5 gap-10">
            <div>
              <div className="bg-white max-w-96 p-5 border rounded-xl overflow-hidden shadow-lg">
                <a href="#">
                  <Image className="w-full" src={TestImg} alt="" />
                  <div className="py-6 text-center font-semibold text-xl">
                    <button className="p-4 w-full border rounded-lg">
                      Pilih Gambar
                    </button>
                  </div>
                </a>
              </div>
              <div className="text-center pt-10 font-semibold text-lg">
                <a href="">
                  <button className="rounded-xl p-5 border border-gray-300 w-full">
                    Ubah Password
                  </button>
                </a>
              </div>
            </div>
            <div className="">
              <div className="font-semibold text-lg text-gray-500">
                <h3>Profil Saya</h3>
                <div className="py-2">
                  <label htmlFor="name" className="font-normal">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full border p-2 rounded-xl"
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
                    className="w-full border p-2 rounded-xl"
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="gender" className="font-normal">
                    Jenis Kelamin
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    className="border border-gray-300 text-sm rounded-lg block w-full p-2.5  "
                  >
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                  </select>
                </div>
              </div>
              <div className="pt-5 font-semibold text-gray-500 text-lg">
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
                  <div className="flex font-normal gap-4">
                    <p>emailsaya@gmail.com</p>
                    <a href="">
                      <p className="underline text-base">Ubah No. HP</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
