import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { industries } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'StrategyEdge Advisory serves government, sovereign, energy, industrial, infrastructure, mobility, and technology sectors across the GCC.',
}

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-navy pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-site">
          <p className="section-label text-[#9EB3C8] mb-6">Industries</p>
          <h1 className="display-heading text-[#DCE8F5] max-w-3xl text-balance">
            Built for the GCC economy.
          </h1>
          <p className="mt-6 font-inter text-lg text-[#DCE8F5]/50 max-w-xl leading-relaxed">
            The region's transformation agenda spans every sector. We have built our practice around the industries driving it.
          </p>
        </div>
      </section>

      <section className="section-pad bg-[#F0F4F8]">
        <div className="container-site">
          <div className="divide-y divide-[#C5D5E8]">
            {industries.map((industry, i) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-10 lg:py-12 hover:bg-[#E2EAF2]/50 transition-colors -mx-6 lg:-mx-20 px-6 lg:px-20"
              >
                <div className="lg:col-span-1 flex items-center">
                  <span className="font-inter text-xs text-[#4A6A8A]/40">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="lg:col-span-4 flex items-center">
                  <h2 className="font-inter font-medium text-[#0A1628] text-xl group-hover:text-[#9EB3C8] transition-colors duration-200">
                    {industry.title}
                  </h2>
                </div>
                <div className="lg:col-span-6 flex items-center">
                  <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed">{industry.summary}</p>
                </div>
                <div className="lg:col-span-1 flex items-center justify-end">
                  <ArrowRight size={18} className="text-[#9EB3C8] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
