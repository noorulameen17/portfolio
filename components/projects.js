"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import ShinyText from "./ui/ShinyText";
import CircularGallery from "./ui/CircularGallery";

const projects = [
  {
    title: "Emergence AI",
    description:
      "Emergence AI is an intelligent disaster management system that provides concise, actionable advice for before, during, and after disasters. The AI assistant helps users prepare for, respond to, and recover from emergency situations with clear and direct guidance.",
    tags: [
      "React",
      "Next.js",
      "Material-UI",
      "Clerk",
      "Cerebras",
      "Vercel",
      "Motion",
    ],
    link: "https://emergenceai.vercel.app/",
    github: "https://github.com/noorulameen17/Emergence_AI",
    image: "/emergence 1.png",
  },
  {
    title: "Fitgen",
    description:
      "AI-powered diet planner that won 3rd place at IHack'25. Utilizes machine learning to create personalized nutrition plans based on individual goals and health metrics.",
    tags: [
      "React",
      "Next.js",
      "Material-UI",
      "Shadcn/UI",
      "Magic-UI",
      "Clerk",
      "Cerebras-SDK",
    ],
    achievement: "3rd Place at IHack'25",
    link: "https://fitgen-ai.vercel.app/",
    github: "https://github.com/noorulameen17/FitGen-AI",
    image: "/fitgen1.png",
  },
];

const graphicProjects = [
  {
    image: "/Avocado Shake.png?height=1080&width=1080",
    text: "Avocado Shake",
  },
  {
    image: "/Mango Lassi.png?height=1080&width=1080",
    text: "Mango Lassi",
  },
  {
    image: "/chicken Momos.png?height=400&width=300",
    text: "Chicken Momos",
  },
  {
    image: "/1.png?height=400&width=300",
    text: "Veg Combo",
  },
  {
    image: "/2.jpeg?height=400&width=300",
    text: "Non Veg Combo",
  },
];

// ProjectCard component
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <CardContainer className="inter-var">
      <CardBody
        ref={cardRef}
        className="bg-gradient-to-b from-gray-100 to-gray-300 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border animate-on-scroll"
      >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project.title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {project.description}
        </CardItem>

        {project.achievement && (
          <CardItem translateZ="60" className="mt-2">
            <Badge variant="secondary">{project.achievement}</Badge>
          </CardItem>
        )}

        {project.image && (
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </CardItem>
        )}

        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as="a"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            GitHub <Github className="h-3 w-3 inline ml-1" />
          </CardItem>

          <CardItem
            translateZ={20}
            as="a"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Live Demo
          </CardItem>
        </div>

        <CardItem translateZ="30" className="w-full mt-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <Badge
                key={`${project.title}-${tagIndex}`}
                variant="outline"
                className="bg-secondary/50 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export function Projects() {
  const sectionRef = useRef(null);
  const [selectedGraphicProject, setSelectedGraphicProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll(".animate-on-scroll");
          elements.forEach((el) => {
            el.classList.add("visible");
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 bg-slate-950 text-white"
      ref={sectionRef}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading animate-on-scroll text-white">
            Notable <span className="text2-gradient">Projects</span>
          </h2>
          <div className="relative w-[400px] h-20 -mb-14 -mt-4 mx-auto">
            {/* Gradient Lines */}
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
            <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
            <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2" />
          </div>
          <div className="text-sm sm:text-base">
            <ShinyText
              text="Innovative solutions I've developed that showcase my skills in AI
              and software development."
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </div>
        </div>

        <Tabs defaultValue="software" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 text-gray-300">
            <TabsTrigger value="software">Software Projects</TabsTrigger>
            <TabsTrigger value="graphic">Graphic Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="software">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="graphic">
            <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full">
              <CircularGallery
                items={graphicProjects}
                bend={3}
                textColor="#ffffff"
                borderRadius={0.05}
                font="bold clamp(16px, 2vw, 24px) DM Sans"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {selectedGraphicProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedGraphicProject(null)}
        >
          <Image
            src={
              graphicProjects.find(
                (project) => project.id === selectedGraphicProject
              ).imageSrc
            }
            alt={
              graphicProjects.find(
                (project) => project.id === selectedGraphicProject
              ).name
            }
            fill
            className="object-contain"
          />
        </motion.div>
      )}
    </section>
  );
}
