import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { insights } from '@/lib/data'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = insights.find((i) => i.slug === params.slug)
  if (!article) return {}
  return { title: article.title, description: article.summary }
}

export default function InsightPage({ params }: Props) {
  const article = insights.find((i) => i.slug === params.slug)!
  if (!article) notFound()

  const related = insights.filter((i) => i.slug !== params.slug).slice(0, 2)

  return (
    <>
      <section className="bg-navy pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-site">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-inter text-sm text-[#DCE8F5]/40 hover:text-[#DCE8F5]/70 transition-colors mb-10 uppercase tracking-widest"
          >
            <ArrowLeft size={14} /> Perspectives
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label text-[#9EB3C8]">{article.category}</span>
            <span className="font-inter text-xs text-[#DCE8F5]/30">{article.readTime}</span>
          </div>
          <h1 className="display-heading text-[#DCE8F5] max-w-3xl text-balance">{article.title}</h1>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#0A1628]/20 flex items-center justify-center font-inter text-[#9EB3C8] text-sm">
              {article.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-inter text-sm text-[#DCE8F5]/70">{article.author}</p>
              <p className="font-inter text-xs text-[#DCE8F5]/30">{article.date}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F0F4F8]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <article className="lg:col-span-7">
              <p className="font-inter font-light text-[#0A1628]/80 text-2xl lg:text-3xl leading-relaxed mb-10 italic">
                "{article.summary}"
              </p>
              <div className="divider mb-10" />
              <div className="prose prose-sm max-w-none font-inter text-[#4A6A8A] leading-relaxed space-y-6">
                <p>
                  This insight draws on direct engagement experience across the GCC. The observations below reflect patterns seen across multiple mandates in this area -- not academic research, but the working knowledge of practitioners who have operated inside these environments.
                </p>
                <p>
                  The core argument is straightforward: most organisations approach this challenge with the wrong frame. They treat it as a compliance obligation -- something to be managed around -- rather than a strategic opportunity that, handled correctly, creates structural competitive advantage.
                </p>
                <p>
                  The organisations that consistently outperform in this domain share three characteristics. First, they have senior leadership who treat this as a first-order strategic priority rather than a delegated function. Second, they invest in genuine capability -- not project management overhead dressed as expertise. Third, they measure outcomes, not activities.
                </p>
                <p>
                  The practical implications are significant. For organisations currently in the early stages of addressing this, the priority should be to establish a credible baseline -- an honest assessment of current state -- before committing to any specific approach. The most expensive mistake we see is the over-engineering of solutions before the problem is properly understood.
                </p>
                <p>
                  For organisations further along the maturity curve, the question shifts from "how do we solve this" to "how do we build the institutional capability to sustain it." That is a fundamentally different question, and it requires a different kind of engagement.
                </p>
              </div>
            </article>
            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="bg-[#E2EAF2] p-8 mb-8">
                <p className="section-label mb-4">About the Author</p>
                <div className="divider mb-6" />
                <p className="font-inter font-semibold text-[#0A1628] text-sm mb-1">{article.author}</p>
                <p className="font-inter text-xs text-[#4A6A8A] mb-4">Principal, StrategyEdge Advisory</p>
                <p className="font-inter text-xs text-[#4A6A8A] leading-relaxed">
                  Practitioner with over 15 years of experience leading transformation mandates across GCC government, sovereign, and enterprise sectors.
                </p>
              </div>
              <div className="p-8 border border-[#C5D5E8]">
                <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed mb-6">
                  Discuss how these themes apply to your organisation.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-inter text-sm font-medium uppercase tracking-widest text-[#9EB3C8] hover:gap-4 transition-all duration-300"
                >
                  Start a conversation <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-pad bg-[#E2EAF2]">
          <div className="container-site">
            <p className="section-label mb-8">Related Perspectives</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#C5D5E8]">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/insights/${r.slug}`}
                  className="group flex flex-col p-8 bg-[#E2EAF2] hover:bg-[#F0F4F8] transition-colors duration-300"
                >
                  <span className="section-label text-[#9EB3C8] mb-3">{r.category}</span>
                  <h3 className="font-inter font-semibold text-[#0A1628] text-base leading-snug mb-3 group-hover:text-[#9EB3C8] transition-colors">{r.title}</h3>
                  <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed flex-1">{r.summary}</p>
                  <div className="flex items-center gap-2 mt-6 text-[#9EB3C8] font-inter text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Read <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
