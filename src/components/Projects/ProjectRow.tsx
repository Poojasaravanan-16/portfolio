"use client";

import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { ProjectPreview } from "./ProjectPreview";
import { Project } from "@/data/projectData";

interface ProjectRowProps {
  project: Project;
  index: number;
}

export const ProjectRow = ({ project, index }: ProjectRowProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    router.push(`/projects/${project.slug}`);
  };

  return (
    <>
      <motion.div
        className="relative w-full py-8 px-6 border-b border-white/5 cursor-pointer group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300"
            >
              {project.title}
            </motion.h3>
            <p className="text-gray-400 mt-2 text-sm md:text-base">
              {project.description}
            </p>
          </div>
          <motion.div
            className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{ x: isHovered ? 10 : 0 }}
          >
            →
          </motion.div>
        </div>
      </motion.div>

      {isHovered && (
        <ProjectPreview
          image={project.image}
          title={project.title}
          x={mousePosition.x}
          y={mousePosition.y}
        />
      )}
    </>
  );
};
