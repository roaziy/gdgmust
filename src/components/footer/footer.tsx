import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-[#242424] bg-opacity-80 backdrop-blur-md pt-32 pb-20 px-6 md:px-20 text-white overflow-hidden">
      {/* White decorative topper */}
      <div className="absolute top-0 left-0 w-full h-10 bg-white rounded-b-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo and Contact */}
        <div className="flex flex-col gap-4">
          <Image
            src="/logos/full-white.png"
            alt="GDG on Campus MUST Logo"
            width={220}
            height={60}
            className="mb-2"
          />
          <div>
            <h2 className="text-xl font-semibold mb-1">Say Hello!</h2>
            <p className="text-[16px]">hello@gdgmust.dev</p>
            <p className="text-[16px]">gdgmust@gmail.com</p>
          </div>
        </div>

        {/* Address & Interaction */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            <p className="text-base opacity-80">
              Улаанбаатар 13341<br />
              БЗД, 22-р хороо<br />
              Мэдээлэл, Холбооны Технологийн Сургууль<br />
              +976 8824 5988
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-6">
          <button className="bg-white text-black bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition rounded-xl px-6 py-3 shadow-lg w-[200px]">
            Contact
          </button>
          <button className="bg-white text-black bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition rounded-xl px-6 py-3 shadow-lg w-[200px]">
            Policy
          </button>
        </div>
      </div>

      {/* Social Icons */}
      <div className="relative z-10 flex justify-center gap-8 mt-16 text-xl text-gray-400">
        <FaFacebook className="hover:text-white transition cursor-pointer" />
        <FaInstagram className="hover:text-white transition cursor-pointer" />
        <FaLinkedinIn className="hover:text-white transition cursor-pointer" />
        <FaDiscord className="hover:text-white transition cursor-pointer" />
        <FaYoutube className="hover:text-white transition cursor-pointer" />
      </div>

      {/* Copyright */}
      <p className="relative z-10 mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} GDG on Campus MUST. Бүх эрх хуулиар хамгаалагдсан.
      </p>
    </footer>
  );
};

export default Footer;
