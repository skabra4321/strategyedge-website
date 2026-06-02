import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description:
    "Founded by former BCG and top-tier strategy consultants, StrategyEdge Advisory is the GCC's premier boutique strategy and transformation firm. Our story, model, and values.",
}

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-navy pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-site">
          <p className="section-label text-[#9EB3C8] mb-6">About StrategyEdge</p>
          <h1 className="display-heading text-[#DCE8F5] max-w-3xl text-balance">
            We built a different kind of firm.
          </h1>
        </div>
      </section>

      {/* Founding thesis */}
      <section className="section-pad bg-[#F0F4F8]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="section-label mb-4">Our Story</p>
              <div className="divider" />
            </div>
            <div className="lg:col-span-8 space-y-6 font-inter text-base text-[#4A6A8A] leading-relaxed max-w-reading">
              <p className="text-[#0A1628] font-medium text-lg leading-relaxed">
                The GCC's transformation decade is producing a specific kind of problem that no existing firm was built to solve.
              </p>
              <p>
                The global firms are too large. Their GCC offices are staffed by teams that report to London, New York, or Dubai managing partners with thirty clients. The senior partner appears at kick-off, at the steering committee, and at the final presentation. The work in between belongs to analysts.
              </p>
              <p>
                The regional boutiques are too thin. Strong relationships, limited depth. When the mandate demands real technical rigour -- a viable operating model, a credible finance transformation, a procurement strategy that will survive board scrutiny -- the gaps show.
              </p>
              <p>
                StrategyEdge was founded to occupy the space between these two inadequate options: a firm with the analytical pedigree of the globals and the accountability structure of a boutique. Where the principal who signs the engagement leads every working session, every model review, every conversation with your leadership team.
              </p>
              <p className="font-medium text-[#0A1628]">
                That is not a positioning statement. It is an operating model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Model */}
      <section className="section-pad bg-[#E2EAF2]" id="model">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <p className="section-label mb-4">Our Model</p>
              <h2 className="section-heading text-[#0A1628]">How we work.</h2>
              <div className="divider mt-6" />
            </div>
            <div className="lg:col-span-8 space-y-10">
              <div className="flex gap-5 items-start">
                <div className="w-px bg-[#0A1628] self-stretch mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-inter font-semibold text-[#0A1628] text-base mb-3">Advisory Engagements</h3>
                  <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed">
                    StrategyEdge principals engage as strategic thought partners -- leading diagnostics, designing strategy, building the case, and advising through implementation. Engagements are scoped around specific mandates, typically four to sixteen weeks. Every working session is led by a principal.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-px bg-[#0A1628]/40 self-stretch mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-inter font-semibold text-[#0A1628] text-base mb-3">Expert Secondments</h3>
                  <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed">
                    Where sustained senior presence is required, we deploy practitioners directly into client organisations as interim functional leaders or transformation anchors. They hold real roles, carry real authority, and report to your leadership -- not ours.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="w-px bg-[#0A1628]/20 self-stretch mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-inter font-semibold text-[#0A1628] text-base mb-3">Engagement selection</h3>
                  <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed">
                    We maintain a deliberately small client portfolio. We take on mandates we can deliver at the standard we have set. This requires selectivity -- and a willingness to say when an engagement is not right for us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-[#F0F4F8]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="section-label mb-4">Our Values</p>
              <h2 className="section-heading text-[#0A1628]">What we stand for.</h2>
              <div className="divider mt-6" />
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { num: '01', title: 'Intellectual rigour without compromise', body: 'Every recommendation we make is built on analysis we can defend at the board level. We do not simplify for comfort or complicate for effect.' },
                { num: '02', title: 'Accountability to outcomes', body: 'We are not accountable to deliverables. We are accountable to outcomes. The engagement is not complete when the presentation is delivered -- it is complete when the transformation is real.' },
                { num: '03', title: 'Honesty over diplomacy', body: "We tell clients what they need to hear, not what they want to hear. This is a non-negotiable principle, applied with care and always with the client's interest as the basis." },
                { num: '04', title: 'GCC-first perspective', body: 'We approach every engagement with the assumption that the GCC context is unique -- not a derivative of Western business models -- and that the most important insights come from understanding it as such.' },
              ].map((v) => (
                <div key={v.num} className="flex gap-4">
                  <span className="section-label text-[#9EB3C8] mt-0.5 flex-shrink-0">{v.num}</span>
                  <div>
                    <h3 className="font-inter font-semibold text-[#0A1628] text-sm mb-2">{v.title}</h3>
                    <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-navy">
        <div className="container-site text-center">
          <h2 className="font-inter font-light text-[#DCE8F5] mb-6"
            style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.015em' }}>
            Ready to talk about your mandate?
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#0A1628] text-[#DCE8F5] font-inter text-sm font-medium uppercase tracking-widest hover:bg-[#0A1628]-light transition-colors duration-300">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
