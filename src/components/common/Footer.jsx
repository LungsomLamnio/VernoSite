import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaRocket, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhoneAlt 
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        <div data-aos="fade-up" className="bg-[#FFB000] rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between shadow-xl shadow-yellow-500/20">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Ready to transform your city?</h2>
            <p className="text-gray-800 font-medium">Let's discuss how our AI solutions can work for you.</p>
          </div>
          <button 
            onClick={() => navigate("/contact")}
            className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
          >
            Contact Team Vernovate <FaEnvelope />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-[#FFB000] flex items-center justify-center">
                <FaRocket className="text-white text-sm" />
              </div>
              VERNOVATE
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Engineering the next generation of urban mobility through AI, 
              Computer Vision, and scalable R&D solutions.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<FaLinkedin />} href="https://www.linkedin.com/company/vernovate-pvt-ltd-page/?viewAsMember=true" />
              <SocialIcon icon={<FaGithub />} href="" />
              <SocialIcon icon={<FaTwitter />} href="" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-gray-800 pb-2 inline-block">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#about" className="hover:text-[#FFB000] transition-colors">About Us</a></li>
              <li><a href="#traffic-solutions" className="hover:text-[#FFB000] transition-colors">ITMS Solution</a></li>
              <li><a href="#what-we-build" className="hover:text-[#FFB000] transition-colors">Our Research</a></li>
              <li><button className="hover:text-[#FFB000] transition-colors">Careers</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-gray-800 pb-2 inline-block">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-[#FFB000] transition-colors">Software Development</a></li>
              <li><a href="#services" className="hover:text-[#FFB000] transition-colors">AI & Machine Learning</a></li>
              <li><a href="#services" className="hover:text-[#FFB000] transition-colors">IoT & Smart Systems</a></li>
              <li><a href="#services" className="hover:text-[#FFB000] transition-colors">Smart City Tech</a></li>
              <li><a href="#services" className="hover:text-[#FFB000] transition-colors">Data Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-gray-800 pb-2 inline-block">Get in Touch</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#FFB000]" />
                <span>down town Venture Labs (dtvl), Assam down town University</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#FFB000]" />
                <span>vernovate@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FFB000]" />
                <span>+91 XXXXX XXXXX</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© {currentYear} Vernovate Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#FFB000] hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;