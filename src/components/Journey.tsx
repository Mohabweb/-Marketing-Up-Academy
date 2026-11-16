import { journey } from '../config'
import { Reveal, SectionHead } from './ui'

export default function Journey() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="رحلة الطالب" title="من أول رسالة لحد أول شغل" />
        <div className="journey" role="list">
          {journey.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="step" y={40}>
              <div className="step-card" role="listitem" style={{ ['--i' as string]: i }}>
                <span className="step-n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
