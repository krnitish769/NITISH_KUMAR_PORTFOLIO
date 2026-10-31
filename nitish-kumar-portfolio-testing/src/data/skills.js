import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiIntellijidea,
  SiApachemaven,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

export const skillCategories = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools & Platforms" },
];

export const skills = [
  // Programming Languages
  {
    name: "Java",
    category: "languages",
    icon: FaJava,
    level: "Primary",
    status: "proficient",
  },
  {
    name: "JavaScript",
    category: "languages",
    icon: FaJs,
    level: "Working Knowledge",
    status: "learning",
  },
  {
    name: "Python",
    category: "languages",
    icon: FaPython,
    level: "Familiar",
    status: "familiar",
  },

  // Frontend
  {
    name: "HTML5",
    category: "frontend",
    icon: FaHtml5,
    level: "Working Knowledge",
    status: "proficient",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: FaCss3Alt,
    level: "Working Knowledge",
    status: "proficient",
  },
  {
    name: "React",
    category: "frontend",
    icon: FaReact,
    level: "Learning",
    status: "learning",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    level: "Learning",
    status: "learning",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    level: "Learning",
    status: "learning",
  },

  // Backend
  {
    name: "Spring Boot",
    category: "backend",
    icon: SiSpringboot,
    level: "Learning",
    status: "learning",
  },

  // Database
  {
    name: "MySQL",
    category: "database",
    icon: SiMysql,
    level: "Familiar",
    status: "familiar",
  },
  {
    name: "Oracle",
    category: "database",
    icon: FaDatabase,
    level: "Familiar",
    status: "familiar",
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    icon: FaGitAlt,
    level: "Working Knowledge",
    status: "proficient",
  },
  {
    name: "GitHub",
    category: "tools",
    icon: FaGithub,
    level: "Working Knowledge",
    status: "proficient",
  },
  {
    name: "Docker",
    category: "tools",
    icon: FaDocker,
    level: "Learning",
    status: "learning",
  },
  {
    name: "Postman",
    category: "tools",
    icon: SiPostman,
    level: "Familiar",
    status: "familiar",
  },
  {
    name: "IntelliJ IDEA",
    category: "tools",
    icon: SiIntellijidea,
    level: "Working Knowledge",
    status: "proficient",
  },
  {
    name: "Maven",
    category: "tools",
    icon: SiApachemaven,
    level: "Familiar",
    status: "familiar",
  },
  {
    name: "VS Code",
    category: "tools",
    icon: FaCode,
    level: "Working Knowledge",
    status: "proficient",
  },
];