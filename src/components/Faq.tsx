import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faq } from '../config'
import { Reveal, SectionHead } from './ui'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="section section-tint">
      <div className="container faq-wrap">
        <SectionHead eyebrow="أسئلة شائعة" title="عندك سؤال؟" />
        <Reveal className="faq-list">
          {faq.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <h3>
                  <button aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                    <span>{f.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="faq-plus">
                      <Plus size={20} aria-hidden="true" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq-a"
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
