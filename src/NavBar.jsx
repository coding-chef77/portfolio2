import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hjem</Link>
        </li>
        <li>
          <Link to="/about">Om Meg</Link>
        </li>
        <li>
          <Link to="/projects">Prosjekter</Link>
        </li>
        <li>
          <Link to="cv">CV</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
