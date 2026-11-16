import { motion } from 'framer-motion'
import { ArrowLeft, Clapperboard, MessageCircle, PenTool, Play, TrendingUp } from 'lucide-react'
import { generalMessage, wa } from '../config'

const float = (delay: number, dist = 10) => ({
  animate: { y: [0, -dist, 0] },
  transition: { duration: 5 + delay, repeat: Infinity, ease: 'easeInOut' as const, delay },
})

const bars = [22, 34, 30, 48, 62, 84]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-stripes" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.span
          className="hero-badge"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <i aria-hidden="true" /> Marketing Up Academy
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          مهاراتك الإبداعية <span className="hl">هي بداية</span> مستقبلك
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          اتعلم مهارات الديجيتال ماركتنج، الجرافيك ديزاين، والمونتاج مع Marketing Up Academy. اكتسب خبرة عملية وابدأ
          رحلتك في العالم الرقمي.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <motion.a href="#courses" className="btn btn-primary" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
            اكتشف الكورسات <ArrowLeft size={18} aria-hidden="true" />
          </motion.a>
          <motion.a
            href={wa(generalMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost-dark"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle size={18} aria-hidden="true" /> تواصل معنا
          </motion.a>
        </motion.div>

        <div className="hero-stage">
          {/* Marketing */}
          <motion.div
            className="float-card card-marketing"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div {...float(0.2, 8)}>
              <div className="fc-head">
                <span className="fc-ico">
                  <TrendingUp size={16} aria-hidden="true" />
                </span>
                <div>
                  <b>تحليل الحملات</b>
                  <small>Campaign Analytics</small>
                </div>
              </div>
              <div className="bars" aria-hidden="true">
                {bars.map((h, i) => (
                  <motion.span
                    key={i}
                    className={i === bars.length - 1 ? 'on' : ''}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    style={{ height: `${h}%`, originY: 1 }}
                    transition={{ delay: 1.1 + i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Video (center) */}
          <motion.div
            className="float-card card-video"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div {...float(0, 6)}>
              <div className="fc-head">
                <span className="fc-ico">
                  <Clapperboard size={16} aria-hidden="true" />
                </span>
                <div>
                  <b>مونتاج الفيديو</b>
                  <small>Reels &amp; Short-form</small>
                </div>
              </div>
              <div className="preview" aria-hidden="true">
                <motion.span className="play" whileHover={{ scale: 1.1 }}>
                  <Play size={22} fill="currentColor" />
                </motion.span>
                <em>00:12</em>
              </div>
              <div className="timeline" aria-hidden="true">
                <motion.i
                  className="playhead"
                  animate={{ insetInlineStart: ['6%', '92%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                />
                <div className="track"><span style={{ width: '38%' }} /><span className="v" style={{ width: '26%' }} /><span style={{ width: '20%' }} /></div>
                <div className="track"><span className="v" style={{ width: '22%' }} /><span style={{ width: '44%' }} /><span className="v" style={{ width: '18%' }} /></div>
                <div className="track"><span style={{ width: '60%' }} /><span className="v" style={{ width: '24%' }} /></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Design */}
          <motion.div
            className="float-card card-design"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div {...float(0.5, 9)}>
              <div className="fc-head">
                <span className="fc-ico">
                  <PenTool size={16} aria-hidden="true" />
                </span>
                <div>
                  <b>ألوان وخطوط</b>
                  <small>Color &amp; Typography</small>
                </div>
              </div>
              <div className="aa" aria-hidden="true">Aa</div>
              <div className="swatches" aria-hidden="true">
                <span style={{ background: '#8A2BE1' }} />
                <span style={{ background: '#1E0A46' }} />
                <span style={{ background: '#0A0A0A' }} />
                <span style={{ background: '#C9A6F2' }} />
              </div>
            </motion.div>
          </motion.div>

          <motion.span className="chip chip-a" {...float(0.3, 12)}>تسويق</motion.span>
          <motion.span className="chip chip-b" {...float(1, 10)}>تصميم</motion.span>
          <motion.span className="chip chip-c" {...float(0.7, 14)}>مونتاج</motion.span>
        </div>
      </div>
      <div className="hero-notch" aria-hidden="true" />
    </section>
  )
}
