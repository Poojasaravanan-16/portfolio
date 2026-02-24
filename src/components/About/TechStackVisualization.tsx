import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiCplusplus,
} from "react-icons/si";

interface TechNode {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  x: number;
  y: number;
  group?: string;
}

interface TechConnection {
  from: string;
  to: string;
}

const TechStackVisualization = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [connectedNodes, setConnectedNodes] = useState<string[]>([]);

  const nodes: TechNode[] = [
    // Frontend
    {
      id: "html",
      label: "HTML",
      icon: <FaReact size={20} />,
      color: "#E34F26",
      x: 20,
      y: 20,
      group: "frontend",
    },
    {
      id: "css",
      label: "CSS",
      icon: <SiTailwindcss size={20} />,
      color: "#1572B6",
      x: 30,
      y: 35,
      group: "frontend",
    },
    {
      id: "js",
      label: "JavaScript",
      icon: <SiJavascript size={20} />,
      color: "#F7DF1E",
      x: 40,
      y: 15,
      group: "frontend",
    },
    {
      id: "react",
      label: "React",
      icon: <FaReact size={20} />,
      color: "#61dafb",
      x: 15,
      y: 50,
      group: "frontend",
    },

    // Backend
    {
      id: "java",
      label: "Java",
      icon: <SiJavascript size={20} />,
      color: "#007396",
      x: 70,
      y: 25,
      group: "backend",
    },
    {
      id: "c",
      label: "C",
      icon: <SiCplusplus size={20} />,
      color: "#A8B9CC",
      x: 80,
      y: 15,
      group: "backend",
    },
    {
      id: "cpp",
      label: "C++",
      icon: <SiCplusplus size={20} />,
      color: "#00599C",
      x: 60,
      y: 20,
      group: "backend",
    },

    // Database
    {
      id: "mongo",
      label: "MongoDB",
      icon: <SiMongodb size={20} />,
      color: "#4DB33D",
      x: 30,
      y: 70,
      group: "database",
    },
    {
      id: "mysql",
      label: "MySQL",
      icon: <SiMysql size={20} />,
      color: "#4479A1",
      x: 50,
      y: 75,
      group: "database",
    },

    // DevOps/Cloud
    {
      id: "git",
      label: "Git",
      icon: <FaGitAlt size={20} />,
      color: "#F05032",
      x: 70,
      y: 60,
      group: "devops",
    },
    {
      id: "github",
      label: "GitHub",
      icon: <FaGitAlt size={20} />,
      color: "#181717",
      x: 85,
      y: 70,
      group: "devops",
    },
    {
      id: "aws",
      label: "AWS",
      icon: <FaAws size={20} />,
      color: "#ff9900",
      x: 65,
      y: 80,
      group: "devops",
    },
  ];

  const connections = useMemo<TechConnection[]>(
    () => [
      // Essential connections only
      { from: "html", to: "css" },
      { from: "js", to: "react" },
      { from: "java", to: "cpp" },
      { from: "mongo", to: "mysql" },
      { from: "git", to: "github" },
      { from: "js", to: "java" },
    ],
    []
  );

  // Find connected nodes when hovering
  useEffect(() => {
    if (!hoveredNode) {
      setConnectedNodes([]);
      return;
    }

    const connected: string[] = [];
    connections.forEach((conn) => {
      if (conn.from === hoveredNode) {
        connected.push(conn.to);
      } else if (conn.to === hoveredNode) {
        connected.push(conn.from);
      }
    });

    setConnectedNodes(connected);
  }, [hoveredNode, connections]);

  // Create dynamic stars in the background
  const [stars, setStars] = useState<
    Array<{ x: number; y: number; size: number; opacity: number }>
  >([]);

  useEffect(() => {
    // Generate random stars
    const randomStars = Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    setStars(randomStars);

    // Animate stars
    const interval = setInterval(() => {
      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          opacity: Math.max(
            0.1,
            Math.min(0.6, star.opacity + (Math.random() * 0.1 - 0.05))
          ),
        }))
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Get group color for stronger connections between related technologies
  const getConnectionColor = (from: string, to: string) => {
    const fromNode = nodes.find((n) => n.id === from);
    const toNode = nodes.find((n) => n.id === to);

    if (fromNode?.group && fromNode.group === toNode?.group) {
      // Stronger connection for same group
      return { color: "#b520fe80", width: 1.5 };
    }

    return { color: "#b520fe30", width: 1 };
  };

  // Determine if a node is highlighted (hovered or connected to hovered)
  const isNodeHighlighted = (nodeId: string) => {
    return hoveredNode === nodeId || connectedNodes.includes(nodeId);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-[400px] w-full rounded-xl bg-black backdrop-blur-sm border border-[#2e2e2e] relative overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.3)] group"
      >
        {/* Glass overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2e2e2e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <div className="absolute inset-0">
          {/* Stars background */}
          {stars.map((star, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                transition: "opacity 1.5s ease-in-out",
              }}
            />
          ))}
        </div>

        <div className="relative h-full w-full">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            {connections.map(({ from, to }) => {
              const fromNode = nodes.find((n) => n.id === from);
              const toNode = nodes.find((n) => n.id === to);

              if (!fromNode || !toNode) return null;

              const isHighlighted =
                (hoveredNode === from && connectedNodes.includes(to)) ||
                (hoveredNode === to && connectedNodes.includes(from)) ||
                hoveredNode === from ||
                hoveredNode === to;

              const connectionStyle = getConnectionColor(from, to);

              return (
                <motion.line
                  key={`${from}-${to}`}
                  x1={`${fromNode.x}%`}
                  y1={`${fromNode.y}%`}
                  x2={`${toNode.x}%`}
                  y2={`${toNode.y}%`}
                  stroke={isHighlighted ? "#b520fe" : connectionStyle.color}
                  strokeWidth={isHighlighted ? 2 : connectionStyle.width}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.3 + Math.random() * 0.5,
                  }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => {
            const highlighted = isNodeHighlighted(node.id);

            return (
              <motion.div
                key={node.id}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                  zIndex: highlighted ? 10 : 1,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: hoveredNode && !highlighted ? 0.5 : 1,
                  transition: {
                    duration: 0.3,
                  },
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + nodes.indexOf(node) * 0.06,
                }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div
                  className={`
                    w-12 h-12 sm:w-14 sm:h-14 rounded-full
                    flex items-center justify-center cursor-pointer
                    shadow-lg transition-all duration-300
                    backdrop-blur-sm
                    ${highlighted ? "scale-110" : "scale-100"}
                  `}
                  style={{
                    backgroundColor: highlighted
                      ? `${node.color}dd`
                      : "rgba(46, 46, 46, 0.5)",
                    boxShadow: highlighted
                      ? `0 0 20px ${node.color}80, inset 0 0 10px rgba(255,255,255,0.2)`
                      : "0 0 10px rgba(0,0,0,0.3), inset 0 0 6px rgba(255,255,255,0.1)",
                    border: `2px solid ${
                      highlighted ? node.color : "rgba(46, 46, 46, 0.8)"
                    }`,
                  }}
                >
                  <span
                    className="transition-all duration-300"
                    style={{
                      color: highlighted
                        ? node.color === "#F7DF1E" || node.color === "#ffffff"
                          ? "#000"
                          : "#fff"
                        : node.color,
                      filter: highlighted
                        ? "drop-shadow(0 0 2px rgba(0,0,0,0.5))"
                        : "none",
                    }}
                  >
                    {node.icon}
                  </span>
                </div>
                <motion.div
                  className={`px-2 py-1 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap backdrop-blur-sm ${
                    node.y > 70 ? "absolute -top-10" : "mt-2"
                  }`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{
                    opacity: hoveredNode === node.id ? 1 : 0,
                    y: hoveredNode === node.id ? 0 : 5,
                  }}
                  style={{
                    backgroundColor: "rgba(46, 46, 46, 0.8)",
                    color: node.color,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {node.label}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Legend with glass morphism */}
        <div className="absolute bottom-3 right-3 flex gap-2 backdrop-blur-md bg-[#1a1a1a]/70 px-3 py-2 rounded-md text-[11px] text-[#ababab] border border-[#2e2e2e]/80 shadow-lg">
          <span>Hover to explore connections</span>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStackVisualization;
