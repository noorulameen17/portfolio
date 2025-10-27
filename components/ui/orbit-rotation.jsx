"use client";
import { useEffect, useRef, useState } from "react";
import {
  FaApple,
  FaAws,
  FaDocker,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import {
  SiFacebook,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { cn } from "@/lib/utils";

const defaultIcons = [
  { Icon: FaReact, name: "React" },
  { Icon: FaAws, name: "AWS" },
  { Icon: FaDocker, name: "Docker" },
  { Icon: FaNodeJs, name: "Node.js" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiVercel, name: "Vercel" },
  { Icon: SiRedux, name: "Redux" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: FaGithub, name: "GitHub" },
  { Icon: FaTwitter, name: "Twitter" },
  { Icon: FaLinkedin, name: "LinkedIn" },
  { Icon: FaInstagram, name: "Instagram" },
  { Icon: FaGoogle, name: "Google" },
  { Icon: FaApple, name: "Apple" },
  { Icon: SiFacebook, name: "Facebook" },
];

const defaultCenterIcon = {
  Icon: FaReact,
  name: "React",
};

export function OrbitRotation({
  icons = defaultIcons,
  orbitCount = 3,
  orbitGap = 6,
  centerIcon = defaultCenterIcon,
  className,
  size = "md",
  ...props
}) {
  const iconsPerOrbit = Math.ceil(icons.length / orbitCount);

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const iconSizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const orbitRefs = useRef([]);
  const [useJsFallback, setUseJsFallback] = useState(false);

  useEffect(() => {
    // Detect if CSS animations are actually running; if not, enable JS fallback
    const timer = setTimeout(() => {
      try {
        let anyStopped = false;
        orbitRefs.current.forEach((el) => {
          if (!el || anyStopped) return;
          // Prefer Web Animations API when available
          if (typeof el.getAnimations === "function") {
            const anims = el.getAnimations();
            if (!anims || anims.length === 0) {
              anyStopped = true;
              return;
            }
            if (!anims.some((a) => a.playState === "running")) {
              anyStopped = true;
              return;
            }
          }
          // Fallback: computed style check
          const cs = window.getComputedStyle(el);
          const name = (
            cs.animationName ||
            cs.webkitAnimationName ||
            ""
          ).toString();
          if (!name || name === "none") {
            anyStopped = true;
          }
        });
        if (anyStopped) setUseJsFallback(true);
      } catch (_) {
        // ignore
      }
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!useJsFallback) return;
    let rafId = 0;
    const start = performance.now();
    const tick = (now) => {
      const t = (now - start) / 1000; // seconds
      orbitRefs.current.forEach((el, idx) => {
        if (!el) return;
        const period = 12 + idx * 6; // sync with CSS durations
        const angle = (t / period) * 360;
        el.style.animation = "none";
        el.style.webkitAnimation = "none";
        el.style.transformOrigin = "50% 50%";
        el.style.willChange = "transform";
        el.style.transform = `rotate(${angle}deg)`;
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [useJsFallback]);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center origin-center scale-75 sm:scale-90 md:scale-100",
        className
      )}
      {...props}
    >
      <div className="relative flex items-center justify-center">
        {/* Center Icon */}
        <div
          className={cn(
            "bg-white/90 border-zinc-200/50 flex items-center justify-center rounded-full border border-zinc-200 shadow-xl backdrop-blur-sm dark:bg-zinc-950/90 dark:border-zinc-800/50 dark:border-zinc-800",
            sizeClasses[size]
          )}
        >
          <centerIcon.Icon className={cn(iconSizeClasses[size])} />
        </div>

        {/* Generate Orbits */}
        {[...Array(orbitCount)].map((_, orbitIdx) => {
          const orbitSize = `${8 + orbitGap * (orbitIdx + 1)}rem`;
          const angleStep = (2 * Math.PI) / iconsPerOrbit;
          const animationDuration = `${12 + orbitIdx * 6}s`;

          return (
            <div
              key={orbitIdx}
              ref={(el) => (orbitRefs.current[orbitIdx] = el)}
              className="border-zinc-500/30 absolute rounded-full border-2 border-dotted dark:border-zinc-400/30"
              style={{
                width: orbitSize,
                height: orbitSize,
                ...(useJsFallback
                  ? {
                      animation: "none",
                      WebkitAnimation: "none",
                    }
                  : {
                      animation: `orbit-spin ${animationDuration} linear infinite`,
                      WebkitAnimation: `orbit-spin ${animationDuration} linear infinite`,
                    }),
                transformOrigin: "50% 50%",
                willChange: "transform",
              }}
            >
              {icons
                .slice(
                  orbitIdx * iconsPerOrbit,
                  orbitIdx * iconsPerOrbit + iconsPerOrbit
                )
                .map((iconConfig, iconIdx) => {
                  const angle = iconIdx * angleStep;
                  const x = 50 + 50 * Math.cos(angle);
                  const y = 50 + 50 * Math.sin(angle);

                  return (
                    <div
                      key={iconIdx}
                      className="absolute"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <iconConfig.Icon className={cn(iconSizeClasses[size])} />
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
