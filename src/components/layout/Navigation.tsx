'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
]

function LogoMark({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="0" y="22" width="6" height="5" fill="currentColor" opacity="0.28"/>
      <rect x="9" y="15" width="6" height="12" fill="currentColor" opacity="0.6"/>
      <rect x="18" y="7" width="6" height="20" fill="currentColor"/>
      <line x1="0" y1="27" x2="24" y2="27" stroke="currentColor" strokeWidth="1.2" opacity="0.45"/>
    </svg>
  )
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navBg = scrolled || !isHome
    ? 'bg-[#0A1628]/96 backdrop-blur-sm border-b border-white/10'
    : 'bg-transparent'

  return (
    <>
      <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-500', navBg)}>
        <div className="container-site">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <LogoMark className="text-[#DCE8F5] transition-opacity duration-300 group-hover:opacity-80" />
              <div className="flex items-baseline">
                <span className="font-inter font-thin text-lg tracking-[0.18em] text-[#6A8EAA] uppercase leading-none">
                  STRATEGY
                </span>
                <span className="font-inter font-bold text-lg tracking-[0.12em] text-[#DCE8F5] uppercase leading-none ml-1.5">
                  EDGE
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'font-inter text-xs font-medium uppercase tracking-widest transition-colors duration-200 relative group',
                    pathname === link.href ? 'text-[#DCE8F5]' : 'text-[#9EB3C8] hover:text-[#DCE8F5]'
                  )}
                >
                  {link.label}
                  <span className={cn(
                    'absolute -bottom-1 left-0 h-px bg-[#9EB3C8] transition-all duration-300',
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  )} />
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="font-inter text-xs font-medium uppercase tracking-widest px-5 py-2.5 border border-[#9EB3C8]/40 text-[#9EB3C8] hover:border-[#DCE8F5] hover:text-[#DCE8F5] transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-[#9EB3C8]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: '#0A1628' }}
          >
            <div className="container-site pt-24 pb-12 flex flex-col h-full">
              <nav className="flex flex-col gap-1 mt-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className="block font-inter font-thin text-5xl text-[#DCE8F5]/80 hover:text-[#DCE8F5] transition-colors duration-200 py-3 border-b border-white/10"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-auto"
              >
                <Link
                  href="/contact"
                  className="inline-block font-inter text-sm font-medium uppercase tracking-widest px-8 py-4 border border-[#9EB3C8]/40 text-[#9EB3C8]"
                >
                  Get in Touch
                </Link>
                <p className="mt-6 font-inter text-sm text-[#9EB3C8]/40">
                  admin@stratedgecnt.com
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
