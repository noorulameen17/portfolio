"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function TextShimmerWave({
  children,
  as: Component = "p",
  className,
  duration = 1,
  zDistance = 10,
  xDistance = 2,
  yDistance = -2,
  spread = 1,
  scaleDistance = 1.1,
  rotateYDistance = 10,
  transition,
}) {
  const MotionComponent = motion.create(Component);

  const text = typeof children === "string" ? children : String(children ?? "");
  const tokens = text.match(/\S+|\s+/g) || []; // words and spaces
  const totalChars = (text.match(/\S/g) || []).length;
  let charCounter = 0;

  return (
    <MotionComponent
      className={cn(
        "relative [perspective:500px] whitespace-normal break-words",
        "[--base-color:#a1a1aa] [--base-gradient-color:#000]",
        "dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff]",
        className
      )}
      style={{ color: "var(--base-color)" }}
    >
      {tokens.map((token, tIdx) => {
        // render spaces as-is to preserve natural wrapping points
        if (/^\s+$/.test(token))
          return <span key={`space-${tIdx}`}>{token}</span>;

        // word wrapper to prevent mid-word breaks
        return (
          <span key={`word-${tIdx}`} className="inline-block whitespace-nowrap">
            {token.split("")?.map((char, i) => {
              const index = charCounter++;
              const delay =
                (index * duration * (1 / spread)) / Math.max(totalChars, 1);

              return (
                <motion.span
                  key={`ch-${tIdx}-${i}`}
                  className={cn(
                    "inline-block align-baseline [transform-style:preserve-3d]"
                  )}
                  initial={{
                    translateZ: 0,
                    scale: 1,
                    rotateY: 0,
                    color: "var(--base-color)",
                  }}
                  animate={{
                    translateZ: [0, zDistance, 0],
                    translateX: [0, xDistance, 0],
                    translateY: [0, yDistance, 0],
                    scale: [1, scaleDistance, 1],
                    rotateY: [0, rotateYDistance, 0],
                    color: [
                      "var(--base-color)",
                      "var(--base-gradient-color)",
                      "var(--base-color)",
                    ],
                  }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    repeatDelay: (totalChars * 0.05) / spread,
                    delay,
                    ease: "easeInOut",
                    ...transition,
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </MotionComponent>
  );
}
