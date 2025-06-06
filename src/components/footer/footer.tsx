import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

// i18n language
import { useTranslations } from "next-intl";

const Footer = () => {
  // language i18n
  const t = useTranslations("Footer");

  return (
    <footer className="relative bg-[#242424] bg-opacity-80 backdrop-blur-md pt-32 pb-30 md:pb-24 px-6 md:px-20 text-white overflow-hidden">
      {/* White decorative topper */}
      <div className="absolute top-0 left-0 w-full h-10 bg-white rounded-b-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 px-4 sm:px-6 md:px-0">
        {/* Logo & Contact */}
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <div className="relative w-[220px] md:w-[210px] h-[38px] select-none" draggable="false">
            <Image
              src="/logos/full-white.png"
              alt="GDG on Campus MUST Logo"
              fill
              sizes="(max-width: 768px) 580px, (max-width: 1200px) 730px, 530px"
              style={{ objectFit: "contain" }}
              draggable="false"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1 mt-6 md:mt-0 select-none">{t('sayHello')}</h2>
            <ul className="space-y-1 text-[16px]">
              <li><a href="mailto:hello@gdgmust.dev" className="hover:underline">hello@gdgmust.dev</a></li>
              <li><a href="mailto:gdgmust@gmail.com" className="hover:underline">gdgmust@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Location */}
        <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start">
          <h2 className="text-xl font-semibold mb-2 select-none">{t('location.location')}</h2>
          <p className="text-base opacity-80 leading-relaxed w-[300px] md:w-full">
            {t('location.city')}<br />
            {t('location.address')}<br />
            {t('location.school')}<br />
            +976-8824-5988
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 items-center md:items-end w-full">
          <button className="bg-white text-black bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition rounded-xl px-6 py-3 shadow-lg w-[280px] md:w-[200px]">
            Contact
          </button>
          <button className="bg-white text-black bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition rounded-xl px-6 py-3 shadow-lg w-[280px] md:w-[200px]">
            Policy
          </button>
        </div>
      </div>

      {/* Social Icons */}
      <div className="relative z-10 flex justify-center gap-8 mt-16 text-xl text-gray-400">
        <a href="https://www.facebook.com/gdgcmust/" target="_blank" rel="noopener noreferrer" draggable="false">
          <FaFacebook className="hover:text-white transition cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/gdg.must/" target="_blank" rel="noopener noreferrer" draggable="false">
          <FaInstagram className="hover:text-white transition cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/company/gdgmust/" target="_blank" rel="noopener noreferrer" draggable="false">
          <FaLinkedinIn className="hover:text-white transition cursor-pointer" />
        </a>
        <a href="https://discord.gg/YNyzd5D9" target="_blank" rel="noopener noreferrer" draggable="false">
          <FaDiscord className="hover:text-white transition cursor-pointer" />
        </a>
        <a href="https://www.youtube.com/@gdgmust" target="_blank" rel="noopener noreferrer" draggable="false">
          <FaYoutube className="hover:text-white transition cursor-pointer" />
        </a>
      </div>

      {/* Copyright */}
      <p className="relative z-10 mt-12 text-center text-sm text-gray-500 select-none" draggable="false">
        {t("copyright1")} <a href="https://www.instagram.com/roaziy/" className="text-white hover:underline px-[2px]" draggable="false">roaziy</a> {t("copyright2")} {new Date().getFullYear()} 
      </p>
    </footer>
  );
};

export default Footer;
