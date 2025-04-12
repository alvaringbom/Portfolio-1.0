import { Link } from "react-router-dom";
import ProfilePic from "../images/profile-pic.png"; // Importera bilden

const HomePage = () => {
  return (
    <>
      <h1>Välkommen till förstasidan</h1>
      <Link to="/about-me">
        <img src={ProfilePic} alt="Profilbild" className="profile-pic" />
      </Link>
    </>
  );
};

export default HomePage;
