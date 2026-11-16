import { motion } from 'framer-motion'
import { ArrowLeft, Facebook, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react'
import { generalMessage, nav, site, wa } from '../config'
import { Logo, Reveal, Steps } from './ui'

export function FinalCta() {
  return (
    <section className="section cta-section">
      <div className="container">
        <Reveal className="cta">
          <Steps className="cta-steps" />
          <h2>جاهز تبدأ رحلتك؟</h2>
          <p>ابعتلنا على واتساب واعرف تفاصيل الكورسات والحجز.</p>
          <motion.a
            href={wa(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle size={20} aria-hidden="true" /> كلمنا على واتساب <ArrowLeft size={18} aria-hidden="true" />
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}

export function Contact() {
  const items = [
    { icon: <MessageCircle size={20} />, label: 'واتساب', value: site.phoneDisplay, href: wa(generalMessage), dir: 'ltr' as const },
    { icon: <Phone size={20} />, label: 'اتصال', value: site.phoneDisplay, href: `tel:+${site.whatsappNumber}`, dir: 'ltr' as const },
    { icon: <MapPin size={20} />, label: 'العنوان', value: site.address, href: site.mapsUrl, dir: 'rtl' as const },
    { icon: <Instagram size={20} />, label: 'إنستجرام', value: '@marketingupacademy', href: site.instagram, dir: 'ltr' as const },
    { icon: <Facebook size={20} />, label: 'فيسبوك', value: 'Marketing Up Academy', href: site.facebook, dir: 'ltr' as const },
  ]
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">تواصل معنا</span>
          <h2>إحنا قريبين منك</h2>
        </Reveal>
        <div className="contact-grid">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.06}>
              <motion.a
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                whileHover={{ y: -4 }}
              >
                <span className="c-ico">{it.icon}</span>
                <small>{it.label}</small>
                <b dir={it.dir}>{it.value}</b>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div className="footer-brand">
          <Logo light />
          <p>مهاراتك الإبداعية هي بداية مستقبلك.</p>
        </div>
        <nav className="footer-nav" aria-label="روابط الموقع">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="footer-social">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="إنستجرام">
            <Instagram size={18} />
          </a>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="فيسبوك">
            <Facebook size={18} />
          </a>
          <a href={wa(generalMessage)} target="_blank" rel="noopener noreferrer" aria-label="واتساب">
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
      <div className="container footer-copy">© {new Date().getFullYear()} Marketing Up Academy. جميع الحقوق محفوظة.</div>
    </footer>
  )
}

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={wa(generalMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="fab"
      aria-label="تواصل معنا على واتساب"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={26} />
    </motion.a>
  )
}
