'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="section-pad" style={{ background: '#0A1628' }} id="contact-cta">
      <div className="container-site">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-inter text-xs font-medium uppercase tracking-[0.2em] mb-6" style={{ color: '#9EB3C8' }}>Contact</p>
          <h2 className="font-inter font-thin mb-6" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.08, letterSpacing: '-0.03em', color: '#EBF2F8' }}>
            The most important conversation starts here.
          </h2>
          <div className="w-12 h-px mx-auto mb-8" style={{ background: 'rgba(158,179,200,0.3)' }} />
          <p className="font-inter text-base leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: 'rgba(220,232,245,0.45)' }}>
            If you are navigating a transformation that requires senior thinking and committed delivery, we would welcome the opportunity to understand your mandate. We respond to every serious enquiry personally.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              <span>Start a conversation</span>
              <ArrowRight size={16} className="relative z-10" />
            </Link>
          </div>
          <p className="mt-8 font-inter text-sm" style={{ color: 'rgba(158,179,200,0.35)' }}>
            Or reach us directly:{' '}
            <a href="mailto:principals@strategyedge.com" className="transition-colors" style={{ color: '#9EB3C8' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#DCE8F5')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9EB3C8')}>
              principals@strategyedge.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
