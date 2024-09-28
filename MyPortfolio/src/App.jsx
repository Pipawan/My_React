import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import contact from './pages/contact';
import Navbar from './components/Navbar'; // if you decide to have a Navbar component

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Optional: Include if you have a Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<contact />} />
      </Routes>
    </Router>
  );
};

export default App;
