import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <HashLink smooth to="/#projects">
            Portfölj
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#about">
            Om mig
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
