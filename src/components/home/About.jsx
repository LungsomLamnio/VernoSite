import React from "react";
import { FaEye, FaBullseye, FaUsers } from "react-icons/fa";

const vernovateGold = "#FFB000";

const AboutCard = ({ icon, title, desc, delay }) => (
  <div data-aos="fade-up" data-aos-delay={delay} className="h-full group">
    <div className="relative bg-white/70 backdrop-blur-xl rounded-[3rem] p-10 text-center border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(255,176,0,0.15)] transition-all duration-700 flex flex-col items-center h-full cursor-default overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      
      <div className="h-20 w-20 mb-8 flex items-center justify-center bg-white rounded-3xl text-3xl shadow-sm border border-gray-50 group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-1000 ease-in-out" style={{ color: vernovateGold }}>
        {icon}
      </div>

      <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-[#FFB000] transition-colors duration-300">
        {title}
      </h2>
      
      <p className="text-gray-500 text-md leading-relaxed font-medium">
        {desc}
      </p>

      <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-700" />
    </div>
  </div>
);

const About = () => (
  <section id="about" className="relative py-32 px-6 md:px-20 bg-[#FAFAFA] overflow-hidden">
    
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-200/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/30 blur-3xl rounded-full animate-pulse delay-700" />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-gray-900">
          Who <span className="relative">
            <span className="relative z-10 text-[#FFB000]">We Are</span>
            <span className="absolute bottom-2 left-0 w-full h-4 bg-yellow-400/10 -rotate-1" />
          </span>
        </h2>
        
        <p className="mt-8 text-gray-500 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
          Vernovate is a pioneer in disruptive engineering, proudly <span className="text-gray-900 font-bold decoration-yellow-400 decoration-4 underline-offset-4">incubated at down town Venture Labs (dtVL)</span> within the ecosystem of <span className="text-gray-900 font-bold">Assam down town University.</span> We specialize in architecting intelligent, high-impact systems designed to solve complex, real-world urban and enterprise challenges.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
        <AboutCard 
          icon={<FaEye />} 
          title="Our Vision" 
          delay="200" 
          desc="To define the global benchmark for intelligent system innovation, fostering a smarter and more seamlessly connected world." 
        />
        <AboutCard 
          icon={<FaBullseye />} 
          title="Our Mission" 
          delay="400" 
          desc="To engineer scalable, cutting-edge technology solutions that drive efficiency and empower modern communities and businesses." 
        />
        <AboutCard 
          icon={<FaUsers />} 
          title="Our Values" 
          delay="600" 
          desc="Built on a foundation of Innovation, Integrity, and Scalability, we ensure every solution delivers measurable impact." 
        />
      </div>
    </div>
  </section>
);

export default About;