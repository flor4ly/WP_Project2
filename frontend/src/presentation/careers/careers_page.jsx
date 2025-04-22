import React from "react";
import './styles/careers.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const jobList = new Array(9).fill({
  title: "Middle Frontend Developer",
  time: "09:00 - 17:00",
  salary: "10 000 000 - 15 000 000",
  skills: "React + REST API + Tailwind CSS",
});
const Careers = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/career-info/${1}`);
  };
  return (
    <div className="careers-container">

      <header className="header">
        <h1>CAREERS</h1>
      </header>
      <section className="cards-section" onClick={handleClick}>
        {jobList.map((job, index) => (
          <Link to="/career-details" key={index} className="job-card-link">
            <div className="job-card">
              <h2>{job.title}</h2>
              <p>🕒 {job.time}</p>
              <p>💰 {job.salary}</p>
              <p>💻 {job.skills}</p>
            </div>
          </Link>
        ))}
      </section>
    
    </div>
  );
};

export default Careers;
