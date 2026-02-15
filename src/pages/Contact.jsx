import React, { useState } from "react";
import { FaPaperPlane, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Vernovate R&D Inquiry:", formData);
    alert("Message sent to the Vernovate team!");
  };

  return (
    <div className="pt-40 md:pt-56 pb-24 px-6 md:px-20 bg-white selection:bg-yellow-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 md:mb-24" data-aos="fade-down">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-tight">
            Let's Build the <br /> <span className="text-[#FFB000]">Future Together.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            Whether you have a question about our <span className="text-gray-900 font-bold">ITMS solutions</span> or want to collaborate on R&D, our team is ready to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12" data-aos="fade-right">
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-[#FFB000] text-2xl group-hover:bg-[#FFB000] group-hover:text-white transition-all duration-500">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email Us</h3>
                  <p className="text-xl font-bold text-gray-900 hover:text-[#FFB000] transition-colors cursor-pointer">
                    contact@vernovate.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-[#FFB000] text-2xl group-hover:bg-[#FFB000] group-hover:text-white transition-all duration-500">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Incubation Hub</h3>
                  <p className="text-xl font-bold text-gray-900 leading-tight">
                    down town Venture Labs (dtvl),<br />
                    Assam down town University
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Connect with the Founder</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/lungsom-lamnio-737a2824b/" target="_blank" className="p-4 bg-slate-50 rounded-2xl text-gray-900 hover:bg-[#FFB000] hover:text-white transition-all shadow-sm">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/Lungsom" target="_blank" className="p-4 bg-slate-50 rounded-2xl text-gray-900 hover:bg-[#FFB000] hover:text-white transition-all shadow-sm">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-2xl shadow-gray-200/50" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Name</label>
                  <input type="text" required className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#FFB000]/20 focus:border-[#FFB000] transition-all" placeholder="Your Name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email</label>
                  <input type="email" required className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#FFB000]/20 focus:border-[#FFB000] transition-all" placeholder="yourname@example.com" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Subject</label>
                <input type="text" required className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#FFB000]/20 focus:border-[#FFB000] transition-all" placeholder="Inquiry about ITMS" onChange={(e) => setFormData({...formData, subject: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Message</label>
                <textarea rows="4" required className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#FFB000]/20 focus:border-[#FFB000] transition-all resize-none" placeholder="How can we help you?" onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-900 text-white font-bold py-5 rounded-2xl hover:bg-[#FFB000] transition-all shadow-xl shadow-gray-900/10 hover:shadow-yellow-500/30 flex items-center justify-center gap-3 active:scale-[0.98]">
                SEND INQUIRY <FaPaperPlane size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;