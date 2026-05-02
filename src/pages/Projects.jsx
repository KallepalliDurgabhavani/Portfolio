import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { projects } from '../data'

export default function Projects() {
  return (
    <div>
      <PageHero
        eyebrow="Portfolio"
        heading="Selected Projects"
        subtitle="Real-world work showcasing frontend architecture, animation, and responsive design."
      />

      <div className="max-w-[1300px] mx-auto px-8 md:px-14 py-12">
        <div className="flex flex-col" style={{ gap: '1.5px', background: 'var(--bdr)' }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectRow project={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectRow({ project: p }) {
  return (
    <div
      className="group grid grid-cols-1 md:grid-cols-[80px_1fr] lg:grid-cols-[80px_1fr_1fr_auto] gap-6 items-center py-8 px-6 md:px-8 transition-all duration-200 cursor-default"
      style={{ background: 'var(--white)' }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--fog)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--white)'}
    >
      {/* Number */}
      <span className="font-serif text-[2.5rem] font-light leading-none select-none" style={{ color: 'var(--bdr)' }}>
        {p.num}
      </span>

      {/* Title + subtitle */}
      <div>
        <h3 className="font-serif text-[1.4rem] font-semibold mb-1">{p.title}</h3>
        <p className="text-[0.78rem] font-light" style={{ color: 'var(--muted)' }}>{p.sub}</p>
      </div>

      {/* Description */}
      <p className="text-[0.83rem] font-light leading-[1.8] hidden lg:block" style={{ color: 'var(--muted)' }}>
        {p.desc}
      </p>

      {/* Tags + links */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-1">
          {p.tags.map(t => (
            <span key={t} className="px-2 py-1 text-[0.67rem] tracking-wider rounded-sm" style={{ background: 'var(--fog2)', color: 'var(--ink2)' }}>
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-[0.7rem] font-medium tracking-wider uppercase rounded-sm border transition-all duration-200"
            style={{ background: 'var(--ink)', color: 'var(--fog)', borderColor: 'var(--ink)' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--ink2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
          >
            GitHub →
          </a>
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-[0.7rem] font-medium tracking-wider uppercase rounded-sm border transition-all duration-200"
              style={{ color: 'var(--ink)', borderColor: 'var(--bdr)' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--ink)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--bdr)'}
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
