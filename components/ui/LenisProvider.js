"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      // Less smoothing, faster settle
      lerp: 0.25, // higher = less smoothing
      // If using duration-based smoothing, keep it short
      duration: 0.6,
      // Reduce scroll delta intensity
      wheelMultiplier: 0.7,
      touchMultiplier: 0.8,
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return children;
}
