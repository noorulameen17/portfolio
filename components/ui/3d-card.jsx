"use client";
import React, { createContext, useContext, useRef, useState } from "react";
import { motion } from "framer-motion";

const MouseEnterContext = createContext({ mouseX: 0, mouseY: 0, mouseEntered: false });

export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [mouseEntered, setMouseEntered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ mouseX: 0, mouseY: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - left - width / 2) / 25;
    const mouseY = (e.clientY - top - height / 2) / 25;
    setMousePosition({ mouseX, mouseY });
  };

  const handleMouseEnter = () => {
    setMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setMouseEntered(false);
    setMousePosition({ mouseX: 0, mouseY: 0 });
  };

  return (
    <MouseEnterContext.Provider value={{ ...mousePosition, mouseEntered }}>
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: mouseEntered ? -mousePosition.mouseY : 0,
          rotateY: mouseEntered ? mousePosition.mouseX : 0,
        }}
        className={containerClassName}
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className={className}
        >
          {children}
        </div>
      </motion.div>
    </MouseEnterContext.Provider>
  );
};

// Use forwardRef to fix the ref issue
export const CardBody = React.forwardRef(({ children, className }, ref) => {
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
});
CardBody.displayName = "CardBody";

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const { mouseEntered } = useContext(MouseEnterContext);
  
  return (
    <Tag
      className={className}
      style={{
        transform: mouseEntered
          ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
          : "translateZ(0px)",
        transition: mouseEntered ? "transform 0.2s ease-out" : "transform 0.3s ease-out",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
