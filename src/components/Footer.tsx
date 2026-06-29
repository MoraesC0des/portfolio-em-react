import Icon from './Icon'
import styles from './Footer.module.css'

const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-moraes-61399b261/', icon: 'linkedin' },
  { name: 'GitHub', href: 'https://github.com/MoraesC0des', icon: 'github' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>Gabriel.M</h2>
          <p className={styles.copyright}>
            © {currentYear} Gabriel Moraes. Construído com Precisão.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Links sociais">
          <div className={styles.links}>
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <Icon name={link.icon as any} size={18} aria-hidden />
                <span className={styles.linkText}>{link.name}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  )
}
