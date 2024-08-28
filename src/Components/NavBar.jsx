import "../App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Updates the window width state whenever the window is resized to determine when to show the hamburger icon.
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggles the "open" class on the nav-links div to show/hide the links when the hamburger icon is clicked.
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="nav-bar">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <div className="nav-logo"></div>
        </Link>

        {/* Displays the hamburger menu icon once the screen width is below 1250px */}
        {windowWidth <= 1250 && (
          <div id="hamburger-icon" onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link to="/skills_and_experience" onClick={() => setMenuOpen(false)}>
            Skills & Experience
          </Link>
          <Link to="/about_me" onClick={() => setMenuOpen(false)}>
            About Me
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
