'use client';

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const ImageLoader = ({ src, alt, className, aspectRatio = "square" }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  let aspectRatioClass = "aspect-square";
  if (aspectRatio === "video") aspectRatioClass = "aspect-video";
  if (aspectRatio === "wide") aspectRatioClass = "aspect-[16/9]";
  if (aspectRatio === "standard") aspectRatioClass = "aspect-[4/3]";
  if (aspectRatio === "auto") aspectRatioClass = "";

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted/30",
        aspectRatioClass,
        className
      )}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={alt}
          className={cn(
            "object-cover w-full h-full transition-opacity duration-500",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20 animate-pulse">
          <div className="w-8 h-8 rounded-full border-2 border-accent/50 border-t-transparent animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default ImageLoader;
