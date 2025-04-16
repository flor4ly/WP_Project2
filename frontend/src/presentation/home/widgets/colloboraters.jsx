import React, { useState, useEffect } from 'react';
import './styles/.css';

const collaborators = [
  { name: "Instagram", icon: "instagram", color: "#E1306C" },
  { name: "YouTube", icon: "youtube", color: "#FF0000" },
  { name: "Message", icon: "comment", color: "#25D366" },
  { name: "Twitter", icon: "twitter", color: "#1DA1F2" },
  { name: "WhatsApp", icon: "whatsapp", color: "#25D366" },
  { name: "TikTok", icon: "tiktok", color: "#000000" },
  { name: "Netflix", icon: "play", color: "#E50914" },
  { name: "LinkedIn", icon: "linkedin", color: "#0077B5" }
];

const CollaboratorIcon = ({ name, icon, color, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`collaborator-icon ${isVisible ? 'visible' : ''}`}>
      <div className="icon-container" style={{ '--accent-color': color }}>
        <i className={`fab fa-${icon}`}></i>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default function CollaboratorsSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.querySelector('.collaborators-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={`collaborators-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2>Collaborators</h2>
          <p>Trusted by industry leaders and innovative brands</p>
        </div>
        
        <div className="collaborators-grid">
          {collaborators.map((collaborator, index) => (
            <CollaboratorIcon
              key={index}
              name={collaborator.name}
              icon={collaborator.icon}
              color={collaborator.color}
              delay={150 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}