import { FiArrowUpRight } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioData } from "../../data/data";
import "./style.scss";

function Portfolio() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="Portfolio" className="portfolioSection">
      <div className="portfolio__inner">
        <motion.div
          className="portfolio__headingRow"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="eyebrow"><span /> A selection of recent work</p>
            <h2 className="sectionHeading">Selected projects<span>.</span></h2>
          </div>
          <p className="portfolio__note">Websites and products<br />made with care.</p>
        </motion.div>

        <div className="portfolio__grid">
          {portfolioData.map((item, index) => (
            <motion.article
              className="project"
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              whileHover={reducedMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="project__image">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`}>
                    <img src={item.img} alt={`${item.title} preview`} loading="lazy" />
                  </a>
                ) : (
                  <img src={item.img} alt={`${item.title} preview`} loading="lazy" />
                )}
                <span className="project__number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="project__details">
                <div>
                  <h3>{item.title}</h3>
                  {item.text && <p>{item.text}</p>}
                </div>
                {item.url ? (
                  <a className="project__link" href={item.url} target="_blank" rel="noreferrer">
                    {item.urlText || "View project"} <FiArrowUpRight aria-hidden="true" />
                  </a>
                ) : (
                  <span className="project__private">Available upon request</span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
