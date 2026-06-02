import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Compass, Link2, BarChart2, Settings, Leaf, Target, Users } from 'lucide-react'
import { capabilities } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Capabilities',
  description:
    'Seven practice areas covering Strategy & Transformation, Procurement, Finance, Operations, ESG, PMO, and Expert Secondments for GCC governments and enterprises.',
}

const iconMap: Record<string, React.ReactNode> = {
  compass: <Compass size={28} />,
  link: <Link2 size={28} />,
  'bar-chart': <BarChart2 size={28} />,
  settings: <Settings size={28} />,
  leaf: <Leaf size={28} />,
  target: <Target size={28} />,
  users: <Users size={28} />,
}

export default function CapabilitiesPage() {
  return (
    <>
      <section className="bg-navy pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-site">
          <p className="section-label text-[#9EB3C8] mb-6">Capabilities</p>
          <h1 className="display-heading text-[#DCE8F5] max-w-3xl text-balance">
            Seven disciplines.<br />One standard.
          </h1>
          <p className="mt-6 font-inter text-lg text-[#DCE8F5]/50 max-w-xl leading-relaxed">
            We do not offer services. We take on mandates -- and we are accountable to outcomes, not deliverables.
          </p>
        </div>
      </section>

      <section className="section-pad bg-[#F0F4F8]">
        <div className="container-site">
          <div className="divide-y divide-[#C5D5E8]">
            {capabilities.map((cap, i) => (
              <div key={cap.slug} className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 lg:py-16 group">
                <div className="lg:col-span-1 flex items-start pt-1">
                  <span className="font-inter text-xs text-[#4A6A8A]/50">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="lg:col-span-4">
                  <div className="text-[#9EB3C8] mb-4">{iconMap[cap.icon]}</div>
                  <h2 className="font-inter font-semibold text-[#0A1628] text-xl mb-2">{cap.title}</h2>
                </div>
                <div className="lg:col-span-5">
                  <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed mb-6">{cap.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cap.areas.map((area) => (
                      <li key={area} className="flex items-start gap-2 font-inter text-sm text-[#0A1628]/60">
                        <span className="text-[#9EB3C8] mt-1.5 flex-shrink-0">--</span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:col-span-2 flex items-start justify-end pt-1">
                  <Link
                    href={`/capabilities/${cap.slug}`}
                    className="inline-flex items-center gap-2 font-inter text-sm font-medium uppercase tracking-widest text-[#9EB3C8] hover:gap-4 transition-all duration-300"
                  >
                    Explore <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
