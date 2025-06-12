'use client';

import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';

const sfPro = localFont({
  src: [
    {
      path: '../../../public/fonts/sf-pro-display-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/sf-pro-display-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/sf-pro-display-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/sf-pro-display-black-italic.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/sf-pro-display-heavy-italic.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/sf-pro-display-semibold-italic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/sf-pro-display-light-italic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/sf-pro-display-thin-italic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../../public/fonts/sf-pro-display-ultralight-italic.otf',
      weight: '200',
      style: 'italic',
    }
  ],
  variable: '--font-sf-pro'
});

interface App {
  id: string;
  name: string;
  icon: string;
  screenshots: string[];
  description: string;
}

interface IPhoneUIProps {
  apps: App[];
  onModalOpenChange?: (open: boolean) => void;
  onAppSelect?: (app: App) => void;
}

export default function IPhoneUI({ apps, onModalOpenChange, onAppSelect }: IPhoneUIProps) {
  const handleAppClick = (app: App) => {
    if (onAppSelect) onAppSelect(app);
    if (onModalOpenChange) onModalOpenChange(true);
  };

  return (
    <div className="relative w-[375px] h-[812px] mx-auto my-8">
      {/* iPhone Mockup */}
      <div className="relative w-full h-full">
        <Image
          src="/mockup/iphone_mockup.png"
          alt="iPhone Mockup"
          fill
          className="object-contain z-10"
        />
        
        {/* Screen Content */}
        <div className="absolute top-[3%] left-[4%] right-[4%] bottom-[3%] rounded-[40px] overflow-hidden z-0">
          <Image
            src="/mockup/wallpaper.jpg"
            alt="Wallpaper"
            fill
            className="object-cover"
          />
          {/* Status Bar */}
          <div className="relative h-[60px] flex items-center justify-between px-8 pt-2">
            <span className={`text-[15px] font-semibold text-white ${sfPro.className}`}>9:41</span>
            <div className="flex items-center space-x-2">
              {/* Cellular Icon */}
              <Image src="/mockup/cellular.png" alt="Cellular Signal" width={16} height={16} style={{ filter: 'invert(1) brightness(2)' }} />
              {/* WiFi Icon */}
              <Image src="/mockup/wifi.png" alt="WiFi Signal" width={16} height={16} style={{ filter: 'invert(1) brightness(2)' }} />
              {/* Battery Icon */}
              <Image src="/mockup/battery.png" alt="Battery" width={20} height={20} style={{ filter: 'invert(1) brightness(2)' }} />
            </div>
          </div>
        </div>

        {/* App Grid Layer */}
        <div className="absolute top-[3%] left-[4%] right-[4%] bottom-[3%] z-20">
          <div className="pt-24 p-8 grid grid-cols-4 gap-8">
            {apps.map((app) => (
              <div
                key={app.id}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => handleAppClick(app)}
              >
                <div className="w-16 h-16 rounded-[22px] overflow-hidden mb-2 shadow-lg transform transition-transform duration-200 group-hover:scale-110 bg-white">
                  <Image
                    src={app.icon}
                    alt={app.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className={`text-[10px] text-white text-center font-medium ${sfPro.variable}`}>{app.name}</span>
              </div>
            ))}
          </div>

          {/* Dock Area */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[95%] bg-white/20 backdrop-blur-xl rounded-[30px] py-3 px-6">
            <div className="flex justify-center items-center gap-6">
              <div className="flex flex-col items-center cursor-pointer group" onClick={() => window.open('https://tridy-games.vercel.app/', '_blank')}>
                <div className="w-14 h-14 rounded-[18px] overflow-hidden shadow-lg transform transition-transform duration-200 group-hover:scale-110 bg-white">
                  <Image
                    src="/app-icons/tridygames.jpeg"
                    alt="TridyGames"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center cursor-pointer group" onClick={() => window.open('https://resepsion.vercel.app/', '_blank')}>
                <div className="w-14 h-14 rounded-[18px] overflow-hidden shadow-lg transform transition-transform duration-200 group-hover:scale-110 bg-white">
                  <Image
                    src="/app-icons/resepsion.jpg"
                    alt="Resepsion"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center cursor-pointer group" onClick={() => window.open('https://apparelte.com/', '_blank')}>
                <div className="w-14 h-14 rounded-[18px] overflow-hidden shadow-lg transform transition-transform duration-200 group-hover:scale-110 bg-white">
                  <Image
                    src="/app-icons/apparelte.png"
                    alt="Apparelte"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center cursor-pointer group" onClick={() => window.open('https://sukrukemukk.github.io/', '_blank')}>
                <div className="w-14 h-14 rounded-[18px] overflow-hidden shadow-lg transform transition-transform duration-200 group-hover:scale-110 bg-white">
                  <Image
                    src="/app-icons/dispatcher.png"
                    alt="Dispatcher Quiz"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}