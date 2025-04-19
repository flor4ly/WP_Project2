import React from 'react';
import { Facebook, Linkedin, Send, Instagram } from 'lucide-react';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <img src="images/logo.png" alt="Softlynk" />
          <span className="footer-brand">Softlynk</span>
        </div>

        <div className="footer-navigation">
          <a href="/about">About Us</a>
          <a href="/projects">Projects</a>
          <a href="/services">Services</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
        </div>

        <div className="footer-contact">
          <div className="contact-item">
            <span className="icon"></span>
            <a href="mailto:support@softlynk.com">support@softlynk.com</a>
          </div>
          <div className="contact-item">
            <span className="icon"></span>
            <a href="tel:+998901234567">+998 90 123 45 67</a>
          </div>
          <div className="contact-item">
            <span className="icon"></span>
            <span>123, Main St, Tashkent</span>
          </div>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com/softlynk" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="https://linkedin.com/company/softlynk" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://t.me/softlynk" aria-label="Telegram">
            <Send size={20} />
          </a>
          <a href="https://instagram.com/softlynk" aria-label="Instagram">
            <Instagram size={20} />
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