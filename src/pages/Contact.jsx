import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { personal } from '../data'

const contactLinks = [
  { icon: '✉', label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
  { icon: '⌥', label: 'GitHub',   value: personal.github.replace('https://',''), href: personal.github },
  { icon: 'in',label: 'LinkedIn', value: personal.linkedin.replace('https://',''), href: personal.linkedin },
  { icon: '↓', label: 'Resume',   value: 'Download PDF · Updated May 2026', href: personal.resumeUrl },
]

export default function Contact() {
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', subject:'', message:'' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const submit = async (e) => {
  e.preventDefault()
  const res = await fetch('https://formspree.io/f/mrejbrnb', {  // ← paste your ID here
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  if (res.ok) {
    setSent(true)
    setForm({ firstName:'', lastName:'', email:'', subject:'', message:'' })
    setTimeout(() => setSent(false), 4000)
  }
}
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        heading="Let's Work Together"
        subtitle="Available for full-time roles, internships, and freelance projects."
      />

      <div className="max-w-[1300px] mx-auto px-8 md:px-14 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[0.88rem] font-light leading-[1.9] mb-8" style={{ color: 'var(--muted)' }}>
            I'm currently open to new opportunities. Whether you have a role in mind, a project to discuss, or simply want to connect — I'd be glad to hear from you.
          </p>

          <div className="flex flex-col border-t" style={{ borderColor: 'var(--bdr)' }}>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-4 border-b transition-all duration-200 group no-underline"
                style={{ borderColor: 'var(--bdr)', color: 'inherit' }}
                onMouseEnter={e => { e.currentTarget.style.paddingLeft = '0.5rem'; e.currentTarget.querySelector('.ci-label').style.color = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.querySelector('.ci-label').style.color = 'var(--ink)' }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center border rounded-sm text-sm transition-all duration-200 flex-shrink-0"
                  style={{ borderColor: 'var(--bdr)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'var(--fog)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'inherit' }}
                >
                  {link.icon}
                </div>
                <div className="flex-1">
                  <p className="ci-label text-[0.78rem] font-medium tracking-wider transition-colors duration-200" style={{ color: 'var(--ink)' }}>
                    {link.label}
                  </p>
                  <p className="text-[0.78rem] font-light truncate" style={{ color: 'var(--muted)' }}>
                    {link.value}
                  </p>
                </div>
                <span className="text-[0.7rem]" style={{ color: 'var(--muted)' }}>→</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative border rounded-sm p-8 md:p-10"
          style={{ background: 'var(--white)', borderColor: 'var(--bdr)' }}
        >
          {/* Gold top accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-sm" style={{ background: 'linear-gradient(90deg,var(--gold),transparent)' }} />

          <h2 className="font-serif text-[1.5rem] font-semibold mb-1">Send a Message</h2>
          <p className="text-[0.8rem] font-light mb-7" style={{ color: 'var(--muted)' }}>
            I typically respond within 24 hours.
          </p>

          {sent && (
            <div className="mb-6 p-4 border rounded-sm text-[0.85rem]" style={{ borderColor: 'var(--gold)', color: 'var(--gold)', background: 'rgba(184,134,11,0.05)' }}>
              ✓ Message sent! I'll get back to you soon.
            </div>
          )}

          <form onSubmit={submit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <FormField label="First Name" name="firstName" placeholder="Durga"    value={form.firstName} onChange={handle} />
              <FormField label="Last Name"  name="lastName"  placeholder="Bhavani"  value={form.lastName}  onChange={handle} />
            </div>
            <FormField label="Email Address" name="email"   type="email" placeholder="you@company.com" value={form.email}   onChange={handle} required />
            <FormField label="Subject"       name="subject"              placeholder="Internship · Collab · Hello" value={form.subject} onChange={handle} />
            <div>
              <label className="block text-[0.7rem] tracking-widest uppercase mb-2" style={{ color: 'var(--muted)' }}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                className="w-full border rounded-sm px-4 py-3 text-[0.85rem] font-light outline-none transition-colors duration-200 resize-none"
                style={{ background: 'var(--fog)', borderColor: 'var(--bdr)', color: 'var(--ink)', fontFamily: 'Inter, sans-serif' }}
                onFocus={e => { e.target.style.borderColor = 'var(--ink)'; e.target.style.background = 'var(--white)' }}
                onBlur={e =>  { e.target.style.borderColor = 'var(--bdr)'; e.target.style.background = 'var(--fog)' }}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-[0.78rem] font-medium tracking-widest uppercase rounded-sm border-none transition-all duration-200 cursor-pointer"
              style={{ background: 'var(--ink)', color: 'var(--fog)', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink2)'; e.currentTarget.style.letterSpacing = '0.15em' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)';  e.currentTarget.style.letterSpacing = '0.1em' }}
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  )
}

function FormField({ label, name, type='text', placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="block text-[0.7rem] tracking-widest uppercase mb-2" style={{ color: 'var(--muted)' }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border rounded-sm px-4 py-3 text-[0.85rem] font-light outline-none transition-colors duration-200"
        style={{ background: 'var(--fog)', borderColor: 'var(--bdr)', color: 'var(--ink)', fontFamily: 'Inter, sans-serif' }}
        onFocus={e => { e.target.style.borderColor = 'var(--ink)'; e.target.style.background = 'var(--white)' }}
        onBlur={e =>  { e.target.style.borderColor = 'var(--bdr)'; e.target.style.background = 'var(--fog)' }}
      />
    </div>
  )
}
