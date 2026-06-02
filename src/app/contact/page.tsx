import type { Metadata } from 'next'
import { ContactForm } from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a conversation with StrategyEdge Advisory. We respond to every serious enquiry personally.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="container-site">
          <p className="section-label text-[#9EB3C8] mb-6">Contact</p>
          <h1 className="display-heading text-[#DCE8F5] max-w-2xl text-balance">
            Start a conversation.
          </h1>
          <p className="mt-6 font-inter text-lg text-[#DCE8F5]/50 max-w-lg leading-relaxed">
            We respond to every serious enquiry personally. If you are navigating a transformation that requires senior thinking and committed delivery, we would welcome the opportunity to understand your mandate.
          </p>
        </div>
      </section>

      <section className="section-pad bg-[#F0F4F8]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              <p className="section-label mb-4">Send an Enquiry</p>
              <div className="divider mb-10" />
              <ContactForm />
            </div>

            {/* Contact details */}
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="section-label mb-4">Direct Contact</p>
              <div className="divider mb-8" />
              <div className="space-y-8">
                <div>
                  <p className="font-inter text-xs text-[#4A6A8A] uppercase tracking-widest mb-2">Principal Enquiries</p>
                  <a
                    href="mailto:admin@stratedgecnt.com"
                    className="font-inter text-base text-[#9EB3C8] hover:text-[#9EB3C8]-light transition-colors"
                  >
                    admin@stratedgecnt.com
                  </a>
                </div>
                <div>
                  <p className="font-inter text-xs text-[#4A6A8A] uppercase tracking-widest mb-2">Secondment Enquiries</p>
                  <a
                    href="mailto:secondments@strategyedge.com"
                    className="font-inter text-base text-[#9EB3C8] hover:text-[#9EB3C8]-light transition-colors"
                  >
                    secondments@strategyedge.com
                  </a>
                </div>
                <div>
                  <p className="font-inter text-xs text-[#4A6A8A] uppercase tracking-widest mb-2">Locations</p>
                  <p className="font-inter text-sm text-[#0A1628]/70 leading-relaxed">
                    Dubai, UAE<br />
                    Riyadh, Saudi Arabia
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-[#C5D5E8]">
                <p className="font-inter text-sm text-[#4A6A8A] leading-relaxed italic font-inter text-lg text-[#0A1628]">
                  "We respond to every serious enquiry personally. Our principals -- not a business development team -- are the first people you will speak with."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
