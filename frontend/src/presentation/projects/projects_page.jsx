import React, { useState, useEffect } from 'react';
import './styles/projects.css';
import ProjectCard from './widgets/project_card.jsx';


const PortfolioGrid = ({ projects }) => {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('appear');
      }, 100 * index);
    });
  }, []);

  return (
    <div className="app">
    <header className="header">
      <h1 className="title">The Work We're Proud To Share</h1>
      <p className="subtitle">Explore our portfolio of tailored solutions and innovative digital experiences.</p>
    
      <div className="filter-tabs">
        <button className="menu-btn">
          <span className="hamburger"></span>
        </button>
        <button className="filter-btn active">Mobile Apps</button>
        <button className="filter-btn">Websites</button>
        <button className="filter-btn">Branding</button>
      </div>
    </header>
    
    <main>
    <div className="portfolio-grid">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          size={project.size || 'medium'}
        />
      ))}
    </div>
    </main>
  </div>
  
  );
};

export default PortfolioGrid;