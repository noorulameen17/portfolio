"use client";

import React from "react";
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
import { motion, progress } from "framer-motion";
import { SiMui } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { FaMagic } from "react-icons/fa"; 
import { TbBrandFramerMotion } from "react-icons/tb";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";

const skills = [
  { name: "Canva", icon: [cibCanva], progress: 95 },
  { name: "HTML/CSS", icon: [cibHtml5Shield, cibCss3Shiled], progress: 80 },
  { name: "JavaScript", icon: [cibJavascript], progress: 75 },
  { name: "React", icon: [cibReact], progress: 70 },
  { name: "Next.js", icon: [cibNextJs], progress: 80 },
  { name: "Supabase", icon: [RiSupabaseFill], progress: 60 },
  { name: "Material-UI", icon: [SiMui], progress: 90 },
  { name: "Magic UI", icon: [FaMagic], progress: 85 },
  { name: "Vercel", icon: [cibZeit], progress: 75 },
  { name: "Motion", icon: [ TbBrandFramerMotion ], progress: 60 },
  { name: "Clerk", icon:[SiClerk],progress:60 }
];

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              >
              
                <Card className="h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      {skill.icon.map((icon, idx) => {
                        if (Array.isArray(icon)) {
                          return <CIcon key={idx} icon={icon} className="w-4 h-4 mr-2" />;
                        } else if (typeof icon === "function" || typeof icon === "object") {
                          return React.createElement(icon, {
                            key: idx,
                            className: "w-4 h-4 mr-2",
                          });
                        }
                        return null;
                      })}
                      <h3 className="text-sm font-semibold">{skill.name}</h3>
                    </div>
                    <Progress value={skill.progress} className="h-1" />
                    <p className="text-right mt-1 text-xs">{skill.progress}%</p>
                  </CardContent>
                </Card>
              
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}