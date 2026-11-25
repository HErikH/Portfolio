import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { motion, useReducedMotion } from "framer-motion";
import "./style.scss";

function Navbar() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.header
      className="navbar"
      initial={reducedMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar__inner">
        <a className="navbar__brand" href="#Homepage" aria-label="Erik Harutyunyan, home">
          EH<span>.</span>
        </a>
        <motion.nav className="navbar__links" aria-label="Main navigation">
          <a href="#Portfolio">Work</a>
          <a href="#About">About</a>
          <a href="#Contact">Contact</a>
        </motion.nav>
        <div className="navbar__social" aria-label="Social links">
          <a target="_blank" rel="noreferrer" href="https://github.com/HErikH" aria-label="GitHub">
            <VscGithub />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/erik-harutyunyan-2588a9226/" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
