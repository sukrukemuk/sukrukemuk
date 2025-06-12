import { career } from "@/data/home/career";

const Career = () => {
  return (
    <section className="w-full max-w-4xl mt-12 glassmorphism p-8 rounded-2xl shadow-xl">
      <h3 className="text-2xl font-bold text-white mb-8 text-center relative">
        <span className="relative z-10">My Career</span>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </h3>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50"></div>
        {career.map((item, idx) => (
          <div key={idx} className="relative mb-12 last:mb-0 group">
            <div className="flex items-start gap-6">
              <div className="relative z-10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{item.year.split("-")[0]}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <span className="text-xs text-gray-400">{item.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career; 