'use client';

import { ArrowDown } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import ImageLoader from "./ImageLoaders";
import RotatingText from "./ui/RotatingText";
import { AuroraText } from "./ui/aurora-text";
import CreativeBtn from "./ui/creativeBtn";
import { RainbowButton } from "./ui/rainbow-button";
import { LineShadowText } from "./ui/line-shadow-text";


const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleScrollToExperience = () => {
    document
      .getElementById("experience")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <div className="container max-w-6xl mx-auto px-4 z-10">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={item} className="order-2 lg:order-1">
            <motion.div variants={item} className="inline-block px-3 py-1 mb-4 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Aspiring Software Engineer
            </motion.div>

            <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-balance mb-4 tracking-tight">
              <span className="mr-3 sm:mr-4">Hello,</span>
              <RotatingText
                texts={["I", "Am"]}
                mainClassName="inline-flex w-[60px] sm:w-[80px] md:w-[100px] px-0.5 sm:px-1 md:px-1.5 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 "
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
              <span className="text-slate-900">
                <LineShadowText shadowColor={'black'}>
                  Noorul
                </LineShadowText>
              </span>{" "}
              <AuroraText className="text-transparent bg-clip-text ml-2">
                Ameen
              </AuroraText>
            </motion.h1>

            <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
              An AI enthusiast and software developer passionate about
              leveraging technology to create innovative solutions. Currently
              working as an LLM Trainer at Outlier.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <RainbowButton
                className="rounded-full font-medium shadow-md hover:shadow-lg transition-all"
                onClick={handleScrollToExperience}
              >
                View Experience
              </RainbowButton>
              <CreativeBtn />
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -z-10 inset-0 rounded-full bg-blue-500 blur-[100px] opacity-70 animate-pulse-subtle"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full glass-card-darker p-1 shadow-xl animate-float">
                <ImageLoader
                  src="https://media.licdn.com/dms/image/v2/D5603AQEPC6lv8YlAVQ/profile-displayphoto-shrink_800_800/B56ZTGq8UeHwAc-/0/1738499936339?e=1748476800&v=beta&t=YberPvJ0PzP46xEvUwk9oThnw1H2W1MtIHj7SBu4WKw"
                  alt="Noorul Ameen"
                  className="rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#experience"
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs font-medium mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
