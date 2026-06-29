import Icon from './Icon'
import Reveal from './Reveal'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <div className={styles.bg} aria-hidden />
      <Reveal>
        <h2 className={styles.title} id="cta-title">
          Estou pronto para o próximo desafio.
        </h2>
        <p className={styles.subtitle}>
          Atualmente busco novos desafios como Desenvolvedor Front-End. Entre em contato pelo
          LinkedIn, GitHub ou e-mail para conversarmos.
        </p>
        <div className={styles.actions}>
          <a href="mailto:moraescodes@gmail.com" className={styles.btnDark}>
            Vamos Conversar
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-moraes-61399b261/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnOutline}
          >
            LinkedIn <Icon name="external" size={14} aria-hidden />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
