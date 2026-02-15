import React from "react";
import { FaTrafficLight, FaCogs, FaChartLine, FaEye, FaMicrochip, FaNetworkWired } from "react-icons/fa";

const TrafficSolutions = () => {
  return (
    <section id="work" className="py-16 md:py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
          
          <div 
            data-aos="fade-right" 
            className="order-2 md:order-1 relative p-6 md:p-10 bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-yellow-200 overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="h-20 w-full bg-slate-900 rounded-2xl flex items-center px-4 md:px-6 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-2 h-full bg-red-500 shadow-[4px_0_15px_rgba(239,68,68,0.5)]"></div>
                <div className="flex gap-3 animate-pulse">
                  <div className="w-8 md:w-12 h-6 bg-[#FFB000] rounded-md opacity-40"></div>
                  <div className="w-8 md:w-12 h-6 bg-[#FFB000] rounded-md"></div>
                </div>
                <div className="ml-auto flex flex-col items-end">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest opacity-80">Lane A</span>
                  <span className="text-red-400 text-[10px] font-mono font-bold animate-pulse">CONGESTED</span>
                </div>
              </div>
              
              <div className="flex justify-center py-2 relative">
                 <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-yellow-400/10 rounded-full animate-ping opacity-20"></div>
                </div>
                 <FaCogs className="text-5xl text-[#FFB000] animate-spin-slow relative z-10" />
              </div>

              <div className="h-20 w-full bg-slate-900 rounded-2xl flex items-center px-4 md:px-6 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-2 h-full bg-green-500 shadow-[4px_0_15px_rgba(34,197,94,0.5)]"></div>
                <div className="flex gap-3">
                  <div className="w-8 md:w-12 h-6 bg-blue-500 rounded-md animate-bounce"></div>
                  <div className="w-8 md:w-12 h-6 bg-blue-500 rounded-md animate-bounce [animation-delay:0.2s]"></div>
                </div>
                <div className="ml-auto flex flex-col items-end">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest opacity-80">Lane B</span>
                  <span className="text-green-400 text-[10px] font-mono font-bold uppercase tracking-widest">Optimized</span>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="order-1 md:order-2">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-lg bg-yellow-50 text-[#FFB000] text-xs font-bold tracking-widest uppercase">
              Core IP: Intelligent Mobility
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              AI-Driven Traffic <br className="hidden md:block" />
              <span className="text-[#FFB000]">Management Systems</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium">
              Vernovate Pvt. Ltd focuses on building scalable traffic solutions. Our ITMS 
              adjusts the timings of traffic light boxes according to real-time congestion 
              on each road, effectively eliminating unnecessary idling and gridlock.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-yellow-50 rounded-2xl text-[#FFB000] group-hover:bg-[#FFB000] group-hover:text-white transition-all">
                  <FaTrafficLight size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider">Smart Timings</h4>
                  <p className="text-sm text-gray-500">Self-optimizing light sequences.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-4 bg-yellow-50 rounded-2xl text-[#FFB000] group-hover:bg-[#FFB000] group-hover:text-white transition-all">
                  <FaChartLine size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 uppercase text-xs tracking-wider">Urban Analytics</h4>
                  <p className="text-sm text-gray-500">Live congestion heat-mapping.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-gray-100 pt-20">
          <div className="text-center mb-16" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How it Works</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">Our multi-layered approach ensures every second on the road is utilized efficiently through computer vision and edge computing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WorkflowCard 
              icon={<FaEye />}
              step="01"
              title="Perception"
              desc="High-precision cameras and sensors capture live vehicle density across all intersection lanes."
            />
            <WorkflowCard 
              icon={<FaMicrochip />}
              step="02"
              title="Edge Processing"
              desc="Local AI modules analyze congestion levels in milliseconds to calculate the optimal green-light duration."
            />
            <WorkflowCard 
              icon={<FaNetworkWired />}
              step="03"
              title="Execution"
              desc="The central ITMS box overrides static timers, clearing the busiest roads first while maintaining safety buffers."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkflowCard = ({ icon, step, title, desc }) => (
  <div data-aos="fade-up" className="relative p-8 rounded-3xl bg-white border border-gray-50 hover:border-yellow-200 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-500 group">
    <div className="absolute top-4 right-8 text-5xl font-black text-gray-50 group-hover:text-yellow-50 transition-colors">{step}</div>
    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#FFB000] mb-6 group-hover:bg-[#FFB000] group-hover:text-white transition-all">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
    <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
  </div>
);

export default TrafficSolutions;