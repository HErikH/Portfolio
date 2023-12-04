import { motion } from "framer-motion";
import './style.scss'

const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 20,
      },
    },
  };

function Hero() {
    return (
        <div className="hero">
          <div className="wrapper">
            <motion.div
              className="textContainer"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <motion.h2 variants={textVariants}>ERIK HARUTYUNYAN</motion.h2>
              <motion.h1 variants={textVariants}>
                Web developer
              </motion.h1>
              <motion.div variants={textVariants} className="buttons">
                <motion.a href="#Portfolio" variants={textVariants}>
                  See the Latest Works
                </motion.a>
                <motion.a href="#Contact" variants={textVariants}>
                  Contact Me
                </motion.a>
              </motion.div>
              <motion.img
                variants={textVariants}
                animate="scrollButton"
                src="/public/scroll.png"
                alt=""
              />
            </motion.div>
          </div>
          <motion.div
            className="slidingTextContainer"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
          >
            WEB DEVELOPER
          </motion.div>
          <div className="imageContainer">
            <img src="/public/hero.png" alt="" />
          </div>
        </div>
      );
}
export default Hero