"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectPreviewProps {
  image: string;
  title: string;
  x: number;
  y: number;
}

export const ProjectPreview = ({ image, title, x, y }: ProjectPreviewProps) => {
  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: x,
        top: y,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-80 h-48 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg blur-xl" />
        <div className="relative w-full h-full bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};
