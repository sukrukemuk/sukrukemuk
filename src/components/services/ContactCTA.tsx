export default function ContactCTA() {
  return (
    <div className="w-full max-w-4xl mt-12 glassmorphism p-8 rounded-2xl text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
      <div className="relative">
        <h2 className="text-2xl font-bold text-white mb-4">
          Want to Get Services for Your Project?
        </h2>
        <p className="text-gray-300 mb-6">
          Contact me for modern and scalable solutions.
        </p>
        <a 
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-colors duration-200"
        >
          Get in Touch
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
} 