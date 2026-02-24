"use client";

import { motion } from "framer-motion";
import { ProjectRow } from "./ProjectRow";
import { projects } from "@/data/projectData";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            &lt;Projects/&gt;
          </h2>
        </motion.div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
