'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-black/90 flex flex-col items-center px-4 py-24">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-pulse delay-300"></div>
      </div>

      {/* Header Section */}
      <section className="w-full max-w-4xl flex flex-col items-center glassmorphism p-10 rounded-3xl shadow-2xl mb-12 relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"></div>
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 text-center relative">
          Get in Touch
        </h1>
        <p className="text-gray-300 text-center max-w-2xl relative">
          Feel free to reach out for your projects, ask questions, or discuss potential collaborations.
        </p>
      </section>

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="glassmorphism p-8 rounded-2xl shadow-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                placeholder="Enter message subject"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 resize-none"
                placeholder="Enter your message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="glassmorphism p-8 rounded-2xl shadow-xl animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Contact Information
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <FaEnvelope className="text-blue-400 text-xl" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Email</h3>
                <a href="mailto:sukrukemuk@gmail.com" className="text-white hover:text-blue-400 transition-colors duration-300">
                  sukrukemuk@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <FaPhone className="text-purple-400 text-xl" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Phone</h3>
                <a href="tel:+905379214751" className="text-white hover:text-purple-400 transition-colors duration-300">
                  +90 537 921 47 51
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://github.com/sukrukemuk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <FaGithub className="text-white/80 group-hover:text-purple-400 text-xl transition-colors duration-300" />
                </div>
                <span className="text-white/80 group-hover:text-purple-400 transition-colors duration-300">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/sukrukemuk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <FaLinkedin className="text-white/80 group-hover:text-blue-400 text-xl transition-colors duration-300" />
                </div>
                <span className="text-white/80 group-hover:text-blue-400 transition-colors duration-300">LinkedIn</span>
              </a>
              <a href="https://instagram.com/sukrukemuk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <FaInstagram className="text-white/80 group-hover:text-pink-400 text-xl transition-colors duration-300" />
                </div>
                <span className="text-white/80 group-hover:text-pink-400 transition-colors duration-300">Instagram</span>
              </a>
              <a href="https://x.com/sukrukemuk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <FaXTwitter className="text-white/80 group-hover:text-gray-400 text-xl transition-colors duration-300" />
                </div>
                <span className="text-white/80 group-hover:text-gray-400 transition-colors duration-300">X (Twitter)</span>
              </a>
              <a href="https://facebook.com/sukrukemukk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <FaFacebook className="text-white/80 group-hover:text-blue-400 text-xl transition-colors duration-300" />
                </div>
                <span className="text-white/80 group-hover:text-blue-400 transition-colors duration-300">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Liquid Glass Style */}
      <style jsx global>{`
        .glassmorphism {
          background: rgba(30, 30, 40, 0.55);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </main>
  );
} 