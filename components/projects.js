"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";

// Software projects data
const projects = [
  {
    title: "Emergence AI",
    description: "Disaster management system that uses artificial intelligence to predict, monitor, and coordinate responses to natural disasters. Features real-time data analysis and resource allocation.",
    tags: ["React", "Next.js", "Material-UI", "Clerk", "Cerebras", "Vercel", "Motion"],
    link: "https://emergenceai.vercel.app/",
    github: "#"
  },
  {
    title: "Fitgen",
    description: "AI-powered diet planner that won 3rd place at IHack'25. Utilizes machine learning to create personalized nutrition plans based on individual goals and health metrics.",
    tags: ["React", "Next.js", "Material-UI", "Shadcn/UI", "Magic-UI", "Clerk", "Cerebras-SDK"],
    achievement: "3rd Place at IHack'25",
    link: "https://fitgen-ai.vercel.app/",
    github: "#"
  },
];

// Graphic projects data
const graphicProjects = [
  {
    id: 1,
    name: "Avocado Shake",
    description: "Vibrant flyer design for a local restaurant. **Click to view.**",
    imageSrc: "/Avocado Shake.png?height=1080&width=1080",
  },
  {
    id: 2,
    name: "Mango Lassi",
    description: "A refreshing and vibrant flyer design for a local restaurant. **Click to view.**",
    imageSrc: "/Mango Lassi.png?height=1080&width=1080",
  },
  {
    id: 3,
    name: "Chicken Momos",
    description: "A refreshing and vibrant flyer design for a local restaurant. **Click to view.**",
    imageSrc: "/chicken Momos.png?height=400&width=300",
  },
  {
    id: 4,
    name: "Veg Combo",
    description: "A refreshing and vibrant flyer design for a local restaurant. **Click to view.**",
    imageSrc: "/1.png?height=400&width=300",
  },
  {
    id: 5,
    name: "Non Veg Combo",
    description: "A refreshing and vibrant flyer design for a local restaurant. **Click to view.**",
    imageSrc: "/2.jpeg?height=400&width=300",
  }
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
    <div 
      ref={cardRef}
      className={cn(
        "animate-on-scroll glass-card rounded-xl p-6 group h-full flex flex-col",
        index % 2 === 0 ? "delay-100" : "delay-300"
      )}
    >
      <div className="mb-3 flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
          {project.achievement && (
            <Badge variant="secondary" className="mb-3">
              {project.achievement}
            </Badge>
          )}
        </div>
        <div className="flex space-x-2">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent/10 transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-accent/10 transition-colors">
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, tagIndex) => (
          <Badge key={tagIndex} variant="outline" className="bg-secondary/50">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

// GraphicProjectCard component
const GraphicProjectCard = ({ project, index, onClick }) => {
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
    <div 
      ref={cardRef}
      onClick={() => onClick(project.id)}
      className={cn(
        "animate-on-scroll glass-card rounded-xl overflow-hidden h-64 cursor-pointer",
        index % 2 === 0 ? "delay-100" : "delay-300",
        index % 3 === 2 ? "delay-200" : ""
      )}
    >
      <Card className="h-full overflow-hidden border-0 bg-transparent">
        <CardContent className="p-6 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              {project.name}
            </h3>
            <p className="text-sm">
              {project.description.split("**")[0]}
              <strong>{project.description.split("**")[1]}</strong>
            </p>
          </div>
          <div className="relative h-32 w-full">
            <Image
              src={project.imageSrc}
              alt={project.name}
              fill
              className="object-cover rounded-md"
            />
          </div>
        </CardContent>
      </Card>
    </div>
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
    <section id="projects" className="py-24 sm:py-32" ref={sectionRef}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading animate-on-scroll">
            Notable <span className="text2-gradient">Projects</span>
          </h2>
          <div className="relative w-[400px] h-20 -mb-14 -mt-4 mx-auto">
            {/* Gradient Lines */}
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
            <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
            <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2" />
          </div>
          <p className="shiny-text section-subheading mx-auto animate-on-scroll delay-200">
            Innovative solutions I've developed that showcase my skills in AI
            and software development.
          </p>
        </div>

        <Tabs defaultValue="software" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="software">Software Projects</TabsTrigger>
            <TabsTrigger value="graphic">Graphic Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="software">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="graphic">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {graphicProjects.map((project, index) => (
                <GraphicProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={setSelectedGraphicProject}
                />
              ))}
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
