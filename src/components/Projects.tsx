import { useState, useMemo } from 'react'
import { PROJECTS, Project } from '../data'
import Icon from './Icon'
import Reveal from './Reveal'
import styles from './Projects.module.css'

type FilterValue = 'all' | Project['category']

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: 'all',       label: 'Todos' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'dashboard', label: 'Dashboard' },
  { value: 'branding',  label: 'Branding' },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imgWrapper}>
        <img
          src={project.img}
          alt={`Screenshot do projeto ${project.title}`}
          className={styles.img}
          loading="lazy"
        />
        <span className={styles.year} aria-label={`Ano: ${project.year}`}>
          {project.year}
        </span>
      </div>
      <div className={styles.body}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <div className={styles.cardTags} aria-label="Tecnologias usadas">
            {project.tags.map(tag => (
              <span key={tag} className={styles.cardTag}>{tag}</span>
            ))}
          </div>
        </div>
        <p className={styles.cardDesc}>{project.desc}</p>
        <div className={styles.links}>
          {project.liveUrl && (
            <a href={project.liveUrl} className={styles.linkPrimary} target="_blank" rel="noopener noreferrer">
              Ver ao Vivo <Icon name="external" size={14} aria-hidden />
            </a>
          )}
          {project.caseUrl && (
            <a href={project.caseUrl} className={styles.linkMuted}>
              Estudo de Caso
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<FilterValue>('all')

  const filtered = useMemo(
    () => filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter),
    [filter]
  )

  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-title">
      <div className={styles.inner}>
        {/* Header row */}
        <div className={styles.headerRow}>
          <Reveal>
            <div>
              <p className={styles.label}>Portfólio</p>
              <h2 className={styles.title} id="projects-title">Entregas Selecionadas</h2>
            </div>
          </Reveal>
          <a href="#" className={styles.archiveLink}>
            Ver arquivo completo <Icon name="arrow" size={14} aria-hidden />
          </a>
        </div>

        {/* Filter bar */}
        <Reveal>
          <div className={styles.filterBar} role="group" aria-label="Filtrar projetos">
            {FILTERS.map(({ value, label }) => (
              <button
                key={value}
                className={`${styles.filterBtn} ${filter === value ? styles.filterActive : ''}`}
                onClick={() => setFilter(value)}
                aria-pressed={filter === value}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>Nenhum projeto nesta categoria ainda.</p>
        )}
      </div>
    </section>
  )
}
