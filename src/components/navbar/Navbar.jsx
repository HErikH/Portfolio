import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import "./style.scss";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__brand" href="#Homepage" aria-label="Erik Harutyunyan, home">
          EH<span>.</span>
        </a>
        <nav className="navbar__links" aria-label="Main navigation">
          <a href="#Portfolio">Work</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
        </nav>
        <div className="navbar__social" aria-label="Social links">
          <a target="_blank" rel="noreferrer" href="https://github.com/HErikH" aria-label="GitHub">
            <VscGithub />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/erik-harutyunyan-2588a9226/" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
