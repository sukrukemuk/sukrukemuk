import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/config/navigation';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export default function MobileDrawer({ isOpen, onClose, items }: MobileDrawerProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`fixed inset-0 bg-gradient-to-br from-[#0F172A]/30 via-[#1E293B]/30 to-[#0F172A]/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 z-[60]' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-br from-[#0F172A]/40 via-[#1E293B]/40 to-[#0F172A]/40 backdrop-blur-xl transform transition-transform duration-300 ease-in-out md:hidden z-[70] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-4 space-y-4 mt-16">
          {items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={onClose}
              className={`${
                pathname === item.path
                  ? 'bg-white/10 text-white shadow-lg'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              } px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
} 