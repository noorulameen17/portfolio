'use client';

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import ImageLoader from "./ImageLoaders";

const experiences = [
  {
    title: "LLM Trainer",
    company: "Outlier",
    period: "Present",
    description:
      "Working on training large language models and developing AI solutions.",
    logoUrl:
      "https://media.licdn.com/dms/image/v2/D560BAQHgroLObq3Vow/company-logo_400_400/company-logo_400_400/0/1684958729104?e=1748476800&v=beta&t=OhVO2NE6Z7XVVQHKC5kM1_UwdpuCssXngjGqHSBOuc0",
  },
  {
    title: "Software Engineering Fellow",
    company: "Headstarter AI",
    period: "2024",
    description:
      "Participated in AI-focused software engineering fellowship program, developing practical skills in AI application development.",
    logoUrl:
      "https://media.licdn.com/dms/image/v2/D4E0BAQGJ5j3fUqrp5Q/company-logo_400_400/company-logo_400_400/0/1708200043507/theheadstarter_logo?e=1748476800&v=beta&t=CrbWfn6yCi2z4fqjfQ4-h55Yv59_-wl3z8pPIjBRopA",
  },
  {
    title: "Web Developer Intern",
    company: "READ",
    period: "2025",
    description:
      "Developed web applications and gained practical experience in software development practices.",
    logoUrl:
      "https://media.licdn.com/dms/image/v2/D4D0BAQExMstlk24B7Q/company-logo_200_200/B4DZTz7.EmG8AM-/0/1739259375223/readautomation1_logo?e=1748476800&v=beta&t=F34HsGjrcn_c31cvRVD3_Rb0O0FpHemZUvgvPpXj5tc",
  },
];

const ExperienceItem = ({
  experience,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const itemRef = useRef(null);
  const [isClicking, setIsClicking] = useState(false);

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

  const handleClick = () => {
    setIsClicking(true);
    setActiveIndex(index);
    
    // Reset clicking state after animation completes
    setTimeout(() => setIsClicking(false), 300);
  };

  return (
    <div
      ref={itemRef}
      className={cn(
        "animate-on-scroll glass-card rounded-xl overflow-hidden transition-all duration-300 cursor-pointer",
        index % 2 === 0 ? "delay-100" : "delay-300",
        activeIndex === index ? "ring-2 ring-primary/50 shadow-lg" : "hover:shadow-md hover:translate-y-[-4px]",
        isClicking ? "transform scale-[0.98]" : "transform scale-100"
      )}
      onClick={handleClick}
      style={{ 
        transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease",
        opacity: 1 // Ensure opacity remains at 1 throughout
      }}
    >
      <div className="flex items-center p-6">
        <div className="mr-4 flex-shrink-0">
          <ImageLoader
            src={experience.logoUrl}
            alt={`${experience.company} logo`}
            className={cn(
              "w-14 h-14 rounded-md transition-transform duration-300",
              activeIndex === index ? "scale-110" : ""
            )}
          />
        </div>
        <div className="w-full">
          <h3 className={cn(
            "text-lg font-semibold transition-colors duration-300",
            activeIndex === index ? "text-primary" : ""
          )}>
            {experience.title}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <span>{experience.company}</span>
            <span className="mx-2">•</span>
            <span>{experience.period}</span>
          </div>
          <div className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            activeIndex === index ? "max-h-24 mt-2" : "max-h-0"
          )}>
            <p className="text-sm text-opacity-100">
              {experience.description}
            </p>
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
      className="bg-secondary py-24 sm:py-32"
      ref={sectionRef}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading animate-on-scroll">
            Professional <span className="text2-gradient">Experience</span>
          </h2>
          <div className="relative w-[600px] h-20 -mb-14 -mt-4 mx-auto">
            {/* Gradient Lines */}
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
            <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
            <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2" />
          </div>
          <p className="shiny-text section-subheading mx-auto animate-on-scroll delay-200">
            My journey through different roles that have shaped my career path
            and expertise in AI and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
