'use client';

import React, { ReactNode, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import Background from '@/components/pages/homepage/components/background';

import "@/styles/globals.css";

const IMG_PADDING = 12;

export const ImageFrameScroller = ({ }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[100vh]">
        <Background />
      </div>
    </div>
  );
};


const Background = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const opacity = useTransform(scrollYProgress, [1, 0.5], [1, 0]);

  return (
    <motion.div
      style={{
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      {/* <Background /> */}
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

export const IntroImageFrameScroller = () => {  
    return (
      <div className="bg-white select-none" draggable="false">    
        <IntroImageFrameScroller />
      </div>
    );
  };

export default IntroImageFrameScroller;