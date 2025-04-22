
import './styles/success_detail.css';
import TestimonialsSection from '../home/widgets/user_feedback';
import React, { useState } from "react";
import Swal from "sweetalert2";


const SuccessDetail = () => {

  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    number: "",
    description: "",
    serviceId: "1", // default to first service
  });

  const serviceOptions = [
    { id: 1, label: "Web Development" },
    { id: 2, label: "Mobile Development" },
    { id: 3, label: "Branding" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append("companyName", formData.companyName);
    data.append("name", formData.name);
    data.append("number", formData.number);
    data.append("description", formData.description);
    data.append("serviceId", formData.serviceId);

    try {
      const response = await fetch("/api/service-requests/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      });

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Your request has been submitted successfully.",
          icon: "success",
          confirmButtonText: "Okay",
        });
        setFormData({
          companyName: "",
          name: "",
          number: "",
          description: "",
          serviceId: "1",
        });
      } else {
        alert("Failed to submit. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error occurred. Please try again.");
    }
  };
  
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

      <TestimonialsSection/>

      <section className="form-section">
      <h3>Ready to work together?</h3>
      <p>Fill out the form to make a request</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group-row">
          <input
            type="text"
            placeholder="Enter your company name"
            className="input"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Enter your name"
            className="input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-row">
          <input
            type="text"
            placeholder="+998"
            className="input"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <select
            className="input"
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            required
          >
            {serviceOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <textarea
          className="textarea"
          placeholder="Project Description"
          rows="5"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </section>
    </div>
  );
};

export default SuccessDetail; 
