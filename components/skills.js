"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import OrbitingItems3D from "./ui/orbiting-items-3-d";
import {
  SiMui,
  SiClerk,
  SiSupabase,
  SiVercel,
} from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaReact, FaHtml5, FaJs } from "react-icons/fa6";
import { FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { PiGreaterThanFill } from "react-icons/pi";


export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 container mx-auto px-4">
      <div className="text-center mb-16">
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

        <div className="relative w-[400px] h-20 -mb-14 -mt-6 mx-auto">
          {/* Gradient Lines */}
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
          <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
          <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2" />
        </div>
        <motion.p
          className="shiny-text section-subheading mx-auto animate-on-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A comprehensive showcase of my technical abilities and expertise
        </motion.p>
      </div>

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
        radiusX={150}
        radiusY={40}
        tiltAngle={330}
      />
    </section>
  );
}
