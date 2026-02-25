// HorizontalSection.tsx
"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface HorizontalSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  isHome?: boolean;
  hideIndicator?: boolean;
}

export const HorizontalSection = ({ 
  id, 
  children, 
  className = "", 
  isHome = false,
  hideIndicator = false
}: HorizontalSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showIndicator, setShowIndicator] = useState(false);

  // In your HorizontalSection.tsx, update the useEffect:

useEffect(() => {
  // Small delay to ensure DOM is ready
  const timer = setTimeout(() => {
    if (isHome && sectionRef.current) {
      sectionRef.current.setAttribute('data-scrollable', 'true');
      console.log('Home section set as scrollable');
    } else if (contentRef.current) {
      contentRef.current.setAttribute('data-scrollable', 'true');
      console.log('Content section set as scrollable');
    }
  }, 100);

  return () => clearTimeout(timer);
}, [isHome]);

  // Home page layout - section itself scrolls
  if (isHome) {
    return (
      <section
        id={id}
        ref={sectionRef}
        className={`w-screen h-screen flex-shrink-0 snap-start overflow-y-auto ${className}`}
      >
        {children}
      </section>
    );
  }

  // Other pages - inner container scrolls with custom styling
  return (
    <section
      id={id}
      ref={sectionRef}
      className={`w-screen h-screen flex-shrink-0 snap-start overflow-hidden ${className}`}
    >
      <div className="h-full flex items-center justify-center p-4 md:p-6 lg:p-8 relative">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-slate-950/95 backdrop-blur-md rounded-2xl border border-slate-800/50 shadow-2xl w-full max-w-7xl h-[90vh] overflow-y-auto relative scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-slate-900"
          style={{ boxShadow: "0 0 40px rgba(168, 85, 247, 0.15), 0 20px 60px rgba(0, 0, 0, 0.5)" }}
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none">
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{ boxShadow: ["0 0 20px rgba(168, 85, 247, 0.3)", "0 0 40px rgba(236, 72, 153, 0.3)", "0 0 20px rgba(168, 85, 247, 0.3)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Scroll indicator */}
          {showIndicator && !hideIndicator && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full shadow-lg"
            >
              <svg className="w-5 h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
              </svg>
            </motion.div>
          )}
          
          <div className="p-6 md:p-8 lg:p-10">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
};