"use client";

import { BookOpen, Calendar } from "lucide-react";
import { useEffect, useRef } from "react";
import ImageLoader from "./ImageLoaders";
import { PinContainer } from "./ui/3d-pin";
import ShinyText from "./ui/ShinyText";

const education = {
  university: "Thiruvalluvar University",
  location: "Vellore",
  degree: "Bachelor of Science in Computer Science",
  period: "2022-2025",
  description:
    "Graduated with a Computer Science degree specializing in software engineering, database management, and advanced computing concepts",
  logoUrl:
    "https://media.licdn.com/dms/image/v2/C4E0BAQHYLXwJ-jOXLw/company-logo_200_200/company-logo_200_200/0/1631356511246?e=1756339200&v=beta&t=jFw4vItS_ddsnbYpnPEOINIlyCUun-elIemH67qBRFY",
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
      <div className="container max-w-4xl mx-auto px-4">
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
          <div className="text-sm sm:text-base">
            <ShinyText
              text="My academic background that has provided the foundation for my
              professional journey"
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Wrap the card with PinContainer */}
          <PinContainer
            title="CGPA : 8.5 ⭐"
            className="h-auto"
            containerClassName="animate-on-scroll"
          >
            <div className="glass-card rounded-xl overflow-hidden bg-slate-200 backdrop-blur-sm shadow-xl h-auto -pb-1">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-accent p-4 sm:p-6 flex items-center justify-center md:h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto bg-white rounded-full p-2 mb-2 sm:mb-3 transform transition-transform duration-300 hover:scale-110">
                      <ImageLoader
                        src={education.logoUrl}
                        alt={education.university}
                        className="rounded-full"
                      />
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">
                      {education.university}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm">
                      {education.location}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-6 md:p-8 md:col-span-2">
                  <h3 className="text-base sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900">
                    {education.degree}
                  </h3>
                  <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span>{education.period}</span>
                  </div>
                  <p className="text-xs sm:text-base text-gray-600 mb-2 sm:mb-2">
                    {education.description}
                  </p>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm font-medium text-gray-900">
                      Computer Science
                    </span>
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
