import { useState, FormEvent } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import styles from './Contact.module.css'

interface FormData {
  name: string
  email: string
  message: string
}

const CONTACT_INFO = [
  { icon: 'mail', label: 'E-mail', value: 'moraescodes@gmail.com', href: 'mailto:moraescodes@gmail.com' },
  { icon: 'map', label: 'Localização', value: 'Brasil — disponível remoto' },
  { icon: 'linkedin', label: 'LinkedIn', value: '/in/gabrielmoraes', href: 'https://www.linkedin.com/in/gabriel-moraes-61399b261/' },
  { icon: 'github', label: 'GitHub', value: '@MoraesC0des', href: 'https://github.com/MoraesC0des' },
]

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulated submission — replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={styles.inner}>
        <Reveal className={styles.header}>
          <p className={styles.label}>Contato</p>
          <h2 className={styles.title} id="contact-title">Vamos Construir Algo Juntos</h2>
          <p className={styles.subtitle}>Disponível para oportunidades como Desenvolvedor Front-End. Entre em contato pelas redes abaixo para conversarmos sobre vagas, projetos ou parcerias.      </p>
        </Reveal>

        <div className={styles.grid}>
          {/* Contact info */}
          <Reveal>
            <div className={styles.infoList} role="list">
              {CONTACT_INFO.map(item => (
                <div key={item.label} className={styles.infoItem} role="listitem">
                  <div className={styles.infoIcon}>
                    <Icon name={item.icon as any} size={18} aria-hidden />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className={styles.infoLink} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <p className={styles.infoValue}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form 
          <Reveal delay={100}>
            {sent ? (
              <div className={styles.successBox}>
                <Icon name="check" size={40} aria-hidden />
                <h3 className={styles.successTitle}>Mensagem enviada!</h3>
                <p className={styles.successDesc}>
                  Responderei em até 24h. Até breve!
                </p>
                <button
                  className={styles.btnOutline}
                  onClick={() => setSent(false)}
                  aria-label="Enviar nova mensagem"
                >
                  Nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} aria-label="Formulário de contato">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    disabled={loading}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    disabled={loading}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Conte sobre seu projeto..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    disabled={loading}
                  />
                </div>
                <button
                  type="submit"
                  className={styles.btnPrimary}
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? 'Enviando...' : 'Enviar Mensagem'}
                  <Icon name="send" size={14} aria-hidden />
                </button>
              </form>
            )}
          </Reveal>*/}
        </div>
      </div>
    </section>
  )
}
