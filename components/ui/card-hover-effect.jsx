
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CardHoverEffect = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
      {items.map((item, i) => (
        <Link
          href={item.link}
          key={i}
          className="relative group block p-6 sm:p-8 h-full"
          target="_blank"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="absolute inset-0 bg-accent/10 dark:bg-accent/20 rounded-xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoveredIndex === i ? 1 : 0,
              transition: { duration: 0.15 },
            }}
          />
          <div className="relative z-10 h-full">
            <h3 className="text-lg sm:text-xl font-bold text-zinc-200 mb-2">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-zinc-400">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardHoverEffect;