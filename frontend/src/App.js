import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { projects } from './presentation/projects/widgets/project_card.jsx';

import HomePage from './presentation/home/home_page';
import PortfolioGrid from './presentation/projects/projects_page';
import Footer from './presentation/home/widgets/footer';
import Appbar from './presentation/home/widgets/appbar';
import ServicesSection from './presentation/home/widgets/service_section.jsx';
import ProjectDetailPage from './presentation/project_detail/project_detail.jsx';
import SuccessDetail from './presentation/success_detail/success_detail.jsx';
import About from './presentation/about/about.jsx';
import Careers from './presentation/careers/careers_page.jsx';
import CareerDetails from './presentation/careers_info/careers_details.jsx';


function App() {
  return (
    <Router>
      <Appbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<PortfolioGrid projects= {projects}/>} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/careers" element={<Careers />} />

        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/service/:id" element={<SuccessDetail />} />
        <Route path="/career-info/:id" element={<CareerDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

