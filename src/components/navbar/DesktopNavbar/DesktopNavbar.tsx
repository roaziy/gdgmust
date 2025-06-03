'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useNavItems } from '../navItems';

export default function Navbar() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const navItems = useNavItems();

    const containerRef = useRef<HTMLDivElement | null>(null);
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const [hovered, setHovered] = useState<number | null>(null);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);
    const [widths, setWidths] = useState<number[]>([]);
    const [positions, setPositions] = useState<number[]>([]);

    // 🧠 Measure button positions and sizes
    useEffect(() => {
        const calculateDimensions = () => {
            const container = containerRef.current;
            if (!container) return;

            const containerLeft = container.getBoundingClientRect().left;
            const newWidths: number[] = [];
            const newPositions: number[] = [];

            buttonRefs.current.forEach((button) => {
                if (button) {
                    const rect = button.getBoundingClientRect();
                    newWidths.push(rect.width);
                    newPositions.push(rect.left - containerLeft);
                } else {
                    newWidths.push(80);
                    newPositions.push(0);
                }
            });

            setWidths(newWidths);
            setPositions(newPositions);
        };

        const frame = requestAnimationFrame(calculateDimensions);
        window.addEventListener('resize', calculateDimensions);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('resize', calculateDimensions);
        };
    }, [locale, pathname, navItems]);

    useEffect(() => {
        if (widths.length === 0 || positions.length === 0 || !pathname) return;

        const currentPath = pathname.replace(`/${locale}`, '').toLowerCase();
        let matchedIndex: number | null = null;

        // ✅ Explicitly match Home ("/" or "")
        if (currentPath === '' || currentPath === '/') {
            matchedIndex = 0; // Home
        } else {
            for (let i = 0; i < navItems.length; i++) {
                const main = navItems[i].anchor?.toLowerCase() || '';
                const subAnchors = navItems[i].subItems?.map(sub => sub.anchor?.toLowerCase()) || [];

                if (main && main !== '/' && currentPath.startsWith(main)) {
                    matchedIndex = i;
                    break;
                }

                if (subAnchors.some(anchor => anchor && currentPath.startsWith(anchor))) {
                    matchedIndex = i;
                    break;
                }
            }
        }

        // ✅ Default fallback to "Other" (assumed index 4)
        setSelected(matchedIndex !== null ? matchedIndex : 4);
    }, [pathname, locale, widths, positions]);

    const handleMouseEnter = (index: number) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setHovered(index);
        setIsSubmenuOpen(navItems[index].subItems.length > 0);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHovered(null);
            setIsSubmenuOpen(false);
        }, 200);
    };

    return (
        <div>
            <div
                ref={containerRef}
                className="relative flex items-center bg-white/85 px-2 h-[48px] rounded-full shadow-[0px_1px_7px] shadow-gray-300/80 backdrop-blur-md"
            >
                {/* 🟡 Highlight bubble */}
                {selected !== null && widths[selected] && positions[selected] !== undefined && (
                    <motion.div
                        className="absolute rounded-full bg-[#dadada] z-[1]"
                        initial={false}
                        animate={{
                            left: positions[selected] - 4,
                            width: widths[selected] + 8
                        }}
                        transition={{ type: 'tween', duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
                        style={{ height: '40px' }}
                    />
                )}

                {navItems.map((item, index) => (
                    <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <motion.button
                            ref={(el) => { buttonRefs.current[index] = el; }}
                            className={`relative z-10 px-4 py-2 text-[16px] whitespace-nowrap transition-colors select-none ${
                                selected === index ? 'text-black' : 'text-gray-500 hover:text-black'
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                if (!item.anchor) return;
                                setHovered(null);
                                setIsSubmenuOpen(false);
                                router.replace(`/${locale}${item.anchor}`);
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                            {item.label}
                        </motion.button>

                        {/* 🔽 Submenu */}
                        <AnimatePresence>
                            {item.subItems.length > 0 && (hovered === index || isSubmenuOpen) && (
                                <motion.div
                                    id={`submenu-${index}`}
                                    className="absolute -left-[24px] mt-4 bg-white rounded-2xl shadow-[0px_1px_7px] backdrop-blur-md shadow-gray-300/80 py-1 min-w-[124px] z-50 overflow-hidden select-none"
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } }}
                                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <motion.div className="py-1 px-1">
                                        {item.subItems.map((sub, subIndex) => (
                                            <motion.button
                                                key={sub.label}
                                                className="w-full px-4 py-3 rounded-xl transition-all text-center justify-center whitespace-nowrap flex items-center select-none text-gray-500 hover:text-black"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setHovered(null);
                                                    setIsSubmenuOpen(false);
                                                    router.replace(`/${locale}${sub.anchor}`);
                                                }}
                                                initial={{ opacity: 0, x: 0 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.03 * subIndex, duration: 0.2 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {sub.label}
                                            </motion.button>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
