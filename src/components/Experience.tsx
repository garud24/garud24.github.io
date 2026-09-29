import { experiences } from '../data/experience'

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="section-heading">
        <span>01</span>

        <div>
          <p className="section-label">EXPERIENCE</p>
          <h2>Where I've worked.</h2>
        </div>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-item" key={experience.company}>
            <div className="experience-meta">
              <p>{experience.period}</p>
              {experience.location && <span>{experience.location}</span>}
            </div>

            <div className="experience-content">
              <h3>{experience.company}</h3>
              <p className="experience-role">{experience.role}</p>

              <p className="experience-description">
                {experience.description}
              </p>

              {experience.highlights.length > 0 && (
                <ul className="experience-highlights">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}

              <div className="experience-tech">
                {experience.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience