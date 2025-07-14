"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import { PiGreaterThanFill } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiClerk, SiMui, SiSupabase, SiVercel } from "react-icons/si";
import OrbitingItems3D from "./ui/orbiting-items-3-d";
import ShinyText from "./ui/ShinyText";
import { useEffect, useState } from "react";

export default function Skills() {
  // Responsive radii and icon size for OrbitingItems3D
  const [radii, setRadii] = useState({ x: 100, y: 32 });
  const [iconSize, setIconSize] = useState(48);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setRadii({
        x: Math.max(18, Math.min(width / 8, 60)), 
        y: Math.max(8, Math.min(width / 24, 28)), 
      });
      setIconSize(
        width < 400 ? 32 : width < 640 ? 40 : width < 1024 ? 48 : 56
      );
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="skills"
      className="py-10 sm:py-16 md:py-24 lg:py-32 container mx-auto px-2 sm:px-4 -mt-6"
    >
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <div className="relative inline-block">
          <motion.h2
            className="section-heading animate-on-scroll text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills &#38; <span className="text2-gradient">Expertise</span>
          </motion.h2>
          <motion.div
            className="absolute -right-8 top-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          ></motion.div>
        </div>

        <div className="relative w-full max-w-[90vw] sm:max-w-md md:max-w-lg h-12 sm:h-16 md:h-20 -mb-6 sm:-mb-10 md:-mb-14 -mt-2 sm:-mt-4 md:-mt-6 mx-auto">
          {/* Gradient Lines */}
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
          <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
          <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-sm md:text-base"
        >
          <ShinyText
            text="A comprehensive showcase of my technical abilities and expertise"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </motion.div>
      </div>

      <div className="flex justify-center items-center min-h-[200px] sm:min-h-[260px] md:min-h-[320px] -mt-8 sm:-mt-16 md:-mt-20 -mb-16">
        <OrbitingItems3D
          duration={30}
          items={[
            <FaHtml5
              key="html"
              className={`text-orange-500`}
              style={{ width: iconSize, height: iconSize }}
            />,
            <FaCss3Alt
              key="css"
              className={`text-blue-500`}
              style={{ width: iconSize, height: iconSize }}
            />,
            <FaJs
              key="javascript"
              className={`text-yellow-400`}
              style={{ width: iconSize, height: iconSize }}
            />,
            <FaReact
              key="react"
              className={`text-sky-400`}
              style={{ width: iconSize, height: iconSize }}
            />,
            <RiNextjsFill
              key="nextjs"
              style={{ width: iconSize, height: iconSize }}
            />,
            <SiMui
              key="material-ui"
              className="text-blue-600"
              style={{ width: iconSize, height: iconSize }}
            />,
            <PiGreaterThanFill
              key="aceternity-ui"
              className="text-black"
              style={{ width: iconSize, height: iconSize }}
            />,
            <RiTailwindCssFill
              key="tailwind"
              className="text-sky-500"
              style={{ width: iconSize, height: iconSize }}
            />,
            <Image
              key="bits"
              src="/icon/bits.ico"
              alt="Bits Logo"
              width={iconSize}
              height={iconSize}
              className=""
              style={{ width: iconSize, height: iconSize }}
            />,
            <Image
              key="magic"
              src="/icon/magic.ico"
              alt="Magic Logo"
              width={iconSize}
              height={iconSize}
              className=""
              style={{ width: iconSize, height: iconSize }}
            />,
            <Image
              key="python"
              src="/icon/python.png"
              alt="Python Logo"
              width={iconSize}
              height={iconSize}
              className=""
              style={{ width: iconSize, height: iconSize }}
            />,
            <SiClerk
              key="clerk"
              style={{ width: iconSize, height: iconSize }}
            />,
            <SiSupabase
              key="supabase"
              className="text-green-500"
              style={{ width: iconSize, height: iconSize }}
            />,
            <SiVercel
              key="vercel"
              style={{ width: iconSize, height: iconSize }}
            />,
            <FaGitAlt
              key="git"
              className="text-orange-600"
              style={{ width: iconSize, height: iconSize }}
            />,
          ]}
          radiusX={radii.x}
          radiusY={radii.y}
          tiltAngle={330}
        />
      </div>
    </section>
  );
}
