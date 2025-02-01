import { HeroSection } from "../components/hero-section"
import { AboutMe } from "../components/about-me"
import { Experience } from "../components/experience"
import { Skills } from "../components/skills"
import { Projects } from "../components/projects"
import { Contact } from "../components/contact"

export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-16">
      <HeroSection />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

