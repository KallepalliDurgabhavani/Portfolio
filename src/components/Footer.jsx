import { personal } from '../data'

export default function Footer({ navigate }) {
  return (
    <footer className="border-t" style={{ background: 'var(--white)', borderColor: 'var(--bdr)' }}>
      <div className="max-w-[1300px] mx-auto px-8 md:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-serif text-base font-semibold" style={{ color: 'var(--ink)' }}>
          {personal.name}
        </div>
        <p className="text-[0.75rem] tracking-wider" style={{ color: 'var(--muted)' }}>
          © {new Date().getFullYear()} · Built with React &amp; Tailwind CSS · Deployed on Vercel
        </p>
        <div className="flex gap-6">
          {[
            { label: 'GitHub',   href: personal.github },
            { label: 'LinkedIn', href: personal.linkedin },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.72rem] tracking-widest uppercase transition-colors hover:text-ink"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => navigate('contact')}
            className="text-[0.72rem] tracking-widest uppercase transition-colors"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            Resume
          </button>
        </div>
      </div>
    </footer>
  )
}
