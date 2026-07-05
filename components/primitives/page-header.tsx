import Link from 'next/link'

export interface PageHeaderBackLink {
  href: string
  label: string
}

export interface PageHeaderProps {
  title: string
  subtitle?: string
  backLink?: PageHeaderBackLink
}

export function PageHeader({ title, subtitle, backLink }: PageHeaderProps) {
  return (
    <div className="hero-gradient w-full py-14 md:py-20">
      <div className="container">
        {backLink && (
          <Link
            href={backLink.href}
            className="mb-4 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            ← {backLink.label}
          </Link>
        )}
        <h1 className="text-3xl font-bold text-ink md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
  )
}
