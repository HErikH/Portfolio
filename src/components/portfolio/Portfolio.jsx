import { useRef } from "react";
import { portfolioData } from "../../data/data";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./style.scss";

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 110]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item?.text}</p>
            {item?.url && (
              <a target="_blank" href={item?.url} rel="noreferrer">
                {item?.urlText || "See Demo"}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {portfolioData.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}
export default Portfolio;
