import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <span>02</span>

        <div>
          <p className="section-label">FEATURED PROJECTS</p>
          <h2>Things I've built.</h2>
        </div>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <div>
                <span className="project-number">
                  {project.number}
                </span>

                <p className="project-category">
                  {project.category}
                </p>
              </div>

              <div className="project-links">
                {project.github &&
                  !project.github.includes("_GITHUB_URL") && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <ul className="project-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            {project.image && (
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} application screenshot`}
                  loading="lazy"
                />
              </div>
            )}

            <div className="project-tech">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects