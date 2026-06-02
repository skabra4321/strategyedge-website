import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { caseStudies } from '@/lib/data'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = caseStudies.find((c) => c.slug === params.slug)
  if (!cs) return {}
  return { title: cs.title, description: cs.summary }
}

export default function CaseStudyPage({ params }: Props) {
  const cs = caseStudies.find((c) => c.slug === params.slug)!
  if (!cs) notFound()

  return (
    <>
      <section className="bg-navy pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-site">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-inter text-sm text-[#DCE8F5]/40 hover:text-[#DCE8F5]/70 transition-colors mb-10 uppercase tracking-widest"
          >
            <ArrowLeft size={14} /> Case Studies
          </Link>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="font-inter text-xs text-[#9EB3C8] border border-[#9EB3C8]/40 px-2 py-1">{cs.capability}</span>
            <span className="font-inter text-xs text-[#DCE8F5]/40 border border-white/20 px-2 py-1">{cs.industry}</span>
            <span className="font-inter text-xs text-[#DCE8F5]/40 border border-white/20 px-2 py-1">{cs.duration}</span>
          </div>
          <h1 className="display-heading text-[#DCE8F5] max-w-3xl text-balance">{cs.title}</h1>
        </div>
      </section>

      <section className="section-pad bg-[#F0F4F8]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 space-y-12">
              <div>
                <p className="section-label mb-4">The Challenge</p>
                <div className="divider mb-6" />
                <p className="font-inter text-base text-[#4A6A8A] leading-relaxed">{cs.challenge}</p>
              </div>
              <div>
                <p className="section-label mb-4">The Engagement</p>
                <div className="divider mb-6" />
                <p className="font-inter text-base text-[#4A6A8A] leading-relaxed">{cs.summary}</p>
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="bg-[#E2EAF2] p-8">
                <p className="section-label mb-4">Outcomes</p>
                <div className="divider mb-6" />
                <ul className="space-y-4">
                  {cs.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <span className="text-[#9EB3C8] font-inter font-semibold text-sm mt-0.5">--</span>
                      <p className="font-inter text-sm text-[#0A1628]/80 leading-relaxed">{o}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="block text-center py-4 bg-[#0A1628] text-[#DCE8F5] font-inter text-sm font-medium uppercase tracking-widest hover:bg-[#0A1628]-light transition-colors duration-300"
                >
                  Discuss a similar mandate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
