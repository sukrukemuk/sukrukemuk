export interface Service {
  title: string;
  icon: string;
  description: string;
  features: string[];
  gradient: string;
  iconBg: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    title: "Web Development",
    icon: "/tech-icons/next_js.png",
    description: "Modern web application development with Next.js and React.",
    features: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Responsive"
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-gradient-to-br from-blue-500/30 via-blue-600/20 to-cyan-500/30",
    benefits: [
      "High Performance",
      "SEO Friendly",
      "Rapid Development",
      "Modern UI"
    ]
  },
  {
    title: "Mobile App",
    icon: "/tech-icons/flutter.webp",
    description: "Cross-platform mobile application development with Flutter.",
    features: [
      "Flutter",
      "iOS & Android",
      "Firebase",
      "State Management"
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-gradient-to-br from-purple-500/30 via-purple-600/20 to-pink-500/30",
    benefits: [
      "Single Codebase",
      "Native Performance",
      "Rapid Development",
      "Rich UI"
    ]
  },
  {
    title: "Backend Development",
    icon: "/tech-icons/node_js.png",
    description: "Backend system development with Node.js and Firebase.",
    features: [
      "Node.js",
      "Firebase",
      "REST API",
      "Database"
    ],
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-gradient-to-br from-emerald-500/30 via-emerald-600/20 to-teal-500/30",
    benefits: [
      "Scalable",
      "Secure",
      "Fast API",
      "Real-time"
    ]
  }
]; 