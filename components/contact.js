"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { GlareCard } from "./ui/glare-card";
import { TextShimmerWave } from "./ui/text-shimmer-wave";

const Contact = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="contact"
      className="relative min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden flex flex-col justify-center items-center px-4 sm:px-6"
    >
      <div className="container max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium inline-flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            Let&#39;s Create Something Amazing Together
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text2-gradient to-accent bg-clip-text text-transparent">
            Let&#39;s Connect
          </h2>
          <div className="relative w-full max-w-[350px] h-16 sm:h-20 -mb-10 sm:-mb-14 -mt-1 sm:-mt-2 mx-auto">
            {/* Gradient Lines */}
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
            <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
            <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2" />
          </div>
          {/* Fix: Change from paragraph to div to prevent nesting issues */}
          <div className="text-sm sm:text-base">
            <TextShimmerWave
              as="p"
              duration={3}
              className="custom-class text-sm sm:text-base"
            >
              {`Reach out through any of these platforms and let's create something amazing together`}
            </TextShimmerWave>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full pl-4 sm:pl-0">
          {contactMethods.map((method, i) => (
            <a
              key={method.title}
              href={method.link}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="focus:outline-none focus:ring-2 focus:ring-accent rounded-xl group"
              aria-label={
                method.external
                  ? `${method.title}: ${method.value} (opens in a new tab)`
                  : `${method.title}: ${method.value}`
              }
              tabIndex={0}
            >
              <GlareCard className="bg-gradient-to-br from-slate-900 to-slate-800 h-full">
                <div className="block p-4 sm:p-6 rounded-xl transition-colors hover:bg-accent/5 h-full">
                  <div
                    className="rounded-full p-2 sm:p-3 bg-accent/10 w-fit mb-3 sm:mb-4"
                    aria-hidden="true"
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-white">
                    {method.title}
                  </h3>
                  <div className="relative z-10 text-sm sm:text-base text-slate-300 group-hover:text-accent transition-colors flex items-center gap-1">
                    <span>{method.value}</span>
                    {method.external && (
                      <ExternalLink
                        className="h-3 w-3"
                        aria-label="(external link)"
                      />
                    )}
                  </div>
                </div>
              </GlareCard>
            </a>
          ))}
        </div>

        <motion.div
          className="mt-10 sm:mt-12 md:mt-16 flex justify-center gap-5 sm:gap-8 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {socialLinks.map((social) => (
            <MagneticLink key={social.name} {...social} />
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-6 sm:mt-8 mx-auto max-w-xs sm:max-w-sm md:max-w-xl text-xs sm:text-sm">
        <TextShimmerWave as="p" duration={3} className="text-xs sm:text-sm">
          Available for freelance opportunities and collaborations
        </TextShimmerWave>
      </div>
    </section>
  );
};

const FloatingCard = ({ method, mouseX, mouseY, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const rotateX = useSpring(
    useTransform(mouseY, [0, dimensions.height], [15, -15])
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, dimensions.width], [-15, 15])
  );

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      style={{
        perspective: 1000,
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="bg-slate-300 rounded-xl p-4 sm:p-6 relative z-10 h-full"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
      >
        <div className="relative z-10">
          <div className="rounded-full p-2 sm:p-3 bg-accent/10 w-fit mb-3 sm:mb-4">
            {method.icon}
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
            {method.title}
          </h3>
          <a
            href={method.link}
            target={method.external ? "_blank" : undefined}
            rel={method.external ? "noopener noreferrer" : undefined}
            className="text-sm sm:text-base text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
            aria-label={method.title + ": " + method.value}
          >
            {method.value}
            {method.external && <ExternalLink className="h-3 w-3" />}
          </a>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      </motion.div>
    </motion.div>
  );
};

const MagneticLink = ({ name, href, icon, hoverColor }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left - bounds.width / 2;
    const y = e.clientY - bounds.top - bounds.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative p-3 sm:p-4 rounded-full bg-accent/10 text-accent transition-colors ${
        hoverColor || "hover:bg-accent hover:text-white"
      }`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
      <span className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm whitespace-nowrap">
        {name}
      </span>
    </motion.a>
  );
};

const contactMethods = [
  {
    title: "Email",
    value: "noorulameen9220@gmail.com",
    icon: <Mail className="h-5 w-5 text-white" />,
    link: "mailto:noorulameen9220@gmail.com",
    external: false,
  },
  {
    title: "Phone",
    value: "+91 9952596033",
    icon: <Phone className="h-5 w-5 text-white" />,
    link: "tel:+919952596033",
    external: false,
  },
  {
    title: "Location",
    value: "Vaniyambadi, Tamil Nadu, India",
    icon: <MapPin className="h-5 w-5 text-white" />,
    link: "https://maps.google.com/?q=Vaniyambadi,Tamil+Nadu,India",
    external: true,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/noorulameen17",
    icon: <BsGithub className="h-5 w-5 text-white" />,
    hoverColor: "hover:bg-slate-500",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/noorulameen17",
    icon: <BsLinkedin className="h-5 w-5 text-white" />,
  },
  {
    name: "Twitter",
    href: "https://x.com/noorulameen_17",
    icon: <RiTwitterXLine className="h-5 w-5 text-white" />,
    hoverColor: "hover:bg-slate-500",
  },
];

export default Contact;
