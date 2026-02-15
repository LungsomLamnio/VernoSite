import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const TeamMember = ({ name, role, delay, image, linkedin, github }) => (
  <div data-aos="fade-up" data-aos-delay={delay} className="group">
    <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-100 aspect-square mb-6 border border-gray-100 shadow-sm">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-3 bg-white rounded-xl text-gray-900 hover:bg-[#FFB000] hover:text-white transition-all shadow-lg"
        >
          <FaLinkedin size={20} />
        </a>
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-3 bg-white rounded-xl text-gray-900 hover:bg-[#FFB000] hover:text-white transition-all shadow-lg"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </div>
    <div className="text-center px-2">
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-[#FFB000] font-bold text-[10px] md:text-xs uppercase tracking-[0.25em] mb-4">
        {role}
      </p>
    </div>
  </div>
);

const MeetTheTeam = () => {
  const team = [
    { 
      name: "Aditya Singh", 
      role: "CEO & Founder", 
      image: "https://res.cloudinary.com/dgmftp80m/image/upload/v1771134547/Aditya_p2esaz.jpg",
      linkedin: "https://www.linkedin.com/in/aditya-singh-1b7243291", // Update with actual link
      github: "https://github.com/Aditya-10-Singh" 
    },
    { 
      name: "Lungsom Lamnio", 
      role: "CTO & Founder", 
      image: "https://res.cloudinary.com/dgmftp80m/image/upload/v1771133785/LungsomLamnio_do32np.jpg",
      linkedin: "https://www.linkedin.com/in/lungsom-lamnio-339914282/", 
      github: "https://github.com/LungsomLamnio" 
    },
    { 
      name: "Debojyoti Paul", 
      role: "MD & Co-Founder", 
      image: "https://res.cloudinary.com/dgmftp80m/image/upload/v1771134548/Debo_rjmwoi.jpg",
      linkedin: "https://share.google/KSQCVeTWv6uBexCnO", 
      github: "https://share.google/KSQCVeTWv6uBexCnO" 
    },
    { 
      name: "Amit Sharma", 
      role: "COO & Co-Founder", 
      image: "https://res.cloudinary.com/dgmftp80m/image/upload/v1771134548/Amit_nygwud.png",
      linkedin: "#", 
      github: "#" 
    },
    { 
      name: "Ashutosh P. Singh", 
      role: "CFO & Co-Founder", 
      image: "https://res.cloudinary.com/dgmftp80m/image/upload/v1771134547/Ashu_znvfpl.jpg",
      linkedin: "#", 
      github: "#" 
    },
  ];

  return (
    <section id="team" className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">
            The Minds Behind <span className="text-[#FFB000]">Vernovate.</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            A diverse collective of engineers, researchers, and visionaries dedicated to 
            reimagining urban infrastructure through cutting-edge AI and R&D.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 justify-center">
          {team.map((m, i) => (
            <div key={i} className={i >= 3 ? "lg:translate-x-1/2" : ""}>
              <TeamMember {...m} delay={i * 150} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;