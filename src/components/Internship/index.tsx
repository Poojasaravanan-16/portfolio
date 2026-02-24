"use client";

import { motion } from "framer-motion";

const internshipData = [
  {
    role: "Google AI-ML Virtual Internship",
    duration: "2 Weeks",
    organization: "EduSkills – AICTE Supported Program",
    description:
      "Completed a structured virtual internship focused on Artificial Intelligence and Machine Learning fundamentals. Gained practical exposure to supervised and unsupervised learning, data preprocessing, model training, and evaluation techniques.",
  },
  {
    role: "Full Stack Development Intern",
    duration: "4 Weeks",
    organization: "CubeAISolutions Pvt. Ltd.",
    description:
      "Completed a four-week offline internship in Full Stack Development, gaining hands-on experience in frontend, backend, and database integration. Contributed to live production modules, ensuring performance optimization and feature implementation. Collaborated with the development team to design, test, and deploy application features, strengthening understanding of the complete software development lifecycle.",
  },
];

const Internship = () => {
  return (
    <section
      id="internship"
      className="relative w-full py-20 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-500/5 via-transparent to-pink-500/5" />

      <div className="container mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            &lt;Internship Journey/&gt;
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Practical experience gained through structured internships and real-world development exposure.
          </p>
        </motion.div>

        {/* Internship Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="max-w-4xl mx-auto space-y-10"
        >
          {internshipData.map((internship, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -6,
                boxShadow: "0px 20px 40px rgba(168,85,247,0.15)",
              }}
              className="bg-[#2e2e2e50] backdrop-blur-md border border-[#2e2e2e]
              rounded-2xl p-8 hover:border-purple-500/40
              transition-all duration-300"
            >
              {/* Role + Duration */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {internship.role}
                </h3>

                <span className="mt-2 sm:mt-0 px-3 py-1 text-sm 
                bg-purple-500/10 text-purple-400 
                border border-purple-500/20 
                rounded-full">
                  {internship.duration}
                </span>
              </div>

              {/* Organization */}
              <p className="text-purple-400 font-medium mt-3">
                {internship.organization}
              </p>

              {/* Description */}
              <p className="text-gray-400 mt-4 leading-relaxed text-sm sm:text-base">
                {internship.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Internship;