import React from "react";
import './styles/careers.css';
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
      <header className="header">
        <h1>CAREERS</h1>
      </header>
      <section className="cards-section">
        {jobList.map((job, index) => (
          <div className="job-card" key={index}>
            <h2>{job.title}</h2>
            <hr />
            <p>🕒 {job.time}</p>
            <p>💵 {job.salary}</p>
            <p>💻 {job.skills.replace(/\*/g, "*")}</p>
          </div>
        ))}
      </section>
      <Footer/>
    </div>
  );
};

export default Careers;
