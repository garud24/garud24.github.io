const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        HG<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
      </div>

      <a href="#contact" className="nav-contact">
        Contact
      </a>
    </nav>
  )
}

export default Navbar