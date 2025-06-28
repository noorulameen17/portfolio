"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // fixed import
import { cn } from "@/lib/utils";
import Link from "next/link";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName
}) => {
  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(30deg) scale(0.9)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <Link
      className={cn(
        // Responsive width/height and flex centering
        "relative group/pin z-50 cursor-pointer flex items-center justify-center w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
    >
      <div
        style={{
          perspective: "1200px",
          transform: "rotateX(60deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-8 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-[36rem] h-[70vw] max-h-[30rem] sm:w-[34rem] sm:h-80 md:w-[44rem] lg:w-[52rem] xl:w-[64rem]"
      >
        <>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,
              z: 0,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 0,
            }}
            className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] max-h-[11.25rem] max-w-[11.25rem] sm:h-[40vw] sm:w-[40vw] sm:max-h-[11.25rem] sm:max-w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,
              z: 0,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 2,
            }}
            className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] max-h-[11.25rem] max-w-[11.25rem] sm:h-[40vw] sm:w-[40vw] sm:max-h-[11.25rem] sm:max-w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              opacity: [0, 1, 0.5, 0],
              scale: 1,
              z: 0,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 4,
            }}
            className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] max-h-[11.25rem] max-w-[11.25rem] sm:h-[40vw] sm:w-[40vw] sm:max-h-[11.25rem] sm:max-w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
          ></motion.div>
        </>
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-1 sm:p-3 md:p-4 top-1/2 flex justify-center items-center rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-zinc-200 border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden dark:border-zinc-800 w-full h-full"
        >
          <div className={cn("relative z-50 w-full h-full", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} />
    </Link>
  );
};

export const PinPerspective = ({
  title
}) => {
  return (
    <motion.div
      className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500"
    >
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <div
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </div>
        </div>
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            {/* ...existing code for motion.divs... */}
          </>
        </div>
        <>
          {/* ...existing code for motion.divs... */}
        </>
      </div>
    </motion.div>
  );
};
