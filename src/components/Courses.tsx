import { motion } from 'framer-motion'
import { ArrowLeft, Check } from 'lucide-react'
import { courseMessage, courses, offer, wa, type CourseKind } from '../config'
import { Reveal, SectionHead } from './ui'

function Visual({ kind }: { kind: CourseKind }) {
  if (kind === 'marketing')
    return (
      <svg viewBox="0 0 400 200" className="cv" role="img" aria-label="رسم يعبر عن تحليل الحملات التسويقية">
        <rect width="400" height="200" fill="#0A0A0A" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} x={40 + i * 48} y={160 - (i + 1) * 17} width="30" height={(i + 1) * 17} fill={i === 6 ? '#8A2BE1' : '#2a2a35'} />
        ))}
        <polyline points="55,130 103,118 151,121 199,96 247,82 295,62 343,34" fill="none" stroke="#C9A6F2" strokeWidth="2.5" />
        {[[55, 130], [103, 118], [151, 121], [199, 96], [247, 82], [295, 62], [343, 34]].map(([x, y]) => (
          <rect key={x} x={x - 4} y={y - 4} width="8" height="8" fill="#F9F9FD" />
        ))}
      </svg>
    )
  if (kind === 'design')
    return (
      <svg viewBox="0 0 400 200" className="cv" role="img" aria-label="رسم يعبر عن التصميم والألوان">
        <rect width="400" height="200" fill="#8A2BE1" />
        <text x="40" y="120" fontSize="96" fontWeight="800" fill="#F9F9FD" fontFamily="Manrope, sans-serif">Aa</text>
        <path d="M200 150 C 240 40, 300 40, 350 140" fill="none" stroke="#0A0A0A" strokeWidth="2.5" />
        <path d="M200 150 L 240 40 M350 140 L 300 40" stroke="#F9F9FD" strokeOpacity=".6" strokeWidth="1.5" strokeDasharray="4 4" />
        {[[200, 150], [350, 140]].map(([x, y]) => (
          <rect key={x} x={x - 6} y={y - 6} width="12" height="12" fill="#F9F9FD" stroke="#0A0A0A" strokeWidth="2" />
        ))}
        {[[240, 40], [300, 40]].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="5" fill="#0A0A0A" />
        ))}
        {['#0A0A0A', '#1E0A46', '#F9F9FD', '#C9A6F2'].map((c, i) => (
          <circle key={c} cx={50 + i * 34} cy="162" r="13" fill={c} stroke="#F9F9FD" strokeWidth="2" />
        ))}
      </svg>
    )
  return (
    <svg viewBox="0 0 400 200" className="cv" role="img" aria-label="رسم يعبر عن المونتاج">
      <rect width="400" height="200" fill="#1E0A46" />
      <rect x="40" y="24" width="320" height="86" fill="#0A0A0A" />
      <path d="M190 52 L190 82 L218 67 Z" fill="#F9F9FD" />
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <rect x="40" y={124 + r * 22} width="320" height="16" fill="#2c1561" />
          <rect x={40 + r * 40} y={124 + r * 22} width={120 + r * 30} height="16" fill={r === 1 ? '#8A2BE1' : '#C9A6F2'} />
          <rect x={200 + r * 22} y={124 + r * 22} width={80} height="16" fill={r === 1 ? '#C9A6F2' : '#8A2BE1'} />
        </g>
      ))}
      <rect x="232" y="116" width="2.5" height="76" fill="#F9F9FD" />
    </svg>
  )
}

const fmt = (n: number) => n.toLocaleString('en-US')

export default function Courses() {
  return (
    <section id="courses" className="section section-tint">
      <div className="container">
        <SectionHead
          eyebrow="الكورسات"
          title="اختار المهارة اللي هتبدأ بيها"
          text="ثلاث كورسات، ولكل كورس سعره المستقل."
        />

        <Reveal className="offer-banner">
          <span className="offer-tag">{offer.label}</span>
          <p>
            <b>كل كورس بـ {fmt(courses[0].price)} {offer.currency}</b> بدل {fmt(courses[0].originalPrice)} {offer.currency}. {offer.note}
          </p>
        </Reveal>

        <div className="course-grid">
          {courses.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.12}>
              <motion.article className="course" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }}>
                <div className="course-visual">
                  <Visual kind={c.id} />
                </div>
                <div className="course-body">
                  <h3>
                    <span dir="ltr">{c.name}</span>
                    <small>{c.arName}</small>
                  </h3>
                  <p className="course-desc">{c.description}</p>
                  <ul className="topics">
                    {c.topics.map((t) => (
                      <li key={t}>
                        <Check size={15} aria-hidden="true" />
                        <span dir="ltr">{t}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="price">
                    <span className="offer-tag small">{offer.label}</span>
                    <div className="price-row">
                      <s aria-label={`السعر الأصلي ${fmt(c.originalPrice)} جنيه`}>{fmt(c.originalPrice)} {offer.currency}</s>
                      <strong>
                        {fmt(c.price)} <span>{offer.currency}</span>
                      </strong>
                    </div>
                    <small>سعر هذا الكورس لوحده</small>
                  </div>

                  <motion.a
                    href={wa(courseMessage(c))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-block"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    احجز عبر واتساب <ArrowLeft size={18} aria-hidden="true" />
                  </motion.a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
