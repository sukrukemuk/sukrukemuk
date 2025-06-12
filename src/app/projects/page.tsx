'use client';

import { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const IPhoneUI = dynamic(() => import('@/components/iPhoneUI'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
});

interface App {
  name: string;
  screenshots: string[];
  description: string;
  icon: string;
}

const apps = [
  {
    id: '1',
    name: 'Resepsion',
    icon: '/app-icons/resepsion.jpg',
    screenshots: [
      '/screenshots/resepsion/1.jpg',
      '/screenshots/resepsion/2.jpg',
      '/screenshots/resepsion/3.jpg',
      '/screenshots/resepsion/4.jpg',
      '/screenshots/resepsion/5.jpg',
      '/screenshots/resepsion/6.jpg',
    ],
  },
  {
    id: '2',
    name: 'Apparelte',
    icon: '/app-icons/apparelte.png',
    screenshots: [
      '/screenshots/apparelte/1.jpg',
      '/screenshots/apparelte/2.jpg',
      '/screenshots/apparelte/3.jpg',
      '/screenshots/apparelte/4.jpg',
      '/screenshots/apparelte/5.jpg',
      '/screenshots/apparelte/6.jpg',
    ],
  },
  {
    id: '3',
    name: 'MobiWax',
    icon: '/app-icons/mobiWax.png',
    screenshots: [],
  },
  {
    id: '4',
    name: 'AGS Urla',
    icon: '/app-icons/ags.png',
    screenshots: [
      '/screenshots/ags/1.jpg',
      '/screenshots/ags/2.jpg',
      '/screenshots/ags/3.jpg',
      '/screenshots/ags/4.jpg',
      '/screenshots/ags/5.jpg',
    ],
  },
  {
    id: '5',
    name: 'GeVi',
    icon: '/app-icons/GeVi.jpg',
    screenshots: [],
  },
  {
    id: '6',
    name: 'Courier',
    icon: '/app-icons/courier.png',
    screenshots: [],
  },
  {
    id: '7',
    name: 'PyLearn',
    icon: '/app-icons/pyLearn.png',
    screenshots: [],
  },
  {
    id: '8',
    name: 'Dispatcher Quiz',
    icon: '/app-icons/dispatcher.png',
    screenshots: [
      '/screenshots/dispatcher/1.jpg',
      '/screenshots/dispatcher/2.jpg',
      '/screenshots/dispatcher/3.jpg',
      '/screenshots/dispatcher/4.jpg',
    ],
  },
  {
    id: '9',
    name: 'Resepsion Plus',
    icon: '/app-icons/resepsion_plus.png',
    screenshots: [
      '/screenshots/resepsion_plus/1.jpg',
      '/screenshots/resepsion_plus/2.jpg',
      '/screenshots/resepsion_plus/3.jpg',
      '/screenshots/resepsion_plus/4.jpg',
      '/screenshots/resepsion_plus/5.jpg',
      '/screenshots/resepsion_plus/6.jpg',
    ],
  }
];

type ProjectType = 'mobile' | 'web';

interface ProjectDetails {
  mobile: {
    [key: string]: string;
  };
  web: {
    [key: string]: string;
  };
}

interface Technologies {
  mobile: {
    [key: string]: string[];
  };
  web: {
    [key: string]: string[];
  };
}

const projectDetails: ProjectDetails = {
  mobile: {
    'Apparelte': 'A fashion combination app where users can discover, create, and share outfit combinations. Features include following other users, rating combinations, leaving comments, and building a personalized style community.',
    'Resepsion Plus': 'A comprehensive hotel and accommodation management platform where businesses can create room listings and respond to reservation requests. Enables direct communication between accommodation providers and customers.',
    'Resepsion': 'A hotel, bungalow, and villa reservation application where users can create booking requests and receive offers from various accommodation providers. Streamlines the booking process for both customers and property owners.',
    'MobiWax': 'A global car wash service application that connects customers with mobile car wash providers. Users can request on-demand car wash services at their location, making vehicle maintenance more convenient.',
    'AGS Urla': 'A specialized security services application for the Urla region. Provides information about security services, emergency contacts, and real-time security updates for local businesses and residents.',
    'GeVi': 'A unique video messaging app that allows users to send scheduled video messages to their loved ones in the future. Perfect for creating lasting memories and special moments.',
    'Courier': 'An intelligent delivery management system that automatically assigns restaurant orders to available couriers. Features real-time order tracking and status updates for both restaurants and couriers.',
    'PyLearn': 'An interactive Python programming education platform offering structured learning paths, practical exercises, and real-time coding feedback for beginners and intermediate learners.',
    'Dispatcher Quiz': 'A specialized training and examination application for aviation dispatchers. Provides comprehensive study materials, practice tests, and performance analytics.'
  },
  web: {
    'TridyGames': 'A custom website for TridyGames, featuring game showcases, company information, and interactive elements. Built with modern web technologies to provide an engaging user experience.',
    'Resepsion': 'A comprehensive web platform for the Resepsion reservation system, including an admin panel, booking management, and detailed property listings. Features real-time availability updates and secure payment processing.',
    'Apparelte': 'A landing page and promotional website for the Apparelte mobile app, showcasing features, technology stack, and user benefits. Includes detailed information about the app\'s capabilities and design philosophy.'
  }
};

const technologies: Technologies = {
  mobile: {
    'Apparelte': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png', '/tech-icons/git.png', '/tech-icons/django.png', '/tech-icons/figma.webp'],
    'Resepsion Plus': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png', '/tech-icons/git.png', '/tech-icons/node_js.png'],
    'Resepsion': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png', '/tech-icons/git.png', '/tech-icons/node_js.png'],
    'MobiWax': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png', '/tech-icons/node_js.png', '/tech-icons/git.png'],
    'AGS Urla': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png','/tech-icons/node_js.png', '/tech-icons/git.png'],
    'GeVi': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png', '/tech-icons/git.png'],
    'Courier': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png','/tech-icons/node_js.png', '/tech-icons/git.png','/tech-icons/figma.webp'],
    'PyLearn': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png', '/tech-icons/git.png'],
    'Dispatcher Quiz': ['/tech-icons/flutter.webp', '/tech-icons/firebase.png', '/tech-icons/git.png']
  },
  web: {
    'TridyGames': ['/tech-icons/next_js.png', '/tech-icons/tailwind.png', '/tech-icons/git.png'],
    'Resepsion': ['/tech-icons/next_js.png', '/tech-icons/tailwind.png','/tech-icons/firebase.png', '/tech-icons/git.png'],
    'Apparelte': ['/tech-icons/flutter.webp', '/tech-icons/git.png'],
  }
};

const projectLogos: { [key: string]: string } = {
  'Resepsion': '/app-icons/resepsion.jpg',
  'Apparelte': '/app-icons/apparelte.png',
  'MobiWax': '/app-icons/mobiWax.png',
  'AGS Urla': '/app-icons/ags.png',
  'GeVi': '/app-icons/GeVi.jpg',
  'Courier': '/app-icons/courier.png',
  'PyLearn': '/app-icons/pyLearn.png',
  'Dispatcher Quiz': '/app-icons/dispatcher.png',
  'Resepsion Plus': '/app-icons/resepsion_plus.png',
  'TridyGames': '/app-icons/tridygames.jpeg',
  'Resepsion Web': '/app-icons/resepsion.jpg',
  'Apparelte Web': '/app-icons/apparelte.png',
  'Portfolio': '/app-icons/sukrukemuk.png',
  'API Backend': '/app-icons/sukrukemuk.png'
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<{ name: string; type: ProjectType } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  // Preload all images when app is selected
  useEffect(() => {
    if (selectedApp) {
      selectedApp.screenshots.forEach(screenshot => {
        const img = new window.Image();
        img.src = screenshot;
        img.onload = () => {
          setPreloadedImages(prev => new Set([...prev, screenshot]));
        };
      });
    }
  }, [selectedApp]);

  const handleAppSelect = (app: App) => {
    setSelectedApp(app);
    setCurrentScreenshotIndex(0);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setSelectedApp(null);
    setIsModalOpen(false);
  };
  
  const handleNextScreenshot = () => {
    if (selectedApp) {
      setCurrentScreenshotIndex((prev: number) => (prev + 1) % selectedApp.screenshots.length);
    }
  };

  return (
    <>
      <main className={`min-h-screen w-full bg-gradient-to-br from-[#050b1a] via-[#0a1428] to-[#0f1c3d] flex flex-col items-center justify-start py-12 px-4 overflow-x-hidden${isModalOpen ? ' blur-md' : ''}`}>
        {/* Simplified Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
            {/* Mobile Projects */}
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
                      onClick={() => setSelectedProject({ name: projectName, type: 'mobile' })}
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

            {/* Center Content - iPhone UI */}
            <div className="w-full lg:w-1/3 flex justify-center items-center my-6 lg:my-0">
              <div className="transform scale-85 md:scale-95">
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-[500px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                }>
                  {/* @ts-expect-error */}
                  <IPhoneUI apps={apps} onModalOpenChange={setIsModalOpen} onAppSelect={handleAppSelect} />
                </Suspense>
              </div>
            </div>

            {/* Web Projects */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6 lg:pt-[60px]">
              <div className="flex justify-center">
                <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-3 tracking-tight relative inline-block text-center">
                  Web Projects
                  <div className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(technologies.web).map(([projectName, techIcons]) => (
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
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400 group-hover:from-blue-400 group-hover:to-pink-400 transition-colors duration-200">
                        {projectName}
                      </h3>
                      <div className="flex gap-2 mt-2">
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
                      onClick={() => setSelectedProject({ name: projectName, type: 'web' })}
                      className="w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-200 flex items-center justify-center flex-shrink-0"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Information</h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  You can explore the mobile applications I've developed using the phone interface on the left and check out my published web projects. Click on the project cards for detailed information about the technologies used and project details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-xl flex items-center justify-center z-50">
          <div className="relative w-full max-w-md mx-4">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center">
              <div className="relative w-full flex justify-center pt-8 pb-4">
                <div className="relative w-[220px] h-[476px]">
                  {selectedApp.screenshots.length > 0 ? (
                    <>
                      <div className="absolute top-[3.5%] left-0 w-full h-[93%] z-20 rounded-[40px] overflow-hidden">
                        <Image
                          src={selectedApp.screenshots[currentScreenshotIndex]}
                          alt={selectedApp.name}
                          fill
                          className="object-contain"
                          sizes="220px"
                          priority={true}
                          loading="eager"
                          quality={90}
                        />
                      </div>
                      <Image
                        src="/iphone_mockup.png"
                        alt="iPhone Mockup"
                        fill
                        className="object-contain z-30 pointer-events-none select-none"
                        sizes="220px"
                      />
                    </>
                  ) : (
                    <div className="absolute top-[3.5%] left-0 w-full h-[93%] z-20 rounded-[40px] overflow-hidden bg-white/10 flex items-center justify-center">
                      <p className="text-white/80 text-sm text-center px-4">Screenshots are not available yet</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full px-8 pb-8 flex flex-col items-center">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl overflow-hidden shadow bg-white/20">
                    <Image
                      src={selectedApp.icon}
                      alt={selectedApp.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                      sizes="40px"
                    />
                  </div>
                  <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">{selectedApp.name}</h3>
                </div>
                <p className="text-white/90 text-xs text-center mb-2">{selectedApp.description}</p>
                <div className="flex items-center gap-2 mb-2">
                  {selectedApp.screenshots.map((_: any, index: number) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                        index === currentScreenshotIndex ? 'bg-blue-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={selectedApp.screenshots.length === 0 || currentScreenshotIndex === selectedApp.screenshots.length - 1 ? handleCloseModal : handleNextScreenshot}
                  className={`${
                    selectedApp.screenshots.length === 0 || currentScreenshotIndex === selectedApp.screenshots.length - 1 
                    ? 'bg-red-500/80 hover:bg-red-500/90' 
                    : 'bg-white/20 hover:bg-white/30'
                  } px-4 py-1.5 rounded-full text-xs font-medium text-white transition-colors duration-200 flex items-center gap-1`}
                >
                  <span>{selectedApp.screenshots.length === 0 || currentScreenshotIndex === selectedApp.screenshots.length - 1 ? 'Close' : 'Next'}</span>
                  {selectedApp.screenshots.length === 0 || currentScreenshotIndex === selectedApp.screenshots.length - 1 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              </div>
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 flex items-center justify-center z-40"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Project Details Dialog */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-lg w-full mx-4 relative">
            <button
              onClick={() => setSelectedProject(null)}
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
      )}

      <style jsx global>{`
        .backdrop-blur-lg {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      `}</style>
    </>
  );
} 