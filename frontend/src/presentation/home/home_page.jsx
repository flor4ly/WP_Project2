// HomePage.jsx
import React, { useEffect, useState } from 'react';
import './home.css';

import ServicesSection from './widgets/service_section';
import CollaboratorsSection from './widgets/colloboraters';
import TestimonialsSection from './widgets/user_feedback';



const defaultImage = 'https://royaltx.org/wp-content/uploads/2023/12/60612053_m-scaled.jpg';

export default function HomePage() {
  const [projectImages, setProjectImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    
    // Simulate fetch with better project images
    setTimeout(() => {
      setProjectImages([
        'https://placehold.co/600x400/3498db/ffffff?text=Development',
        'https://placehold.co/600x400/9b59b6/ffffff?text=Security',
        'https://placehold.co/600x400/2ecc71/ffffff?text=DevOps',
        'https://placehold.co/600x400/e74c3c/ffffff?text=Analytics',
        'https://placehold.co/600x400/f39c12/ffffff?text=UI/UX',
        'https://placehold.co/600x400/1abc9c/ffffff?text=Cloud',
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={`homepage ${isVisible ? 'visible' : ''}`}>
  
      
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Your Smart Link to Seamless Tech Solutions</h1>
              <div className="hero-divider"></div>
              <p className="hero-lead">
                At Softlynk, we simplify the complex. Whether you're looking for on-demand IT support,
                software solutions, or system optimization — we've got you covered.
              </p>
              <p>
                Our platform connects individuals and businesses with expert tech services that are
                reliable, fast, and tailored to your needs.
              </p>
              <p className="tagline">Efficient. Scalable. Secure.</p>
              <div className="button-group">
                <button className="btn primary-btn">Get Started</button>
                <button className="btn secondary-btn">Learn More</button>
              </div>
            </div>
            <div className="hero-img">
              <div className="image-container">
                <img src={defaultImage} alt="Tech Solutions" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ServicesSection />
      
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Explore our latest innovations and success stories</p>
          </div>
          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
              <p>Loading amazing projects...</p>
            </div>
          ) : (
            <div className="project-grid">
              {projectImages.map((img, index) => (
                <div 
                  className="project-card" 
                  key={index}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="card-image">
                    <img src={img} alt={`Project ${index + 1}`} />
                  </div>
                  <div className="card-overlay">
                    <h3>Project {index + 1}</h3>
                    <p>Innovative solution for modern challenges</p>
                    <button className="view-project-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="projects-cta">
            <button className="btn outline-btn">See All Projects</button>
          </div>
        </div>
      </section>

      <CollaboratorsSection />

      <TestimonialsSection />
  
    </div>
  );
}