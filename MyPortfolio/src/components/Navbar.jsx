import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About Me</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/services">Services</Link>
    <Link to="/contact">contact Me</Link>
  </nav>
);

export default Navbar;
