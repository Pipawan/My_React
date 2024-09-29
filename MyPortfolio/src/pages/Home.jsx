import'./Home.css'; 
const Home = () => {
    return (
      <div className="home-container">
        <h1 className="welcome-message">Welcome to My Portfolio</h1>
        <p className="intro">
          Hi, I'm Pawan, a Software Engineer and Backend Specialist. I build 
          efficient and user-friendly web applications that make a difference.
        </p>
        <div className="specialties">
          <h2>My Specialties</h2>
          <ul>
            <li>🔧 Backend Development</li>
            <li>⚙️ API Design and Integration</li>
            <li>💻 Software Testing and Quality Assurance</li>
            <li>📈 Data Management and Optimization</li>
            <li>🛠️ Problem Solving and Debugging</li>
          </ul>
        </div>
        <a href="#about" className="explore-button">Explore My Work</a>
      </div>
    );
  };
  
  export default Home;