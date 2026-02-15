import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logoUrl = "https://res.cloudinary.com/dgmftp80m/image/upload/v1771133644/V_Logo_isefg2.png";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-0 w-full z-[100] flex justify-center transition-all duration-700 pointer-events-none">
      <nav 
        className={`
          mt-4 md:mt-8 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-auto flex items-center justify-between
          ${scrolled 
            ? "w-[92%] md:w-[780px] py-3 px-6 md:px-8 bg-white/80 backdrop-blur-2xl rounded-full border border-white/40 shadow-2xl shadow-gray-200/50" 
            : "w-full py-5 md:py-8 px-5 md:px-20 bg-transparent border-transparent"
          }
        `}
      >
        <Link 
          to="/" 
          onClick={() => {
            setIsOpen(false);
            window.scrollTo({top: 0, behavior: 'smooth'});
          }} 
          className="flex items-center gap-3 md:gap-5 group cursor-pointer z-[110]"
        >
          <img 
            src={logoUrl} 
            alt="Vernovate Logo" 
            className={`transition-all duration-500 object-contain ${scrolled ? "h-8 md:h-12" : "h-12 md:h-20"}`} 
          />
          <div className="flex flex-col justify-center">
            <span className={`transition-all duration-500 leading-none tracking-tight ${scrolled ? "text-lg md:text-2xl font-bold text-gray-900" : "text-2xl md:text-5xl font-black text-gray-900 tracking-tighter"}`}>
              VERNOVATE
            </span>
            {!scrolled && (
              <span className="font-bold text-[#FFB000] uppercase text-[10px] md:text-[14px] tracking-[0.3em] mt-1 md:mt-2 animate-fadeIn">
                Pvt. Ltd.
              </span>
            )}
          </div>
        </Link>

        <div className={`hidden md:flex items-center transition-all duration-500 ${scrolled ? "gap-8 text-[13px]" : "gap-12 text-[14px]"} font-bold uppercase tracking-[0.2em] ${scrolled ? "text-gray-900" : "text-gray-500"}`}>
          <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="hover:text-[#FFB000] transition-colors relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFB000] transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="hover:text-[#FFB000] transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFB000] transition-all duration-300 group-hover:w-full"></span>
          </a>
          
          <button 
            onClick={() => navigate("/contact")}
            className={`flex items-center gap-3 rounded-full transition-all duration-500 font-bold ${scrolled ? "bg-gray-900 text-white px-6 py-2.5 text-[11px] hover:bg-[#FFB000]" : "bg-gray-900 text-white px-10 py-4 text-[13px] hover:bg-[#FFB000] shadow-xl shadow-yellow-500/20"}`}
          >
            {scrolled ? "CONTACT" : "GET IN TOUCH"} <FaArrowRight size={scrolled ? 10 : 12} />
          </button>
        </div>

        <div 
          className="md:hidden p-2 cursor-pointer z-[110] transition-all duration-300 text-gray-900" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={28} className="text-gray-900" /> : <FaBars size={24} />}
        </div>
      </nav>

      <div className={`fixed inset-0 bg-white/95 backdrop-blur-3xl z-[100] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}>
        <div className="flex flex-col items-center gap-8 md:gap-12 font-black text-3xl md:text-4xl uppercase tracking-tighter text-gray-900">
          <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="hover:text-[#FFB000] transition-all">Services</a>
          <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="hover:text-[#FFB000] transition-all">About</a>
          <button 
            className="mt-6 bg-[#FFB000] text-white px-10 py-4 md:px-12 md:py-5 rounded-full text-xl md:text-2xl shadow-2xl shadow-yellow-500/40" 
            onClick={() => { setIsOpen(false); navigate("/contact"); }}
          >
            CONNECT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;