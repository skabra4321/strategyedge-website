import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { industries, capabilities } from '@/lib/data'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = industries.find((i) => i.slug === params.slug)
  if (!industry) return {}
  return { title: industry.title, description: industry.summary }
}

export default function IndustryPage({ params }: Props) {
  const industry = industries.find((i) => i.slug === params.slug)!
  if (!industry) notFound()

  return (
    <>
      <section className="bg-navy pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-site">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 font-inter text-sm text-[#DCE8F5]/40 hover:text-[#DCE8F5]/70 transition-colors mb-10 uppercase tracking-widest"
          >
            <ArrowLeft size={14} /> Industries
          </Link>
          <p className="section-label text-[#9EB3C8] mb-6">Industry</p>
          <h1 className="display-heading text-[#DCE8F5] max-w-3xl text-balance">{industry.title}</h1>
          <p className="mt-6 font-inter text-lg text-[#DCE8F5]/50 max-w-xl leading-relaxed">{industry.summary}</p>
        </div>
      </section>

      <section className="section-pad bg-[#F0F4F8]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="section-label mb-4">Our Approach</p>
              <div className="divider mb-8" />
              <p className="font-inter text-base text-[#4A6A8A] leading-relaxed mb-6">
                Our work in this sector draws on direct experience with the governance structures, stakeholder dynamics, and operational constraints that shape decisions at the most senior levels of GCC organisations.
              </p>
              <p className="font-inter text-base text-[#4A6A8A] leading-relaxed">
                Every engagement in this sector is led by a principal with direct experience -- not a team briefed on the sector, but practitioners who have built the work from inside it.
              </p>
            </div>
            <div>
              <p className="section-label mb-4">Relevant Capabilities</p>
              <div className="divider mb-6" />
              <ul className="space-y-4">
                {capabilities.slice(0, 4).map((cap) => (
                  <li key={cap.slug}>
                    <Link
                      href={`/capabilities/${cap.slug}`}
                      className="flex items-center justify-between group py-3 border-b border-[#C5D5E8] hover:border-[#9EB3C8]/30 transition-colors"
                    >
                      <span className="font-inter text-sm text-[#0A1628] group-hover:text-[#9EB3C8] transition-colors">
                        {cap.title}
                      </span>
                      <ArrowRight size={14} className="text-[#9EB3C8] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1628] text-[#DCE8F5] font-inter text-sm font-medium uppercase tracking-widest hover:bg-[#0A1628]-light transition-colors duration-300"
                >
                  Discuss a mandate <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
