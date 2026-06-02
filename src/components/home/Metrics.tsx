'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { metrics } from '@/lib/data'

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center px-4 py-8 lg:py-0"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <p className="font-inter font-thin" style={{ fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: 1, letterSpacing: '-0.03em', color: '#DCE8F5' }}>
        {value}
      </p>
      <div className="w-8 h-px my-4" style={{ background: 'rgba(158,179,200,0.4)' }} />
      <p className="font-inter text-xs uppercase tracking-widest leading-relaxed whitespace-pre-line" style={{ color: 'rgba(158,179,200,0.45)' }}>
        {label}
      </p>
    </motion.div>
  )
}

export function Metrics() {
  return (
    <section className="py-20 lg:py-28" style={{ background: '#060E1A' }} id="metrics">
      <div className="container-site">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-inter text-xs font-medium uppercase tracking-[0.2em] mb-4" style={{ color: '#9EB3C8' }}>Track Record</p>
          <h2 className="font-inter font-thin" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#EBF2F8' }}>
            Built on a record of delivery.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ borderTop: '1px solid rgba(158,179,200,0.1)' }}>
          {metrics.map((m, i) => (
            <div key={m.value} style={{ borderLeft: i > 0 ? '1px solid rgba(158,179,200,0.1)' : 'none' }}>
              <StatItem value={m.value} label={m.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
