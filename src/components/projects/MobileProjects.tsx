import Image from 'next/image';
import { technologies, projectLogos } from '@/data/projects/projects';

interface MobileProjectsProps {
  onProjectSelect: (project: { name: string; type: 'mobile' }) => void;
}

export default function MobileProjects({ onProjectSelect }: MobileProjectsProps) {
  return (
    <div className="w-full lg:w-1/3 flex flex-col gap-6 lg:pt-[60px]">
      <div className="flex justify-center">
        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-3 tracking-tight relative inline-block text-center">
          Mobile Projects
          <div className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {Object.entries(technologies.mobile).map(([projectName, techIcons]) => (
          <div 
            key={projectName} 
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-lg p-4 flex items-center gap-4 group transition-colors duration-200 hover:bg-white/15"
          >
            {projectLogos[projectName] && (
              <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md bg-white/20 flex-shrink-0">
                <Image
                  src={projectLogos[projectName]}
                  alt={projectName + ' logo'}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                  sizes="64px"
                />
              </div>
            )}
            <div className="flex flex-col flex-grow min-w-0">
              <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 group-hover:from-blue-400 group-hover:to-pink-400 transition-colors duration-200 truncate">
                {projectName}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {techIcons.map((icon: string, index: number) => (
                  <div key={index} className="w-8 h-8 rounded-lg bg-white/30 shadow-sm flex items-center justify-center">
                    <Image
                      src={icon}
                      alt="Technology"
                      width={24}
                      height={24}
                      className="object-contain"
                      sizes="24px"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => onProjectSelect({ name: projectName, type: 'mobile' })}
              className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200 flex items-center justify-center flex-shrink-0 ml-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 