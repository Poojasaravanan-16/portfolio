"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const drumBeat: Variants = {
  initial: { scale: 1, opacity: 0.5 },
  beat: {
    scale: [1, 1.5, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      times: [0, 0.5, 1],
    },
  },
};

const words = ["DOOM", "DUT", "DA", "DA"];

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [beatIndex, setBeatIndex] = useState(0);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    const beatInterval = setInterval(() => {
      setBeatIndex((prev) => (prev + 1) % words.length);
    }, 500);

    const timer = setTimeout(() => {
      setIsLoading(false);
      clearInterval(beatInterval);
      document.body.style.overflow = "auto";
    }, 4000); // Extended slightly to let the rhythm play out

    return () => {
      clearTimeout(timer);
      clearInterval(beatInterval);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Main Sun/Drum pulsating core */}
          <div className="relative flex items-center justify-center">
            {/* Radiating rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-purple-500/30"
                initial={{ width: 100, height: 100, opacity: 0 }}
                animate={{
                  width: [100, 300 + i * 50],
                  height: [100, 300 + i * 50],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}

            {/* Core Sun */}
            <motion.div
              variants={drumBeat}
              initial="initial"
              animate="beat"
              className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full blur-sm flex items-center justify-center relative z-10 box-shadow-[0_0_50px_rgba(168,85,247,0.8)]"
            >
              <div className="w-full h-full absolute top-0 left-0 bg-white/20 rounded-full animate-pulse" />
            </motion.div>

            {/* Rhythm Text Overlay */}
            <div className="absolute z-20 flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={beatIndex}
                  initial={{ y: 20, opacity: 0, rotate: -5 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  style={{ fontFamily: "Impact, sans-serif" }} // Fallback bold font
                >
                  {words[beatIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 text-xs text-white/50 tracking-[0.5em] uppercase"
          >
            Awakening
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
