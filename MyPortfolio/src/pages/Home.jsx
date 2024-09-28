import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>This is where I showcase my work and skills.</p>
      <Link to="/about">Learn more about me</Link>
    </div>
  );
};

export default Home;
