'use client';

import { services } from '@/data/services/services';
import Header from '@/components/services/Header';
import ServiceCard from '@/components/services/ServiceCard';
import ContactCTA from '@/components/services/ContactCTA';
import Footer from '@/components/shared/Footer';

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/90 flex flex-col items-center px-4 py-12">
      {/* Simplified Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent"></div>
      </div>

      <Header />

      {/* Services Grid */}
      <div className="w-full max-w-4xl grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      <ContactCTA />
      <Footer />

      {/* Simplified Glass Style */}
      <style jsx global>{`
        .glassmorphism {
          background: rgba(30, 30, 40, 0.55);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
          backdrop-filter: blur(8px) saturate(180%);
          -webkit-backdrop-filter: blur(8px) saturate(180%);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
      `}</style>
    </main>
  );
} 