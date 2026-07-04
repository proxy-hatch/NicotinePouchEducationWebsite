import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function CTAButton({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-md px-6 py-3 font-medium transition-transform hover:-translate-y-0.5 shadow-md hover:shadow-lg',
        variant === 'primary' && 'bg-primary text-primary-foreground hover:bg-primary-hover',
        variant === 'outline' && 'border border-border text-primary bg-transparent hover:bg-secondary',
        className
      )}
    >
      {children}
    </Link>
  )
}
