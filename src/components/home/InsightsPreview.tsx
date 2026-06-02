'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { insights } from '@/lib/data'

export function InsightsPreview() {
  const [featured, ...rest] = insights.slice(0, 3)

  return (
    <section className="section-pad bg-[#F0F4F8]" id="insights">
      <div className="container-site">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div>
            <p className="section-label mb-4">Perspectives</p>
            <h2 className="section-heading text-[#0A1628]">
              Points of view worth<br />
              reading twice.
            </h2>
            <div className="divider mt-6" />
          </div>
          <p className="font-inter text-sm text-[#4A6A8A] max-w-xs leading-relaxed">
            We publish when we have something to say -- not on a content calendar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-[#C5D5E8]">
          {/* Featured article */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              href={`/insights/${featured.slug}`}
              className="group flex flex-col p-8 lg:p-12 bg-navy hover:bg-[#0A1628] transition-colors duration-400 h-full min-h-[400px]"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="section-label text-[#9EB3C8]">{featured.category}</span>
                <span className="font-inter text-xs text-[#DCE8F5]/30">{featured.readTime}</span>
              </div>
              <h3 className="font-inter font-light text-[#DCE8F5] text-3xl lg:text-4xl leading-tight mb-6 flex-1">
                {featured.title}
              </h3>
              <p className="font-inter text-sm text-[#DCE8F5]/50 leading-relaxed mb-8">
                {featured.summary}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-inter text-xs text-[#DCE8F5]/40">{featured.author}</p>
                  <p className="font-inter text-xs text-[#DCE8F5]/30">{featured.date}</p>
                </div>
                <div className="flex items-center gap-2 text-[#9EB3C8] font-inter text-sm font-medium uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                  Read <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary articles */}
          <div className="lg:col-span-2 flex flex-col divide-y divide-[#C5D5E8] bg-[#F0F4F8]">
            {rest.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex-1"
              >
                <Link
                  href={`/insights/${article.slug}`}
                  className="group flex flex-col p-8 lg:p-10 hover:bg-[#E2EAF2] transition-colors duration-300 h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="section-label text-[#9EB3C8]">{article.category}</span>
                    <span className="font-inter text-xs text-[#4A6A8A]">{article.readTime}</span>
                  </div>
                  <h3 className="font-inter font-semibold text-[#0A1628] text-base leading-snug mb-3 flex-1">
                    {article.title}
                  </h3>
                  <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed mb-6">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="font-inter text-xs text-[#4A6A8A]">{article.author} · {article.date}</p>
                    <ArrowRight size={14} className="text-[#9EB3C8] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-inter text-sm font-medium uppercase tracking-widest text-[#0A1628] hover:text-[#9EB3C8] transition-colors duration-200"
          >
            View all perspectives <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
