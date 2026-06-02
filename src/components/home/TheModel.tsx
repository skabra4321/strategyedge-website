'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function TheModel() {
  return (
    <section className="section-pad bg-[#F0F4F8]" id="model">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="section-label mb-4">Our Model</p>
            <h2 className="section-heading text-[#0A1628] mb-6">
              Two ways to engage.<br />
              One standard of delivery.
            </h2>
            <div className="divider mb-10" />

            <div className="space-y-10">
              {/* Advisory */}
              <div className="flex gap-5">
                <div className="w-px bg-[#0A1628] flex-shrink-0 mt-1 self-stretch" />
                <div>
                  <h3 className="font-inter font-semibold text-[#0A1628] text-base mb-3">
                    Advisory Engagements
                  </h3>
                  <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed mb-4">
                    StrategyEdge principals engage as strategic thought partners -- leading diagnostics, designing strategy, building the case, and advising through implementation. Engagements are typically four to sixteen weeks, scoped around a specific mandate.
                  </p>
                  <Link
                    href="/capabilities"
                    className="inline-flex items-center gap-2 font-inter text-sm font-medium uppercase tracking-widest text-[#9EB3C8] hover:gap-4 transition-all duration-300"
                  >
                    Advisory practice <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Secondments */}
              <div className="flex gap-5">
                <div className="w-px bg-[#0A1628]/40 flex-shrink-0 mt-1 self-stretch" />
                <div>
                  <h3 className="font-inter font-semibold text-[#0A1628] text-base mb-3">
                    Expert Secondments
                  </h3>
                  <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed mb-4">
                    Where the mandate requires sustained senior presence -- an interim CFO, a procurement transformation lead, a PMO director -- we deploy practitioners directly into client organisations. They hold real roles, carry real authority, and are accountable to your leadership.
                  </p>
                  <Link
                    href="/capabilities/expert-secondments"
                    className="inline-flex items-center gap-2 font-inter text-sm font-medium uppercase tracking-widest text-[#9EB3C8] hover:gap-4 transition-all duration-300"
                  >
                    Expert secondments <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="bg-navy p-10 lg:p-12">
              {/* Advisory track */}
              <div className="mb-10">
                <p className="section-label text-[#9EB3C8] mb-4">Advisory Track</p>
                <div className="flex items-center gap-0">
                  {['Diagnostic', 'Strategy', 'Business Case', 'Implementation Advisory'].map((step, i, arr) => (
                    <div key={step} className="flex items-center flex-1">
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-2 h-2 bg-[#0A1628] rounded-full" />
                        <p className="font-inter text-xs text-[#DCE8F5]/50 text-center mt-2 leading-tight">{step}</p>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="w-full h-px bg-[#0A1628]/30 flex-1 -mt-4" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 mb-10" />

              {/* Secondment track */}
              <div className="mb-10">
                <p className="section-label text-[#DCE8F5]/40 mb-4">Secondment Track</p>
                <div className="flex items-center">
                  {['Placement', 'Embedded Delivery', 'Capability Transfer'].map((step, i, arr) => (
                    <div key={step} className="flex items-center flex-1">
                      <div className="flex flex-col items-center flex-1">
                        <div className="w-2 h-2 bg-[#F0F4F8]/30 rounded-full" />
                        <p className="font-inter text-xs text-[#DCE8F5]/30 text-center mt-2 leading-tight">{step}</p>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="flex-1 h-px bg-white/10 -mt-4" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="border-t border-[#9EB3C8]/30 pt-8">
                <div className="flex items-center justify-between">
                  <p className="font-inter text-sm text-[#DCE8F5]/60">Outcome</p>
                  <p className="font-inter font-light text-2xl text-[#DCE8F5]">
                    Measurable transformation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
