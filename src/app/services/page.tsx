'use client';

import Image from "next/image";

const services = [
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

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/90 flex flex-col items-center px-4 py-24">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-pulse delay-300"></div>
      </div>

      {/* Header Section */}
      <section className="w-full max-w-4xl flex flex-col items-center glassmorphism p-10 rounded-3xl shadow-2xl mb-12 relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"></div>
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 text-center relative">
          Services
        </h1>
        <p className="text-gray-300 text-center max-w-2xl relative">
          I provide web and mobile application development, backend systems, and UI/UX design services using modern technologies.
        </p>
      </section>

      {/* Services Grid */}
      <div className="w-full max-w-4xl grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={service.title}
            className="group relative animate-fade-in-up h-full"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                 style={{ background: `linear-gradient(to bottom right, ${service.gradient})` }}></div>
            <div className="relative glassmorphism p-6 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
              <div className="flex flex-col items-center text-center flex-grow">
                {/* Enhanced Icon Container */}
                <div className={`relative w-24 h-24 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-all duration-500 ${service.iconBg} backdrop-blur-sm`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent"></div>
                  <div className="relative w-full h-full p-6">
                    <Image 
                      src={service.icon} 
                      alt={service.title}
                      fill
                      className="object-contain transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg"
                    />
                  </div>
                </div>

                {/* Enhanced Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Enhanced Description */}
                <p className="text-gray-300 text-sm mb-6">
                  {service.description}
                </p>

                {/* Technologies Section */}
                <div className="w-full mb-6">
                  <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Technologies</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div 
                        key={feature}
                        className="flex items-center justify-center gap-1.5 text-xs font-medium text-gray-300 bg-white/5 rounded-lg p-2 group-hover:bg-white/10 transition-all duration-300"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="w-full mt-auto">
                  <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Benefits</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit) => (
                      <div 
                        key={benefit}
                        className="flex items-center justify-center gap-1.5 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-lg p-2 group-hover:bg-blue-500/20 transition-all duration-300"
                      >
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="w-full max-w-4xl mt-12 glassmorphism p-8 rounded-2xl text-center relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"></div>
        <div className="relative">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want to Get Services for Your Project?
          </h2>
          <p className="text-gray-300 mb-6">
            Contact me for modern and scalable solutions.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

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

        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 200% 200%;
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