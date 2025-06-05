import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavItems } from "../navItems";
import "@/styles/globals.css";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import mn from "../../../../public/images/Lang/mn.png";
import en from "../../../../public/images/Lang/en.png";

import MobileMenu from "./MobileMenu";

interface MobileNavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: MobileNavbarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const params = useParams();
  const navItems = useNavItems();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get current locale from params (consistent with desktop)
  const currentLocale = params.locale as string;  // Function to switch locale with smooth transition
  const switchLocale = (newLocale: string) => {
    if (currentLocale === newLocale || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Use the next-intl router for proper locale switching
    router.replace(pathname, { locale: newLocale });
    
    // Reset transitioning state after animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600); // Match the transition duration
    
    setIsMenuOpen(false);
  };  const handleNavigation = (anchor: string) => {
    setIsMenuOpen(false);
    
    if (!anchor) return;
    // Use the next-intl router with just the anchor (without locale)
    router.replace(anchor);
  };  // Function to check if a menu item is active
  const isActive = (anchor: string) => {
    const currentPath = pathname.replace(`/${locale}`, '').toLowerCase();
    
    if (anchor === '/') {
      return currentPath === '' || currentPath === '/';
    } else {
      return currentPath.startsWith(anchor.toLowerCase());
    }
  };

  // Get the "Other" subitems BEFORE filtering
  const otherItem = navItems.find((n) => n.label.toLowerCase().includes('other') || n.label === 'Бусад');
  const otherSubItems = otherItem?.subItems || [];

  // Filter out items with no anchor (like "Other") and get their subitems
  const mainNavItems = navItems.filter(item => item.anchor !== '');
  
  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 350,
        damping: 30,
        mass: 0.8
      }
    },
    exit: { 
      opacity: 0, 
      y: 20, 
      scale: 0.95,
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.05,
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    })
  };

  return (
    <>
    {/* Fullscreen backdrop blur */}
    {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-md" 
          style={{ zIndex: 40 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    
    {/* Menu content */}
    <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-x-0 bottom-0 flex justify-center items-end pb-[75px] z-[60] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/90 rounded-3xl p-6 w-[200px] shadow-lg border border-gray-200 pointer-events-auto"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="space-y-4 text-center select-none">
                {/* Show main navigation items (those with anchors) */}
                {mainNavItems.map((item, i) => (
                  <motion.li 
                    key={item.label}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.button 
                      onClick={() => handleNavigation(item.anchor)}
                      className={`w-full py-2 px-4 rounded-lg transition-colors ${
                        isActive(item.anchor) ? 'bg-black/5 font-bold' : 'font-regular'
                      }`}
                      whileHover={{ 
                        backgroundColor: "rgba(0,0,0,0.06)", 
                        scale: 1.02 
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  </motion.li>
                ))}
                
                {/* Show "Other" subitems directly */}
                {otherSubItems.map((sub, i) => (
                  <motion.li 
                    key={sub.label}
                    custom={i + mainNavItems.length}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.button 
                      onClick={() => handleNavigation(sub.anchor)}
                      className={`w-full py-2 px-4 rounded-lg transition-colors select-none ${
                        isActive(sub.anchor) ? 'bg-black/5 font-bold' : 'font-regular'
                      }`}
                      whileHover={{ 
                        backgroundColor: "rgba(0,0,0,0.06)", 
                        scale: 1.02 
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {sub.label}
                    </motion.button>
                  </motion.li>
                ))}
                
                {/* Language Toggle Section */}
                <motion.li 
                  className="pt-2"
                  custom={mainNavItems.length + otherSubItems.length}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >                  <div className="border-t border-gray-200 pt-4 flex justify-center">
                    <div className="flex items-center justify-between gap-4 select-none">
                      <motion.button
                        onClick={() => switchLocale("mn")}
                        disabled={isTransitioning || currentLocale === "mn"}
                        whileHover={{ scale: isTransitioning ? 1 : 1.1 }}
                        whileTap={{ scale: isTransitioning ? 1 : 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="transition-transform duration-300 ease-in-out"
                      >
                        <Image
                          src={mn}
                          alt="Mongolian Flag"
                          width={25}
                          height={25}
                          draggable="false"
                          className={`rounded-full transition-all duration-300 ${
                            currentLocale === "mn" ? "saturate-100 scale-110" : "saturate-[0%] scale-[70%] opacity-[70%]"
                          } ${isTransitioning ? "opacity-50" : ""}`}
                        />
                      </motion.button>
                      
                      <div className="w-[1px] h-5 bg-black"></div>
                      
                      <motion.button
                        onClick={() => switchLocale("en")}
                        disabled={isTransitioning || currentLocale === "en"}
                        whileHover={{ scale: isTransitioning ? 1 : 1.1 }}
                        whileTap={{ scale: isTransitioning ? 1 : 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="transition-transform duration-300 ease-in-out"                      >
                        <Image
                          src={en}
                          alt="US Flag"
                          width={25}
                          height={25}
                          draggable="false"
                          className={`rounded-full transition-all duration-300 ${
                            currentLocale === "en" ? "saturate-100 scale-110" : "saturate-[0%] scale-[70%] opacity-[70%]"
                          } ${isTransitioning ? "opacity-50" : ""}`}
                        />
                      </motion.button>
                    </div>
                  </div>
                </motion.li>
              </ul>
              </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    {/* Navigation bar with menu button */}
    <nav className="bg-white/95 backdrop-blur-md outline-none outline-1 outline-black/60 flex justify-center items-center outline-offset-0 rounded-full p-4 fixed bottom-[20px] left-1/2 transform -translate-x-1/2 w-[100px] h-[40px] select-none z-50 pointer-events-auto">
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="px-7 py-5 rounded text-black font-bold"
    >
      {isMenuOpen ? "CLOSE" : "MENU"}
    </button>
    </nav>
  </>
);
};

export default Navbar;