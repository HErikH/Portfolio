import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import "./style.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__copy">
        <p className="eyebrow"><span /> Full-Stack Engineer · Yerevan, Armenia</p>
        <h1>Building thoughtful <span>digital</span> experiences.</h1>
        <p className="hero__intro">
          I’m Erik, a full-stack engineer building modern web applications with React, TypeScript, and Node.js.
        </p>
        <div className="hero__actions">
          <a className="button button--dark" href="#Portfolio">
            Explore my work <FiArrowDownRight aria-hidden="true" />
          </a>
          <a className="textLink" href="#Contact">
            Let’s talk <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="hero__meta">
          <span>Selected work</span>
          <span>01 — 16</span>
        </div>
      </div>
      <div className="hero__portrait">
        <img src="/hero.jpeg" alt="Portrait of Erik Harutyunyan" />
        <span className="hero__portraitLabel">Erik Harutyunyan<br />Full-Stack Engineer</span>
      </div>
    </div>
  );
}

export default Hero;
