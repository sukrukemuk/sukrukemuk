import { IconType } from 'react-icons';
import { contactInfo } from '@/data/contact/contact';

interface ContactInfoProps {
  icon: IconType;
  title: string;
  value: string;
  link: string;
  color: string;
}

function ContactItem({ icon: Icon, title, value, link, color }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200">
      <div className={`w-12 h-12 rounded-xl bg-${color}-500/20 flex items-center justify-center`}>
        <Icon className={`text-${color}-400 text-xl`} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-400">{title}</h3>
        <a href={link} className={`text-white hover:text-${color}-400 transition-colors duration-200`}>
          {value}
        </a>
      </div>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactInfo.map((info) => (
        <ContactItem key={info.title} {...info} />
      ))}
    </div>
  );
} 