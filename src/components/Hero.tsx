import { useState, useEffect } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'
import { SKILLS, TYPEWRITER_TEXTS } from '../data'
import Icon from './Icon'
import Reveal from './Reveal'
import styles from './Hero.module.css'

const STATS = [
  { num: '2+',       label: 'Anos de Experiência' },
  { num: '10+',      label: 'Projetos Entregues' }
]

function Cursor() {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const t = setInterval(() => setVisible(v => !v), 500)
    return () => clearInterval(t)
  }, [])
  return (
    <span
      className={styles.cursor}
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden
    />
  )
}

export default function Hero() {
  const typed = useTypewriter(TYPEWRITER_TEXTS)

  return (
    <section className={styles.section} id="home" aria-label="Apresentação">
      <div className={styles.inner}>
        {/* Left column */}
        <div className={styles.content}>
          <Reveal>
            <div className={styles.badge} role="status">
              <span className={styles.pulse} aria-hidden />
              Disponível para novas oportunidades
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <h1 className={styles.name}>Gabriel Moraes</h1>
              <p className={styles.typewriter} aria-live="polite" aria-atomic>
                {typed}
                <Cursor />
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className={styles.subtitle}>
              Especializado em{' '}
              <strong>ecossistemas de e-commerce de alta performance</strong>{' '}
              — onde design systems encontram conversão real.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className={styles.tagsRow} aria-label="Tecnologias">
              {SKILLS.map(skill => (
                <span key={skill} className={styles.tag}>{skill}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className={styles.ctas}>
              <a href="#projects" className={styles.btnPrimary}>
                Ver Projetos <Icon name="arrow" size={16} aria-hidden />
              </a>
              <a href="#contact" className={styles.btnOutline}>
                Vamos Conversar
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right column — code card */}
        <Reveal dir="left" delay={100} className={styles.codeCardWrapper}>
          <div className={styles.codeCard}>
            <div className={styles.codeWindow}>
              <div className={styles.toolbar} aria-hidden>
                <span className={styles.dot} style={{ background: '#ff5f57' }} />
                <span className={styles.dot} style={{ background: '#febc2e' }} />
                <span className={styles.dot} style={{ background: '#28c840' }} />
                <span className={styles.filename}>portfolio.config.ts</span>
              </div>
              <pre className={styles.code}>
                <code>
                  <span className={styles.kw}>const </span>
                  <span className={styles.prop}>portfolio</span>
                  {' = {\n'}
                  {'  '}
                  <span className={styles.prop}>name</span>
                  {': '}
                  <span className={styles.str}>"Gabriel Moraes"</span>
                  {',\n  '}
                  <span className={styles.prop}>focus</span>
                  {': '}
                  <span className={styles.str}>"Otimização de Conversão"</span>
                  {',\n  '}
                  <span className={styles.prop}>stack</span>
                  {': ['}
                  <span className={styles.str}>"React"</span>
                  {', '}
                  <span className={styles.str}>"Shopify"</span>
                  {', '}
                  <span className={styles.str}>"Firebase"</span>
                  {'],\n  '}
                  <span className={styles.prop}>experience</span>
                  {': '}
                  <span className={styles.num}>2</span>
                  {' + '}
                  <span className={styles.str}>" anos"</span>
                  {',\n  '}
                  <span className={styles.prop}>available</span>
                  {': '}
                  <span className={styles.kw}>true</span>
                  {',\n}'}
                </code>
              </pre>
            </div>

            <div className={styles.statGrid} aria-label="Estatísticas">
              {STATS.map(({ num, label }) => (
                <div key={label} className={styles.stat}>
                  <div className={styles.statNum}>{num}</div>
                  <div className={styles.statLabel}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
