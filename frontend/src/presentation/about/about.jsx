import React, { useEffect, useState } from 'react';
import './styles/about.css';
import { motion } from 'framer-motion';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const apiUrl = process.env.NODE_ENV === 'development' 
          ? 'http://localhost:8080/api/about-us/1' 
          : '/api/about-us/1';
          
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors'
        });

        if (!response.ok) {
          throw new Error(`Server responded with ${response.status}`);
        }

        const data = await response.json();
        setAboutData(data);
        setIsVisible(true);
      } catch (err) {
        console.error('Full error details:', err);
        setError(`Failed to load data. ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (loading) return (
    <div className="loading-container">
      <div className="loader"></div>
      <p>Loading about data...</p>
    </div>
  );

  if (error) return (
    <div className="error-container">
      <h3>Error loading data</h3>
      <p>{error}</p>
      <p>Please try again later or contact support.</p>
    </div>
  );

  if (!aboutData) return <div>No data available</div>;

  // Prepare stats data from API response
  const statsData = [
    { number: `${aboutData.num_projects}+`, label: 'Complete Projects' },
    { number: `${aboutData.num_members}+`, label: 'Team Members' },
    { number: `${aboutData.num_reviews}+`, label: 'Client Reviews' },
    { number: `${aboutData.num_awards}+`, label: 'Winning Awards' }
  ];

  // Get first image URL if available
  const firstImage = aboutData.img_urls?.split(',')[0] || 'https://royaltx.org/wp-content/uploads/2023/12/60612053_m-scaled.jpg';

  return (
    <div className="about-container">
      {/* Hero Section with Code Background */}
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="overlay">
          <motion.div 
            className="quote-container"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="quote">The only constant in the<br />technology industry is change.</h1>
            <p className="quote-author">-Marc Benioff</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Company Info Section */}
      <motion.div
        className="company-info-section"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.p className="company-description">
          {aboutData.description}
        </motion.p>

        <div className="stats-container">
          {statsData.map((stat, index) => (
            <motion.div 
              className="stat-item" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
            >
              <motion.h2 
                className="stat-number"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.5, type: "spring" }}
              >
                {stat.number}
              </motion.h2>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Vision Section */}
      <div className="vision-mission-container">
        <motion.div 
          className="vision-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="content-image-wrapper">
            <motion.div 
              className="content-wrapper"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="section-title">Our Vision</h2>
              <p className="section-content">
                {aboutData.our_vision}
              </p>
            </motion.div>
            <motion.div 
              className="image-wrapper"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <img src={firstImage} alt="Team working on laptops" className="section-image" />
            </motion.div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="mission-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="content-image-wrapper reverse">
            <motion.div 
              className="content-wrapper"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h2 className="section-title">Our Mission</h2>
              <p className="section-content">
                {aboutData.our_mission}
              </p>
            </motion.div>
            <motion.div 
              className="image-wrapper"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <img src={firstImage} alt="Modern office space" className="section-image" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;