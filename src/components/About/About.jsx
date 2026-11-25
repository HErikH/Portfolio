import { skillGroups } from "../../data/data";
import "./style.scss";

function About() {
  return (
    <div className="about">
      <div className="about__intro">
        <p className="eyebrow"><span /> A little about me</p>
        <h2 className="sectionHeading">Good design starts with <span>good code.</span></h2>
        <p className="about__text">
          I’m a frontend-focused full-stack engineer with 3+ years of experience building modern, scalable web applications. My work spans React and TypeScript interfaces, Node.js services, REST APIs, database integrations, and real-time features. I enjoy taking features from concept to deployment, with a focus on performance, usability, and maintainable code.
        </p>
        <p className="about__text about__text--secondary">
          I’m also interested in software architecture, system design, and using AI tools to improve development workflows.
        </p>
      </div>
      <div className="skills">
        <div className="skills__heading">
          <h3>Technologies & tools</h3>
          <p>From interface work to backend services</p>
        </div>
        <div className="skills__groups">
          {skillGroups.map((group) => (
            <div className="skills__group" key={group.name}>
              <h4>{group.name}</h4>
              <div className="skills__items">
                {group.items.map((skill) => (
                  <span className="skill" key={skill.label}>
                    {skill.icon && <img src={skill.icon} alt="" loading="lazy" />}
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
