"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaAward } from "react-icons/fa";

const educationData = [
  {
    year: "2023 - 2027",
    degree: "B.Tech - Computer Science and Business Systems",
    institution: "K.Sangasamy College of Technology",
    score: "CGPA: 8.6",
    description: "Focused on software engineering principles, backend development, and cloud fundamentals. Actively building AI-driven and full-stack applications.",
  },
  {
    year: "2022 - 2023",
    degree: "Higher Secondary Education",
    institution: "SVN Matriculation Higher Secondary School",
    score: "86% | Cutoff: 148.5",
    description: "Strong academic foundation in Mathematics and Computer Science with consistent performance.",
  },
  {
    year: "2020 - 2021",
    degree: "Secondary Education",
    institution: "SVN Matriculation Higher Secondary School",
    score: "All Subjects Passed",
    description: "Built a strong academic base that led to pursuing Computer Science specialization.",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-500/5 via-transparent to-pink-500/5" />

      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            &lt;Education/&gt;
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Academic journey shaping my technical foundation and analytical thinking.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: "0px 25px 50px rgba(168,85,247,0.2)" }}
              className="relative bg-gradient-to-br from-[#2e2e2e50] to-[#1a1a1a50] backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center border border-purple-500/40">
                    <FaGraduationCap className="text-3xl text-purple-400" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                        {item.degree}
                      </h3>
                      <p className="text-purple-400 font-medium mt-1">{item.institution}</p>
                    </div>
                    <span className="px-4 py-2 text-sm font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full whitespace-nowrap w-fit flex items-center gap-2">
                      <FaAward className="text-purple-400" />
                      {item.score}
                    </span>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-transparent mb-4" />
                  
                  <div className="flex items-start gap-3">
                    <span className="text-purple-400 text-sm font-bold mt-1">{item.year}</span>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;