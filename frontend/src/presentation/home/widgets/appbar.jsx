import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './styles/app_bar.css';

export default function Appbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">Softlynk</div>
      <div className="right-section">
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/careers" className="nav-link">Careers</Link>
        </nav>
        <div className="lang-switch">
          <span className="globe-icon">🌐</span>
          <span className="lang-code">EN</span>
        </div>
      </div>
    </header>
  );
}