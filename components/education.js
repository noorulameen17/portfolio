'use client';

import { useRef, useEffect } from "react";
import ImageLoader from "./ImageLoaders";
import { BookOpen, Calendar, Star } from "lucide-react";
import { PinContainer } from "./ui/3d-pin";
const education = {
  university: "Thiruvalluvar University",
  location: "Vellore",
  degree: "Bachelor of Science (BS) in Computer Science",
  period: "2022-2025",
  description:
    "Currently pursuing a comprehensive Computer Science degree, focusing on software engineering, core programming, database management and advanced computing concepts.",
  logoUrl:
    "https://media.licdn.com/dms/image/v2/C4E0BAQHYLXwJ-jOXLw/company-logo_400_400/company-logo_400_400/0/1631356511246?e=1748476800&v=beta&t=3SticDx9LGPkmrLhQ4aFgzgT_2uytev7dOvk-NwBdk8",
};

const Education = () => {
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
    <section id="education" className="py-24 sm:py-32" ref={sectionRef}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text2-gradient section-heading animate-on-scroll">
            Education
          </h2>

          <div className="relative w-[250px] h-20 -mb-14 -mt-6 mx-auto">
            {/* Gradient Lines */}
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
            <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
            <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2" />
          </div>

          <p className="shiny-text section-subheading mx-auto animate-on-scroll delay-200">
            My academic background that has provided the foundation for my
            professional journey.
          </p>
        </div>
        <div className="h-[20rem] w-full flex items-center justify-center">
          <PinContainer title={
            <div className="flex items-center gap-1 text-sm">
              CGPA : 8.5
              <Star className="w-3.5 h-3.5 fill-yellow-400 stroke-yellow-400" />
            </div>
          }>
            <div className="flex basis-full flex-col tracking-tight w-[40rem]">
              <div className="max-w-3xl mx-auto glass-card rounded-xl overflow-hidden animate-on-scroll bg-slate-200 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="bg-accent p-6 flex items-center justify-center md:h-full">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto bg-white rounded-full p-2 mb-4 transform transition-transform duration-300 hover:scale-110">
                        <ImageLoader
                          src={education.logoUrl}
                          alt={education.university}
                          className="rounded-full"
                        />
                      </div>
                      <h3 className="text-white font-semibold">
                        {education.university}
                      </h3>
                      <p className="text-white/70 text-sm">{education.location}</p>
                    </div>
                  </div>

                  <div className="p-6 md:col-span-2">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{education.degree}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{education.period}</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {education.description}
                    </p>
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 text-accent mr-2" />
                      <span className="text-sm font-medium text-gray-900">Computer Science</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </section>
  );
};

export default Education;
