// ProjectsPage.jsx
import React, { useEffect, useState } from 'react';
import './styles/projects.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const DEFAULT_IMAGE = 'https://royaltx.org/wp-content/uploads/2023/12/60612053_m-scaled.jpg';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch projects:', err);
        setLoading(false);
      });
  }, []);


  const navigate = useNavigate();

  const handleDetailClick = (id) => {
    console.log('Project ID:', id);
    navigate(`/project/${id}`);
  };
  return (
    <div className="projects-container">
      <h1 className="page-title">Our Projects</h1>
      {loading ? (
        <p className="loading">Loading projects...</p>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => handleDetailClick(project.id)}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="thumbnail-wrapper">
                <img
                  src={project.thumbnail || DEFAULT_IMAGE}
                  alt={project.title}
                  className="project-thumbnail"
                  onError={(e) => {
                    e.target.src = DEFAULT_IMAGE;
                  }}
                />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <img src={project.logo || DEFAULT_IMAGE} alt="Logo" className="project-logo" onError={(e) => {
                  e.target.src = DEFAULT_IMAGE;
                }} />
                  <h2>{project.title || "Karman-ai"}</h2>
                </div>
                <p>{project.description || "here should be description"}</p>
                <a
                 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn"
                >
                  View details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
