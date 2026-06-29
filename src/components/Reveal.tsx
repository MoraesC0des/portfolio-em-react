import { CSSProperties, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface RevealProps {
  children: ReactNode
  className?: string
  dir?: 'up' | 'left'
  delay?: number
  style?: CSSProperties
}

export default function Reveal({ children, className = '', dir = 'up', delay = 0, style }: RevealProps) {
  const ref = useReveal()
  const baseClass = dir === 'left' ? 'reveal-left' : 'reveal'

  return (
    <div
      ref={ref}
      className={`${baseClass} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}
