"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Read Automation",
    duration: "Feb 2025 - Present",
    role: "Web Developer Intern",
    location: "Chennai, TamilNadu (Remote)",
    description: [
      "Developed responsive web applications",
      "Optimized front-end performance",
      "Integrated APIs for seamless functionality",
      "Ensured cross-browser and mobile compatibility",
      "Enhanced user experience through collaboration"
    ],
    skills: ["Next.js", "React.js", "Magic-UI", "Aceternity-UI", "Eldora-UI"],
  },
  {
    company: "Outlier",
    duration: "Oct 2024 - Present",
    role: "AI Trainer",
    location: "San Francisco, CA (Remote)",
    description: [
      "Review and evaluate AI-generated responses",
      "Ensure high-quality content and model accuracy",
      "Complete training assessments within deadlines",
      "Provide feedback for AI performance improvement",
    ],
    skills: ["Prompting", "Html", "CSS", "Python", "Java"],
  },
  {
    company: "Headstarter AI",
    duration: "Jul 2024 - Sep 2024",
    role: "Software Engineering Fellow",
    location: "New York (Remote)",
    description:
      "Built three AI projects using React, Material-UI, Next.js, and Firebase - including an Inventory app and an AI Chatbot. Leveraged the Groq API and Clerk for enhanced functionality and innovative solutions. Expanded my skill set and professional network through weekly virtual meetups and collaborative sessions.",
    skills: [
      "React",
      "Next.js",
      "Firebase",
      "Material-UI",
      "Clerk",
      "Groq API",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.company} className="w-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-semibold text-primary">
                      {exp.company}
                    </h3>
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                </div>
                <div className="mb-4">
                  {Array.isArray(exp.description) ? (
                    <ul className="list-disc list-inside">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
