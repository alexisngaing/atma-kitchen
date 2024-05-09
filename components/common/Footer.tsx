import AppleImg from "@/public/images/app-store.svg";
import GoogleImg from "@/public/images/google-play.png";
import ISO from "@/public/images/logo-iso.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#41B06E]">
      <div className="pb-52 pt-16">
        <div className="flex w-full justify-center gap-16 text-white">
          <div className="">
            <h3 className="pb-2 text-lg font-semibold">Atma Kitchen</h3>
            <a href="#">
              <p>Tentang Atma Kitchen</p>
            </a>
            <a href="#">
              <p>Bantuan</p>
            </a>
            <a href="#">
              <p>Syarat & Ketentuan</p>
            </a>
            <a href="#">
              <p>Kontak</p>
            </a>
          </div>
          <div className="">
            <h3 className="pb-2 text-lg font-semibold">Ikuti Kami</h3>
            <a href="#">
              <p>Instagram</p>
            </a>
            <a href="#">
              <p>Facebook</p>
            </a>
            <a href="#">
              <p>Twitter/X</p>
            </a>
            <a href="#">
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="">
            <h3 className="pb-2 text-lg font-semibold">Keamanan & Privasi</h3>
            <a href="#">
              <Image alt="" className="max-w-32" src={ISO} />
            </a>
          </div>
          <div className="">
            <h3 className="pb-2 text-lg font-semibold">Download Aplikasi Atma Kitchen</h3>
            <div className="flex gap-2">
              <a href="#">
                <Image alt="" className="max-w-32" src={GoogleImg} />
              </a>
              <a href="#">
                <Image alt="" className="max-w-32" src={AppleImg} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4 font-medium text-white">
        <p>© 2024 Atma Kitchen. Hak Cipta Dilindungi Undang-Undang.</p>
      </div>
    </div>
  );
};

export default Footer;
