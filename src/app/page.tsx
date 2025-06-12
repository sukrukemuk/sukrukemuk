'use client';

import About from "@/components/home/About";
import Technologies from "@/components/home/Technologies";
import Career from "@/components/home/Career";
import Projects from "@/components/home/Projects";
import Footer from "@/components/shared/Footer";
import Background from "@/components/shared/Background";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/90 flex flex-col items-center px-4 py-12">
      <Background />
      <About />
      <Technologies />
      <Career />
      <Projects />
      <Footer />

      {/* Simplified Glass Style */}
      <style jsx global>{`
        .glassmorphism {
          background: rgba(30, 30, 40, 0.55);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
      `}</style>
    </main>
  );
}
