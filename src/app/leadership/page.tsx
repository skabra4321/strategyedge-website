import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { leadershipTeam } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Leadership',
  description:
    'The founding principals of StrategyEdge Advisory -- former BCG, McKinsey, Kearney, and Strategy& practitioners leading every client engagement.',
}

export default function LeadershipPage() {
  return (
    <>
      <section className="bg-navy pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-site">
          <p className="section-label text-[#9EB3C8] mb-6">Leadership</p>
          <h1 className="display-heading text-[#DCE8F5] max-w-3xl text-balance">
            The practitioners<br />behind the practice.
          </h1>
          <p className="mt-6 font-inter text-lg text-[#DCE8F5]/50 max-w-xl leading-relaxed">
            Every StrategyEdge engagement is led by a founding principal. Not supervised. Not reviewed. Led -- from kick-off to close.
          </p>
        </div>
      </section>

      <section className="section-pad bg-[#F0F4F8]">
        <div className="container-site">
          <div className="divide-y divide-[#C5D5E8]">
            {leadershipTeam.map((person) => (
              <div key={person.slug} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-14 lg:py-18">
                {/* Avatar */}
                <div className="lg:col-span-2">
                  <div className="w-20 h-20 bg-[#E2EAF2] flex items-center justify-center text-[#4A6A8A] font-inter font-light text-3xl">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-5">
                  <h2 className="font-inter font-semibold text-[#0A1628] text-xl mb-1">{person.name}</h2>
                  <p className="font-inter text-sm text-[#4A6A8A] mb-4">{person.title}</p>
                  <div className="flex gap-2 flex-wrap mb-6">
                    {person.former.map((f) => (
                      <span key={f} className="font-inter text-xs text-[#9EB3C8] border border-[#9EB3C8]/30 px-2 py-1">{f}</span>
                    ))}
                  </div>
                  <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed">{person.bio}</p>
                </div>

                {/* Focus areas */}
                <div className="lg:col-span-3 lg:col-start-9">
                  <p className="font-inter text-xs text-[#4A6A8A] uppercase tracking-widest mb-4">Areas of Focus</p>
                  <ul className="space-y-2">
                    {person.focus.map((f) => (
                      <li key={f} className="flex items-center gap-2 font-inter text-sm text-[#0A1628]/60">
                        <span className="text-[#9EB3C8]">--</span>{f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href={`/leadership/${person.slug}`}
                      className="inline-flex items-center gap-2 font-inter text-sm font-medium uppercase tracking-widest text-[#9EB3C8] hover:gap-4 transition-all duration-300"
                    >
                      Full profile <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
