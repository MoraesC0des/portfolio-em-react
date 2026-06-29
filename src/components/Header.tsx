import { useTheme } from '../context/ThemeContext'
import Icon from './Icon'
import styles from './Header.module.css'

interface HeaderProps {
  activeSection: string
}

const NAV_ITEMS = [
  { id: 'about',      label: 'Sobre' },
  { id: 'projects',   label: 'Projetos' },
  { id: 'experience', label: 'Experiência' },
  { id: 'contact',    label: 'Contato' },
]

export default function Header({ activeSection }: HeaderProps) {
  const { dark, toggle } = useTheme()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#home" className={styles.logo} aria-label="Voltar ao topo">
          <Icon name="terminal" size={20} aria-hidden />
          <span>Gabriel.M</span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Navegação principal">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${styles.navLink} ${activeSection === id ? styles.active : ''}`}
              aria-current={activeSection === id ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <button
            className={styles.themeBtn}
            onClick={toggle}
            aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            <Icon name={dark ? 'sun' : 'moon'} size={18} aria-hidden />
          </button>
          <a href="/curriculo.pdf" download className={styles.btnPrimary}>
            Currículo
          </a>
        </div>
      </div>
    </header>
  )
}
