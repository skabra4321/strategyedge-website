'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { industries } from '@/lib/data'

export function Industries() {
  return (
    <section className="section-pad bg-navy overflow-hidden" id="industries">
      <div className="container-site">
        {/* Header */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="section-label text-[#9EB3C8] mb-4">Where We Work</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="section-heading text-[#DCE8F5] max-w-lg">
              Built for the GCC economy.<br />
              Every sector. Every mandate.
            </h2>
            <p className="font-inter text-sm text-[#DCE8F5]/40 max-w-sm leading-relaxed">
              The region's transformation agenda spans every sector of the economy. We have built our practice around the industries driving it.
            </p>
          </div>
          <div className="divider mt-8" />
        </motion.div>

        {/* Industry rows */}
        <div className="divide-y divide-[#9EB3C8/12]">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 sm:py-8"
              >
                <div className="flex items-center gap-6">
                  <span className="font-inter text-xs text-[#DCE8F5]/20 w-6 text-right flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-inter font-medium text-lg text-[#DCE8F5]/80 group-hover:text-[#DCE8F5] transition-colors duration-200">
                    {industry.title}
                  </h3>
                </div>
                <div className="flex items-center gap-8 sm:max-w-md">
                  <p className="font-inter text-sm text-[#DCE8F5]/30 leading-relaxed hidden lg:block">
                    {industry.summary}
                  </p>
                  <div className="text-[#9EB3C8] opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 transform group-hover:translate-x-1">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
