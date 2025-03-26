'use client';

import { color, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import useSound from 'use-sound';

const Contact = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [playHover] = useSound('/hover.mp3', { volume: 0.5 });
  const [playClick] = useSound('/click.mp3', { volume: 0.50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen py-24 sm:py-32  bg-white bg-gradient-to-b from-secondary to-background overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-4 w-4" />
            Let's Create Something Amazing Together
          </span>
          <h2 className="text-5xl font-bold mb-4 text2-gradient to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="relative w-[350px] h-20 -mb-14 -mt-2 mx-auto">
            {/* Gradient Lines */}
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
            <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 blur-sm" />
            <div className="absolute left-1/4 right-1/4 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2" />

            {/* Sparkles with enhanced radial effect */}
          </div>
          <p className="shiny-text text-muted-foreground max-w-2xl mx-auto text-lg">
            Reach out through any of these platforms and let's create something
            amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, i) => (
            <FloatingCard
              key={method.title}
              method={method}
              mouseX={mouseX}
              mouseY={mouseY}
              playHover={playHover}
              delay={i * 0.1}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 flex justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {socialLinks.map((social) => (
            <MagneticLink 
              key={social.name} 
              {...social} 
              playClick={playClick} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FloatingCard = ({ method, mouseX, mouseY, playHover, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  const rotateX = useSpring(useTransform(mouseY, [0, dimensions.height], [15, -15]));
  const rotateY = useSpring(useTransform(mouseX, [0, dimensions.width], [-15, 15]));

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
        playHover();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="glass-card rounded-xl p-6 relative z-10 h-full"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
      >
        <div className="relative z-10">
          <div className="rounded-full p-3 bg-accent/10 w-fit mb-4">
            {method.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
          <a 
            href={method.link}
            target={method.external ? "_blank" : undefined}
            rel={method.external ? "noopener noreferrer" : undefined}
            className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
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

const MagneticLink = ({ name, href, icon, playClick, hoverColor }) => {
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
      className={`relative p-4 rounded-full bg-accent/10 text-accent transition-colors ${hoverColor || 'hover:bg-accent hover:text-white'}`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onClick={playClick}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
        {name}
      </span>
    </motion.a>
  );
};

const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Add your preferred particle effect library here */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-3xl -top-48 -left-48 animate-pulse-slow"/>
      <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl -bottom-32 -right-32 animate-pulse-slow delay-1000"/>
    </div>
  );
};

const contactMethods = [
  {
    title: "Email",
    value: "noorulameen9220@gmail.com",
    icon: <Mail className="h-5 w-5 text-accent" />,
    link: "mailto:noorulameen9220@gmail.com",
    external: false
  },
  {
    title: "Phone",
    value: "+91 9952596033",
    icon: <Phone className="h-5 w-5 text-accent" />,
    link: "tel:+919952596033",
    external: false
  },
  {
    title: "Location",
    value: "Vaniyambadi, Tamil Nadu, India",
    icon: <MapPin className="h-5 w-5 text-accent" />,
    link: "https://maps.google.com/?q=Vaniyambadi,Tamil+Nadu,India",
    external: true
  }
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/noorulameen17",
    icon: <BsGithub className="h-5 w-5" style={{ color: "#000000" }} />,
    hoverColor: "hover:text-slate-600"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/noorulameen17",
    icon: <BsLinkedin className="h-5 w-5" />
  },
  {
    name: "Twitter",
    href: "https://x.com/noorulameen_17",
    icon: <RiTwitterXLine className="h-5 w-5" style={{ color: "#000000" }} />,
    hoverColor: "hover:text-slate-600"
  }
];

export default Contact;
