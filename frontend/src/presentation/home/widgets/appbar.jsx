import { Link } from "react-router-dom";
import './styles/app_bar.css';
export default function Appbar() {
  return (
    <header className="navbar">
      <div className="logo">Softlynk</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
      </nav>
      <div className="lang-switch">🌐 EN</div>
    </header>
  );
}
