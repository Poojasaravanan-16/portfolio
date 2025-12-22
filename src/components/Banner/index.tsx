"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Singularity from "@/components/Singularity";

export default function Banner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const occupation = "Full-Stack & AI Engineer | MLOps Specialist";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // For parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const [typewriterText] = useTypewriter({
    words: [
      "AI Integration",
      "Machine Learning",
      "MLOps",
      "Full-Stack Development",
      "Innovation",
      "Scalable Solutions",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 110,
  });

  // Track mouse position for interactive elements
  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateMouseTransform = (
    x: number,
    y: number,
    strength: number = 1
  ) => {
    if (!ref.current || !isMounted) return { x: 0, y: 0 };

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const moveX = ((x - centerX) / 25) * strength;
    const moveY = ((y - centerY) / 25) * strength;

    return { x: moveX, y: moveY };
  };

  // Mouse transform values for different elements
  const mouseTitleTransform = calculateMouseTransform(
    mousePosition.x,
    mousePosition.y,
    0.5
  );

  const mouseParticlesTransform = calculateMouseTransform(
    mousePosition.x,
    mousePosition.y,
    0.8
  );

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Generate random particles for background effect
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.1,
    delay: Math.random() * 5,
  }));

  return (
    <div className="min-h-[100dvh] w-full relative pointer-events-none" id="home" ref={ref}>
      {/* Animated background particles - hidden for now as Singularity takes over */}
      <div className="absolute inset-0 z-0 hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              filter: "blur(5px)",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [
                particle.opacity,
                particle.opacity * 1.5,
                particle.opacity,
              ],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            initial={{
              x: mouseParticlesTransform.x,
              y: mouseParticlesTransform.y,
            }}
          />
        ))}
      </div>

      {/* 3D Singularity Element */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-auto"
        style={{
          y: yBg,
          opacity: opacityBg,
          scale,
        }}
      >
        <Singularity />
      </motion.div>

      {/* Background dots with lighter opacity */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="h-full w-full bg-[radial-gradient(circle,_#585858_1px,_transparent_1px),radial-gradient(circle,_#585858_1.2px,_transparent_1.2px)] bg-[length:40px_40px]" />
      </div>

      {/* Content with glassmorphism card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 min-h-[100dvh] w-full flex items-center justify-center px-4 sm:px-6 md:px-8 pointer-events-auto"
      >
        <motion.div
          className="w-full max-w-4xl mx-auto"
          animate={{
            x: mouseTitleTransform.x,
            y: mouseTitleTransform.y,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            mass: 0.8,
          }}
        >
          <motion.div
            className="relative backdrop-blur-sm rounded-3xl border border-white/5 bg-black/10 p-8 md:p-12 shadow-2xl overflow-hidden transition-colors duration-500 hover:bg-black/20 hover:backdrop-blur-md mx-3 sm:mx-0"
            whileHover={{ boxShadow: "0 0 30px 5px rgba(168, 85, 247, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Title Group */}
            <div className="space-y-3 sm:space-y-4 text-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block"
              >
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400 font-medium">
                  Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
              >
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text relative drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                  Oussama!
                  <span className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-60"></span>
                </span>
              </motion.h1>

              <motion.h3
                variants={itemVariants}
                className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-1 sm:mt-2 md:mt-4 leading-tight"
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                  <span>Passionate about</span>
                  <div className="w-[220px] sm:w-[280px] md:w-[320px] inline-flex items-center justify-start overflow-hidden">
                    <span className="bg-gradient-to-r from-[#8c1df3] via-[#f714d1] to-[#621aaf] text-transparent bg-clip-text bg-[length:500%] animate-gradient">
                      {typewriterText}
                    </span>
                    <Cursor cursorStyle="|" />
                  </div>
                </div>
              </motion.h3>

              <motion.h3
                variants={itemVariants}
                className="text-base sm:text-xl md:text-2xl font-thin mx-auto leading-relaxed mt-1 sm:mt-2"
              >
                {occupation}
              </motion.h3>

              {/* Animated line separator */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-[#8c1df3] to-[#621aaf] mx-auto mt-3 sm:mt-4 rounded-full"
              />

              {/* Action buttons */}
              <motion.div
                variants={itemVariants}
                className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#8c1df3] to-[#621aaf] rounded-full
                    text-white text-sm md:text-base font-semibold transition-all duration-300
                    shadow-lg hover:shadow-purple-500/30"
                  >
                    <FaDownload className="w-4 h-4 md:w-5 md:h-5" />
                    Download Resume
                  </a>
                </motion.div>

                <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-0">
                  <motion.a
                    href="https://github.com/osallak"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#2e2e2e] text-white hover:bg-gradient-to-r from-[#8c1df3] to-[#621aaf] transition-all duration-300"
                  >
                    <FaGithub size={16} className="sm:text-xl md:text-2xl" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/osallak"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#2e2e2e] text-white hover:bg-gradient-to-r from-[#8c1df3] to-[#621aaf] transition-all duration-300"
                  >
                    <FaLinkedin size={16} className="sm:text-xl md:text-2xl" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Redesigned scroll indicator - outside of card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center"
      >
        <span className="text-sm font-medium text-white/70 tracking-wider mb-3">
          SCROLL DOWN
        </span>
        <motion.div
          className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center p-1"
          whileHover={{ borderColor: "rgba(168, 85, 247, 0.5)" }}
        >
          <motion.div
            className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
