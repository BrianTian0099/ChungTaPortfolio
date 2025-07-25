import { useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./NavBar.css";

gsap.registerPlugin(ScrollToPlugin);

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${id}`,
      ease: "power2.inOut",
    });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => scrollToSection("hero")}>
        Brian Tian
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a onClick={() => scrollToSection("about")}>Home</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("skills")}>Skills</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("projects")}>Works</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("articles")}>Articles</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1cEdTcUsfNbKNnLB1LYWuY6Nv-6A-5g2Q/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
