"use client";

import React from "react";
import Contact from "../components/contact";
import Education from "../components/education";
import Experience from "../components/experience";
import HeroSection from "../components/hero-section";
import Navbar from "../components/navbar";
import { Projects } from "../components/projects";
import Skills from "../components/skills";

export default function Home() {
  const [heroReady, setHeroReady] = React.useState(false);

  React.useEffect(() => {
    // Use a requestAnimationFrame to ensure hero has painted
    const id = requestAnimationFrame(() => setHeroReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {heroReady && <Navbar />}
      <HeroSection />
      {heroReady && (
        <>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </>
      )}
    </div>
  );
}
