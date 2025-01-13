"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const softwareProjects = [
  {
    id: 1,
    name: "Emergence AI",
    description:
      "Emergence AI is an intelligent disaster management system that provides concise, actionable advice for before, during, and after disasters. The AI assistant helps users prepare for, respond to, and recover from emergency situations with clear and direct guidance.",
    link: "https://emergenceai.vercel.app/",
    technologies: [
      "React",
      "Next.js",
      "Material-UI",
      "Clerk",
      "Cerebras",
      "Vercel",
      "Motion",
    ],
  },
  
];

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

export function Projects() {
  const [hoveredSoftwareProject, setHoveredSoftwareProject] = useState(null);
  const [selectedGraphicProject, setSelectedGraphicProject] = useState(null);

  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <Tabs defaultValue="software" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="software">Software Projects</TabsTrigger>
            <TabsTrigger value="graphic">Graphic Projects</TabsTrigger>
          </TabsList>
          <TabsContent value="software">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onHoverStart={() => setHoveredSoftwareProject(project.id)}
                  onHoverEnd={() => setHoveredSoftwareProject(null)}
                >
                  
                    <Card className="h-full overflow-hidden transition-colors duration-300 hover:bg-primary hover:text-primary-foreground">
                      <CardContent className="p-6 h-full flex flex-col">
                        <h3 className="text-xl font-semibold mb-2">
                          {project.name}
                        </h3>
                        <div className="flex-grow">
                          {hoveredSoftwareProject === project.id ? (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="text-sm mb-4">
                                {project.description}
                              </p>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium hover:underline"
                              >
                                View Project{" "}
                                <ExternalLink className="ml-1 w-4 h-4" />
                              </a>
                            </motion.div>
                          ) : (
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="transition-colors duration-300 hover:bg-primary-foreground hover:text-primary"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="graphic">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {graphicProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-64"
                  onClick={() => setSelectedGraphicProject(project.id)}
                >
                  
                    <Card className="h-full overflow-hidden">
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
                            className="object-cover"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>

      {selectedGraphicProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedGraphicProject(null)}
        >
          <Image
            src={graphicProjects.find(project => project.id === selectedGraphicProject).imageSrc}
            alt={graphicProjects.find(project => project.id === selectedGraphicProject).name}
            fill
            className="object-contain"
          />
        </motion.div>
      )}
    </section>
  );
}
