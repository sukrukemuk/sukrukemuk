import { IconType } from 'react-icons';
import { socialLinks } from '@/data/contact/contact';

interface SocialLinkProps {
  icon: IconType;
  name: string;
  url: string;
  color: string;
  ariaLabel?: string;
}

function SocialLinkItem({ icon: Icon, name, url, color, ariaLabel }: SocialLinkProps) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200 group"
      aria-label={ariaLabel}
    >
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
        <Icon className={`text-white/80 group-hover:text-${color}-400 text-xl transition-colors duration-200`} />
      </div>
      <span className={`text-white/80 group-hover:text-${color}-400 transition-colors duration-200`}>
        {name}
      </span>
    </a>
  );
}

export default function SocialLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
      <div className="grid grid-cols-2 gap-4">
        {socialLinks.map((link) => (
          <SocialLinkItem key={link.name} {...link} />
        ))}
      </div>
    </div>
  );
} 