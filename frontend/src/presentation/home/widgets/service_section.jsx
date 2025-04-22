import React, { useEffect, useState } from 'react';
import './styles/service_section.css';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/service/${1}`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + index * 200);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`service-card ${isVisible ? 'visible' : ''}`}
      onClick={handleClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
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

export default function ServicesSection({ services }) {
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
          {services.map((service, index) => (
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
