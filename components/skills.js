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
  // Responsive radii for OrbitingItems3D
  const [radii, setRadii] = useState({ x: 100, y: 32 });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setRadii({
        x: Math.max(60, Math.min(width / 3.2, 160)), // smaller min for mobile
        y: Math.max(18, Math.min(width / 10, 48)),
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 md:py-32 container mx-auto px-4"
    >
      <div className="text-center mb-12 sm:mb-16">
        <div className="relative inline-block">
          <motion.h2
            className="section-heading animate-on-scroll text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills & <span className="text2-gradient">Expertise</span>
          </motion.h2>
          <motion.div
            className="absolute -right-8 top-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          ></motion.div>
        </div>

        <div
          className="
            relative
            w-full
            max-w-xs
            sm:max-w-md
            md:max-w-lg
            h-16
            sm:h-20
            -mb-10
            sm:-mb-14
            -mt-4
            sm:-mt-6
            mx-auto
          "
        >
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
          className="text-sm sm:text-base"
        >
          <ShinyText
            text="A comprehensive showcase of my technical abilities and expertise"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </motion.div>
      </div>

      <div className="flex justify-center items-center">
        <OrbitingItems3D
          duration={25}
          items={[
            <FaHtml5 key="html" className="h-12 w-12 text-orange-500" />,
            <FaCss3Alt key="css" className="h-12 w-12 text-blue-500" />,
            <FaJs key="javascript" className="h-12 w-12 text-yellow-400" />,
            <FaReact key="react" className="h-12 w-12 text-sky-400" />,
            <RiNextjsFill key="nextjs" className="h-12 w-12" />,
            <SiMui key="material-ui" className="h-12 w-12 text-blue-600" />,

            <PiGreaterThanFill
              key="aceternity-ui"
              className="h-12 w-12 text-black"
            />,
            <RiTailwindCssFill
              key="tailwind"
              className="h-12 w-12 text-sky-500"
            />,
            <Image
              key="bits"
              src="/bits.ico"
              alt="Bits Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />,
            <Image
              key="bits"
              src="/magic.ico"
              alt="Bits Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />,
            <SiClerk key="clerk" className="h-12 w-12" />,
            <SiSupabase key="supabase" className="h-12 w-12 text-green-500" />,
            <SiVercel key="vercel" className="h-12 w-12" />,
            <FaGitAlt key="git" className="h-12 w-12 text-orange-600" />,
          ]}
          radiusX={radii.x}
          radiusY={radii.y}
          tiltAngle={330}
        />
      </div>
    </section>
  );
}
