import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Experience from './components/Experience'
import Projects from './components/Projects'
import SkillsAbout from './components/SkillsAbout'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Highlights />
        <Experience />
        <Projects />
        <SkillsAbout />
        <Contact />
      </main>
    </>
  )
}

export default App