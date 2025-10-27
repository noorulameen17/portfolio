"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiClerk,
  SiMui,
  SiShadcnui,
  SiSupabase,
  SiVercel,
} from "react-icons/si";

import useIsMobile from "../hooks/useIsMobile";
import { TextShimmerWave } from "./ui/text-shimmer-wave";

const OrbitRotationNoSSR = dynamic(
  () => import("./ui/orbit-rotation").then((m) => m.OrbitRotation),
  { ssr: false }
);

export default function Skills() {
  const sizeFromClass = (cls = "") =>
    cls.includes("w-10") ? 40 : cls.includes("w-8") ? 32 : 24;

  const isMobile = useIsMobile();

  const techIcons = [
    {
      Icon: ({ className }) => (
        <FaHtml5 className={className} color="#E34F26" />
      ),
      name: "HTML5",
    },
    {
      Icon: ({ className }) => (
        <FaCss3Alt className={className} color="#1572B6" />
      ),
      name: "CSS3",
    },
    {
      Icon: ({ className }) => <FaJs className={className} color="#F7DF1E" />,
      name: "JavaScript",
    },
    {
      Icon: ({ className }) => (
        <FaReact className={className} color="#61DAFB" />
      ),
      name: "React",
    },
    {
      Icon: ({ className }) => (
        <RiNextjsFill className={className} color="#ffffff" />
      ),
      name: "Next.js",
    },
    {
      Icon: ({ className }) => (
        <RiTailwindCssFill className={className} color="#38BDF8" />
      ),
      name: "Tailwind CSS",
    },
    {
      Icon: ({ className }) => (
        <FaGitAlt className={className} color="#F05032" />
      ),
      name: "Git",
    },
    {
      Icon: ({ className }) => (
        <SiVercel className={className} color="#ffffff" />
      ),
      name: "Vercel",
    },
    {
      Icon: ({ className }) => (
        <SiClerk className={className} color="#6C47FF" />
      ),
      name: "Clerk",
    },
    {
      Icon: ({ className }) => <SiMui className={className} color="#007FFF" />,
      name: "MUI",
    },
    {
      Icon: ({ className }) => (
        <SiSupabase className={className} color="#3ECF8E" />
      ),
      name: "Supabase",
    },
    {
      Icon: ({ className }) => {
        const size = sizeFromClass(className);
        return (
          <Image
            key="aceternity"
            src="/icon/aceternity.png"
            alt="Aceternity Logo"
            width={size}
            height={size}
            className={className}
            style={{ width: size, height: size }}
          />
        );
      },
      name: "Aceternity",
    },
    {
      Icon: ({ className }) => {
        const size = sizeFromClass(className);
        return (
          <Image
            key="bits"
            src="/icon/bits.ico"
            alt="Bits Logo"
            width={size}
            height={size}
            className={className}
            style={{ width: size, height: size }}
          />
        );
      },
      name: "Bits",
    },
    {
      Icon: ({ className }) => {
        const size = sizeFromClass(className);
        return (
          <Image
            key="magic"
            src="/icon/magic.ico"
            alt="Magic Logo"
            width={size}
            height={size}
            className={className}
            style={{ width: size, height: size }}
          />
        );
      },
      name: "Magic",
    },
    {
      Icon: ({ className }) => {
        const size = sizeFromClass(className);
        return (
          <Image
            key="python"
            src="/icon/python.png"
            alt="Python Logo"
            width={size}
            height={size}
            className={className}
            style={{ width: size, height: size }}
          />
        );
      },
      name: "Python",
    },
    {
      Icon: ({ className }) => {
        const size = sizeFromClass(className);
        return (
          <Image
            key="Eldora"
            src="/icon/eldora.ico"
            alt="Eldora Logo"
            width={size}
            height={size}
            className={className}
            style={{ width: size, height: size }}
          />
        );
      },
      name: "EldoraUI",
    },
    {
      Icon: ({ className }) => (
        <SiShadcnui className={className} color="#ffffff" />
      ),
      name: "shadcn/ui",
    },
    {
      Icon: ({ className }) => {
        const size = sizeFromClass(className);
        return (
          <Image
            key="Motion"
            src="/icon/motion.ico"
            alt="Motion Logo"
            width={size}
            height={size}
            className={className}
            style={{ width: size, height: size }}
          />
        );
      },
      name: "Motion",
    },
  ];

  const centerIcon = {
    Icon: ({ className }) => {
      const size = sizeFromClass(className);
      return (
        <Image
          src="/icon/icon1.svg"
          alt="Center Logo"
          width={size}
          height={size}
          className={className}
          style={{ width: 150, height: 150 }}
        />
      );
    },
    name: "Logo",
  };

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
          <TextShimmerWave as="p" duration={3} className="custom-class">
            A comprehensive showcase of my technical abilities and expertise
          </TextShimmerWave>
        </motion.div>
      </div>

      <div className="flex justify-center items-center min-h-[200px] sm:min-h-[260px] md:min-h-[320px] mt-24 sm:mt-36 md:mt-48 mb-16">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <OrbitRotationNoSSR
            icons={techIcons}
            orbitCount={3}
            orbitGap={isMobile ? 6 : 8}
            centerIcon={centerIcon}
            size="md"
          />
        </div>
      </div>
    </section>
  );
}
