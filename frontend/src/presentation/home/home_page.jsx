import React, { useEffect, useState } from 'react';
import './home.css';
import ServicesSection from './widgets/service_section';
import CollaboratorsSection from './widgets/colloboraters';
import TestimonialsSection from './widgets/user_feedback';
import ProjectsSection from './widgets/projects';
import { useNavigate } from 'react-router-dom';


const defaultImage = 'https://royaltx.org/wp-content/uploads/2023/12/60612053_m-scaled.jpg';

export default function HomePage() {
  const [homeData, setHomeData] = useState({
    featuredProjects: [],
    featuredServices: [],
    jobListings: []
  });
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const handleAboutClick = (id) => {
    navigate(`/about`);
  };


  const handleApplyClick = (id) => {
    navigate(`/services`);
  };
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);

    const fetchHomeData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/home');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHomeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
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
                <button className="btn primary-btn" onClick={handleApplyClick}>Get Started</button>
                <button className="btn secondary-btn" onClick={handleAboutClick}>Learn More</button>
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

      <ServicesSection services={homeData.featuredServices} />
      
      <ProjectsSection 
        featuredProjects={homeData.featuredProjects} 
        loading={loading} 
      />

      <CollaboratorsSection />
      <TestimonialsSection jobListings={homeData.jobListings} />
    </div>
  );
}