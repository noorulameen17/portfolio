"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-4 sm:pt-6",
        className
      )}
    >
      <div className="flex items-center gap-3 bg-white/5 border border-zinc-200 backdrop-blur-lg py-1 px-1 md:py-1.5 md:px-3 lg:py-1 lg:px-1 rounded-full shadow-lg dark:bg-zinc-950/5 dark:border-zinc-800">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm md:text-xs lg:text-sm font-semibold px-6 py-2 md:px-7 md:py-2.5 lg:px-6 lg:py-2 rounded-full transition-colors",
                "text-white hover:text-zinc-900 dark:text-zinc-50/80 dark:hover:text-zinc-50",
                isActive &&
                  "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50"
              )}
            >
              <span className="hidden md:inline md:whitespace-nowrap">
                {item.name}
              </span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-zinc-900/5 rounded-full -z-10 dark:bg-zinc-50/5"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full dark:bg-zinc-50">
                    <div className="absolute w-12 h-6 bg-white rounded-full blur-md -top-2 -left-2 dark:bg-white" />
                    <div className="absolute w-8 h-6 bg-white rounded-full blur-md -top-1 dark:bg-white" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
