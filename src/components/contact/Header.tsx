export default function Header() {
  return (
    <section className="w-full max-w-4xl flex flex-col items-center glassmorphism p-10 rounded-3xl shadow-2xl mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 text-center relative">
        Get in Touch
      </h1>
      <p className="text-gray-300 text-center max-w-2xl relative">
        Feel free to reach out for your projects, ask questions, or discuss potential collaborations.
      </p>
    </section>
  );
} 