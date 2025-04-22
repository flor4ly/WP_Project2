import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/project_detail.css';
import { useParams } from 'react-router-dom';

const DEFAULT_IMAGE = 'https://royaltx.org/wp-content/uploads/2023/12/60612053_m-scaled.jpg';

const ProjectDetailPage = () => {
  const { id } = useParams(); 
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/projects/${id}`);
        const data = await response.json();
        console.log('Fetched project data:', data);
        setProject(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching project:', error);
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="enhanced-loading-container">
        <motion.div
          className="enhanced-loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading amazing project...
        </motion.p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="enhanced-error-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Project Not Found</h2>
          <p>Sorry, we couldn't find the project you're looking for.</p>
        </motion.div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.img_urls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.img_urls.length - 1 : prevIndex - 1
    );
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  // Determine if we have enough content to show
  const hasMultipleImages = project.img_urls && project.img_urls.length > 1;
  const hasDescription = project.description && project.description.length > 0;
  const hasWebsiteLink = project.link_to_website && project.link_to_website.length > 0;

  return (
    <div className="enhanced-page-wrapper">
      <motion.div
        className="enhanced-project-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header with Logo and Title */}
        <motion.div
          className="enhanced-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <div className="enhanced-logo-container">
            {project.logo ? (
              <img src={project.logo} alt={`${project.title} logo`} className="enhanced-logo" onError={(e) => {
                e.target.src = DEFAULT_IMAGE;
              }} />
            ) : (
              <div className="enhanced-logo-placeholder">
                {project.title ? project.title.charAt(0).toUpperCase() : "P"}
              </div>
            )}
          </div>
          <h1 className="enhanced-title">{project.title || "Untitled Project"}</h1>
        </motion.div>

        {/* Main Image Section */}
        <motion.div
          className="enhanced-image-showcase"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              className="enhanced-showcase-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={hasMultipleImages ? project.img_urls[currentImageIndex] : (project.thumbnail || project.img_urls?.[0])}
                alt={`${project.title} - view ${currentImageIndex + 1}`}
                onError={(e) => {
                  e.target.src = DEFAULT_IMAGE;
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Image Navigation Controls */}
          {hasMultipleImages && (
            <motion.div
              className="enhanced-image-controls"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button className="enhanced-nav-button prev-button" onClick={prevImage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="enhanced-dots-container">
                {project.img_urls.map((_, index) => (
                  <button
                    key={index}
                    className={`enhanced-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>

              <button className="enhanced-nav-button next-button" onClick={nextImage}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Project Details Section */}
        <motion.div
          className="enhanced-details-section"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {hasDescription && (
            <motion.div
              className={`enhanced-description ${isDescriptionExpanded ? 'expanded' : ''}`}
              layout
            >
              <h2>Description</h2>
              <p>{project.description}</p>

              {project.description.length > 100 && (
                <button className="enhanced-expand-button" onClick={toggleDescription}>
                  {isDescriptionExpanded ? 'Show Less' : 'Read More'}
                </button>
              )}
            </motion.div>
          )}

          {/* Call to Action */}
          {hasWebsiteLink && (
            <motion.div
              className="enhanced-cta-container"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href={project.link_to_website}
                className="enhanced-cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project Website
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailPage;