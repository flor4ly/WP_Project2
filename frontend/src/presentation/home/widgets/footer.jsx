import React from 'react';
import { Facebook, Linkedin, Send, Instagram } from 'lucide-react';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="images/logo.png" alt="Softlynk" />
    
        </div>
        
        <div className="footer-nav">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <div className="contact-item">
            <span className="icon">✉️</span>
            <a href="mailto:support@softlynk.com">support@softlynk.com</a>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <a href="tel:+998901234567">+998 90 123 45 67</a>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span>
            <span>123, Main St, Tashkent</span>
          </div>
        </div>
        
        <div className="footer-social">
          <a href="https://facebook.com/softlynk" aria-label="Facebook">
            <Facebook size={24} />
          </a>
          <a href="https://linkedin.com/company/softlynk" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="https://t.me/softlynk" aria-label="Telegram">
            <Send size={24} />
          </a>
          <a href="https://instagram.com/softlynk" aria-label="Instagram">
            <Instagram size={24} />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 Platform | All rights are reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;