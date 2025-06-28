"use client";
import { useMotionValue } from "motion/react";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const EvervaultCard = ({
  text,
  className,
  glowColor = "rgba(76, 29, 149, 0.6)" // Default purple glow
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    (<div
      className={cn(
        "p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative",
        "rounded-3xl overflow-hidden shadow-[0_0_15px_rgba(76,29,149,0.6),0_0_30px_rgba(76,29,149,0.4)]",
        "transition-all duration-300 hover:shadow-[0_0_20px_rgba(76,29,149,0.8),0_0_40px_rgba(76,29,149,0.6)]",
        className
      )}
      style={{ 
        '--glow-color': glowColor,
        boxShadow: `0 0 15px ${glowColor}, 0 0 30px ${glowColor.replace('0.6', '0.4')}`,
      }}
      onMouseEnter={() => {
        const elem = document.activeElement;
        if (elem) {
          elem.style.boxShadow = `0 0 20px ${glowColor}, 0 0 40px ${glowColor.replace('0.6', '0.4')}`;
        }
      }}
      onMouseLeave={() => {
        const elem = document.activeElement;
        if (elem) {
          elem.style.boxShadow = `0 0 15px ${glowColor}, 0 0 30px ${glowColor.replace('0.6', '0.4')}`;
        }
      }}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full">
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
        <div className="relative z-10 flex items-center justify-center">
          <div
            className="relative h-44 w-44 rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div
              className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <span className="dark:text-white text-black z-20">{text}</span>
          </div>
        </div>
      </div>
    </div>)
  );
};

export function CardPattern({
  mouseX,
  mouseY,
  randomString
}) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    (<div className="pointer-events-none">
      <div
        className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style} />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
        style={style}>
        <p
          className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>)
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
