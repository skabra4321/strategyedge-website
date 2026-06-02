import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { insights } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Points of view from StrategyEdge Advisory on GCC strategy, transformation, procurement, finance, and ESG. Written by practitioners, not content teams.',
}

export default function InsightsPage() {
  const [featured, ...rest] = insights

  return (
    <>
      <section className="bg-navy pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-site">
          <p className="section-label text-[#9EB3C8] mb-6">Perspectives</p>
          <h1 className="display-heading text-[#DCE8F5] max-w-3xl text-balance">
            Points of view worth<br />reading twice.
          </h1>
          <p className="mt-6 font-inter text-lg text-[#DCE8F5]/50 max-w-lg leading-relaxed">
            We publish when we have something to say -- not on a content calendar.
          </p>
        </div>
      </section>

      <section className="section-pad bg-[#F0F4F8]">
        <div className="container-site">
          {/* Featured */}
          <Link
            href={`/insights/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 p-8 lg:p-12 bg-navy hover:bg-[#0A1628] transition-colors duration-400 mb-1"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="section-label text-[#9EB3C8]">{featured.category}</span>
                <span className="font-inter text-xs text-[#DCE8F5]/30">{featured.readTime}</span>
              </div>
              <h2 className="font-inter font-light text-[#DCE8F5] text-4xl lg:text-5xl leading-tight">{featured.title}</h2>
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-inter text-sm text-[#DCE8F5]/50 leading-relaxed">{featured.summary}</p>
              <div className="flex items-center justify-between mt-8">
                <div>
                  <p className="font-inter text-xs text-[#DCE8F5]/40">{featured.author}</p>
                  <p className="font-inter text-xs text-[#DCE8F5]/30">{featured.date}</p>
                </div>
                <div className="flex items-center gap-2 text-[#9EB3C8] font-inter text-sm font-medium uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </Link>

          {/* Rest */}
          <div className="divide-y divide-[#C5D5E8]">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 hover:bg-[#E2EAF2]/40 transition-colors -mx-6 lg:-mx-20 px-6 lg:px-20"
              >
                <div className="lg:col-span-2">
                  <span className="section-label text-[#9EB3C8]">{article.category}</span>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="font-inter font-semibold text-[#0A1628] text-base leading-snug mb-3 group-hover:text-[#9EB3C8] transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed">{article.summary}</p>
                </div>
                <div className="lg:col-span-3 lg:col-start-10 flex items-start justify-between lg:justify-end gap-4">
                  <div className="text-right">
                    <p className="font-inter text-xs text-[#4A6A8A]">{article.author}</p>
                    <p className="font-inter text-xs text-[#4A6A8A]/60">{article.date} · {article.readTime}</p>
                  </div>
                  <ArrowRight size={16} className="text-[#9EB3C8] mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
