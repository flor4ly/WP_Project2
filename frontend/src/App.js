import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { projects } from './presentation/projects/widgets/project_card.jsx';

import HomePage from './presentation/home/home_page';
import PortfolioGrid from './presentation/projects/projects_page';
import Footer from './presentation/home/widgets/footer';
import Appbar from './presentation/home/widgets/appbar';
import Careers from './presentation/careers/careers_page.jsx';


function App() {
  return (
    <Router>
      <Appbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<PortfolioGrid projects= {projects}/>} />
        <Route path="/services" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

