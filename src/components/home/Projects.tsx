import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/home/projects';

export default function Projects() {
  return (
    <section className="w-full max-w-4xl mt-12 glassmorphism p-8 rounded-2xl shadow-xl">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold text-white relative">
          <span className="relative z-10">My Projects</span>
          <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </h3>
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
            className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 flex flex-col items-center shadow-lg transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center mb-4">
              <Image 
                src={proj.img} 
                alt={proj.name} 
                width={96} 
                height={96} 
                className="object-contain w-full h-full"
                loading="eager"
                quality={90}
                sizes="96px"
              />
            </div>

            <h4 className="text-xl font-bold text-white mb-3 text-center group-hover:text-blue-300 transition-colors duration-200 tracking-tight">
              {proj.name}
            </h4>

            <p className="text-gray-300 text-sm text-center mb-6 leading-relaxed">
              {proj.desc}
            </p>

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
                      transition-transform duration-200 hover:scale-105
                      backdrop-blur-sm
                    `}
                  >
                    <div className="w-4 h-4 relative bg-white/5 rounded-full p-0.5">
                      <Image 
                        src={t.icon} 
                        alt={t.name} 
                        fill 
                        className="object-contain" 
                        sizes="16px"
                        loading="eager"
                        quality={90}
                      />
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
  );
} 