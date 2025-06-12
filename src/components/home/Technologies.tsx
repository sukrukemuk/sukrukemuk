import Image from "next/image";
import { technologies } from "@/data/home/technologies";

const Technologies = () => {
  return (
    <section className="w-full max-w-4xl mt-8 sm:mt-12 glassmorphism p-4 sm:p-8 rounded-2xl shadow-xl">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center relative">
        <span className="relative z-10">Technologies I Use</span>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 justify-items-center">
        {technologies.map((tech) => (
          <div key={tech.name} className="group w-full">
            <div className="relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-4 sm:p-6 transition-transform duration-200 hover:-translate-y-1">
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 relative">
                  <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    fill 
                    className="object-contain"
                    loading="eager"
                    quality={90}
                    sizes="64px"
                  />
                </div>
                <span className="text-white font-medium text-base sm:text-lg text-center group-hover:text-blue-300 transition-colors duration-200">
                  {tech.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies; 