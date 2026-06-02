import Link from 'next/link'
import { Linkedin } from 'lucide-react'

const footerLinks = {
  Firm: [
    { label: 'About', href: '/about' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Our Model', href: '/about#model' },
  ],
  Capabilities: [
    { label: 'Strategy & Transformation', href: '/capabilities/strategy-transformation' },
    { label: 'Finance Transformation', href: '/capabilities/finance-transformation' },
    { label: 'Procurement & Supply Chain', href: '/capabilities/procurement-supply-chain' },
    { label: 'Expert Secondments', href: '/capabilities/expert-secondments' },
  ],
  Industries: [
    { label: 'Government & Public Sector', href: '/industries/government' },
    { label: 'Sovereign Organisations', href: '/industries/sovereign' },
    { label: 'Industrial & Manufacturing', href: '/industries/industrial' },
    { label: 'Infrastructure', href: '/industries/infrastructure' },
  ],
  Intelligence: [
    { label: 'Insights', href: '/insights' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ],
}

function FooterLogo() {
  return (
    <div className="flex items-center gap-3 mb-6">
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="22" width="6" height="5" fill="#DCE8F5" opacity="0.28"/>
        <rect x="9" y="15" width="6" height="12" fill="#DCE8F5" opacity="0.6"/>
        <rect x="18" y="7" width="6" height="20" fill="#DCE8F5"/>
        <line x1="0" y1="27" x2="24" y2="27" stroke="#DCE8F5" strokeWidth="1.2" opacity="0.45"/>
      </svg>
      <div className="flex items-baseline">
        <span className="font-inter font-thin text-base tracking-[0.18em] uppercase leading-none" style={{ color: '#6A8EAA' }}>STRATEGY</span>
        <span className="font-inter font-bold text-base tracking-[0.12em] uppercase leading-none ml-1.5" style={{ color: '#DCE8F5' }}>EDGE</span>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer style={{ background: '#0A1628', color: 'rgba(158,179,200,0.7)' }}>
      <div className="container-site py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16" style={{ borderBottom: '1px solid rgba(158,179,200,0.12)' }}>

          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/"><FooterLogo /></Link>
            <p className="font-inter text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(158,179,200,0.45)' }}>
              Premier boutique strategy and transformation advisory, exclusively serving GCC governments, sovereign organisations, and leading enterprises.
            </p>
            <div className="mt-8">
              <p className="font-inter text-xs uppercase tracking-widest mb-2" style={{ color: 'rgba(158,179,200,0.35)', letterSpacing: '0.12em' }}>
                Direct Enquiries
              </p>
              <a href="mailto:principals@strategyedge.com" className="font-inter text-sm transition-colors" style={{ color: '#9EB3C8' }}>
                principals@strategyedge.com
              </a>
            </div>
            <div className="mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors" style={{ color: 'rgba(158,179,200,0.4)' }}>
                <Linkedin size={17} />
                <span className="font-inter text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="font-inter text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(158,179,200,0.28)', letterSpacing: '0.12em' }}>
                  {category}
                </p>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="font-inter text-sm transition-colors" style={{ color: 'rgba(158,179,200,0.55)' }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8">
          <p className="font-inter text-xs" style={{ color: 'rgba(158,179,200,0.28)' }}>
            © {new Date().getFullYear()} StrategyEdge Advisory. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-inter text-xs transition-colors" style={{ color: 'rgba(158,179,200,0.28)' }}>Privacy Policy</Link>
            <Link href="/terms" className="font-inter text-xs transition-colors" style={{ color: 'rgba(158,179,200,0.28)' }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
