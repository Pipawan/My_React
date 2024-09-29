import './Project.css'; // Import the CSS file
import himalayaImage from '../components/Himalaya.webp'; // Import the Himalaya image
import tableTiltImage from '../components/TableTiltGame.jpg'; // Import the Table Tilt Game image
import bankingAppImage from '../components/OnlineBankingApp.png'; // Import the Online Banking Application image

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="project-card">
        <img src={himalayaImage} alt="Himalaya News" className="project-image" />
        <div className="project-info">
          <h2 className="project-name">Himalaya News</h2>
          <p className="project-description">
            I built the website for Himalaya News, one of the popular news sites. 
            It features a modern design, user-friendly interface, and easy navigation 
            for readers to access the latest news and articles.
          </p>
          <a href="https://www.himalayanews.com" target="_blank" rel="noopener noreferrer" className="project-link">
            Visit Himalaya News
          </a>
        </div>
      </div>

      {/* Table Tilt Game Project */}
      <div className="project-card">
        <img src={tableTiltImage} alt="Table Tilt Game" className="project-image" />
        <div className="project-info">
          <h2 className="project-name">Table Tilt Game</h2>
          <p className="project-description">
            I developed a fun and interactive Table Tilt game where players tilt the table 
            to guide a ball to the target. This project was built using React and showcases 
            my skills in game development.
          </p>
          <a href="https://github.com/Pipawan/Unity---Table-tilt" target="_blank" rel="noopener noreferrer" className="project-link">
            View on GitHub
          </a>
        </div>
      </div>

      {/* Online Banking Application Project */}
      <div className="project-card">
        <img src={bankingAppImage} alt="Online Banking Application" className="project-image" />
        <div className="project-info">
          <h2 className="project-name">Online Banking Application</h2>
          <p className="project-description">
            I created an Online Banking Application that allows users to manage their 
            bank accounts, view transactions, and transfer funds securely. This project 
            demonstrates my understanding of secure web application development.
          </p>
          <a href="https://github.com/Pipawan/online-banking-application" target="_blank" rel="noopener noreferrer" className="project-link">
            View on GitHub
          </a>
        </div>
      </div>

      {/* Repeat similar structure for additional projects */}
    </div>
  );
};

export default Projects;
