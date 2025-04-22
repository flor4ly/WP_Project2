import React, { useEffect, useState } from "react";
import './styles/careers.css';
import { useNavigate } from 'react-router-dom';

export const jobList = new Array(9).fill({
  title: "Middle Frontend Developer",
  time: "09:00 - 17:00",
  salary: "10 000 000 - 15 000 000",
  skills: "React + REST API + Tailwind CSS",
});


const Careers = () => {
  const [jobList, setJobList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs/listing");
        if (response.ok) {
          const data = await response.json();
          console.log("Job Listings:", data);
          setJobList(data);
        } else {
          console.error("Failed to fetch job listings");
        }
      } catch (error) {
        console.error("Error fetching job listings:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/career-info/${id}`);
  };

  return (
    <div className="careers-container">
      <header className="header">
        <h1>CAREERS</h1>
      </header>

      <section className="cards-section">
        {jobList.map((job) => (
          <div
            key={job.id}
            className="job-card"
            onClick={() => handleCardClick(job.id)}
            style={{ cursor: "pointer" }}
          >
            <h2>{job.title}</h2>
            <p>🕒 {job.time}</p>
            <p>💰 {job.money}</p>
            <p>💻 {job.stack}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Careers;


