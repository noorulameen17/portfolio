"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import ImageLoader from "./ImageLoaders";
import ShinyText from "./ui/ShinyText";
import { EvervaultCard } from "@/components/ui/evervault-card";

const experiences = [
  {
    title: "LLM Trainer",
    company: "Outlier",
    period: "Oct 2024 - Apr 2025",
    description: "Working on training large language models.",
    logoUrl:
      "./outlier.png",
  },
  {
    title: "Web Developer",
    company: "READ Automation",
    period: "Feb 2025",
    description: "Built web apps, mastered software development.",
    logoUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQExMstlk24B7Q/company-logo_100_100/B4DZTz7.EmG8AU-/0/1739259375223/readautomation1_logo?e=1756339200&v=beta&t=oTcvqMrSrjjhKD8e4pBDZZSzvDaSZDP4rEnAJ4WXWv0",
  },
  {
    title: "Software Engineering Fellow",
    company: "Headstarter AI",
    period: "Jul 2024 - Sep 2024",
    description: "Completed SWE AI fellowship, honed AI development skills.",
    logoUrl:
      "./headstarter.png",
  },
];

const ExperienceItem = ({ experience, index, activeIndex, setActiveIndex }) => {
  const itemRef = useRef(null);
  const [isClicking, setIsClicking] = useState(false);

  const glowColors = [
    "rgba(79, 70, 229, 0.6)", 
    "rgba(16, 185, 129, 0.6)",
    "rgba(59, 130, 246, 0.6)",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.5 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-start w-full mx-auto relative">
      <div className="w-full h-full relative">
        <EvervaultCard
          text=""
          glowColor={glowColors[index % glowColors.length]}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <ImageLoader
              src={experience.logoUrl}
              alt={`${experience.company} logo`}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-contain p-2"
            />
          </div>
        </div>
      </div>

      <div className="h-4 sm:h-6" />

      <div
        ref={itemRef}
        className={cn(
          "animate-on-scroll w-full p-4 sm:p-5 md:p-6 mt-2 sm:mt-3 md:mt-4",
          index % 2 === 0 ? "delay-100" : "delay-300",
          activeIndex === index ? "shadow-lg" : "",
          isClicking ? "transform scale-[0.98]" : "transform scale-100"
        )}
      >
        <div className="flex items-center">
          <div className="w-full">
            <h3
              className={cn(
                "text-base sm:text-lg font-semibold transition-colors duration-300",
                experience.title === "LLM Trainer"
                  ? "text-white"
                  : activeIndex === index
                  ? "text-primary"
                  : "text-white"
              )}
            >
              {experience.title}
            </h3>
            <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
              <span>{experience.company}</span>
              <span className="mx-1 sm:mx-2">•</span>
              <span>{experience.period}</span>
            </div>
            <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-16 sm:max-h-20 md:max-h-24 mt-1.5 sm:mt-2">
              <p className="text-xs sm:text-sm text-opacity-100 text-gray-300">
                {experience.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

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
      id="experience"
      className="bg-slate-950 py-16 sm:py-24"
      ref={sectionRef}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="section-heading text-white animate-on-scroll">
            Professional <span className="text2-gradient">Experience</span>
          </h2>
          <div className="relative w-full md:w-[600px] h-20 -mb-14 -mt-4 mx-auto">
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
            <div className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] blur-sm w-full md:left-1/4 md:right-1/4 md:w-1/2" />
            <div className="absolute top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-full md:left-1/4 md:right-1/4 md:w-1/2" />
          </div>
          <ShinyText
            text="My journey through different roles that have shaped my career path
            and expertise in AI and software development"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-20">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={index}
              experience={experience}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
