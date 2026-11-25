import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";
import "./style.scss";

function Hero() {
  const reducedMotion = useReducedMotion();
  const reveal = reducedMotion ? false : { opacity: 0, y: 22 };

  return (
    <div className="hero">
      <motion.div
        className="hero__copy"
        initial={reveal}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.11 }}
      >
        <motion.p className="eyebrow" initial={reveal} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}><span /> Full-Stack Engineer · Yerevan, Armenia</motion.p>
        <motion.h1 initial={reveal} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>Building thoughtful <span>digital</span> experiences.</motion.h1>
        <motion.p className="hero__intro" initial={reveal} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.16 }}>
          I’m Erik, a full-stack engineer building modern web applications with React, TypeScript, and Node.js.
        </motion.p>
        <motion.div className="hero__actions" initial={reveal} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.24 }}>
          <a className="button button--dark" href="#Portfolio">
            Explore my work <FiArrowDownRight aria-hidden="true" />
          </a>
          <a className="textLink" href="#Contact">
            Let’s talk <FiArrowUpRight aria-hidden="true" />
          </a>
        </motion.div>
        <motion.div className="hero__meta" initial={reveal} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.32 }}>
          <span>Selected work</span>
          <span>01 — 16</span>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero__portrait"
        initial={reducedMotion ? false : { opacity: 0, x: 28, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src="/hero.jpeg" alt="Portrait of Erik Harutyunyan" />
        <motion.span className="hero__portraitLabel" initial={reducedMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.8 }}>Erik Harutyunyan<br />Full-Stack Engineer</motion.span>
      </motion.div>
    </div>
  );
}

export default Hero;
