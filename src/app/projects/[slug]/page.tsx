"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import { projects } from "@/data/projectData";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaStar } from "react-icons/fa";
import { use } from "react";

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <motion.button
          onClick={() => router.push('/#projects')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 mb-8 px-5 py-2.5 bg-black/80 backdrop-blur-md border border-purple-500/30 rounded-xl hover:bg-purple-500/20 hover:border-purple-500/50 transition-all shadow-lg"
        >
          <FaArrowLeft className="text-purple-400" /> 
          <span className="font-medium">Back to Projects</span>
        </motion.button>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div 
              className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 z-10" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-black/60 backdrop-blur-md rounded-2xl border border-purple-500/30 p-6 sm:p-8 shadow-xl"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
                    {project.title}
                  </h1>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    {project.summary}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-black/60 backdrop-blur-md rounded-2xl border border-purple-500/30 p-6 sm:p-8 shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <FaStar className="text-2xl text-purple-400" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">Key Features</h2>
                  </div>
                  <ul className="space-y-4">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-3 text-gray-300 group"
                      >
                        <span className="text-purple-400 mt-1 text-lg group-hover:scale-125 transition-transform">▹</span>
                        <span className="text-sm sm:text-base">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-black/60 backdrop-blur-md rounded-2xl border border-purple-500/30 p-6 shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FaCode className="text-xl text-purple-400" />
                    <h2 className="text-xl font-bold text-white">Tech Stack</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-500/30 rounded-lg text-xs sm:text-sm font-medium text-purple-200 hover:border-purple-400/50 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-3"
                >
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-3 w-full px-6 py-3.5 bg-black/80 backdrop-blur-md border border-purple-500/30 rounded-xl hover:bg-purple-500/20 hover:border-purple-500/50 transition-all shadow-lg font-medium"
                    >
                      <FaGithub className="text-xl" /> View on GitHub
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-3 w-full px-6 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl hover:opacity-90 transition-all shadow-lg font-medium"
                    >
                      <FaExternalLinkAlt className="text-lg" /> Live Demo
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
