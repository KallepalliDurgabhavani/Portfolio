import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { personal } from '../data'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Home({ navigate }) {
  return (
    <div>
      {/* ── HERO ─────────────────────────────────── */}
      <section className="min-h-[calc(100vh-72px)] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1300px] mx-auto px-8 md:px-14 py-20 relative overflow-hidden">

        {/* Parallax decorative circle */}
        <Parallax speed={-12} className="absolute -top-24 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(184,134,11,0.06) 0%, transparent 70%)' }}
        />

        {/* Left — text */}
        <div className="relative z-10">
          <motion.div
            className="flex items-center gap-3 mb-8"
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
          >
            <span className="w-8 h-px" style={{ background: 'var(--gold)' }} />
            <span className="text-[0.72rem] tracking-[0.14em] uppercase" style={{ color: 'var(--gold)' }}>
              {personal.tagline}
            </span>
          </motion.div>

          <motion.h1
            className="font-serif font-light leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(3rem,5.5vw,5.2rem)', letterSpacing: '-0.01em' }}
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
          >
            {personal.name.split(' ')[0]}
            <strong className="block font-bold">
              {personal.name.split(' ').slice(1).join(' ')}
            </strong>
          </motion.h1>

          <motion.p
            className="font-serif font-light mb-7 text-[clamp(1.1rem,2vw,1.5rem)] tracking-wide"
            style={{ color: 'var(--muted)' }}
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
          >
            {personal.role}
          </motion.p>

          <motion.p
            className="text-[0.9rem] font-light leading-[1.9] max-w-xl mb-10 pl-5 border-l-2"
            style={{ color: 'var(--muted)', borderColor: 'var(--bdr)' }}
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
          >
            I build precise, performant, and visually refined web experiences — from interactive animations to accessible component systems.
            Based in {personal.location}.
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
          >
            <Btn solid onClick={() => navigate('projects')}>View Work</Btn>
            <Btn       onClick={() => navigate('contact')}>Get in Touch</Btn>
          </motion.div>
        </div>

        {/* Right — profile card */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="relative rounded-sm p-10 border"
            style={{ background: 'var(--white)', borderColor: 'var(--bdr)' }}
          >
            {/* gold top bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-sm" style={{ background: 'linear-gradient(90deg,var(--gold),var(--gold2))' }} />

            {/* Avatar */}
            <div
              className="w-[90px] h-[90px] rounded-full flex items-center justify-center font-serif text-[2.2rem] font-semibold mb-5 border-2"
              style={{ background: 'var(--fog2)', borderColor: 'var(--bdr)', color: 'var(--ink)' }}
            >
              {personal.initials}
            </div>

            <p className="font-serif text-[1.3rem] font-bold mb-1">{personal.name}</p>
            <p className="text-[0.78rem] tracking-wider mb-6" style={{ color: 'var(--muted)' }}>
              {personal.role} · {personal.location}
            </p>

            <div className="h-px mb-6" style={{ background: 'var(--bdr)' }} />

            <div className="grid grid-cols-2 gap-3 mb-5">
              {personal.stats.map((s) => (
                <div key={s.label} className="text-center p-3 rounded-sm" style={{ background: 'var(--fog)' }}>
                  <p className="font-serif text-[1.8rem] font-bold leading-none">{s.num}</p>
                  <p className="text-[0.68rem] tracking-widest uppercase mt-1" style={{ color: 'var(--muted)' }}>{s.label}</p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </section>

      {/* ── ABOUT ────────────────────────────────── */}
      <section className="border-t" style={{ background: 'var(--white)', borderColor: 'var(--bdr)' }}>
        <div className="max-w-[1300px] mx-auto px-8 md:px-14 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[0.7rem] tracking-[0.14em] uppercase mb-3 flex items-center gap-2" style={{ color: 'var(--gold)' }}>
              <span className="inline-block w-6 h-px" style={{ background: 'var(--gold)' }} />
              About Me
            </p>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-tight mb-8">
              Crafting interfaces<br />with <em className="italic" style={{ color: 'var(--muted)' }}>intention</em>
            </h2>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-[0.7rem] tracking-[0.12em] uppercase pb-2 mb-3 border-b" style={{ borderColor: 'var(--bdr)' }}>Education</h4>
                <ul className="space-y-1">
                  {personal.education.map(e => (
                    <li key={e} className="text-[0.83rem] font-light flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>—</span>{e}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[0.7rem] tracking-[0.12em] uppercase pb-2 mb-3 border-b" style={{ borderColor: 'var(--bdr)' }}>Interests</h4>
                <ul className="space-y-1">
                  {personal.interests.map(i => (
                    <li key={i} className="text-[0.83rem] font-light flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>—</span>{i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {personal.bio.map((para, i) => (
              <p key={i} className="text-[0.88rem] font-light leading-[2]" style={{ color: 'var(--muted)' }}>
                {para}
              </p>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function Btn({ solid, children, onClick }) {
  const base = 'px-8 py-3 text-[0.78rem] font-medium tracking-widest uppercase rounded-sm transition-all duration-200 cursor-pointer border focus:outline-none'
  return (
    <button
      onClick={onClick}
      className={base}
      style={solid
        ? { background: 'var(--ink)', color: 'var(--fog)', borderColor: 'var(--ink)' }
        : { background: 'transparent', color: 'var(--ink)', borderColor: 'var(--bdr)' }
      }
      onMouseEnter={e => {
        if (solid) { e.currentTarget.style.background = 'var(--ink2)' }
        else       { e.currentTarget.style.borderColor = 'var(--ink)' }
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={e => {
        if (solid) { e.currentTarget.style.background = 'var(--ink)' }
        else       { e.currentTarget.style.borderColor = 'var(--bdr)' }
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {children}
    </button>
  )
}
