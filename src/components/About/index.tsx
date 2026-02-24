"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import profilePhoto from "@/image/professionalphoto-removebg-preview.png";

const About = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / 10;
    const y = (e.clientY - centerY) / 10;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };
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
      id="about"
      className="container mx-auto px-0 sm:px-6 lg:px-8"
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
            &lt;About Me/&gt;
          </h2>
        </motion.div>

        {/* Image and Content Section */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-2 sm:px-0">

  {/* Left: Profile Image */}
  <motion.div
    variants={itemVariants}
    className="flex justify-center"
  >
    <motion.div
      ref={imageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: mousePosition.x, y: mousePosition.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full p-[4px] bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-full h-full rounded-full overflow-hidden bg-black">
        <Image
          src={profilePhoto}
          alt="Pooja VS"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Availability Badge */}
      <div className="absolute bottom-2 right-2 bg-purple-500 text-xs px-3 py-1 rounded-full text-white shadow-md">
        Open to Opportunities
      </div>
    </motion.div>
  </motion.div>

  {/* Right: Content */}
  <motion.div
    variants={itemVariants}
    className="space-y-6"
  >
    <h3 className="text-2xl sm:text-3xl font-bold text-white">
      Crafting Scalable & Intelligent Systems
    </h3>

    <p className="text-[15px] sm:text-lg text-[#ababab] leading-relaxed">
      I am a Java Developer passionate about building scalable backend systems
      and intelligent web applications. I enjoy solving complex problems and
      designing clean, efficient software solutions.
    </p>

    <p className="text-[15px] sm:text-lg text-[#ababab] leading-relaxed">
      Currently pursuing B.Tech in Computer Science and Business Systems (CGPA: 8.6),
      I have hands-on experience with React, Core Java, JDBC, MySQL, and MongoDB,
      along with exposure to Git, GitHub, and AWS fundamentals.
    </p>

    {/* Highlight Stats */}
    <div className="grid grid-cols-2 gap-4 pt-4">
      <div className="bg-white/5 backdrop-blur-md p-4 rounded-lg border border-purple-500/20 hover:scale-105 transition">
        <h4 className="text-xl font-bold text-purple-400">3+</h4>
        <p className="text-sm text-gray-400">Projects Built</p>
      </div>

      <div className="bg-white/5 backdrop-blur-md p-4 rounded-lg border border-purple-500/20 hover:scale-105 transition">
        <h4 className="text-xl font-bold text-purple-400">2</h4>
        <p className="text-sm text-gray-400">Internships</p>
      </div>

      <div className="bg-white/5 backdrop-blur-md p-4 rounded-lg border border-purple-500/20 hover:scale-105 transition">
        <h4 className="text-xl font-bold text-purple-400">8.6</h4>
        <p className="text-sm text-gray-400">CGPA</p>
      </div>

      <div className="bg-white/5 backdrop-blur-md p-4 rounded-lg border border-purple-500/20 hover:scale-105 transition">
        <h4 className="text-xl font-bold text-purple-400">AWS</h4>
        <p className="text-sm text-gray-400">Cloud Learner</p>
      </div>
    </div>

  </motion.div>
</div>


      </motion.div>
    </section>
  );
};

export default About;
