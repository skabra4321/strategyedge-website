'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const words1 = ['The', 'work', 'that', 'matters', 'most']
const words2 = ['demands', 'partners', 'who', 'stay']

const trustItems = [
  'Founded by ex-BCG principals',
  '100% GCC-focused',
  'Advisory & embedded execution',
  'Senior-led, every engagement',
]

function WordReveal({ words, delay = 0, color }: { words: string[]; delay?: number; color?: string }) {
  return (
    <span className="block">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.22em] last:mr-0"
          style={color ? { color } : undefined}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + i * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: '#0A1628' }}>

      {/* Background bar accents */}
      <div className="absolute right-0 top-0 h-full pointer-events-none overflow-hidden" style={{ width: '28%' }}>
        <div className="absolute bottom-0 right-[72px] w-[52px] h-[52%]" style={{ background: 'rgba(220,232,245,0.035)' }} />
        <div className="absolute bottom-0 right-[10px] w-[52px] h-[76%]" style={{ background: 'rgba(220,232,245,0.055)' }} />
      </div>
      <div className="absolute top-32 right-16 w-px h-28 pointer-events-none" style={{ background: 'rgba(158,179,200,0.18)' }} />
      <div className="absolute top-32 right-16 h-px w-28 pointer-events-none" style={{ background: 'rgba(158,179,200,0.18)' }} />

      <div className="container-site flex flex-col justify-center flex-1 pt-40 pb-24 lg:pt-52 lg:pb-32">
        <motion.p
          className="font-inter text-xs font-medium uppercase mb-10"
          style={{ color: '#9EB3C8', letterSpacing: '0.2em' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          GCC Strategy & Transformation Advisory
        </motion.p>

        <h1 className="font-inter font-thin text-balance" style={{ fontSize: 'clamp(52px, 7vw, 88px)', lineHeight: 1.04, letterSpacing: '-0.03em', color: '#EBF2F8' }}>
          <WordReveal words={words1} delay={0.2} />
          <WordReveal words={words2} delay={0.6} />
          <span className="block">
            {['until', 'it', 'is'].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.22em]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.94 + i * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="inline-block"
              style={{ color: '#9EB3C8' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.18, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              done.
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="mt-8 font-inter text-lg max-w-reading leading-relaxed"
          style={{ color: 'rgba(220,232,245,0.5)' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          StrategyEdge Advisory works with GCC governments, sovereign-linked organisations, and leading enterprises on their most consequential transformation mandates — from the first strategic question to the final implementation milestone.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mt-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <Link href="/capabilities" className="btn-primary">
            <span>Our Capabilities</span>
            <ArrowRight size={16} className="relative z-10" />
          </Link>
          <Link href="/leadership" className="btn-ghost-light">
            Meet the Team
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="border-t"
        style={{ borderColor: 'rgba(158,179,200,0.12)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
      >
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ borderColor: 'rgba(158,179,200,0.12)' }}>
            {trustItems.map((item, i) => (
              <div key={item} className="py-5 px-6 first:pl-0" style={{ borderLeft: i > 0 ? '1px solid rgba(158,179,200,0.12)' : 'none' }}>
                <p className="font-inter text-xs uppercase tracking-widest leading-relaxed" style={{ color: 'rgba(158,179,200,0.4)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
