import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { capabilities } from '@/lib/data'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cap = capabilities.find((c) => c.slug === params.slug)
  if (!cap) return {}
  return {
    title: cap.title,
    description: cap.summary,
  }
}

export default function CapabilityPage({ params }: Props) {
  const cap = capabilities.find((c) => c.slug === params.slug)!
  if (!cap) notFound()

  const others = capabilities.filter((c) => c.slug !== params.slug).slice(0, 3)

  return (
    <>
      <section className="bg-navy pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-site">
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 font-inter text-sm text-[#DCE8F5]/40 hover:text-[#DCE8F5]/70 transition-colors mb-10 uppercase tracking-widest"
          >
            <ArrowLeft size={14} /> Capabilities
          </Link>
          <p className="section-label text-[#9EB3C8] mb-6">Capability</p>
          <h1 className="display-heading text-[#DCE8F5] max-w-3xl text-balance">{cap.title}</h1>
          <p className="mt-6 font-inter text-lg text-[#DCE8F5]/50 max-w-xl leading-relaxed">{cap.summary}</p>
        </div>
      </section>

      <section className="section-pad bg-[#F0F4F8]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="section-label mb-4">Overview</p>
              <div className="divider mb-8" />
              <p className="font-inter text-base text-[#4A6A8A] leading-relaxed mb-10">{cap.description}</p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="section-label mb-4">Areas of Work</p>
              <div className="divider mb-6" />
              <ul className="space-y-3">
                {cap.areas.map((area) => (
                  <li key={area} className="flex items-start gap-3 font-inter text-sm text-[#0A1628]/70 leading-relaxed">
                    <span className="text-[#9EB3C8] mt-1.5 flex-shrink-0">--</span>
                    {area}
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-10 border-t border-[#C5D5E8]">
                <p className="font-inter text-sm text-[#4A6A8A] mb-4">Discuss a mandate</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1628] text-[#DCE8F5] font-inter text-sm font-medium uppercase tracking-widest hover:bg-[#0A1628]-light transition-colors duration-300"
                >
                  Get in Touch <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related capabilities */}
      <section className="section-pad bg-[#E2EAF2]">
        <div className="container-site">
          <p className="section-label mb-8">Related Capabilities</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C5D5E8]">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/capabilities/${other.slug}`}
                className="group flex flex-col p-8 bg-[#E2EAF2] hover:bg-[#F0F4F8] transition-colors duration-300"
              >
                <h3 className="font-inter font-semibold text-[#0A1628] text-base mb-3">{other.title}</h3>
                <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed flex-1">{other.summary}</p>
                <div className="flex items-center gap-2 mt-6 text-[#9EB3C8] font-inter text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
