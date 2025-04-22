import React, { useEffect, useState } from 'react';
import './styles/about.css';
import { motion } from 'framer-motion';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const statsData = [
    { number: '100+', label: 'Complete Projects' },
    { number: '50+', label: 'Team Members' },
    { number: '200+', label: 'Client Reviews' },
    { number: '10+', label: 'Winning Awards' }
  ];

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
          Our Company, TechInnovate did this and that. Consectetur
          adipiscing elit. Curabitur semper, sapien sed varius placerat, leo
          tincidunt odio, eu fermentum purus nunc sit amet elit. Aenean
          posuere, tortor nec hendrerit interdum, mauris metus pharetra
          ligula, vel ullamcorper nulla eros a urna.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta dapibus quam
                tristique volutpat. Nam vel lorem dapibus ligula efficitur posuere. Nam a congue
                felis. Etiam a eleifend dui.
              </p>
            </motion.div>
            <motion.div 
              className="image-wrapper"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <img src='https://royaltx.org/wp-content/uploads/2023/12/60612053_m-scaled.jpg' alt="Team working on laptops" className="section-image" />
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta dapibus quam
                tristique volutpat. Nam vel lorem dapibus ligula efficitur posuere. Nam a congue
                felis. Etiam a eleifend dui.
              </p>
            </motion.div>
            <motion.div 
              className="image-wrapper"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <img src='https://royaltx.org/wp-content/uploads/2023/12/60612053_m-scaled.jpg' alt="Modern office space" className="section-image" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;