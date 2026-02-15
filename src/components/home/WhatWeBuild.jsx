import React from "react";
import { FaMicrochip, FaCogs, FaGlobe, FaShieldAlt } from "react-icons/fa";

const WhatWeBuild = () => {
  const products = [
    {
      icon: <FaMicrochip />,
      title: "AI-Powered ITMS",
      why: "Traditional timers are inefficient. We build systems that 'see' traffic to reduce city congestion by up to 35%.",
      tech: "Computer Vision • Real-time Processing"
    },
    {
      icon: <FaGlobe />, 
      title: "IoT Solutions",
      why: "Connected devices and smart systems for real-time monitoring. We bridge the physical and digital worlds for smarter urban living.",
      tech: "Embedded Systems • Smart Sensors"
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure R&D Prototypes",
      why: "Innovation requires safety. We build secure, encrypted research models that allow for rapid testing without data leaks.",
      tech: "Data Security • Python R&D"
    }
  ];

  return (
    <section id="build" className="py-24 px-6 md:px-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Engineering <span className="text-[#FFB000]">Solutions</span> <br /> 
              With Purpose.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We don't just write code; we solve urban and enterprise bottlenecks through deep research and iterative development.
            </p>
          </div>
          <div data-aos="fade-left" className="hidden md:block">
             <div className="text-right">
                <span className="text-8xl font-black text-gray-200/50 absolute -mt-12 -ml-24 z-0 pointer-events-none select-none">BUILD</span>
                <p className="relative z-10 font-bold text-[#FFB000] tracking-widest uppercase text-sm">Our Focus 2026</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 150}
              className="group relative bg-white p-10 rounded-[2.5rem] border border-gray-100 
                         transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                         hover:shadow-[0_20px_50px_rgba(255,176,0,0.15)] 
                         hover:-translate-y-3 hover:scale-[1.02] cursor-default"
            >
              <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center text-3xl text-[#FFB000] mb-8 
                              transition-all duration-500 ease-in-out
                              group-hover:bg-[#FFB000] group-hover:text-white group-hover:rotate-[360deg]">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-[#FFB000]">
                {item.title}
              </h3>
              
              <div className="mb-2">
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">The Rationale</span>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-base font-medium opacity-90">
                {item.why}
              </p>

              <div className="pt-6 border-t border-gray-50 flex items-center gap-2 text-gray-400 
                              font-bold text-[11px] uppercase tracking-wider
                              transition-colors duration-300 group-hover:text-[#FFB000]">
                <FaCogs className="animate-spin-slow group-hover:animate-spin" /> {item.tech}
              </div>

              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#FFB000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;