import { EXPERIENCE } from '../data'
import Reveal from './Reveal'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section className={styles.section} id="experience" aria-labelledby="exp-title">
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.header}>
            <p className={styles.label}>Trajetória</p>
            <h2 className={styles.title} id="exp-title">Jornada Profissional</h2>
            <p className={styles.subtitle}>
              Quatro anos construindo ferramentas que empoderam usuários e escalam negócios.
            </p>
          </div>
        </Reveal>

        <div className={styles.timeline} role="list">
          {EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.title} delay={i * 100}>
              <div
                className={`${styles.entry} ${i % 2 === 0 ? styles.entryLeft : styles.entryRight}`}
                role="listitem"
              >
                {i % 2 === 0 ? (
                  <>
                    <div className={styles.side}>
                      <p className={`${styles.period} ${exp.active ? styles.activePeriod : ''}`}>
                        {exp.period}
                      </p>
                      <h3 className={styles.entryTitle}>{exp.title}</h3>
                      <p className={styles.company}>{exp.company}</p>
                      <p className={styles.desc}>{exp.desc}</p>
                    </div>
                    <div className={styles.dotWrap}>
                      <div className={`${styles.dot} ${exp.active ? styles.dotActive : styles.dotPast}`} />
                    </div>
                    <div className={styles.side} />
                  </>
                ) : (
                  <>
                    <div className={styles.side} />
                    <div className={styles.dotWrap}>
                      <div className={`${styles.dot} ${exp.active ? styles.dotActive : styles.dotPast}`} />
                    </div>
                    <div className={styles.side}>
                      <p className={`${styles.period} ${exp.active ? styles.activePeriod : ''}`}>
                        {exp.period}
                      </p>
                      <h3 className={styles.entryTitle}>{exp.title}</h3>
                      <p className={styles.company}>{exp.company}</p>
                      <p className={styles.desc}>{exp.desc}</p>
                    </div>
                  </>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
