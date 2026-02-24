"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import TechStackVisualization from "../About/TechStackVisualization";

const SkillButton = dynamic(() => import("../SkillButton"), { ssr: false });

type TabType = "internships" | "skills" | "certifications" | null;

const TabButton = ({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className={`relative px-8 py-4 rounded-xl backdrop-blur-md transition-all duration-300 overflow-hidden ${
      isActive
        ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-2 border-purple-400 shadow-lg shadow-purple-500/20"
        : "bg-[#2e2e2e50] border border-[#2e2e2e] hover:border-purple-500/40 hover:shadow-md"
    }`}
  >
    {isActive && (
      <motion.div
        layoutId="activeTab"
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
    <span className={`relative z-10 font-bold text-base ${
      isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300" : "text-white"
    }`}>
      {label}
    </span>
  </motion.button>
);

const SkillsContent = () => {
  const technicalSkills = [
    { icon: "html5", name: "HTML" },
    { icon: "css3", name: "CSS" },
    { icon: "javascript", name: "JavaScript" },
    { icon: "react-dark", name: "React" },
    { icon: "java-dark", name: "Java" },
    { icon: "c", name: "C" },
    { icon: "cpp", name: "C++" },
    { icon: "mongodb", name: "MongoDB" },
    { icon: "mysql-dark", name: "MySQL" },
    { icon: "git", name: "Git" },
    { icon: "github-dark", name: "GitHub" },
    { icon: "aws-dark", name: "AWS" },
    { icon: "python-dark", name: "Python" },
    { icon: "flask-dark", name: "Flask" },
    { icon: "firebase", name: "Firebase" },
    { icon: "typescript", name: "TypeScript" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      <div className="bg-[#2e2e2e50] backdrop-blur-md border border-[#2e2e2e] rounded-xl p-8">
        <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
          Technical Skills
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {technicalSkills.map((skill) => (
            <SkillButton key={skill.name} icon={skill.icon} skill={skill.name} isDragging={false} />
          ))}
        </div>
      </div>
      <div className="bg-[#2e2e2e50] backdrop-blur-md border border-[#2e2e2e] rounded-xl p-8 flex flex-col">
        <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
          Tech Network
        </h3>
        <div className="flex-1 w-full">
          <TechStackVisualization />
        </div>
      </div>
    </motion.div>
  );
};

const InternshipsContent = () => {
  const internships = [
    {
      role: "Google AI-ML Virtual Internship",
      duration: "2 Weeks",
      organization: "EduSkills – AICTE Supported Program",
      description: "Completed a structured virtual internship focused on Artificial Intelligence and Machine Learning fundamentals. Gained practical exposure to supervised and unsupervised learning, data preprocessing, model training, and evaluation techniques.",
    },
    {
      role: "Full Stack Development Intern",
      duration: "4 Weeks",
      organization: "CubeAISolutions Pvt. Ltd.",
      description: "Completed a four-week offline internship in Full Stack Development, gaining hands-on experience in frontend, backend, and database integration. Contributed to live production modules, ensuring performance optimization and feature implementation.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {internships.map((internship, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.15 }}
          whileHover={{ scale: 1.02, boxShadow: "0px 25px 50px rgba(168,85,247,0.2)" }}
          className="relative bg-gradient-to-br from-[#2e2e2e50] to-[#1a1a1a50] backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{internship.role}</h3>
                <p className="text-purple-400 font-medium text-sm">{internship.organization}</p>
              </div>
              <span className="px-3 py-1.5 text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full whitespace-nowrap">
                {internship.duration}
              </span>
            </div>
            
            <div className="h-px bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-transparent mb-4" />
            
            <p className="text-gray-400 text-sm leading-relaxed">{internship.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const CertificationsContent = () => {
  const certifications = [
    { image: "/projects/awscert.jpg" },
    { image: "/projects/oraclecert.jpg" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-[#2e2e2e50] backdrop-blur-md border border-[#2e2e2e] rounded-xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 max-w-md mx-auto"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cert.image}
            alt="Certificate"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

const ExperienceCredentials = () => {
  const [activeTab, setActiveTab] = useState<TabType>("internships");

  return (
    <section id="experience" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
            &lt;Experience &amp; Credentials/&gt;
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
            Explore my professional journey, technical expertise, and certifications
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <TabButton label="Internships" isActive={activeTab === "internships"} onClick={() => setActiveTab(activeTab === "internships" ? null : "internships")} />
          <TabButton label="Skills" isActive={activeTab === "skills"} onClick={() => setActiveTab(activeTab === "skills" ? null : "skills")} />
          <TabButton label="Certifications" isActive={activeTab === "certifications"} onClick={() => setActiveTab(activeTab === "certifications" ? null : "certifications")} />
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "internships" && <InternshipsContent key="internships" />}
          {activeTab === "skills" && <SkillsContent key="skills" />}
          {activeTab === "certifications" && <CertificationsContent key="certifications" />}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ExperienceCredentials;
