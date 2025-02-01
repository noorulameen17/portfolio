"use client"

import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from "../components/ui/button"
import { RiAccountPinCircleFill } from "react-icons/ri";
import { cn } from "../lib/utils"

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navButtonClasses = cn("hover-underline-animation", theme === "dark" ? "text-white" : "text-black")

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        theme === "dark" ? "text-white" : "text-black"
      )}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-500/30 to-pink-500/30 blur-xl"></div>
        <div className={cn("relative bg-background/70 backdrop-blur-md", theme === "dark" ? "text-white" : "text-black")}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <button onClick={() => scrollToSection("hero")}>
                <RiAccountPinCircleFill className={cn("h-8 w-8", theme === "dark" ? "text-white" : "text-black")} />
              </button>
              <nav className="hidden md:flex space-x-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className={navButtonClasses}
                >
                  About
                </button>
                
                <button
                  onClick={() => scrollToSection("experience")}
                  className={ navButtonClasses }
                >
                  Experience
                </button>
                
                <button
                  onClick={() => scrollToSection("skills")}
                  className={navButtonClasses}
                >
                  Skills
                </button>
                
                <button
                  onClick={() => scrollToSection("projects")}
                  className={navButtonClasses}
                >
                  Projects
                </button>
                
                <button
                  onClick={() => scrollToSection("contact")}
                  className={navButtonClasses}
                >
                  Contact
                </button>
                
              </nav>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-9 px-0"
                >
                  {theme === "dark" ? (
                    <Sun className={cn("h-[1.2rem] w-[1.2rem]", theme === "dark" ? "text-white" : "text-black")} />
                  ) : (
                    <Moon className={cn("h-[1.2rem] w-[1.2rem]", theme === "dark" ? "text-white" : "text-black")} />
                  )}
                  
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className={cn("h-5 w-5", theme === "dark" ? "text-white" : "text-black")} />
                  ) : (
                    <Menu className={cn("h-5 w-5", theme === "dark" ? "text-white" : "text-black")} />
                  )}
                  
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={cn("md:hidden mt-4 bg-background/70 backdrop-blur-md", theme === "dark" ? "text-white" : "text-black")}>
          <nav className="flex flex-col space-y-2 container mx-auto px-4 py-4">
            <button
              onClick={() => scrollToSection("about")}
              className={navButtonClasses}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={ navButtonClasses }
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={navButtonClasses}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={navButtonClasses}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={navButtonClasses}
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}