import { useState, useEffect } from 'react'

export function useScrollSpy(ids: string[], offset = 200): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    const handler = () => {
      let found = ''
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY + offset >= el.offsetTop) found = id
      })
      setActive(found)
    }

    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [ids, offset])

  return active
}
