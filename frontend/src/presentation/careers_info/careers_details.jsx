import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './styles/careers_details.css';

const CareerDetails = () => {
  const { id } = useParams(); 
  const [career, setCareer] = useState(null);

  useEffect(() => {
    const fetchCareer = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/jobs/detail/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        const parsedData = {
          ...data,
          requirements: data.reqs?.split(';') || [],
          skills: data.skills?.split(';') || [],
          conditions: data.conditions?.split(';') || []
        };
    
        setCareer(parsedData);
      } catch (error) {
        console.error('Failed to fetch career details:', error);
      }
    };
    

    fetchCareer();
  }, [id]);

  if (!career) return <p>Loading career details...</p>;

  return (
    <div className="career-details-container">
      <h1>{career.title}</h1>
      <hr />

      <section>
        <h2>Requirements</h2>
        <ul>
          {career.requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Required Knowledge & Skills</h2>
        <ul>
          {career.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Working Conditions</h2>
        <ul>
          {career.conditions.map((cond, idx) => (
            <li key={idx}>{cond}</li>
          ))}
        </ul>
      </section>

      <button className="resume-button">Send Resume</button>
    </div>
  );
};

export default CareerDetails;
