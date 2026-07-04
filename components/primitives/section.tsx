import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Section({
  id,
  className,
  tone = 'default',
  children,
}: {
  id?: string
  className?: string
  tone?: 'default' | 'surface'
  children: ReactNode
}) {
  return (
    <section id={id} className={cn(tone === 'surface' && 'bg-surface', className)}>
      <div className="container py-14 md:py-20">{children}</div>
    </section>
  )
}
