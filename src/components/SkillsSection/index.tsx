"use client";

import Skills from "../Skills";
import { motion } from "framer-motion";
import TechStackVisualization from "../About/TechStackVisualization";

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="container mx-auto px-0 sm:px-6 lg:px-8 py-4 sm:py-16 lg:py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8 sm:space-y-12"
      >
        {/* Title section */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 sm:gap-12 px-2 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            &lt;Skills/&gt;
          </h2>
        </motion.div>

        {/* Skills and Tech Network */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Tech Skills */}
          <motion.div variants={itemVariants}>
            <Skills />
          </motion.div>

          {/* Tech Network */}
          <motion.div variants={itemVariants}>
            <TechStackVisualization />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
