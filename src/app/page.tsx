'use client';

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const technologies = [
  { name: "Next.js", icon: "/tech-icons/next_js.png"},
  { name: "Tailwind CSS", icon: "/tech-icons/tailwind.png"},
  { name: "Firebase", icon: "/tech-icons/firebase.png"},
  { name: "Node.js", icon: "/tech-icons/node_js.png"},
  { name: "Flutter", icon: "/tech-icons/flutter.webp"},
  { name: "Git", icon: "/tech-icons/git.png"},
];

const career = [
  { year: "2024-...", title: "Freelance Developer", desc: "Building modern web applications with Next.js and cross-platform mobile apps with Flutter. Creating responsive, user-friendly interfaces and implementing robust backend solutions with Firebase and REST APIs." },
  { year: "2024", title: "Flutter Developer Intern - Kadriye Macit Yazılım Ltd. Şti.", desc: "Developed mobile applications using Flutter and Firebase. Managed REST API operations and data integrations." },
  { year: "2023", title: "Intern - Aphel Yazılım", desc: "Developed a browser-based basketball game using JavaScript and Babylon.js." },
  { year: "2020-2024", title: "Necmettin Erbakan Üniversitesi", desc: "Computer Engineering Bachelor's Degree." },
];

const projects = [
  {
    name: "Apparelte",
    img: "/app-icons/apparelte.png",
    desc: "A fashion industry mobile application that allows users to discover and follow the latest trends in fashion.",
    tech: [
      { name: "Flutter", icon: "/tech-icons/flutter.webp" },
      { name: "Firebase", icon: "/tech-icons/firebase.png" },
      { name: "Django", icon: "/tech-icons/django.png" },
      { name: "Figma", icon: "/tech-icons/figma.webp" }
    ],
    link: "#"
  },
  {
    name: "Resepsion",
    img: "/app-icons/resepsion.jpg",
    desc: "Hotel and restaurant reservation management application that makes it easy to manage your bookings.",
    tech: [
      { name: "Node.js", icon: "/tech-icons/node_js.png" },
      { name: "Firebase", icon: "/tech-icons/firebase.png" },
      { name: "Flutter", icon: "/tech-icons/flutter.webp" }
    ],
    link: "#"
  },
  {
    name: "Tridy",
    img: "/app-icons/tridygames.jpeg",
    desc: "A modern mobile application for managing and tracking daily tasks and activities.",
    tech: [
      { name: "Next.js", icon: "/tech-icons/next_js.png" },
      { name: "Tailwind", icon: "/tech-icons/tailwind.png" }
    ],
    link: "#"
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/90 flex flex-col items-center px-4 pb-16">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-pulse delay-300"></div>
      </div>

      {/* ABOUT */}
      <section className="w-full max-w-4xl flex flex-col items-center glassmorphism mt-14 p-10 rounded-3xl shadow-2xl animate-fade-in">
        <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden border-4 border-white/30 shadow-xl hover:border-blue-500/50 transition-all duration-300 group">
          <Image src="/profile.jpg" alt="Profile Photo" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="text-center space-y-6 max-w-3xl">
          <div className="space-y-3">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow">
              Şükrü Kemük
            </h1>
            <h2 className="text-2xl text-gray-300 font-medium">
              Flutter & Web Developer
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <a href="mailto:sukrukemuk@gmail.com" className="hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20" title="Email">
              <FaEnvelope size={28} className="text-white/80 hover:text-blue-400" />
            </a>
            <a href="https://github.com/sukrukemuk" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20" title="GitHub">
              <FaGithub size={28} className="text-white/80 hover:text-purple-400" />
            </a>
            <a href="https://linkedin.com/in/sukrukemuk" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20" title="LinkedIn">
              <FaLinkedin size={28} className="text-white/80 hover:text-blue-400" />
            </a>
            <a href="https://x.com/sukrukemuk" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20" title="X">
              <FaXTwitter size={30} className="text-white/80 hover:text-gray-400" />
            </a>
            <a href="https://instagram.com/sukrukemuk" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20" title="Instagram">
              <FaInstagram size={28} className="text-white/80 hover:text-pink-400" />
            </a>
            <a href="https://facebook.com/sukrukemukk" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20" title="Facebook">
              <FaFacebook size={28} className="text-white/80 hover:text-blue-400" />
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 mt-8">
            <div className="space-y-6">
              <p className="text-gray-300 text-base leading-relaxed">
                I am a software developer specializing in modern web and mobile applications. I develop high-performance, scalable projects with Next.js and Flutter, and create responsive, user-friendly interfaces by implementing Figma designs using Tailwind CSS.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                On the backend, I have experience in API development with Node.js, real-time database management with Firebase, and authentication processes. I effectively use Git version control system for project management and team collaboration.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                I prefer MVVM architecture in application design and write clean, maintainable, and testable code using BLoC state management in Flutter projects. I continuously improve myself in REST API integration and modern web technologies, aiming to provide user-focused and quality software solutions.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Izmir, Turkey
            </p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              English (B1)
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="w-full max-w-4xl mt-12 glassmorphism p-8 rounded-2xl shadow-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <h3 className="text-2xl font-bold text-white mb-8 text-center relative">
          <span className="relative z-10">Technologies I Use</span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 justify-items-center">
          {technologies.map((tech, idx) => {
            const bgColors = [
              "from-blue-500/20 to-blue-600/20",
              "from-cyan-500/20 to-cyan-600/20",
              "from-yellow-500/20 to-orange-500/20",
              "from-green-500/20 to-green-600/20",
              "from-indigo-500/20 to-indigo-600/20",
              "from-purple-500/20 to-purple-600/20",
            ];
            return (
              <div key={tech.name} className="group w-full">
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{ background: `linear-gradient(to bottom right, ${bgColors[idx % bgColors.length]})` }} />
                  <div className="relative flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 relative transform group-hover:scale-110 transition-transform duration-300">
                      <Image 
                        src={tech.icon} 
                        alt={tech.name} 
                        fill 
                        className="object-contain filter drop-shadow-lg" 
                      />
                    </div>
                    <span className="text-white font-medium text-lg text-center group-hover:text-blue-300 transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CAREER - Timeline */}
      <section className="w-full max-w-4xl mt-12 glassmorphism p-8 rounded-2xl shadow-xl animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <h3 className="text-2xl font-bold text-white mb-8 text-center relative">
          <span className="relative z-10">My Career</span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50"></div>
          {career.map((item, idx) => (
            <div key={idx} className="relative mb-12 last:mb-0 group">
              <div className="flex items-start gap-6">
                <div className="relative z-10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{item.year.split("-")[0]}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 transform group-hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-xs text-gray-400">{item.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="w-full max-w-4xl mt-12 glassmorphism p-8 rounded-2xl shadow-xl animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-white">My Projects</h3>
          <a 
            href="/projects" 
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white/90 hover:text-white transition-all duration-300"
          >
            <span className="relative z-10">View All Projects</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 border border-white/10 rounded-full group-hover:border-white/20 transition-colors duration-300"></div>
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div 
              key={proj.name} 
              className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Project icon with enhanced styling */}
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image 
                  src={proj.img} 
                  alt={proj.name} 
                  width={96} 
                  height={96} 
                  className="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project title with enhanced typography */}
              <h4 className="text-xl font-bold text-white mb-3 text-center group-hover:text-blue-300 transition-colors duration-300 tracking-tight">
                {proj.name}
              </h4>

              {/* Project description with improved readability */}
              <p className="text-gray-300 text-sm text-center mb-6 leading-relaxed">
                {proj.desc}
              </p>

              {/* Technology tags with enhanced styling */}
              <div className="flex flex-wrap gap-2 justify-center">
                {proj.tech.map((t) => {
                  const bgGradients: Record<string, string> = {
                    'Next.js': 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
                    'Node.js': 'bg-gradient-to-br from-slate-800 via-emerald-900 to-slate-800',
                    'Firebase': 'bg-gradient-to-br from-slate-800 via-orange-900 to-slate-800',
                    'Flutter': 'bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800',
                    'Django': 'bg-gradient-to-br from-slate-800 via-green-900 to-slate-800',
                    'Figma': 'bg-gradient-to-br from-slate-800 via-violet-900 to-slate-800',
                    'Tailwind': 'bg-gradient-to-br from-slate-800 via-cyan-900 to-slate-800'
                  };
                  
                  return (
                    <span 
                      key={t.name} 
                      className={`
                        ${bgGradients[t.name] || 'bg-gradient-to-br from-slate-800 to-slate-900'}
                        text-white/90 px-3 py-1.5 rounded-full text-[11px]
                        border border-white/10
                        flex items-center gap-2
                        hover:scale-105 hover:shadow-lg hover:shadow-white/5
                        transition-all duration-300
                        backdrop-blur-sm
                        relative overflow-hidden
                        before:absolute before:inset-0
                        before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                        before:translate-x-[-200%] hover:before:translate-x-[200%]
                        before:transition-transform before:duration-1000
                      `}
                    >
                      <div className="w-4 h-4 relative bg-white/5 rounded-full p-0.5 backdrop-blur-sm">
                        <Image src={t.icon} alt={t.name} fill className="object-contain" />
                      </div>
                      <span className="font-medium tracking-wide">{t.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <div className="mt-16 text-gray-500 text-sm opacity-70 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>© 2024 Şükrü Kemük</div>

      {/* Liquid Glass Style */}
      <style jsx global>{`
        .glassmorphism {
          background: rgba(30, 30, 40, 0.55);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
