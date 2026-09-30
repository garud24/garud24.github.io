const Contact = () => {
  return (
    <>
      <section className="section contact-section" id="contact">
        <div className="contact-content">
          <p className="section-label">LET'S CONNECT</p>

          <h2>
            Have an interesting
            <br />
            problem to solve?
          </h2>

          <p className="contact-description">
            I'm always interested in challenging engineering problems,
            thoughtful products, and conversations about software,
            distributed systems, and applied AI.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:garudhimanshu4@gmail.com"
              className="btn-primary"
            >
              Send me an email ↗
            </a>

            <a
              href="https://www.linkedin.com/in/himanshu-garud/"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/garud24"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <strong>Himanshu Kiran Garud</strong>
          <p>Software Engineer</p>
        </div>

        <p className="footer-copy">
          Built with React + TypeScript
        </p>
      </footer>
    </>
  )
}

export default Contact