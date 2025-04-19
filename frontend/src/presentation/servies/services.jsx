import React, { useEffect, useRef } from 'react';
import './styles/servies.css';



const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="services-container" ref={servicesRef}>
      <div className="header animate">
        <div className="logo-container">
          <img src="/images/Logo.png" alt="Company Logo" className="logo" />
        </div>
        <div className="company-info">
          <h2>Some super cool company name and description</h2>
        </div>
        <div className="cta-button">
          <a href="#" className="website-btn">See Website</a>
        </div>
      </div>

      <div className="service-section animate">
        <div className="service-image-container">
          <img src="https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg" alt="Service 1" className="service-image" />
        </div>
        <div className="service-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="service-section animate">
        <div className="service-image-container">
          <img src="https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg" alt="Service 2" className="service-image" />
        </div>
        <div className="service-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="service-section animate">
        <div className="service-image-container">
          <img src="https://www.sydle.com/blog/assets/post/projects-and-processes-what-is-the-difference-614e00a1a9d8415db45a9230/project-and-process.jpg" alt="Service 3" className="service-image" />
        </div>
        <div className="service-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;