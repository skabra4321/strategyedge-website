'use client'

import { motion } from 'framer-motion'

const differentiators = [
  {
    number: '01',
    title: 'Principals lead the work.',
    body: 'The founding principals are present in every engagement — not as sponsors, but as the practitioners. The person who leads the diagnostic leads the delivery.',
  },
  {
    number: '02',
    title: 'The GCC is our entire world.',
    body: 'We work exclusively in the Gulf. Not a global firm with a regional office — a firm whose entire practice, expertise, and senior network exists inside the GCC.',
  },
  {
    number: '03',
    title: 'Strategy through delivery.',
    body: 'We do not depart at the recommendation stage. Our advisory and secondment model keeps our people inside client organisations through implementation.',
  },
  {
    number: '04',
    title: 'We select work we can deliver.',
    body: 'We maintain a small, focused client portfolio by design. This is not a constraint of size — it is a commitment to quality. Every engagement receives full senior attention.',
  },
]

export function WhyUs() {
  return (
    <section className="section-pad" style={{ background: '#E2EAF2' }} id="why-us">
      <div className="container-site">
        <motion.div
          className="mb-16 lg:mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-inter text-xs font-medium uppercase tracking-[0.2em] mb-4" style={{ color: '#9EB3C8' }}>Why Us</p>
          <h2 className="font-inter font-thin" style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#0A1628' }}>
            A different kind of firm.<br />
            Structured around accountability.
          </h2>
          <div className="w-12 h-px mt-8" style={{ background: '#9EB3C8' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-start gap-5"
            >
              <span className="font-inter text-xs font-medium mt-1 flex-shrink-0" style={{ color: '#9EB3C8', letterSpacing: '0.12em' }}>
                {d.number}
              </span>
              <div>
                <h3 className="font-inter font-semibold text-lg mb-3 leading-snug" style={{ color: '#0A1628' }}>
                  {d.title}
                </h3>
                <p className="font-inter text-sm leading-relaxed" style={{ color: '#4A6A8A' }}>
                  {d.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
