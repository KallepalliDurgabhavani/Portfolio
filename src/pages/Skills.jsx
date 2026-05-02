import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import { skills, skillCategories } from '../data'

export default function Skills() {
  const [active, setActive] = useState('all')
  const [triggered, setTriggered] = useState(false)
  const gridRef = useRef(null)

  const filtered = active === 'all' ? skills : skills.filter(s => s.cat === active)

  // Trigger bar animations when grid is in view
  useEffect(() => {
    setTriggered(false)
    const t = setTimeout(() => setTriggered(true), 100)
    return () => clearTimeout(t)
  }, [active])

  return (
    <div>
      <PageHero
        eyebrow="Expertise"
        heading="Skills & Technologies"
        subtitle="A curated overview of the tools and technologies I work with professionally."
      />

      <div className="max-w-[1300px] mx-auto px-8 md:px-14 py-12">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 text-[0.75rem] font-medium tracking-widest uppercase border rounded-sm transition-all duration-200 focus:outline-none"
              style={{
                background:   active === cat ? 'var(--ink)'  : 'transparent',
                color:        active === cat ? 'var(--fog)'  : 'var(--muted)',
                borderColor:  active === cat ? 'var(--ink)'  : 'var(--bdr)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group flex items-center gap-4 p-5 border rounded-sm transition-all duration-200 cursor-default"
                style={{ background: 'var(--white)', borderColor: 'var(--bdr)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--ink)'
                  e.currentTarget.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--bdr)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                {/* Icon badge */}
                <div
                  className="w-11 h-11 flex-shrink-0 rounded-sm flex items-center justify-center font-serif font-bold text-sm"
                  style={{ background: 'var(--fog2)', color: 'var(--ink)' }}
                >
                  {skill.icon}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[0.85rem] font-medium">{skill.name}</span>
                    <span className="text-[0.72rem] ml-2" style={{ color: 'var(--muted)' }}>{skill.pct}%</span>
                  </div>
                  <div className="h-[2px] rounded-full overflow-hidden" style={{ background: 'var(--fog3)' }}>
                    <div
                      className="skill-bar-fill h-full rounded-full"
                      style={{
                        background: 'var(--ink)',
                        width: triggered ? `${skill.pct}%` : '0%',
                      }}
                    />
                  </div>
                  <p className="text-[0.65rem] tracking-widest uppercase mt-1" style={{ color: 'var(--gold)' }}>
                    {skill.cat}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
