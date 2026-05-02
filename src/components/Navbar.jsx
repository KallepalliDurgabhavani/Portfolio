import { useState } from 'react'
import { personal } from '../data'

const links = [
  { id: 'home',           label: 'Home' },
  { id: 'skills',         label: 'Skills' },
  { id: 'projects',       label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact',        label: 'Contact' },
]

export default function Navbar({ active, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-8 md:px-14 border-b"
      style={{
        background: 'rgba(247,246,244,0.94)',
        backdropFilter: 'blur(16px)',
        borderColor: 'var(--bdr)',
      }}
    >
      {/* Brand */}
      <button
        onClick={() => navigate('home')}
        className="flex items-center gap-3 focus:outline-none"
      >
        <div
          className="w-[38px] h-[38px] flex items-center justify-center font-serif text-base font-semibold tracking-wider border"
          style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
        >
          {personal.initials}
        </div>
        <span className="font-serif text-[1.05rem] font-semibold tracking-wider hidden sm:block" style={{ color: 'var(--ink)' }}>
          {personal.shortName}
        </span>
      </button>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-1">
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => navigate(l.id)}
            className="relative px-4 py-2 text-[0.78rem] font-medium tracking-widest uppercase transition-colors duration-200 focus:outline-none"
            style={{ color: active === l.id ? 'var(--ink)' : 'var(--muted)' }}
          >
            {l.label}
            <span
              className="absolute bottom-[2px] left-4 right-4 h-[1.5px] transition-all duration-300"
              style={{
                background: 'var(--gold)',
                opacity: active === l.id ? 1 : 0,
                transform: active === l.id ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
              }}
            />
          </button>
        ))}
        <button
          onClick={() => navigate('contact')}
          className="ml-4 px-5 py-2 text-[0.78rem] font-medium tracking-widest uppercase border transition-all duration-200 rounded-sm focus:outline-none"
          style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--fog)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)' }}
        >
          Hire Me
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {[0,1,2].map(i => (
          <span
            key={i}
            className="block w-5 h-[1.5px] transition-all duration-200"
            style={{ background: 'var(--ink)' }}
          />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-[72px] left-0 right-0 border-b p-6 flex flex-col gap-4 md:hidden"
          style={{ background: 'var(--fog)', borderColor: 'var(--bdr)' }}
        >
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => { navigate(l.id); setMenuOpen(false) }}
              className="text-left text-sm font-medium tracking-widest uppercase py-1 transition-colors"
              style={{ color: active === l.id ? 'var(--gold)' : 'var(--muted)' }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
