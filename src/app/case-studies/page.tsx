import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Selected engagements across GCC government, sovereign, industrial, and infrastructure sectors. Outcomes-focused case studies from StrategyEdge Advisory.',
}

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-navy pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-site">
          <p className="section-label text-[#9EB3C8] mb-6">Case Studies</p>
          <h1 className="display-heading text-[#DCE8F5] max-w-3xl text-balance">
            Selected engagements.
          </h1>
          <p className="mt-6 font-inter text-lg text-[#DCE8F5]/50 max-w-xl leading-relaxed">
            A selection of mandates across sectors, capabilities, and geographies -- presented with the permission of our clients, with identifying details removed where required.
          </p>
        </div>
      </section>

      <section className="section-pad bg-[#F0F4F8]">
        <div className="container-site">
          <div className="divide-y divide-[#C5D5E8]">
            {caseStudies.map((cs, i) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 lg:py-14 hover:bg-[#E2EAF2]/40 transition-colors -mx-6 lg:-mx-20 px-6 lg:px-20"
              >
                <div className="lg:col-span-1">
                  <span className="font-inter text-xs text-[#4A6A8A]/40">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="font-inter text-xs text-[#9EB3C8] border border-[#9EB3C8]/30 px-2 py-1">{cs.capability}</span>
                    <span className="font-inter text-xs text-[#4A6A8A] border border-[#C5D5E8] px-2 py-1">{cs.industry}</span>
                  </div>
                  <h2 className="font-inter font-semibold text-[#0A1628] text-lg leading-snug mb-3 group-hover:text-[#9EB3C8] transition-colors duration-200">
                    {cs.title}
                  </h2>
                  <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed">{cs.summary}</p>
                </div>
                <div className="lg:col-span-3">
                  <p className="font-inter text-xs text-[#4A6A8A] uppercase tracking-widest mb-3">Key Outcomes</p>
                  <ul className="space-y-2">
                    {cs.outcomes.slice(0, 2).map((o) => (
                      <li key={o} className="flex items-start gap-2 font-inter text-xs text-[#0A1628]/60">
                        <span className="text-[#9EB3C8] mt-1">--</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-1 flex items-start justify-end pt-1">
                  <ArrowRight size={16} className="text-[#9EB3C8] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
