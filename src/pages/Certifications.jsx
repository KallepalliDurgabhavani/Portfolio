import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <div>
      <PageHero
        eyebrow="Credentials"
        heading="Certifications & Courses"
        subtitle="Verified credentials demonstrating continuous learning and technical growth."
      />

      <div className="max-w-[1300px] mx-auto px-8 md:px-14 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <CertCard cert={cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CertCard({ cert }) {
  return (
    <div
      className="group relative flex flex-col gap-4 p-6 border rounded-sm overflow-hidden transition-all duration-200 cursor-default"
      style={{ background: 'var(--white)', borderColor: 'var(--bdr)' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--gold)'
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.querySelector('.cert-accent').style.opacity = '1'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--bdr)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.querySelector('.cert-accent').style.opacity = '0'
      }}
    >
      {/* Gold bottom accent */}
      <div
        className="cert-accent absolute bottom-0 left-0 right-0 h-[2px] transition-opacity duration-200"
        style={{ background: 'linear-gradient(90deg,var(--gold),transparent)', opacity: 0 }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-sm text-xl"
          style={{ background: 'var(--fog2)' }}
        >
          {cert.icon}
        </div>
        <span
          className="text-[0.72rem] tracking-wider px-2 py-1 rounded-sm"
          style={{ background: 'var(--fog2)', color: 'var(--muted)' }}
        >
          {cert.year}
        </span>
      </div>

      <div>
        <h3 className="font-serif text-[1.05rem] font-semibold leading-tight mb-1">{cert.title}</h3>
        <p className="text-[0.78rem] font-light" style={{ color: 'var(--muted)' }}>{cert.org}</p>
      </div>

      <div
        className="flex items-center gap-1 text-[0.68rem] tracking-widest uppercase"
        style={{ color: 'var(--gold)' }}
      >
        <span>✓</span>
        <span>Verified Certificate</span>
      </div>
    </div>
  )
}
