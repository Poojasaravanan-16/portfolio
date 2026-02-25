"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Banner() {
  const ref = useRef<HTMLDivElement>(null);
  const occupation = "Backend Developer | Full-Stack Enthusiast | Cloud Learner";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // For parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [typewriterText] = useTypewriter({
    words: [
      "Backend Development",
      "Problem Solving",
      "Full-Stack",
      "Databases",
      "Cloud Computing",
      "Networking",
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

  // Seeded pseudo-random for consistent server/client rendering
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed * 9999) * 10000;
    return x - Math.floor(x);
  };

  // Generate animated lines
  const lines = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x1: seededRandom(i * 1) * 100,
    y1: seededRandom(i * 2) * 100,
    x2: seededRandom(i * 3) * 100,
    y2: seededRandom(i * 4) * 100,
    duration: 10 + seededRandom(i * 5) * 15,
    delay: seededRandom(i * 6) * 5,
  }));

  return (
    <div className="min-h-[100dvh] w-full relative pointer-events-none bg-black" id="home" ref={ref}>
      {/* Animated lines background */}
      {isMounted && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <svg className="w-full h-full">
            {lines.map((line) => {
              const newX1 = (line.x1 + 30 * seededRandom(line.id * 7)) % 100;
              const newY1 = (line.y1 + 30 * seededRandom(line.id * 8)) % 100;
              const newX2 = (line.x2 + 30 * seededRandom(line.id * 9)) % 100;
              const newY2 = (line.y2 + 30 * seededRandom(line.id * 10)) % 100;
              
              return (
                <motion.line
                  key={line.id}
                  stroke={`url(#gradient${line.id})`}
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ 
                    x1: `${line.x1}%`,
                    y1: `${line.y1}%`,
                    x2: `${line.x2}%`,
                    y2: `${line.y2}%`,
                    opacity: 0 
                  }}
                  animate={{
                    x1: [`${line.x1}%`, `${newX1}%`, `${line.x1}%`],
                    y1: [`${line.y1}%`, `${newY1}%`, `${line.y1}%`],
                    x2: [`${line.x2}%`, `${newX2}%`, `${line.x2}%`],
                    y2: [`${line.y2}%`, `${newY2}%`, `${line.y2}%`],
                    opacity: [0, 0.4, 0],
                  }}
                  transition={{
                    duration: line.duration,
                    delay: line.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
            <defs>
              {lines.map((line) => (
                <linearGradient key={`grad-${line.id}`} id={`gradient${line.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8c1df3" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#f714d1" stopOpacity="1" />
                  <stop offset="100%" stopColor="#621aaf" stopOpacity="0.8" />
                </linearGradient>
              ))}
            </defs>
          </svg>
        </div>
      )}

      {/* 3D Singularity Element - Removed */}

      {/* Explore Indicator - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex items-center gap-3"
      >
        <motion.span
          className="text-xs font-medium text-purple-300 tracking-wider"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          EXPLORE
        </motion.span>
        <motion.svg
          className="w-8 h-8 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </motion.svg>
      </motion.div>

      {/* Content with glassmorphism card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
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
            className="relative backdrop-blur-sm rounded-3xl border border-white/5 bg-black/20 p-8 md:p-12 shadow-2xl transition-colors duration-500 hover:backdrop-blur-md mx-3 sm:mx-0"
            style={{ boxShadow: "0 0 30px 5px rgba(168, 85, 247, 0.3)" }}
            whileHover={{ boxShadow: "0 0 40px 8px rgba(168, 85, 247, 0.4)" }}
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
                  Pooja!
                  <span className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-60"></span>
                </span>
              </motion.h1>

              <motion.h3
                variants={itemVariants}
                className="text-lg sm:text-2xl md:text-2xl lg:text-3xl font-bold mt-1 sm:mt-2 md:mt-4 leading-tight"
              >
                <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
                  <span>Passionate about</span>
                  <span className="inline-flex items-center">
                    <span className="bg-gradient-to-r from-[#8c1df3] via-[#f714d1] to-[#621aaf] text-transparent bg-clip-text bg-[length:500%] animate-gradient whitespace-nowrap">
                      {typewriterText}
                    </span>
                    <Cursor cursorStyle="|" />
                  </span>
                </div>
              </motion.h3>

              <motion.h3
                variants={itemVariants}
                className="text-[13px] sm:text-xl md:text-2xl font-thin mx-auto leading-relaxed mt-1 sm:mt-2 whitespace-nowrap"
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
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
