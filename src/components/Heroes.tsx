import { motion } from 'framer-motion'
import { heroes } from '../config'
import { SectionHead } from './ui'

export default function Heroes() {
  return (
    <section id="heroes" className="section section-dark">
      <div className="container">
        <SectionHead dark eyebrow={heroes.eyebrow} title={heroes.title} text={heroes.text} />
        <div className="heroes-grid">
          {heroes.photos.map((p, i) => (
            <motion.figure
              key={p.src}
              className={`hphoto hphoto-${p.size}`}
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="hphoto-inner"
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.3, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
              </motion.div>
              <figcaption>{p.tag}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
