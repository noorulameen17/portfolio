"use client";

import React, { useState, useEffect } from "react";
import {
  cibCanva,
  cibCss3Shiled,
  cibHtml5Shield,
  cibJavascript,
  cibNextJs,
  cibReact,
  cibZeit,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiMui } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { FaMagic } from "react-icons/fa"; 
import { TbBrandFramerMotion } from "react-icons/tb";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { cn } from "../lib/utils";
import { Badge } from "./ui/badge";

// Redesigned skills organized by categories
const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    color: "#61DAFB", // React blue
    skills: [
      {
        name: "React",
        icon: [cibReact],
        progress: 70,
        description: "Building interactive UIs",
      },
      {
        name: "Next.js",
        icon: [cibNextJs],
        progress: 80,
        description: "React framework for production",
      },
      {
        name: "JavaScript",
        icon: [cibJavascript],
        progress: 75,
        description: "Core web programming language",
      },
      {
        name: "HTML/CSS",
        icon: [cibHtml5Shield, cibCss3Shiled],
        progress: 80,
        description: "Web markup and styling",
      },
    ],
  },
  {
    id: "ui-libraries",
    name: "UI Libraries",
    color: "#9333EA", // Purple
    skills: [
      {
        name: "Material-UI",
        icon: [SiMui],
        progress: 90,
        description: "React UI framework",
        iconColor: "#039dfc",
      },
      {
        name: "Magic UI",
        icon: [FaMagic],
        progress: 85,
        description: "Beautiful UI components",
        iconColor: "#ff66b8",
      }, // Pink color for Magic UI
      {
        name: "Motion",
        icon: [TbBrandFramerMotion],
        progress: 60,
        description: "Animation library",
        iconColor: "#000000",
      }, // Black color for Motion
    ],
  },
  {
    id: "backend",
    name: "Backend & DevOps",
    color: "#3ECF8E", // Supabase green
    skills: [
      {
        name: "Supabase",
        icon: [RiSupabaseFill],
        progress: 60,
        description: "Open source Firebase alternative",
      },
      {
        name: "Vercel",
        icon: [cibZeit],
        progress: 75,
        description: "Deployment platform",
      },
      {
        name: "Clerk",
        icon: [SiClerk],
        progress: 60,
        description: "Authentication & user management",
        iconColor: "#000000",
      }, // Black color for Clerk
    ],
  },
  {
    id: "design",
    name: "Design",
    color: "#085dfc",
    skills: [
      {
        name: "Canva",
        icon: [cibCanva],
        progress: 95,
        description: "Graphic design platform",
        iconColor: "#085dfc",
      },
    ],
  },
];

// Animated skill card component
const SkillCard = ({ skill, color, index }) => {
  const [hovered, setHovered] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowProgress(true);
    }, 300 + index * 100);
    
    return () => clearTimeout(timeout);
  }, [index]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)" 
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative overflow-hidden h-full"
    >
      <Card className="glass-card h-full border-0 transition-all duration-300">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="absolute top-0 left-0 h-1 w-full" style={{ backgroundColor: color, opacity: 0.7 }} />
          
          <div className="mb-3 flex justify-between items-start">
            <div className="flex items-center">
              {skill.icon.map((icon, idx) => {
                if (Array.isArray(icon)) {
                  return <CIcon key={idx} icon={icon} style={{ color: skill.iconColor || color }} className="w-5 h-5 mr-2" />;
                } else if (typeof icon === "function" || typeof icon === "object") {
                  return React.createElement(icon, {
                    key: idx,
                    className: "w-5 h-5 mr-2",
                    style: { color: skill.iconColor || color }
                  });
                }
                return null;
              })}
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
            <Badge variant="secondary" style={{ borderColor: color }}>
              {skill.progress}%
            </Badge>
          </div>
          
          <AnimatePresence>
            {hovered && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-muted-foreground text-sm mb-4 flex-grow"
              >
                {skill.description}
              </motion.p>
            )}
          </AnimatePresence>
          
          <div className="mt-auto">
            <div className="relative h-1.5 w-full bg-secondary/30 rounded-full overflow-hidden mb-1">
              <motion.div 
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ backgroundColor: color }}
                initial={{ width: "0%" }}
                animate={{ width: showProgress ? `${skill.progress}%` : "0%" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  
  const selectedCategory = skillCategories.find(category => category.id === activeCategory);
  
  return (
    <section id="skills" className="py-24 sm:py-32 container mx-auto px-4">
      <div className="text-center mb-16">
        <motion.h2
          className="text2-gradient section-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="relative w-[100px] h-20 -mb-14 -mt-6 mx-auto">
          {/* Gradient Lines */}
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
          <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
          <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2" />
        </div>
        <motion.p
          className="shiny-text section-subheading mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A comprehensive overview of my technical abilities and professional
          certifications.
        </motion.p>
      </div>

      {/* Category tabs */}
      <div className="flex justify-center flex-wrap gap-2 mb-10">
        {skillCategories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeCategory === category.id
                ? "bg-background shadow-md"
                : "bg-background/50 hover:bg-background/80"
            )}
            style={{
              borderBottom:
                activeCategory === category.id
                  ? `2px solid ${category.color}`
                  : undefined,
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Skills grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {selectedCategory.skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              color={selectedCategory.color}
              index={index}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Certifications section could go here */}
    </section>
  );
}