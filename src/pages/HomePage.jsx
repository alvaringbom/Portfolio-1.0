// import { Link } from "react-router-dom";
// import ProfilePic from "../images/profile-pic.png"; // Importera bilden
import Intro from "../components/Intro";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";

const HomePage = () => {
  return (
    <>
      <Intro />
      <Projects />
      <About />
    </>
  );
};

export default HomePage;
