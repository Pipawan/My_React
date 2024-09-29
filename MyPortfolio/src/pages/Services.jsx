import './Service.css'; // Import the CSS file for styling

// Import images for services
import webDevelopmentImg from '../components/Web.jpg';
import mobileDevelopmentImg from '../components/Mbl.jpg';
import softwareTestingImg from '../components/cyber.jpg';
import consultationImg from '../components/cyber.jpg';

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">My Services</h1>
      <div className="services-list">
        <div className="service-card">
          <img src={webDevelopmentImg} alt="Web Development" className="service-image" />
          <h2 className="service-name">Web Application Development</h2>
          <p className="service-description">
            I create responsive and user-friendly web applications using modern technologies like React, Node.js, and more.
          </p>
        </div>

        <div className="service-card">
          <img src={mobileDevelopmentImg} alt="Mobile Development" className="service-image" />
          <h2 className="service-name">Mobile Application Development</h2>
          <p className="service-description">
            I develop mobile applications for both Android and iOS platforms, ensuring a smooth and engaging user experience.
          </p>
        </div>

        <div className="service-card">
          <img src={softwareTestingImg} alt="Software Testing" className="service-image" />
          <h2 className="service-name">Software Testing</h2>
          <p className="service-description">
            I provide thorough testing services to ensure your software is reliable, bug-free, and meets all quality standards.
          </p>
        </div>

        <div className="service-card">
          <img src={consultationImg} alt="Consultation" className="service-image" />
          <h2 className="service-name">Consultation Services</h2>
          <p className="service-description">
            I offer expert advice on software development best practices and project management to help you succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
