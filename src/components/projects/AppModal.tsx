import Image from 'next/image';
import { App } from '@/data/projects/projects';

interface AppModalProps {
  selectedApp: App | null;
  currentScreenshotIndex: number;
  onClose: () => void;
  onNextScreenshot: () => void;
}

export default function AppModal({ selectedApp, currentScreenshotIndex, onClose, onNextScreenshot }: AppModalProps) {
  if (!selectedApp) return null;

  return (
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
          
          <div className="flex items-center gap-3 mb-4">
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

          <div className="flex items-center gap-2 mb-4">
            {selectedApp.screenshots.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
                  index === currentScreenshotIndex ? 'bg-blue-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={selectedApp.screenshots.length === 0 || currentScreenshotIndex === selectedApp.screenshots.length - 1 ? onClose : onNextScreenshot}
            className={`${
              selectedApp.screenshots.length === 0 || currentScreenshotIndex === selectedApp.screenshots.length - 1 
              ? 'bg-red-500/80 hover:bg-red-500/90' 
              : 'bg-white/20 hover:bg-white/30'
            } px-4 py-1.5 rounded-full text-xs font-medium text-white transition-colors duration-200 flex items-center gap-1 mb-6`}
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
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 flex items-center justify-center z-40"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
} 