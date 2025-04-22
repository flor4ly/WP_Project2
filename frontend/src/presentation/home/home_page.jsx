import React, { useEffect, useState } from 'react';
import './home.css';
import ServicesSection from './widgets/service_section';
import CollaboratorsSection from './widgets/colloboraters';
import TestimonialsSection from './widgets/user_feedback';

const defaultImage = 'https://royaltx.org/wp-content/uploads/2023/12/60612053_m-scaled.jpg';

export default function HomePage() {
  const [homeData, setHomeData] = useState({
    featuredProjects: [],
    featuredServices: [],
    jobListings: []
  });
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

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
        setHomeData({
          featuredProjects: [],
          featuredServices: [],
          jobListings: []
        });
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

      <ServicesSection services={homeData.featuredServices} />

      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
          </div>
          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
              <p>Loading amazing projects...</p>
            </div>
          ) : (
            <div className="project-grid">
              {homeData.featuredProjects.length === 0 ? (
                <p>No featured projects available.</p>
              ) : (
                homeData.featuredProjects.map((project, index) => (
                  <div
                    className="project-card"
                    key={project.id || index}
                    style={{ "--card-index": index, opacity: 1 }}
                  >
                    <div className="card-image">
                      <img
                        src={project.thumbnail || `https://placehold.co/600x400?text=${project.title}`}
                        alt={project.title}
                      />
                    </div>
                    <div className="card-overlay">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <button className="view-project-btn">View Details</button>
                    </div>
                  </div>
                ))
              )}
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
