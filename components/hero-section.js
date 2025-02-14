"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import DotPattern from "./ui/dot-pattern";
import { RainbowButton } from "./ui/rainbow-button";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scrollToSection = (Button) => {
    const element = document.getElementById(Button);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const { theme } = useTheme(); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      let animationFrameId;

      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      const particles = [];

      const createParticles = () => {
        const particleCount = 100;
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1 + 0.4, 
            vx: Math.random() * 2 - 1,
            vy: Math.random() * 2 - 1,
          });
        }
      };

      const animate = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
          ctx.fill();
        });

        animationFrameId = requestAnimationFrame(animate);
      };

      resize();
      createParticles();
      animate();

      window.addEventListener("resize", resize);

      const currentRef = ref.current;
      if (currentRef) {
        currentRef.appendChild(canvas);
      }

      return () => {
        window.removeEventListener("resize", resize);
        cancelAnimationFrame(animationFrameId);
        if (currentRef) {
          currentRef.removeChild(canvas);
        }
      };
    }
  }, [theme]);

  return (
    <motion.div
      id="hero"
      ref={ref}
      style={{ opacity, scale }}
      className={cn(
        "h-screen flex items-center justify-center relative overflow-hidden",
        theme === "dark" ? "text-white" : "text-black"
      )}
    >
      {mounted &&
        (theme === "light" ? (
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
              "opacity-150"
            )}
          />
        ) : null)}
      <div className="text-center z-10 absolute inset-0 flex flex-col items-center justify-center mb-20">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Noorul &nbsp;A &nbsp;Ameen
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Aspiring Software Engineer  &bull; Graphic Designer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <RainbowButton onClick={() => scrollToSection("about")}>
            Learn More
          </RainbowButton>
        </motion.div>
      </div>
    </motion.div>
  );
}
