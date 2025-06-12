'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navItems } from '@/config/navigation';
import MobileDrawer from './MobileDrawer';

const Navbar = () => {
  const pathname = usePathname();
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const name = 'Şükrü Kemük';
  const fullText = name + ' </>';

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentLength = displayText.length;

    if (isTyping && !isDeleting && currentLength < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentLength + 1));
      }, 100);
    } else if (isTyping && !isDeleting && currentLength === fullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && currentLength > name.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentLength - 1));
      }, 50);
    } else if (isDeleting && currentLength === name.length) {
      setIsTyping(false);
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isTyping, fullText]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-white/90 font-mono text-xl tracking-wider hover:text-white transition-colors duration-300"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }
              }}
              aria-label="Return to home page"
            >
              {displayText}
              {isTyping && <span className="animate-blink">|</span>}
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${
                    pathname === item.path
                      ? 'bg-white/10 text-white shadow-lg'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  } px-4 py-2 rounded-full text-sm font-medium backdrop-blur-xl transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105`}
                  aria-label={`Go to ${item.name} page`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="text-white/90 hover:text-white focus:outline-none transition-colors duration-300"
              aria-label={isDrawerOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isDrawerOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <MobileDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        items={navItems} 
      />

      {/* Enhanced Modern Liquid glass effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/40 via-[#112240]/30 to-[#0a192f]/40 backdrop-blur-2xl -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/5 via-[#1e40af]/5 to-[#1e3a8a]/5 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/5 via-[#1e40af]/5 to-[#1e3a8a]/5 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a]/5 via-transparent to-[#1e40af]/5 -z-10" />
    </nav>
  );
};

export default Navbar; 