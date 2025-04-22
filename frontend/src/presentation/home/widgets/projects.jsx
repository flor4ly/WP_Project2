import React, { useState, useEffect } from 'react';
import './styles/projects_section.css';
import { useNavigate } from 'react-router-dom';


// Sample projects data in case API doesn't return any
const sampleProjects = [
  {
    id: 1,
    title: "Cloud Migration Solution",
    description: "Enterprise-scale migration to cloud infrastructure with zero downtime",
    thumbnail: "https://placehold.co/600x400?text=Cloud+Migration"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Custom shopping platform with integrated payment solutions",
    thumbnail: "https://placehold.co/600x400?text=E-commerce"
  },
  {
    id: 3,
    title: "Smart IoT Dashboard",
    description: "Real-time monitoring system for industrial IoT devices",
    thumbnail: "https://placehold.co/600x400?text=IoT+Dashboard"
  }
];

export default function ProjectsSection({ featuredProjects, loading }) {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(loading);

  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    navigate(`/projects`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!featuredProjects || featuredProjects.length === 0) {
        console.log("Using sample projects data as fallback");
        setProjects(sampleProjects);
        setIsLoading(false);
      } else {
        setProjects(featuredProjects);
        setIsLoading(loading);
      }
    }, 1000); // Give API a second to load before falling back

    return () => clearTimeout(timer);
  }, [featuredProjects, loading]);

  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
        </div>
        {isLoading ? (
          <div className="loading-container">
            <div className="loader"></div>
            <p>Loading amazing projects...</p>
          </div>
        ) : (
            <div className="project-grid">
            {projects.length === 0 ? (
              <p>No featured projects available.</p>
            ) : (
              projects.map((project, index) => (
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
                    <button className="view-project-btn" >View Details</button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
        <div className="projects-cta">
          <button className="btn outline-btn" onClick={handleProjectClick}>See All Projects</button>
        </div>
      </div>
    </section>
  );
}