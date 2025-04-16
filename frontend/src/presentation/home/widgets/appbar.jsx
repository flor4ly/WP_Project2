import React from 'react';
import './styles/app_bar.css';

export default function Appbar() {
  return (
    <header className="navbar">
      <div className="logo">Softlynk</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Services</a>
      </nav>
      <div className="lang-switch">🌐 EN</div>
    </header>
  );
}
