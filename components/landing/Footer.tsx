import React from "react";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";
import ISO from "@/public/images/logo-iso.png";
import GoogleImg from "@/public/images/google-play.png";
import AppleImg from "@/public/images/app-store.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-[#FDA403]">
        <div className="pt-16 pb-52">
          <div className="flex gap-16 justify-center w-full text-white">
            <div className="">
              <h3 className="font-semibold text-lg pb-2">Atma Kitchen</h3>
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
              <h3 className="font-semibold text-lg pb-2">Ikuti Kami</h3>
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
              <h3 className="font-semibold text-lg pb-2">Keamanan & Privasi</h3>
              <a href="#">
                <Image className="max-w-32" src={ISO} alt={""} />
              </a>
            </div>
            <div className="">
              <h3 className="font-semibold text-lg pb-2">
                Download Aplikasi Atma Kitchen
              </h3>
              <div className="flex gap-2">
                <a href="#">
                  <Image className="max-w-32" src={GoogleImg} alt={""} />
                </a>
                <a href="#">
                  <Image className="max-w-32" src={AppleImg} alt={""} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-medium justify-center py-4 text-white">
          <p>© 2024 Atma Kitchen. Hak Cipta Dilindungi Undang-Undang.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
