// components/ProjectCard.jsx
import React, { useState } from 'react';
import '../styles/project_card.css';

const ProjectCard = ({ project, size }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  return (
    <div 
      className={`project-card ${size}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-image-container">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="card-image" 
        />
      </div>
      
      <div className={`card-info ${isHovered ? 'visible' : ''}`}>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;




// data/projects.js
export const projects = [
    {
      id: 1,
      title: "Communication App",
      description: "All-in-one messaging platform with real-time notifications",
      imageUrl: "https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg",
      category: "Mobile Apps",
      size: "large"
    },
    {
      id: 2,
      title: "Payment Gateway",
      description: "Secure mobile payment processing solution",
      imageUrl: "https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg",
      category: "Mobile Apps",
      size: "medium"
    },
    {
      id: 3,
      title: "Design Portfolio",
      description: "Responsive showcase for creative professionals",
      imageUrl: "https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg",
      category: "Websites",
      size: "medium"
    },
    {
      id: 4,
      title: "Smart Home Control",
      description: "IoT interface for connected devices",
      imageUrl: "https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg",
      category: "Mobile Apps",
      size: "small"
    },
    {
      id: 5,
      title: "Search Analytics",
      description: "Data visualization for search patterns",
      imageUrl: "https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg",
      category: "Websites",
      size: "small"
    },
    {
      id: 6,
      title: "Social Media App",
      description: "Interactive platform for content sharing",
      imageUrl: "https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg",
      category: "Mobile Apps",
      size: "medium"
    },
    {
      id: 7,
      title: "Product Packaging",
      description: "Minimalist design for consumer goods",
      imageUrl: "https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg",
      category: "Branding",
      size: "medium"
    },
    {
      id: 8,
      title: "Data Dashboard",
      description: "Visual analytics for business intelligence",
      imageUrl: "https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg",
      category: "Websites",
      size: "large"
    },
    {
      id: 9,
      title: "Beverage Branding",
      description: "Product design for premium drink line",
      imageUrl: "https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg",
      category: "Branding",
      size: "medium"
    },
    {
      id: 10,
      title: "E-commerce Website",
      description: "Online shopping platform with intuitive UX",
      imageUrl: "https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg",
      category: "Websites",
      size: "large"
    },
    {
      id: 11,
      title: "Task Manager",
      description: "Productivity app with clever organization",
      imageUrl: "https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg",
      category: "Mobile Apps",
      size: "medium"
    },
    {
      id: 12,
      title: "User Profile App",
      description: "Identity management with secure authentication",
      imageUrl: "https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg",
      category: "Mobile Apps",
      size: "medium"
    },
    {
      id: 13,
      title: "Credit Card Design",
      description: "Financial branding with security features",
      imageUrl: "https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg",
      category: "Branding",
      size: "small"
    },
    {
      id: 14,
      title: "Analytics Dashboard",
      description: "Performance tracking with visual reports",
      imageUrl: "https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg",
      category: "Websites",
      size: "small"
    }
  ];