import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaCode, FaBrain, FaGlobe, 
  FaCity, FaChartBar, FaChevronRight 
} from "react-icons/fa";

const ServiceCard = ({ icon, title, desc, delay }) => (
  <div 
    data-aos="fade-up" 
    data-aos-delay={delay}
    className="group relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 hover:-translate-y-2"
  >
    <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center text-3xl text-[#FFB000] mb-8 group-hover:bg-[#FFB000] group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-500 leading-relaxed mb-8">
      {desc}
    </p>
    <button className="flex items-center gap-2 text-[#FFB000] font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
      Learn More <FaChevronRight size={12} />
    </button>
  </div>
);

const Services = () => {
  const navigate = useNavigate();

  const allServices = [
    {
      icon: <FaCode />,
      title: "Software Development",
      desc: "Custom enterprise software tailored to your specific business needs and scaling requirements.",
      delay: "100"
    },
    {
      icon: <FaBrain />,
      title: "AI & Machine Learning",
      desc: "Intelligent algorithms that automate complex processes and optimize operational efficiency.",
      delay: "200"
    },
    {
      icon: <FaGlobe />,
      title: "IoT & Embedded Systems",
      desc: "Connected devices and smart hardware systems designed for real-time monitoring and control.",
      delay: "300"
    },
    {
      icon: <FaCity />,
      title: "Smart City Solutions",
      desc: "Transforming urban living through intelligent traffic systems and sustainable infrastructure tech.",
      delay: "400"
    },
    {
      icon: <FaChartBar />,
      title: "Data Analytics",
      desc: "Turning raw data into actionable insights through advanced visualization and predictive modeling.",
      delay: "500"
    }
  ];

  return (
    <div id="services" className="pt-32 pb-24">
      <section className="px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20" data-aos="fade-down">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
              Our <span className="text-[#FFB000]">Services</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to drive growth, 
              efficiency, and real-world impact for the modern enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 px-6 md:px-20">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB000]/10 blur-[100px] rounded-full"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">
            Have a specific project in mind?
          </h2>
          <button 
            onClick={() => navigate("/contact")}
            className="relative z-10 bg-[#FFB000] text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl shadow-yellow-500/20 active:scale-95 cursor-pointer"
          >
            Let's Build It Together
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;