import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/projects">Projekt</Link>
        </li>
        <li>
          <Link to="/about-me">Om mig</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
