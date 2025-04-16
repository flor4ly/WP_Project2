import React, { useEffect, useState } from 'react';
import './styles/service_section.css';

const serviceData = [
  {
    title: "Web Development",
    description: "Softlynk builds fast, responsive, and scalable websites tailored to your business goals. We create everything from sleek landing pages to full-stack web platforms using the latest technologies.",
    icon: "code"
  },
  {
    title: "UI/UX",
    description: "We design intuitive, user-friendly interfaces that offer seamless experiences across all devices. Our team focuses on usability, aesthetics, and conversion to keep users engaged.",
    icon: "palette"
  },
  {
    title: "Mobile Apps",
    description: "From concept to launch, we develop high-performance mobile apps for iOS and Android. Whether native or cross-platform, we turn your ideas into smooth, functional apps users love.",
    icon: "smartphone"
  },
  {
    title: "CyberSecurity",
    description: "We safeguard your digital presence with robust security solutions. Our services include threat detection, penetration testing, and data protection strategies to keep your systems secure.",
    icon: "shield"
  }
];

const ServiceCard = ({ title, description, icon, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + index * 200);
    
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`service-card ${isVisible ? 'visible' : ''}`}>
      <div className="service-icon">
        {icon === 'code' && <i className="fas fa-code"></i>}
        {icon === 'palette' && <i className="fas fa-palette"></i>}
        {icon === 'smartphone' && <i className="fas fa-mobile-alt"></i>}
        {icon === 'shield' && <i className="fas fa-shield-alt"></i>}
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <div className="service-divider"></div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.querySelector('.services-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={`services-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2>Services</h2>
          <p>Comprehensive technology solutions for your business needs</p>
        </div>
        
        <div className="services-grid">
          {serviceData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}