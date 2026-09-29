import SystemConstellation from './SystemConstellation'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-layout">
        <div className="hero-content">
          <div className="hero-status">
            <span className="status-dot"></span>
            Software Engineer
          </div>

          <h1>
            Himanshu Kiran
            <br />
            <span>Garud.</span>
          </h1>

          <p className="hero-description">
              I build scalable backend systems and full-stack products,
              from cloud-native applications to AI-powered experiences,
              with a focus on performance, reliability, and clean system design.
          </p>

          <div className="hero-tech">
            <span>Python</span>
            <span>Java</span>
            <span>TypeScript</span>
            <span>Spring Boot</span>
            <span>AWS</span>
            <span>PostgreSQL</span>
            <span>LLM / RAG</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a
              href="https://github.com/garud24"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              GitHub ↗
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Resume ↗
            </a>
          </div>
        </div>

        <SystemConstellation />
      </div>
    </section>
  )
}

export default Hero