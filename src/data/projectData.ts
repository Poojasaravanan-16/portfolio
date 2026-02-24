export interface Project {
  slug: string;
  title: string;
  description: string;
  summary: string;
  image: string;
  techStack: string[];
  features: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    slug: "template-generator",
    title: "Template Generator",
    description: "Dynamic template generation system using MERN stack",
    summary: "Built a full-stack template generation platform using MERN stack with customizable templates and real-time preview. Implemented RESTful APIs and MongoDB for efficient data management.",
    image: "/projects/TemplateGen.webp",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "TypeScript"],
    features: [
      "Dynamic template creation and customization",
      "Real-time preview functionality",
      "RESTful API architecture",
      "MongoDB database integration",
      "User authentication and authorization",
      "Responsive template designs"
    ],
    github: "https://github.com/yourusername/template-generator",
    demo: "https://template-generator-demo.vercel.app"
  },
  {
    slug: "ai-communication-enhancer",
    title: "AI Communication Enhancer",
    description: "AI-driven platform to evaluate communication skills with real-time feedback",
    summary: "Built an AI-driven platform to evaluate communication skills with automated scoring and feedback. Implemented live audio rooms using WebRTC with real-time transcription and speaker identification.",
    image: "/projects/communicationtech.avif",
    techStack: ["React", "TypeScript", "Flask", "WebRTC", "TinyLlama LoRA"],
    features: [
      "Automated communication skills scoring and feedback",
      "Live audio rooms using WebRTC",
      "Real-time transcription and speaker identification",
      "TinyLlama LoRA models for speech performance analysis",
      "Intelligent improvement score generation",
      "Interactive user interface"
    ],
    github: "https://github.com/yourusername/ai-communication-enhancer",
    demo: "https://ai-comm-enhancer-demo.vercel.app"
  },
  {
    slug: "grocery-management-system",
    title: "Grocery Management System",
    description: "Relational database system for efficient grocery inventory management",
    summary: "Designed a normalized relational database schema for managing grocery inventory and stock levels. Implemented CRUD operations and generated reports for efficient inventory tracking.",
    image: "/projects/grocery-1.png",
    techStack: ["SQL", "Database Design", "Relational Schema"],
    features: [
      "Normalized relational database schema",
      "CRUD operations for inventory management",
      "Automated report generation for stock tracking",
      "Data integrity using constraints and keys",
      "Efficient query optimization",
      "Relational design principles implementation"
    ],
    github: "https://github.com/yourusername/grocery-management"
  },
  {
    slug: "calculator-app",
    title: "Calculator App",
    description: "Modern calculator application with advanced mathematical operations",
    summary: "Built a feature-rich calculator application with a clean interface supporting basic and advanced mathematical operations. Implemented responsive design and keyboard support for enhanced user experience.",
    image: "/projects/Calculator.png",
    techStack: ["React", "TypeScript", "CSS"],
    features: [
      "Basic arithmetic operations",
      "Advanced mathematical functions",
      "Keyboard input support",
      "Responsive design",
      "Clean and intuitive UI",
      "Real-time calculation display"
    ],
    github: "https://github.com/yourusername/calculator-app",
    demo: "https://calculator-app-demo.vercel.app"
  }
];
