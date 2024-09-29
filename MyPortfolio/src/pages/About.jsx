import profileImage from '../components/Profile.jpeg'; // Adjust this path based on your folder structure
import'./About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="text-container">
        <h1>About Me</h1>
        <p>Hi! I'm Pawan, a Software Engineer who loves building websites. I create 
        user-friendly and efficient web applications that help people and businesses.</p>
        <p>
          I started my journey in tech because I enjoy coding and solving problems. 
          I've learned many programming languages and tools over the years. I like working 
          with others and taking on new challenges.
        </p>
        <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a>
      </div>
      <img src={profileImage} alt="Profile" />
    </div>
  );
};

export default About;
