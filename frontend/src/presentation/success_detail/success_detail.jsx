
import './styles/success_detail.css';
import TestimonialsSection from '../home/widgets/user_feedback';
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useParams } from 'react-router-dom';
import ProjectsSection from '../home/widgets/projects';

const SuccessDetail = () => {
  const { id } = useParams(); 
  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    number: "",
    description: "",
    serviceId: "1", // default to first service
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const serviceOptions = [
    { id: 1, label: "Web Development" },
    { id: 2, label: "Mobile Development" },
    { id: 3, label: "Branding" },
  ];

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8080/api/services/${id}/projects`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Fetched projects:", data); // Debug log to verify data
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again later.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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

      <ProjectsSection 
        featuredProjects={projects} 
        loading={loading} 
      />

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
