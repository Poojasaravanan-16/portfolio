"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Projects", to: "projects" },
    { label: "Experience", to: "experience" },
    { label: "Education", to: "education" },
    { label: "Contact", to: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const container = document.getElementById("horizontal-container");
    const section = document.getElementById(sectionId);
    if (container && section) {
      container.scrollTo({ left: section.offsetLeft, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const container = document.getElementById("horizontal-container");
    if (container) {
      const handleHorizontalScroll = () => {
        const sections = navItems.map(item => document.getElementById(item.to));
        const containerRect = container.getBoundingClientRect();
        
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.left <= containerRect.left + 100) {
              setActiveSection(navItems[i].to);
              break;
            }
          }
        }
      };

      container.addEventListener("scroll", handleHorizontalScroll);
      handleHorizontalScroll();
      
      return () => container.removeEventListener("scroll", handleHorizontalScroll);
    }
  }, [navItems]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text cursor-pointer hover:scale-105 transition-transform"
            >
              Portfolio
            </motion.div>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.to}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.to)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative group ${
                    activeSection === item.to
                      ? "text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                      : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                  {activeSection === item.to && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <IoClose className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
            </motion.button>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col space-y-1 py-4 border-t border-slate-800/50">
                  {navItems.map((item) => (
                    <button
                      key={item.to}
                      onClick={() => scrollToSection(item.to)}
                      className={`text-left py-3 px-4 rounded-lg transition-all ${
                        activeSection === item.to
                          ? "text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                          : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;