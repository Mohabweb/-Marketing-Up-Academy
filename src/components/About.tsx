import { about } from '../config'
import { Reveal, Steps } from './ui'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal className="about-copy">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>{about.title}</h2>
          {about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Reveal className="about-side" delay={0.15}>
          <Steps className="about-steps" />
          <ul>
            {about.pillars.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
