"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import ImageLoader from "./ImageLoaders";
import { Sparkles } from "./ui/sparkles";
import LEDBoard from "./ui/led-board";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="relative">
        <footer className="relative text-white py-2 xs:py-3 sm:py-6 md:py-4 lg:py-8 px-4 xs:px-6 sm:px-8 lg:px-12 w-full bottom-0 rounded-t-[25px] xs:rounded-t-[30px] sm:rounded-t-[35px] lg:rounded-t-[40px] overflow-hidden">
          <div className="container max-w-6xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex flex-col items-center xs:items-start space-y-2 xs:space-y-3 sm:space-y-6 md:space-y-4 lg:space-y-8">
                <div className="relative flex justify-center md:-mb-12">
                  {/* Decreased size for md (tablet) viewport */}
                  <div className="relative h-36 w-36 xs:h-28 xs:w-28 sm:h-32 sm:w-32 md:h-28 md:w-28 lg:h-40 lg:w-40 xl:h-44 xl:w-44">
                    <style jsx>{`
                      .rotating-text {
                        animation-name: rotate-circle;
                        animation-duration: 10s;
                        animation-timing-function: linear;
                        animation-iteration-count: infinite;
                        opacity: ${isMounted ? 1 : 0};
                        transition: opacity 0.3s ease-in;
                      }

                      .counter-rotate {
                        animation-name: rotate-circle;
                        animation-direction: reverse;
                        animation-duration: 5s;
                        animation-timing-function: linear;
                        animation-iteration-count: infinite;
                      }

                      @keyframes rotate-circle {
                        to {
                          transform: rotate(1turn);
                        }
                      }
                    `}</style>

                    {/* Wrapper div around both SVG and image */}
                    <div className="relative w-full h-full">
                      {/* Circular rotating text SVG */}
                      <svg
                        className="rotating-text absolute inset-0 w-full h-full"
                        viewBox="0 0 200 200"
                        width="100%"
                        height="100%"
                      >
                        <defs>
                          <path
                            id="circle"
                            d="M 100, 100 m -85, 0 a 85, 85 0 1, 0 170, 0 a 85, 85 0 1, 0 -170, 0"
                          />
                        </defs>
                        <text width="400" fill="white">
                          <textPath
                            alignmentBaseline="top"
                            href="#circle"
                            className="uppercase text-xs xs:text-base font-semibold tracking-[0.18rem]"
                          >
                            LET&apos;S • TALK • LET&apos;S • TALK • LET&apos;S •
                            TALK • LET&apos;S • TALK •
                          </textPath>
                        </text>
                      </svg>

                      {/* Center image - restored to original size */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-[65%] w-[65%] overflow-hidden rounded-full border-white/20">
                          <ImageLoader
                            src="https://media.licdn.com/dms/image/v2/D5603AQEPC6lv8YlAVQ/profile-displayphoto-shrink_800_800/B56ZTGq8UeHwAc-/0/1738499936339?e=1748476800&v=beta&t=YberPvJ0PzP46xEvUwk9oThnw1H2W1MtIHj7SBu4WKw"
                            alt="Noorul Ameen"
                            className="rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-end">
                <button
                  onClick={scrollToTop}
                  className="group bg-accent/20 hover:bg-accent text-accent hover:text-white rounded-full p-3 transition-colors -mb-16"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                </button>
              </div>
            </div>

            {/* Bottom section with solid background */}
            <div className="relative mt-12">
              {" "}
              {/* Changed from border-t and adjusted margin */}
              <div className="relative z-20 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-primary-foreground/70 mb-4 md:mb-0">
                  © {new Date().getFullYear()} Noorul Ameen. All rights
                  reserved.
                </p>
                <div className="w-full md:w-[400px] lg:w-[600px] xl:w-[800px] md:absolute md:right-4 md:-top-20 md:-translate-y-12 md:-translate-x-16">
                  <LEDBoard word="CONNECT WITH ME" />
                </div>
              </div>
            </div>
          </div>

          {/* Updated Gradient and Sparkles effect */}
          <div className="absolute -bottom-28 h-[360px] w-[200vw] left-1/2 -translate-x-1/2 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] ">
            <Sparkles
              density={1000}
              speed={1.2}
              size={1.5}
              direction="top"
              opacitySpeed={2}
              color="#32A7FF"
              className="absolute inset-x-0 bottom-0 h-full w-full"
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export { Footer as default };
