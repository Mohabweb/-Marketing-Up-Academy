import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, MessageCircle, X } from 'lucide-react'
import { generalMessage, nav, wa } from '../config'
import { Logo } from './ui'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <motion.header
      className={`navbar ${solid ? 'navbar-solid' : ''}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container navbar-row">
        <a href="#home" aria-label="Marketing Up Academy" onClick={() => setOpen(false)}>
          <Logo light={!solid} />
        </a>

        <nav className="nav-links" aria-label="التنقل الرئيسي">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <motion.a
            href={wa(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm nav-cta"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle size={16} aria-hidden="true" />
            واتساب
          </motion.a>
          <button
            className="nav-toggle"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="قائمة الجوال"
          >
            <div className="container">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
