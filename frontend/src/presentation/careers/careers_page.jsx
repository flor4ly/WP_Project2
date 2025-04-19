import React from "react";
import './styles/careers.css';
import { Link } from "react-router-dom";
import Appbar from "../home/widgets/appbar";
import Footer from "../home/widgets/footer";

const jobList = new Array(9).fill({
  title: "Middle Frontend Developer",
  time: "09:00 - 17:00",
  salary: "10 000 000 - 15 000 000",
  skills: "React + REST API + Tailwind CSS",
});

const Careers = () => {
  return (
    <div className="careers-container">
      <Appbar/>
      <section className="cards-section">
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

      <Footer/>
    </div>
  );
};

export default Careers;
