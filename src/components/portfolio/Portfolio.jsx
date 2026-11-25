import { FiArrowUpRight } from "react-icons/fi";
import { portfolioData } from "../../data/data";
import "./style.scss";

function Portfolio() {
  return (
    <section id="Portfolio" className="portfolioSection">
      <div className="portfolio__inner">
        <div className="portfolio__headingRow">
          <div>
            <p className="eyebrow"><span /> A selection of recent work</p>
            <h2 className="sectionHeading">Selected projects<span>.</span></h2>
          </div>
          <p className="portfolio__note">Websites and products<br />made with care.</p>
        </div>

        <div className="portfolio__grid">
          {portfolioData.map((item, index) => (
            <article className="project" key={item.id}>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
