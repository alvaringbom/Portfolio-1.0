// import { Link } from "react-router-dom";
// import ProfilePic from "../images/profile-pic.png"; // Importera bilden
import Intro from "../components/Intro";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";

const HomePage = () => {
  return (
    <>
      <Intro />
      <div className="projects-about-section">
        <Projects />
        <About />
      </div>
    </>
  );
};

export default HomePage;
