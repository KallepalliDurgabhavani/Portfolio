import { useState } from 'react'
import Navbar    from './components/Navbar'
import Footer    from './components/Footer'
import Home          from './pages/Home'
import Skills        from './pages/Skills'
import Projects      from './pages/Projects'
import Certifications from './pages/Certifications'
import Contact       from './pages/Contact'

const PAGES = ['home', 'skills', 'projects', 'certifications', 'contact']

export default function App() {
  const [active, setActive] = useState('home')

  const navigate = (page) => {
    if (PAGES.includes(page)) {
      setActive(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--fog)' }}>
      <Navbar active={active} navigate={navigate} />

      <main className="flex-1 pt-[72px]">
        {active === 'home'           && <Home           navigate={navigate} />}
        {active === 'skills'         && <Skills />}
        {active === 'projects'       && <Projects />}
        {active === 'certifications' && <Certifications />}
        {active === 'contact'        && <Contact />}
      </main>

      <Footer navigate={navigate} />
    </div>
  )
}
