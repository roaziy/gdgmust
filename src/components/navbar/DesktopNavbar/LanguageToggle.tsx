"use client";

import Image from "next/image";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";
import mn from "../../../../public/images/Lang/mn.png";
import en from "../../../../public/images/Lang/en.png";

const Logobar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get current locale from params
  const currentLocale = params.locale as string;

  // Function to switch locale with smooth transition
  const switchLocale = (newLocale: string) => {
    if (currentLocale === newLocale || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Use the next-intl router for proper locale switching
    router.replace(pathname, { locale: newLocale });
    
    // Reset transitioning state after animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Match the transition duration
  };

  return (
    <div
      className="relative flex items-center justify-between gap-[15px] px-[10px] py-[9px] bg-white/85 shadow-[0px_1px_7px] shadow-gray-300/80 backdrop-blur-md rounded-full"
      style={{ userSelect: "none", cursor: "pointer" }}
    >
      <button
        onClick={() => switchLocale("mn")}
        draggable="false"
        className="transition-transform duration-300 ease-in-out hover:scale-110"
      >
        <Image
          src={mn}
          alt="Mongolian Flag"
          width={30}
          height={30}
          draggable="false"
          className={`rounded-full transition-all duration-300 max-w-[30px] max-h-[30px] ${
            currentLocale === "mn" ? "saturate-100 scale-110" : "saturate-[0%] scale-[80%] opacity-[70%]"
          }`}
        />
      </button>

      {/* Static Centered Divider */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-6 bg-black"></div>

      <button
        onClick={() => switchLocale("en")}
        draggable="false"
        className="transition-transform duration-300 ease-in-out hover:scale-110"
      >
        <Image
          src={en}
          alt="US Flag"
          width={30}
          height={30}
          draggable="false"
          className={`rounded-full transition-all duration-300 max-w-[30px] max-h-[30px] ${
            currentLocale === "en" ? "saturate-100 scale-110" : "saturate-[0%] scale-[80%] opacity-[70%]"
          }`}
        />
      </button>
    </div>
  );
};

export default Logobar;
