"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Handle scroll effect and client-side mounting
  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Work", path: "#projects" },
    { name: "Services", path: "#services" },
    { name: "About Me", path: "#about-me" },
    { name: "Contact", path: "#contact" },
  ];

  // Function to handle smooth scrolling to sections
  const scrollToSection = (e, path) => {
    e.preventDefault();
    const sectionId = path.substring(1);
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const getNavItemClass = (itemName) => {
    const baseClasses = "transition-all duration-200";
    const responsiveClasses =
      "px-1.5 py-1 xs:px-3 sm:px-4 md:px-6 md:py-3 text-white font-medium text-[10px] xs:text-xs sm:text-sm hover:opacity-80";

    if (itemName === "Work") {
      return `${baseClasses} px-1.5 py-1 xs:px-2 sm:px-3 md:px-4 md:py-2 text-white font-medium text-[10px] xs:text-xs sm:text-sm hover:opacity-80 bg-white/10 rounded-full`;
    }

    const workButtonClasses =
      pathname === itemName.toLowerCase() ? "opacity-100" : "opacity-70";
    return `${baseClasses} ${responsiveClasses} ${workButtonClasses}`;
  };

  // Create a non-animated version for initial render
  if (!isMounted) {
    return (
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none mt-4 sm:mt-6 md:mt-8">
        <div className="px-4 py-2">
          <nav className="flex items-center justify-center rounded-full px-2 gap-1 sm:gap-2 pointer-events-auto bg-black/20 backdrop-blur-lg border border-white/10 backdrop-saturate-150">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={getNavItemClass(item.name)}
              >
                {item.name}
              </a>
            ))}
            <div>
              <Link
                href="/resume"
                className="flex items-center gap-0.5 xs:gap-1 px-1.5 py-1 xs:px-3 sm:px-4 md:px-6 md:py-3 text-white font-medium text-[10px] xs:text-xs sm:text-sm transition-all duration-200 hover:opacity-80"
              >
                Resume{" "}
                <ArrowUpRight className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </nav>
        </div>
      </header>
    );
  }

  // Return animated version after client-side mount
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none mt-4 sm:mt-6 md:mt-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-4 py-2"
      >
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`flex items-center justify-center rounded-full px-2 gap-1 sm:gap-2 pointer-events-auto ${
            scrolled
              ? "bg-black/60 backdrop-blur-xl border border-white/10 backdrop-saturate-150"
              : "bg-black/20 backdrop-blur-lg border border-white/10 backdrop-saturate-150"
          }`}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              href={item.path}
              className={getNavItemClass(item.name)}
              onClick={(e) => scrollToSection(e, item.path)}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/resume"
              className="flex items-center gap-0.5 xs:gap-1 px-1.5 py-1 xs:px-3 sm:px-4 md:px-6 md:py-3 text-white font-medium text-[10px] xs:text-xs sm:text-sm transition-all duration-200 hover:opacity-80"
            >
              Resume{" "}
              <ArrowUpRight className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4" />
            </Link>
          </motion.div>
        </motion.nav>
      </motion.div>
    </motion.header>
  );
}
