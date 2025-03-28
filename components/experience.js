'use client';

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import ImageLoader from "./ImageLoaders";
import { PinContainer } from "@/components/ui/3d-pin";

const experiences = [
  {
    title: "LLM Trainer",
    company: "Outlier",
    period: "Oct 2024 - Present",
    description: "Working on training large language models.",
    logoUrl:
      "https://media.licdn.com/dms/image/v2/D560BAQHgroLObq3Vow/company-logo_400_400/company-logo_400_400/0/1684958729104?e=1748476800&v=beta&t=OhVO2NE6Z7XVVQHKC5kM1_UwdpuCssXngjGqHSBOuc0",
  },
  {
    title: "Software Engineering Fellow",
    company: "Headstarter AI",
    period: "Jul - Sep 2024",
    description: "Completed SWE AI fellowship, honed AI development skills.",
    logoUrl:
      "https://media.licdn.com/dms/image/v2/D4E0BAQGJ5j3fUqrp5Q/company-logo_400_400/company-logo_400_400/0/1708200043507/theheadstarter_logo?e=1748476800&v=beta&t=CrbWfn6yCi2z4fqjfQ4-h55Yv59_-wl3z8pPIjBRopA",
  },
  {
    title: "Web Developer",
    company: "READ Automation",
    period: "Feb 2025",
    description: "Built web apps, mastered software development.",
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

  

  return (
    <PinContainer
      title={experience.period} // Display working years instead of title
      href="#experience"
      containerClassName="w-full h-full"
    >
      <div
        ref={itemRef}
        className={cn(
          "animate-on-scroll glass-card bg-slate-200 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer",
          "w-full md:w-[350px]", // Increase card width
          index % 2 === 0 ? "delay-100" : "delay-300",
          activeIndex === index ? "ring-2 ring-primary/50 shadow-lg" : "",
          isClicking ? "transform scale-[0.98]" : "transform scale-100"
        )}
        
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
            <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-24 mt-2">
              <p className="text-sm text-opacity-100">
                {experience.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PinContainer>
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
      className="bg-slate-950 py-24 sm:py-32"
      ref={sectionRef}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading text-white animate-on-scroll">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20"> {/* Increased gap */}
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
