import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS for the Navbar
import logo from '../components//logo.png'; // Adjust the path based on where you place your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="MyPortfolio Logo" className="logo-image" /> {/* Logo image */}
      <div className="logo">MyPortfolio</div>
      <div className="nav-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
