import React from "react";
import { FaChevronRight, FaPlayCircle, FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <header className="relative pt-36 pb-24 md:pt-52 md:pb-40 px-6 overflow-hidden bg-[#FAFAFA]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] right-[-5%] w-[50%] h-[50%] bg-yellow-400/10 blur-[140px] rounded-full animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-400/5 blur-[120px] rounded-full animate-blob animation-delay-4000"></div>
        
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.3]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">

          <h1 
            data-aos="zoom-out" 
            className="text-5xl sm:text-7xl md:text-8xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tighter"
          >
            Smarter Tech. <br />
            <span className="text-[#FFB000]">Seamless Cities.</span>
          </h1>

          <p 
            data-aos="fade-up" 
            data-aos-delay="100" 
            className="text-gray-500 text-lg md:text-2xl max-w-2xl mx-auto mb-14 leading-relaxed font-light"
          >
            Vernovate Pvt Ltd bridges the gap between AI research and urban mobility. 
            We build the algorithms that power tomorrow's infrastructure.
          </p>

          <div 
            data-aos="fade-up" 
            data-aos-delay="200" 
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <button className="group relative bg-gray-900 text-white px-12 py-5 rounded-full font-bold transition-all hover:bg-[#FFB000] hover:shadow-2xl hover:shadow-yellow-500/30 active:scale-95">
              <span className="flex items-center gap-3">
                Explore Solutions <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="flex items-center gap-3 font-bold text-gray-400 hover:text-gray-900 transition-colors group">
              <FaPlayCircle className="text-2xl text-[#FFB000] group-hover:scale-110 transition-transform" />
              <span>Watch ITMS Demo</span>
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
           {[
             "AI-Driven Traffic Light Box",
             "Dynamic Congestion Adjustments",
             "Scalable MERN Infrastructure"
           ].map((feature, i) => (
             <div 
               key={i}
               data-aos="fade-up"
               data-aos-delay={300 + (i * 100)}
               className="flex items-center gap-3 bg-white/50 backdrop-blur-md border border-white p-4 rounded-2xl shadow-sm group hover:border-[#FFB000]/30 transition-colors"
             >
               <FaCheckCircle className="text-[#FFB000] shrink-0" />
               <span className="text-sm font-semibold text-gray-600">{feature}</span>
             </div>
           ))}
        </div>
      </div>
    </header>
  );
};

export default Hero;