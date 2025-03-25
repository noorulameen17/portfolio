'use client';

import HeroSection from '../components/hero-section';
import Experience from '../components/experience';
import { Projects } from '../components/projects';
import { Skills } from '../components/skills';
import Education from '../components/education';
import Contact from '../components/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}

