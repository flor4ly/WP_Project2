import React from "react";
import './styles/careers_details.css'


const CareerDetails = () => {
  return (
    <div className="career-details-container">
    
        <h1>Middle Frontend Developer</h1>
        <hr />

        <section>
            <h2>Requirements</h2>
            <ul>
                <li>Support and improvement of existing projects, as well as the introduction of new functionality</li>
                <li>Teamwork with other developers, QA testers, backend programmers, and UI/UX designers</li>
            </ul>
        </section>

        <section>
            <h2>Required Knowledge & Skills</h2>
            <ul>
                <li>Understanding of application structures: PWA, SPA, SSR, MF</li>
                <li>Familiarity with SOLID, KISS, and DRY principles</li>
                <li>2+ years of work experience in development (with 1+ year of active development)</li>
                <li>Strong knowledge of JavaScript concepts: prototypical inheritance, event loop, closures, this keyword</li>
                <li>Proficiency in TypeScript and modern JavaScript (ES6+)</li>
                <li>Experience with React.js (including hooks and functional components)</li>
                <li>Familiarity with React Router, Context API, and Redux or Zustand</li>
                <li>Experience with Axios or Fetch API for handling HTTP requests</li>
                <li>Strong skills in Tailwind CSS and responsive design</li>
                <li>Experience using NPM or Yarn for dependency management</li>
                <li>Experience with build tools such as Vite, Webpack, or Create React App</li>
                <li>Knowledge of Git, Git Flow, and basic shell commands</li>
                <li>Experience working with Next.js</li>
                <li>Willingness to explore and learn new technologies</li>
            </ul>
        </section>

        <section>
            <h2>Working Conditions</h2>
            <ul>
                <li>5/2 work schedule, 09:00 to 18:00</li>
                <li>Corporate education and training sessions</li>
                <li>Collaboration with a professional and passionate team</li>
                <li>Friendly and supportive work atmosphere, including marathons, quizzes, and team-building events</li>
                <li>Access to modern, high-quality equipment</li>
                <li>Comfortable modern office with work facilities</li>
                <li>Timely salary payments, with a bonus system for outstanding results</li>
                <li>Official employment in accordance with the Labor Code of the Republic of Uzbekistan</li>
            </ul>
        </section>

        <button className="resume-button">Send Resume</button>
    
    </div>
  );
};

export default CareerDetails;
