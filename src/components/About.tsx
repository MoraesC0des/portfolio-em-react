import { TECH } from '../data'
import Reveal from './Reveal'
import styles from './About.module.css'

const PILLARS = [
  {
    icon: '⊞',
    title: 'Sistemas de Componentes',
    desc: 'Bibliotecas UI modulares e reutilizáveis que aceleram ciclos de desenvolvimento mantendo consistência visual em grande escala.',
  },
  {
    icon: '◈',
    title: 'Lógica de Performance',
    desc: 'Otimizando Core Web Vitals para reduzir taxas de rejeição. Especializado em lazy loading, otimização de assets e bases de código enxutas.',
  },
  {
    icon: '◎',
    title: 'Fluxo de E-commerce',
    desc: 'Expertise em Shopify headless (Hydrogen), temas Liquid customizados e UX transacional que impulsiona receita através de código sem atrito.',
  },
]

export default function About() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <div className={styles.inner}>
        <Reveal className={styles.header}>
          <p className={styles.label}>Sobre</p>
          <h2 className={styles.title} id="about-title">Arquitetura Escalável</h2>
          <p className={styles.subtitle}>
            Conecto design systems a front-ends de alta conversão — cada componente tão performático quanto bonito.
          </p>
        </Reveal>

        {/* Pillar cards */}
        <div className={styles.pillarsGrid}>
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 80}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon} aria-hidden>{pillar.icon}</div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tech inventory */}
        <Reveal delay={200}>
          <div className={styles.techList} role="list" aria-label="Stack técnica">
            {TECH.map(row => (
              <div key={row.label} className={styles.techRow} role="listitem">
                <div className={styles.techLeft}>
                  <span className={styles.techIcon} aria-hidden>{row.icon}</span>
                  <span className={styles.techName}>{row.label}</span>
                </div>
                <div className={styles.techTags}>
                  {row.tags.map(tag => (
                    <span key={tag} className={styles.techTag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
