"use client";

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
import { ImageGallery } from "./ui/carousel-circular-image-gallery";
import { CircularTestimonials } from "./ui/circular-testimonials";
import { TextShimmerWave } from "./ui/text-shimmer-wave";

const projects = [
  {
    title: "PathLyst",
    description:
      "PathLyst is an AI-powered career planning assistant that helps students, professionals, and curious minds navigate their future with confidence. By leveraging the Perplexity Sonar API, PathLyst delivers real-time, citation-backed career insights tailored to your skills, interests, and goals.",
    tags: [
      "React",
      "Next.js",
      "Shadcn/UI",
      "Magic-UI",
      "Aceternity-UI",
      "Reactbits",
      "Perplexity-Sonar",
    ],
    link: "https://path-lyst.vercel.app/",
    github: "https://github.com/noorulameen17/PathLyst",
    image: "/pathlyst.png",
  },
  {
    title: "Fitgen",
    description:
      "AI-powered diet planner that won 3rd place at InnoHack'25. Utilizes machine learning to create personalized nutrition plans based on individual goals and health metrics.",
    tags: [
      "React",
      "Next.js",
      "Shadcn/UI",
      "Magic-UI",
      "Clerk",
      "Cerebras-SDK",
    ],
    achievement: "3rd Place at InnoHack'25",
    link: "https://fitgen-ai.vercel.app/",
    github: "https://github.com/noorulameen17/FitGen-AI",
    image: "/fitgen1.png",
  },
  {
    title: "Emergence AI",
    description:
      "Emergence AI is an intelligent disaster management system that provides concise, actionable advice for before, during, and after disasters. The AI assistant helps users prepare for, respond to, and recover from emergency situations with clear and direct guidance.",
    tags: [
      "React",
      "Next.js",
      "Shadcn",
      "Clerk",
      "Perplexity-Sonar",
      "Vercel",
      "Motion",
    ],
    link: "https://emergenceai.vercel.app/",
    github: "https://github.com/noorulameen17/Emergence_AI",
    image: "/emergence 1.png",
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

// Map software projects into the testimonial shape required by CircularTestimonials
const softwareTestimonials = projects.map((p) => ({
  src: p.image,
  name: p.title,
  designation: Array.isArray(p.tags) ? p.tags.join(" • ") : "",
  quote: p.description,
  github: p.github,
  link: p.link,
}));

// ProjectCard component (3D removed)
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
    <div className="inter-var">
      <div
        ref={cardRef}
        className="bg-gradient-to-b from-gray-100 to-gray-300 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto rounded-xl p-6 border animate-on-scroll min-h-[30rem]"
      >
        <div className="text-xl font-bold text-neutral-600 dark:text-white">
          {project.title}
        </div>

        <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {project.description}
        </p>

        {project.achievement && (
          <div className="mt-2">
            <Badge variant="secondary">{project.achievement}</Badge>
          </div>
        )}

        {project.image && (
          <div className="w-full mt-4">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </div>
        )}

        <div className="flex justify-between items-center mt-6">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Badge className="flex items-center gap-1 px-3 py-1.5 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
              <span
                className="text-black font-medium dark:text-white"
                style={{
                  textShadow: "0 0 2px rgba(0,0,0,0.3)",
                  color: "#000000",
                }}
              >
                GitHub
              </span>
              <Github className="h-3.5 w-3.5 text-black dark:text-white" />
            </Badge>
          </a>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Live Demo
          </a>
        </div>

        <div className="w-full mt-4">
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
        </div>
      </div>
    </div>
  );
};

function GraphicGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {graphicProjects.map((item, idx) => (
        <div key={idx} className="group relative overflow-hidden rounded-xl">
          <Image
            src={item.image}
            alt={item.text}
            width={600}
            height={600}
            className="aspect-square object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-2 left-2 text-white text-xs sm:text-sm font-medium">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Projects() {
  const sectionRef = useRef(null);
  const [selectedGraphicProject, setSelectedGraphicProject] = useState(null);
  const [activeTab, setActiveTab] = useState("software");

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
      className="relative isolate py-24 sm:py-32 bg-slate-950 text-white"
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
            <TextShimmerWave as="p" duration={3} className="custom-class">
              {`Innovative solutions I've developed that showcase my skills in AI and software development.`}
            </TextShimmerWave>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 text-gray-300">
            <TabsTrigger value="software">Software Projects</TabsTrigger>
            <TabsTrigger value="graphic">Graphic Designs</TabsTrigger>
          </TabsList>

          {/* Software tab: replaced grid with CircularTestimonials */}
          <TabsContent value="software">
            <div className="w-full flex justify-center">
              <CircularTestimonials
                testimonials={softwareTestimonials}
                colors={{
                  name: "#ffffff",
                  designation: "#9CA3AF",
                  testimony: "#E5E7EB",
                  arrowBackground: "#111827",
                  arrowForeground: "#E5E7EB",
                  arrowHoverBackground: "#6366F1",
                }}
              />
            </div>
          </TabsContent>

          {/* Graphic tab: restore carousel */}
          <TabsContent value="graphic">
            <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full">
              <ImageGallery items={graphicProjects} />
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
