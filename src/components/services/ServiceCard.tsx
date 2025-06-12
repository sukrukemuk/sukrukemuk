import Image from 'next/image';
import type { Service } from '@/data/services/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative h-full">
      <div className="relative glassmorphism p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-500/10 transition-colors duration-200 h-full flex flex-col">
        <div className="flex flex-col items-center text-center flex-grow">
          {/* Icon Container */}
          <div className={`relative w-24 h-24 rounded-2xl overflow-hidden mb-6 ${service.iconBg} backdrop-blur-sm`}>
            <div className="relative w-full h-full p-6">
              <Image 
                src={service.icon} 
                alt={service.title}
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-200">
            {service.title}
          </h3>

          {/* Description */}
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
                  className="flex items-center justify-center gap-1.5 text-xs font-medium text-gray-300 bg-white/5 rounded-lg p-2 group-hover:bg-white/10 transition-colors duration-200"
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
                  className="flex items-center justify-center gap-1.5 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-lg p-2 group-hover:bg-blue-500/20 transition-colors duration-200"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 