import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Linkedin } from 'lucide-react'
import { leadershipTeam } from '@/lib/data'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return leadershipTeam.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const person = leadershipTeam.find((p) => p.slug === params.slug)
  if (!person) return {}
  return { title: person.name, description: `${person.title} at StrategyEdge Advisory. ${person.bio.slice(0, 120)}...` }
}

export default function LeaderPage({ params }: Props) {
  const person = leadershipTeam.find((p) => p.slug === params.slug)!
  if (!person) notFound()

  return (
    <>
      <section className="bg-navy pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-site">
          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 font-inter text-sm text-[#DCE8F5]/40 hover:text-[#DCE8F5]/70 transition-colors mb-10 uppercase tracking-widest"
          >
            <ArrowLeft size={14} /> Leadership
          </Link>
          <div className="flex flex-wrap gap-2 mb-6">
            {person.former.map((f) => (
              <span key={f} className="font-inter text-xs text-[#9EB3C8] border border-[#9EB3C8]/40 px-2 py-1">{f}</span>
            ))}
          </div>
          <h1 className="display-heading text-[#DCE8F5]">{person.name}</h1>
          <p className="mt-3 font-inter text-lg text-[#DCE8F5]/50">{person.title}</p>
        </div>
      </section>

      <section className="section-pad bg-[#F0F4F8]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="section-label mb-4">Biography</p>
              <div className="divider mb-8" />
              <p className="font-inter text-base text-[#4A6A8A] leading-relaxed mb-6">{person.bio}</p>
              {person.linkedin !== '#' && (
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#9EB3C8] hover:text-[#9EB3C8]-light transition-colors font-inter text-sm font-medium">
                  <Linkedin size={16} /> LinkedIn Profile
                </a>
              )}
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="section-label mb-4">Areas of Focus</p>
              <div className="divider mb-6" />
              <ul className="space-y-3 mb-10">
                {person.focus.map((f) => (
                  <li key={f} className="flex items-center gap-3 font-inter text-sm text-[#0A1628]/70">
                    <span className="text-[#9EB3C8]">--</span>{f}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="block text-center py-4 bg-[#0A1628] text-[#DCE8F5] font-inter text-sm font-medium uppercase tracking-widest hover:bg-[#0A1628]-light transition-colors duration-300">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
