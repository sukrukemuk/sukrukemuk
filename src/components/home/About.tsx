import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook, FaDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <section className="w-full max-w-4xl flex flex-col items-center glassmorphism p-4 sm:p-10 rounded-3xl shadow-2xl">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-6 sm:mb-8 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
        <Image 
          src="/profile/profile.jpg" 
          alt="Profile Photo" 
          fill 
          className="object-cover"
          priority={true}
          loading="eager"
          quality={90}
          sizes="(max-width: 768px) 160px, 160px"
        />
      </div>
      
      <div className="text-center space-y-4 sm:space-y-6 max-w-3xl">
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2 tracking-tight drop-shadow">
            Şükrü Kemük
          </h1>
          <h2 className="text-2xl text-gray-300 font-medium">
            Software Developer
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <a 
            href="mailto:sukrukemuk@gmail.com" 
            className="hover:scale-105 transition-transform duration-200" 
            aria-label="Send email"
          >
            <FaEnvelope size={28} className="text-white/80 hover:text-blue-400" />
          </a>
          <a 
            href="https://github.com/sukrukemuk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-105 transition-transform duration-200" 
            aria-label="Visit my GitHub profile"
          >
            <FaGithub size={28} className="text-white/80 hover:text-purple-400" />
          </a>
          <a 
            href="https://linkedin.com/in/sukrukemuk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-105 transition-transform duration-200" 
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin size={28} className="text-white/80 hover:text-blue-400" />
          </a>
          <a 
            href="https://x.com/sukrukemuk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-105 transition-transform duration-200" 
            aria-label="Visit my X (Twitter) profile"
          >
            <FaXTwitter size={30} className="text-white/80 hover:text-gray-400" />
          </a>
          <a 
            href="https://instagram.com/sukrukemuk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-105 transition-transform duration-200" 
            aria-label="Visit my Instagram profile"
          >
            <FaInstagram size={28} className="text-white/80 hover:text-pink-400" />
          </a>
          <a 
            href="https://facebook.com/sukrukemukk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:scale-105 transition-transform duration-200" 
            aria-label="Visit my Facebook profile"
          >
            <FaFacebook size={28} className="text-white/80 hover:text-blue-400" />
          </a>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 mt-6 sm:mt-8">
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

        <div className="flex items-center justify-center gap-2 sm:gap-4 text-gray-400 text-sm flex-wrap">
          <div className="flex items-center gap-2 px-2.5 py-1.5 bg-blue-500/10 rounded-lg min-w-[120px] justify-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Izmir, Turkey</span>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1.5 bg-purple-500/10 rounded-lg min-w-[120px] justify-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span>English (B1)</span>
          </div>
          <a 
            href="/cv/Sukru_Kemuk_Software_Engineer_CV.pdf.pdf" 
            download
            className="flex items-center gap-2 px-2.5 py-1.5 bg-white/10 rounded-lg transition-all duration-300 hover:scale-105 group min-w-[120px] justify-center" 
            aria-label="Download my Resume"
          >
            <FaDownload size={16} className="text-white/80 group-hover:text-green-400" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About; 