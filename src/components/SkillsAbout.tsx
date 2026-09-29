const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C++"],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "FastAPI",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "Docker",
      "Azure",
      "GCP",
      "CI/CD",
      "CloudWatch",
    ],
  },
  {
    title: "Data & AI",
    skills: [
      "PostgreSQL",
      "BigQuery",
      "pgvector",
      "LLM / RAG",
      "Embeddings",
      "PyTorch",
    ],
  },
]

const SkillsAbout = () => {
  return (
    <>
      <section className="section" id="skills">
        <div className="section-heading">
          <span>03</span>

          <div>
            <p className="section-label">TECHNOLOGIES</p>
            <h2>What I work with.</h2>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <p className="skill-group-title">{group.title}</p>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading">
          <span>04</span>

          <div>
            <p className="section-label">ABOUT</p>
            <h2>A little more about me.</h2>
          </div>
        </div>

        <div className="about-content">
          <p className="about-lead">
            I'm a software engineer who enjoys turning complex
            problems into reliable, scalable systems.
          </p>

          <div className="about-copy">
            <p>
              My experience spans backend engineering, distributed
              data workflows, cloud-native applications, and
              AI-powered products. I've worked across healthcare,
              energy research, education, and emerging AI products.
            </p>

            <p>
              I particularly enjoy problems involving system design,
              API performance, data-intensive applications, and
              integrating AI into real products rather than treating
              it as a standalone feature.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default SkillsAbout