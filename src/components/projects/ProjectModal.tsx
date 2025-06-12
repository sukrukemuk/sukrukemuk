import Image from 'next/image';
import { projectDetails, technologies, projectLogos } from '@/data/projects/projects';

interface ProjectModalProps {
  selectedProject: { name: string; type: 'mobile' | 'web' } | null;
  onClose: () => void;
}

export default function ProjectModal({ selectedProject, onClose }: ProjectModalProps) {
  if (!selectedProject) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-lg w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex items-center gap-4 mb-4">
          {projectLogos[selectedProject.name] && (
            <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg bg-white/20">
              <Image
                src={projectLogos[selectedProject.name]}
                alt={selectedProject.name + ' logo'}
                width={64}
                height={64}
                className="object-cover w-full h-full"
                sizes="64px"
              />
            </div>
          )}
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            {selectedProject.name}
          </h3>
        </div>
        <p className="text-white/80 text-lg leading-relaxed">
          {projectDetails[selectedProject.type][selectedProject.name]}
        </p>
        <div className="mt-6 flex gap-3">
          {technologies[selectedProject.type][selectedProject.name].map((icon: string, index: number) => (
            <div key={index} className="w-10 h-10 rounded-lg bg-white/20 shadow-md flex items-center justify-center">
              <Image
                src={icon}
                alt="Technology"
                width={32}
                height={32}
                className="object-contain"
                sizes="32px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 