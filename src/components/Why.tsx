import { Briefcase, FolderKanban, Lightbulb, ListChecks, Target } from 'lucide-react'
import type { ReactNode } from 'react'
import { why } from '../config'
import { Reveal, SectionHead } from './ui'

const icons: Record<string, ReactNode> = {
  target: <Target size={22} />,
  briefcase: <Briefcase size={22} />,
  bulb: <Lightbulb size={22} />,
  list: <ListChecks size={22} />,
  folder: <FolderKanban size={22} />,
}

export default function Why() {
  return (
    <section id="why" className="section">
      <div className="container">
        <SectionHead eyebrow="مميزاتنا" title="ليه Marketing Up؟" text="مش بس معلومات، دي طريقة تعلّم بتوصلك لشغل حقيقي." />
        <div className="why-grid">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08} className={`why-item ${i === 0 ? 'why-feature' : ''}`}>
              <span className="why-ico">{icons[w.icon]}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
