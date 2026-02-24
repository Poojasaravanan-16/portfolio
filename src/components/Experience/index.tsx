"use client";

import dynamic from "next/dynamic";
import styles from "./experience.module.css";

const DynamicChrono = dynamic(
  () => import("react-chrono").then((mod) => mod.Chrono),
  {
    ssr: false,
  }
);

const experienceData = [
  {
    title: "4 Weeks",
    cardTitle: "CubeAISolutions Pvt. Ltd.",
    cardSubtitle: "Full Stack Development Intern",
    cardDetailedText:
      "Successfully completed a four-week offline internship in the Full Stack Development domain, gaining hands-on experience in frontend, backend, and database integration. Contributed to modules that were integrated into the company's live running website, ensuring functional and performance optimization. Worked collaboratively with the development team to design, implement, test, and debug application features.",
  },
  {
    title: "2 Weeks",
    cardTitle: "Google AI-ML Virtual Internship",
    cardSubtitle: "EduSkills - AICTE Supported Program",
    cardDetailedText:
      "Completed a structured virtual internship focused on Artificial Intelligence and Machine Learning fundamentals. Gained practical exposure to supervised and unsupervised learning concepts, data preprocessing, model training, and evaluation techniques.",
  },
];

const Experience = () => {
  return (
    <div id="experience" style={{ padding: "3.5rem" }}>
      <div className="flex items-center gap-12 mb-0">
        <h1 className="text-5xl font-black whitespace-nowrap">
          &lt;Experience/&gt;
        </h1>
        <span className="h-[2px] w-full bg-[#2e2e2e]" />
      </div>
      <div
        className={`w-full max-w-[1200px] mx-auto [&_.timeline-controls]:!hidden [&_.timeline-main-wrapper]:!px-0 ${styles.timelineWrapper}`}
      >
        <DynamicChrono
          items={experienceData}
          mode="VERTICAL_ALTERNATING"
          disableToolbar
          cardHeight={250}
          theme={{
            primary: "#b520fe",
            secondary: "transparent",
            titleColor: "white",
            titleColorActive: "#b520fe",
            cardBgColor: "#2e2e2e50",
            cardForeColor: "white",
          }}
          classNames={{
            card: styles["teste-card"],
            title: styles["my-title"],
            cardText: styles["card-text"],
          }}
        />
      </div>
    </div>
  );
};

export default Experience;
