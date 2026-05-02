export default function PageHero({ eyebrow, heading, subtitle }) {
  return (
    <div
      className="max-w-[1300px] mx-auto px-8 md:px-14 pt-12 pb-10 border-b"
      style={{ borderColor: 'var(--bdr)' }}
    >
      <p
        className="text-[0.7rem] tracking-[0.14em] uppercase mb-2 flex items-center gap-2"
        style={{ color: 'var(--gold)' }}
      >
        <span className="inline-block w-6 h-px" style={{ background: 'var(--gold)' }} />
        {eyebrow}
      </p>
      <h1
        className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-tight mb-2"
        style={{ color: 'var(--ink)' }}
      >
        {heading}
      </h1>
      {subtitle && (
        <p className="text-[0.88rem] font-light" style={{ color: 'var(--muted)' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
