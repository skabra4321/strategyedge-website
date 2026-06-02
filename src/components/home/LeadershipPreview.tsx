'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { leadershipTeam } from '@/lib/data'

export function LeadershipPreview() {
  return (
    <section className="section-pad" style={{ background: '#E2EAF2' }} id="leadership">
      <div className="container-site">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div>
            <p className="font-inter text-xs font-medium uppercase tracking-[0.2em] mb-4" style={{ color: '#9EB3C8' }}>Leadership</p>
            <h2 className="font-inter font-thin" style={{ fontSize: 'clamp(36px, 4.5vw, 52px)', lineHeight: 1.08, letterSpacing: '-0.025em', color: '#0A1628' }}>
              The practitioners<br />behind the practice.
            </h2>
            <div className="w-12 h-px mt-6" style={{ background: '#9EB3C8' }} />
          </div>
          <p className="font-inter text-sm max-w-sm leading-relaxed" style={{ color: '#4A6A8A' }}>
            Every StrategyEdge engagement is led by a founding principal — not supervised by one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: '#C5D5E8' }}>
          {leadershipTeam.map((person, i) => (
            <motion.div
              key={person.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href={`/leadership/${person.slug}`}
                className="group flex flex-col p-8 lg:p-10 h-full transition-colors duration-300"
                style={{ background: '#E2EAF2' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#F0F4F8')}
                onMouseLeave={e => (e.currentTarget.style.background = '#E2EAF2')}
              >
                <div className="w-14 h-14 mb-6 flex items-center justify-center font-inter font-light text-xl" style={{ background: '#C5D5E8', color: '#4A6A8A' }}>
                  {person.name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <h3 className="font-inter font-semibold text-base leading-snug mb-1" style={{ color: '#0A1628' }}>
                  {person.name}
                </h3>
                <p className="font-inter text-sm mb-4" style={{ color: '#4A6A8A' }}>{person.title}</p>
                <div className="flex gap-2 flex-wrap mb-5">
                  {person.former.map((f: string) => (
                    <span key={f} className="font-inter text-xs px-2 py-1 border" style={{ color: '#9EB3C8', borderColor: 'rgba(158,179,200,0.4)' }}>
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto mb-5">
                  {person.focus.map((f: string) => (
                    <span key={f} className="font-inter text-xs" style={{ color: 'rgba(74,106,138,0.6)' }}>{f}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 font-inter text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#9EB3C8' }}>
                  Profile <ArrowRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}>
          <Link href="/leadership" className="inline-flex items-center gap-2 font-inter text-sm font-medium uppercase tracking-widest transition-colors duration-200" style={{ color: '#0A1628' }}>
            Meet the full team <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
