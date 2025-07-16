"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

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
    { name: "Skills", path: "#skills" },
    { name: "About Me", path: "#home" },
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

  const getNavItemClass = (itemName, isActive) => {
    const baseClasses = "transition-all duration-200 relative z-10";
    // Increase vertical padding for mobile (default) breakpoint
    const responsiveClasses =
      "px-1.5 py-3 xs:px-3 sm:px-4 md:px-6 md:py-3 text-white font-medium text-[10px] xs:text-xs sm:text-sm hover:opacity-80";
    return `${baseClasses} ${responsiveClasses} ${
      isActive ? "opacity-100" : "opacity-70"
    }`;
  };

  const headerClassName =
    "fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none mt-4 sm:mt-6 md:mt-8";

  const navClassName = `flex items-center justify-center rounded-full px-2 gap-1 sm:gap-2 pointer-events-auto ${
    scrolled
      ? "bg-black/60 backdrop-blur-xl border-3 border-white backdrop-saturate-150"
      : "bg-black/20 backdrop-blur-lg border-3 border-white backdrop-saturate-150"
  }`;
  // Increase vertical padding for mobile (default) breakpoint
  const navContainerPadding = "py-3 xs:py-4 sm:py-4";

  // Refs for nav item positions
  const [navRefs, setNavRefs] = useState([]);
  useEffect(() => {
    setNavRefs((refs) =>
      Array(navItems.length)
        .fill()
        .map((_, i) => refs[i] || React.createRef())
    );
  }, [navItems.length]);

  // Track which section is in view using Intersection Observer
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.path.replace("#", ""));
    const sectionElements = sectionIds.map((id) => document.getElementById(id));
    if (sectionElements.some((el) => !el)) return; // Wait until all sections are mounted

    let ticking = false;
    let lastRatio = Array(sectionElements.length).fill(0);

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = sectionElements.findIndex((el) => el === entry.target);
          if (idx !== -1) {
            lastRatio[idx] = entry.intersectionRatio;
          }
        });
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const max = Math.max(...lastRatio);
            const idx = lastRatio.findIndex((r) => r === max);
            setActiveIndex(idx);
            ticking = false;
          });
          ticking = true;
        }
      },
      {
        root: null,
        rootMargin: "-60px 0px 0px 0px", // offset for navbar
        threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
      }
    );
    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, [navItems]);

  // Also update activeIndex on nav click
  const handleNavClick = (e, path, idx) => {
    scrollToSection(e, path);
    setActiveIndex(idx);
  };

  // Get pill position and size
  const [pillStyle, setPillStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if (navRefs[activeIndex] && navRefs[activeIndex].current) {
      const rect = navRefs[activeIndex].current.getBoundingClientRect();
      const parentRect =
        navRefs[activeIndex].current.parentNode.getBoundingClientRect();
      let extraWidth = 16; // Default for desktop/tablet
      if (window.innerWidth < 640) {
        // Tailwind's sm breakpoint is 640px
        extraWidth = 4; // Slightly reduce pill width for mobile
      }
      setPillStyle({
        left: rect.left - parentRect.left - extraWidth / 2, // Center the pill
        top: rect.top - parentRect.top,
        width: rect.width + extraWidth,
        height: rect.height,
      });
    }
  }, [activeIndex, navRefs, isMounted, scrolled]);

  const renderNavItems = () => (
    <div className="relative flex">
      {/* Animated pill */}
      <motion.div
        className="absolute bg-white/10 rounded-full z-0 border-2 border-white font-bold shadow-[0_0_16px_4px_rgba(255,255,255,0.5)]"
        style={{
          left: pillStyle.left,
          top: pillStyle.top,
          width: pillStyle.width,
          height: pillStyle.height,
        }}
        layout
        transition={{ type: "spring", stiffness: 500, damping: 40 }}
      />
      {navItems.map((item, idx) => {
        const isActive = idx === activeIndex;
        return (
          <a
            key={item.name}
            href={item.path}
            className={getNavItemClass(item.name, isActive)}
            onClick={(e) => handleNavClick(e, item.path, idx)}
            ref={navRefs[idx]}
          >
            {item.name}
          </a>
        );
      })}
    </div>
  );

  const renderResumeLink = () => (
    <a
      href="/Noorul Ameen Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-0.5 xs:gap-1 px-1.5 py-1 xs:px-3 sm:px-4 md:px-6 md:py-3 text-white font-medium text-[10px] xs:text-xs sm:text-sm transition-all duration-200 hover:opacity-80"
    >
      Resume{" "}
      <ArrowUpRight className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );

  return (
    <header className={headerClassName}>
      <div
        className={`pl-10 pr-10 sm:pl-4 sm:pr-6 max-w-full sm:max-w-xl mx-auto ${navContainerPadding}`}
      >
        {!isMounted ? (
          <nav className={navClassName}>
            {renderNavItems()}
            <div>{renderResumeLink()}</div>
          </nav>
        ) : (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={navClassName}
          >
            {renderNavItems()}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {renderResumeLink()}
            </motion.div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
