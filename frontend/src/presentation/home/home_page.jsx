import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulated static data
    setProjects([
      { id: 1, title: 'UI Design', imageUrl: '/images/img1.png' },
      { id: 2, title: 'Cyber Security', imageUrl: '/images/img2.png' },
      { id: 3, title: 'API Integration', imageUrl: '/images/img3.png' },
      { id: 4, title: 'Analytics Dashboard', imageUrl: '/images/img4.png' },
      { id: 5, title: 'Frontend Dev', imageUrl: '/images/img5.png' },
      { id: 6, title: 'Binary Systems', imageUrl: '/images/img6.png' },
      { id: 7, title: 'Code Blocks', imageUrl: '/images/img7.png' }
    ]);

    // Uncomment below when backend is ready
    // axios.get('/api/projects')
    //   .then(res => setProjects(res.data))
    //   .catch(err => console.error(err));
  }, []);

  return (
    <div className="landing-container">
      <header className="header">
        <div className="logo">Softlynk</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Services</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-text">
          <h2>Your Smart Link to Seamless Tech Solutions</h2>
          <p>At Softlynk, we simplify the complex... tailored to your needs.</p>
          <button>Learn More</button>
        </div>
        <img src="/images/hero-main.png" alt="Hero Graphic" className="hero-image" />
      </section>

      <section className="projects-section">
        <h3>1440 x 738</h3>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.imageUrl} alt={project.title} />
              <p>{project.title}</p>
            </div>
          ))}
        </div>
        <button className="see-all">See All</button>
      </section>
    </div>
  );
};

export default HomePage;