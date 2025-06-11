'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
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
  }, [displayText, isDeleting, isTyping]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-mono text-xl tracking-wider hover:text-blue-400 transition-colors duration-200">
              {displayText}
              {isTyping && <span className="animate-blink">|</span>}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${
                    pathname === item.path
                      ? 'bg-white/20 text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium backdrop-blur-lg transition-all duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Liquid glass effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl -z-10" />
    </nav>
  );
};

export default Navbar; 