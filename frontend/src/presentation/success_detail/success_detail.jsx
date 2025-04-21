import React from 'react';
import './styles/success_detail.css';

const SuccessDetail = () => {
  return (
    <div className="web-dev-page">
      <section className="intro">
        <h2>Web Development</h2>
        <p>
          Our team at Platform specializes in creating websites that not only look great but also perform flawlessly. Whether you're
          looking to build a simple landing page or a complex web application, we provide tailored solutions to help your business
          succeed online.
        </p>
      </section>

      <section className="process">
        <h3>Our Web Development Process</h3>
        <div className="process-steps">
          {[
            { title: 'Consult & Discovery', desc: 'Understand your needs, goals, and audience.', icon: '🔍' },
            { title: 'Design & Wireframe', desc: 'Create visual structures and review designs.', icon: '🛠️' },
            { title: 'Development', desc: 'Build your site with modern technologies.', icon: '💻' },
            { title: 'Test & Optimize', desc: 'Test for performance and cross-device compatibility.', icon: '🧪' },
            { title: 'Launch & Support', desc: 'Launch the site and provide ongoing maintenance.', icon: '🚀' },
          ].map((step, index) => (
            <div key={index} className="step">
              <div className="icon">{step.icon}</div>
              <h4>{index + 1}. {step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="success-stories">
        <h3>Our Success Stories</h3>
        <div className="cards">
          {[
            {
              title: 'Bolt Logistics',
              desc: 'Rebuilt their infrastructure with modern cybersecurity protocols and real-time monitoring.',
            },
            {
              title: 'GlowWell Skincare',
              desc: 'Developed a sleek website and unified branding across all platforms.',
            },
            {
              title: 'Rentiq Real Estate',
              desc: 'Built a custom mobile app and secure scheduling for listings.',
            },
            {
              title: 'NovaEdTech',
              desc: 'Complete redesign with performance optimization and UX overhaul.',
            },
            {
              title: 'FitNest Co.',
              desc: 'Deployed multi-factor authentication, encryption layers, and regular audits.',
            },
          ].map((story, index) => (
            <div key={index} className="card">
              <h4>{story.title}</h4>
              <p>{story.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="form-section">
        <h3>Ready to work together?</h3>
        <p>Fill out the form to make a request</p>

        <form className="contact-form">
          <div className="form-group-row">
            <input type="text" placeholder="Enter your company name" className="input" />
            <input type="text" placeholder="Enter your name" className="input" />
          </div>
          <div className="form-group-row">
            <input type="text" placeholder="+998" className="input" />
            <select className="input">
              <option>Web Development</option>
              <option>Mobile Development</option>
              <option>Branding</option>
            </select>
          </div>
          <textarea className="textarea" placeholder="Project Description" rows="5" />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default SuccessDetail; 
