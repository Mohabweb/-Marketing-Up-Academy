import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? 'logo-light' : ''}`}>
      <svg viewBox="0 0 197 196" aria-hidden="true" className="logo-mark">
        <path fill="#8A2BE1" d="M54 0H197V140H140V58H54Z" />
        <rect x="55" y="88" width="54" height="54" fill={light ? '#fff' : '#1E0A46'} />
        <rect x="0" y="142" width="55" height="54" fill={light ? '#fff' : '#1E0A46'} />
      </svg>
      <span className="logo-text" dir="ltr">
        <b>MARKETING UP</b>
        <small>ACADEMY</small>
      </span>
    </span>
  )
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHead({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string
  title: string
  text?: string
  dark?: boolean
}) {
  return (
    <Reveal className={`section-head ${dark ? 'on-dark' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  )
}

/** The brand's rising-squares motif, used as a quiet signature across the page. */
export function Steps({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 197 196" aria-hidden="true" className={className}>
      <path fill="currentColor" d="M54 0H197V140H140V58H54Z" />
      <rect x="55" y="88" width="54" height="54" fill="currentColor" opacity=".55" />
      <rect x="0" y="142" width="55" height="54" fill="currentColor" opacity=".3" />
    </svg>
  )
}
