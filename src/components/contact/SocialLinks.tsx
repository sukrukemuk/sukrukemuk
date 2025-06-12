import { IconType } from 'react-icons';
import { socialLinks } from '@/data/contact/contact';
import { FaEnvelope } from 'react-icons/fa';

interface SocialLinkProps {
  icon: IconType;
  name: string;
  url: string;
  color: string;
  ariaLabel?: string;
}

function SocialLinkItem({ icon: Icon, name, url, color, ariaLabel }: SocialLinkProps) {
  const getIconColor = (color: string) => {
    switch (color) {
      case 'pink':
        return 'group-hover:text-pink-500';
      case 'purple':
        return 'group-hover:text-purple-500';
      case 'blue':
        return 'group-hover:text-blue-500';
      case 'gray':
        return 'group-hover:text-gray-500';
      default:
        return 'group-hover:text-white/80';
    }
  };

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 group hover:scale-105"
      aria-label={ariaLabel}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center">
        <Icon className={`text-white/80 ${getIconColor(color)} text-lg sm:text-xl transition-colors duration-200`} />
      </div>
      <span className={`text-white/80 group-hover:text-${color}-400 text-sm sm:text-base transition-colors duration-200`}>
        {name}
      </span>
    </a>
  );
}

export default function SocialLinks() {
  return (
    <div>
      <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Social Media</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {socialLinks.map((link) => (
          <SocialLinkItem key={link.name} {...link} />
        ))}
        <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/5 relative">
          <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -z-10"></div>
          <div className="absolute inset-[1px] rounded-xl bg-[#0f172a] -z-10"></div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
            <FaEnvelope className="text-blue-400 text-lg sm:text-xl" />
          </div>
          <span className="text-white/80 text-sm sm:text-base">
            Feel free to reach out for projects, collaboration opportunities, or any questions you may have.
          </span>
        </div>
      </div>
    </div>
  );
} 