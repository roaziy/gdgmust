import { memo, useCallback } from 'react';

// Background wave
import MetalWave from "./MetalWave";

// Logo metallic
import Logo from './Logo';

// Right Side Block
import CircularText from './CircularText';

// fonts
import { Tiny5 } from "next/font/google";
import { Libre_Barcode_128 } from 'next/font/google';
import { Yarndings_20 } from 'next/font/google';

const tiny5 = Tiny5({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-tiny5',
    display: 'swap',
});

const yarndings = Yarndings_20({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-yarndings-20',
    display: 'swap',
});

const libreBarcode128 = Libre_Barcode_128({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-libre-barcode-128',
    display: 'swap',
});

// icons
import { FaAngleDoubleDown } from "react-icons/fa";

export default function MainBackground() {
    const scrollToNextSection = useCallback(() => {
    const nextSection = document.getElementById('next-section') || 
                        document.querySelector('section:nth-of-type(2)');
    
    if (nextSection) {
        nextSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        window.scrollTo({
            top: window.innerHeight / 1.3,
            behavior: 'smooth'
        });
    }
}, []);

const MemoizedCircularText = memo(CircularText);

  return (
    <div className="w-full h-full">
        {/* Background wave */}
        <MetalWave
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
        />

        {/* Main content */}
        {/* Logo */}
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
            {/* <Logo /> */}
        </div>

        {/* title */}
        <div className="absolute -left-[7px] md:left-[69px] bottom-[90px] md:bottom-4 -rotate-90 md:rotate-0">
            <h2 className={`${tiny5.className} text-[80px] md:text-[120px] text-black/80 select-none`}>GDG</h2>
        </div>

        {/* topper text */}
        <div className="absolute top-[27px] left-[55px]">
            <p className="text-[10px] md:text-[15px] select-none">*cool landing page btw</p>
        </div>

        {/* Topper left text */}
        <div className="absolute top-[300px] -ml-[32px] md:-ml-[20px] select-none">
            <p className={`text-[10px] -mt-[20px] md:mt-[100px] -rotate-90 ${yarndings.className}`}>
                GDGGDGGDGGDGGDGGDG
            </p>
        </div>

        {/* right side block */}
        <div className="absolute right-[35px] md:right-[55px] bottom-[70px] md:bottom-[54px] bg-white/40 w-[148px] md:w-[160px] h-[148px] md:h-[190px] rounded-[25px] shadow-[2px_20px_20px]/20 backdrop-blur-xl shadow-black z-30">
            <div 
                className='w-full mt-5 flex justify-center items-center cursor-pointer relative z-10'
                onClick={() => {
                    const scrollTo = () => {
                        const start = window.scrollY;
                        const end = window.innerHeight / 1.3;
                        const duration = 1200;
                        let startTime: number | null = null;

                        const easeInOutCubic = (t: number) =>
                            t < 0.5
                                ? 4 * t * t * t
                                : 1 - Math.pow(-2 * t + 2, 3) / 2;

                        const step = (timestamp: number) => {
                            if (!startTime) startTime = timestamp;
                            const elapsed = timestamp - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            const easedProgress = easeInOutCubic(progress);

                            window.scrollTo(0, start + (end - start) * easedProgress);

                            if (progress < 1) {
                                requestAnimationFrame(step);
                            }
                        };

                        requestAnimationFrame(step);
                    };

                    scrollTo();
                }}
            >
                <FaAngleDoubleDown className='absolute size-[40px] bottom-[30px] transition-transform duration-700 ease-in-out hover:scale-110' />
                <div className="absolute inset-0 w-full h-full cursor-pointer" aria-hidden="true"></div>
                <MemoizedCircularText
                    text="SCROLL*DOWN*SCROLL"
                    onHover="speedUp"
                    spinDuration={25}
                    className="custom-class pointer-events-none"
                />
            </div>
            <p className={`flex justify-center items-center text-[45px] mt-2 invisible md:visible ${libreBarcode128.className}`}>roaziy</p>
        </div>
    </div>
  );
}