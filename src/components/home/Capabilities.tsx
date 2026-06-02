'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Compass, Link2, BarChart2, Settings, Leaf, Target, Users } from 'lucide-react'
import { capabilities } from '@/lib/data'

const iconMap: Record<string, React.ReactNode> = {
  compass: <Compass size={22} />,
  link: <Link2 size={22} />,
  'bar-chart': <BarChart2 size={22} />,
  settings: <Settings size={22} />,
  leaf: <Leaf size={22} />,
  target: <Target size={22} />,
  users: <Users size={22} />,
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export function Capabilities() {
  const regular = capabilities.slice(0, 6)
  const secondment = capabilities[6]

  return (
    <section className="section-pad bg-[#F0F4F8]" id="capabilities">
      <div className="container-site">
        {/* Header */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="section-label mb-4">What We Do</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="section-heading text-[#0A1628] max-w-lg">
              Seven disciplines.<br />
              One standard of delivery.
            </h2>
            <p className="font-inter text-base text-[#4A6A8A] max-w-sm leading-relaxed">
              We do not offer services. We take on mandates -- and we are accountable to outcomes, not deliverables.
            </p>
          </div>
          <div className="divider mt-8" />
        </motion.div>

        {/* 6-card grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C5D5E8]"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {regular.map((cap) => (
            <motion.div key={cap.slug} variants={item}>
              <Link
                href={`/capabilities/${cap.slug}`}
                className="group flex flex-col p-8 lg:p-10 bg-[#F0F4F8] hover:bg-[#E2EAF2] transition-colors duration-300 h-full min-h-[280px]"
              >
                <div className="text-[#9EB3C8] mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
                  {iconMap[cap.icon]}
                </div>
                <h3 className="font-inter font-semibold text-[#0A1628] text-base mb-3 leading-snug">
                  {cap.shortTitle}
                </h3>
                <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed flex-1">
                  {cap.summary}
                </p>
                <div className="flex items-center gap-2 mt-6 text-[#9EB3C8] font-inter text-sm font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondments feature card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-px"
        >
          <Link
            href="/capabilities/expert-secondments"
            className="group flex flex-col lg:flex-row gap-8 lg:gap-16 p-8 lg:p-10 bg-navy hover:bg-[#0A1628] transition-colors duration-400 border-t-2 border-[#9EB3C8]"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#9EB3C8]"><Users size={22} /></div>
                <p className="section-label text-[#9EB3C8]">Expert Secondments</p>
              </div>
              <h3 className="font-inter font-light text-[#DCE8F5] text-3xl lg:text-4xl leading-tight mb-4">
                We embed our people inside your organisation.
              </h3>
            </div>
            <div className="flex-1 lg:max-w-lg">
              <p className="font-inter text-sm text-[#DCE8F5]/60 leading-relaxed mb-6">
                {secondment.summary}
              </p>
              <div className="flex items-center gap-2 text-[#9EB3C8] font-inter text-sm font-medium uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                Learn about secondments <ArrowRight size={14} />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
