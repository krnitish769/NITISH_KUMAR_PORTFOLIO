
export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "backend", label: "Backend Development" },
  { id: "java", label: "Java Applications" },
  { id: "ai-iot", label: "AI & IoT" },
];

export const projects = [
  {
    id: "ticket-tracking",
    number: "01",
    title: "Issue & Ticket Tracking System",
    subtitle: "Enterprise-style backend application",
    description:
      "A backend system designed to manage the complete ticket lifecycle, with REST APIs, database-driven workflows and role-based operations.",
    category: ["backend", "java"],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "JDBC",
      "Oracle",
    ],
    highlights: [
      "8+ RESTful API endpoints",
      "Normalized database with 6+ tables",
      "SQL query optimization and indexing",
    ],
    featured: true,
    github: "",
  },
  {
    id: "chat-application",
    number: "02",
    title: "Java Socket-Based Chat Application",
    subtitle: "Multithreaded client-server application",
    description:
      "A real-time chat application built using Java sockets and TCP/IP, supporting concurrent client connections through multithreading.",
    category: ["java"],
    technologies: [
      "Java",
      "Socket Programming",
      "TCP/IP",
      "Multithreading",
    ],
    highlights: [
      "Real-time client-server communication",
      "Concurrent client handling",
      "Multithreaded architecture",
    ],
    featured: false,
    github: "",
  },
  {
    id: "employee-management",
    number: "03",
    title: "Employee Management System",
    subtitle: "Database-driven management application",
    description:
      "An employee management application using Java and JDBC for backend operations, Oracle for data storage and a simple web interface.",
    category: ["java", "backend"],
    technologies: [
      "Java",
      "JDBC",
      "Oracle",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    highlights: [
      "Employee record management",
      "Database connectivity using JDBC",
      "Web-based user interface",
    ],
    featured: false,
    github: "",
  },
  {
    id: "voc-drone",
    number: "04",
    title: "VOC-DRONE",
    subtitle: "AI-powered voice-controlled aerial system",
    description:
      "An academic project exploring voice-controlled drone operations using AI, embedded hardware and sensor integration.",
    category: ["ai-iot"],
    technologies: [
      "Python",
      "C++",
      "ESP32",
      "Sensors",
      "OpenAI API",
    ],
    highlights: [
      "Voice-based command interface",
      "Embedded hardware integration",
      "Sensor-assisted drone operations",
    ],
    featured: false,
    github: "",
  },
];
