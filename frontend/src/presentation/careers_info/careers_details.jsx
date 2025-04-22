import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './styles/careers_details.css';

const CareerDetails = () => {
  const { id } = useParams();
  const [career, setCareer] = useState(null);
  const [formData, setFormData] = useState({
    applicant_name: '',
    applicant_phone: ''
  });
  const [resumeFile, setResumeFile] = useState(null);

  useEffect(() => {
    const fetchCareer = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/jobs/detail/${id}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setCareer(data);
      } catch (error) {
        console.error('Failed to fetch career details:', error);
      }
    };

    fetchCareer();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("applicant_name", formData.applicant_name);
    data.append("applicant_phone", formData.applicant_phone);
    data.append("resume", resumeFile);
    data.append("jobs_id", id);

    try {
      const response = await fetch("http://localhost:8080/api/job-applications", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        alert("Resume sent successfully!");
        setFormData({ applicant_name: '', applicant_phone: '' });
        setResumeFile(null);
      } else {
        alert("Failed to send resume");
      }
    } catch (err) {
      console.error("Error submitting application:", err);
    }
  };

  if (!career) return <p>Loading career details...</p>;

  return (
    <div className="career-details-container">
      <h1>{career.title}</h1>
      <hr />

      <section>
        <h2>Requirements</h2>
        {/* Check if career.requirements exists before calling .map */}
        {Array.isArray(career.requirements) && career.requirements.length > 0 ? (
          <ul>
            {career.requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        ) : (
          <p>No requirements available</p>
        )}
      </section>

      <section>
        <h2>Required Knowledge & Skills</h2>
        {/* Check if career.skills is an array before calling .map */}
        {Array.isArray(career.skills) && career.skills.length > 0 ? (
          <ul>
            {career.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p>No skills available</p>
        )}
      </section>

      <section>
        <h2>Working Conditions</h2>
        {/* Check if career.conditions is an array before calling .map */}
        {Array.isArray(career.conditions) && career.conditions.length > 0 ? (
          <ul>
            {career.conditions.map((cond, idx) => (
              <li key={idx}>{cond}</li>
            ))}
          </ul>
        ) : (
          <p>No working conditions available</p>
        )}
      </section>

      <section className="application-form-section">
        <h2>Submit Your Resume</h2>
        <form className="application-form" onSubmit={handleSubmit} encType="multipart/form-data">
          <input
            type="text"
            name="applicant_name"
            placeholder="Your Name"
            value={formData.applicant_name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="applicant_phone"
            placeholder="Phone Number"
            value={formData.applicant_phone}
            onChange={handleChange}
            required
          />

          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
          />

          <button type="submit">Send Resume</button>
        </form>
      </section>
    </div>
  );
};

export default CareerDetails;
