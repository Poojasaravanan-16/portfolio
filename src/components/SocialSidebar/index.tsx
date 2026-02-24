"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
    >
      <motion.a
        href="https://linkedin.com/in/pooja-vs16"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, x: 5 }}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2e2e2e] text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg"
      >
        <FaLinkedin size={20} />
      </motion.a>

      <motion.a
        href="https://github.com/Poojasaravanan-16"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, x: 5 }}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2e2e2e] text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg"
      >
        <FaGithub size={20} />
      </motion.a>

      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.2, x: 5 }}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2e2e2e] text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg"
      >
        <FaDownload size={20} />
      </motion.a>
    </motion.div>
  );
};

export default SocialSidebar;
