import { motion } from "framer-motion";
import { skillsIcons } from "../../data/data";
import "./style.scss";

let variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
  hidden: {
    x: -100,
    opacity: 0,
  },
};

function About() {
  return (
    <div className="about">
      <motion.span
        className="about-me"
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        Hi I'm Erik Frontend Developer with two years of experience, specializing in<br />
        building user-friendly and scalable web applications. Strong expertise<br />
        in React and modern frontend technologies, with hands-on experience in<br />
        the MERN stack. Passionate about improving UI/UX and creating efficient,<br />
        maintainable code.
        <br />
      </motion.span>

      <motion.div className="skills">
        <p>My skills</p>
        <motion.div
          className="skills__icons"
          initial="hidden"
          whileInView="visible"
          variants={variants}
        >
          {skillsIcons.map((icon, index) => {
            return icon == "BEM" ? (
              <motion.span variants={variants} key={icon}>
                {icon}
              </motion.span>
            ) : (
              <motion.img
                variants={variants}
                key={icon}
                src={icon}
                alt="icon"
              />
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
export default About;
