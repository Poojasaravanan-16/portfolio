"use client";

import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projectData";

const ProjectPreview = ({ image, title, x, y }: { image: string; title: string; x: number; y: number }) => (
  <motion.div
    className="fixed pointer-events-none z-50"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.2 }}
  >
    <div className="relative w-80 h-48 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg blur-xl" />
      <div className="relative w-full h-full bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-lg overflow-hidden shadow-2xl">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </div>
  </motion.div>
);

const ProjectRow = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });

  return (
    <>
      <motion.div
        className="relative w-full py-12 px-6 border-b border-white/80 cursor-pointer group mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={() => router.push(`/projects/${project.slug}`)}
      >
        <div className="flex items-center justify-between gap-8">
          <div className="flex-1">
            <motion.h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </motion.h3>
            <p className="text-gray-400 mt-3 text-sm md:text-base">{project.description}</p>
          </div>
          <motion.div className="text-3xl text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" animate={{ x: isHovered ? 10 : 0 }}>→</motion.div>
        </div>
      </motion.div>
      {isHovered && <ProjectPreview image={project.image} title={project.title} x={mousePosition.x} y={mousePosition.y} />}
    </>
  );
};

const Projects = () => (
  <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-12">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          &lt;Projects/&gt;
        </h2>
      </motion.div>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Projects;