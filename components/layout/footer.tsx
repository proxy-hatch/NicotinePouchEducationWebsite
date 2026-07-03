import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100 mt-auto">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {siteConfig.footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullTitle}. 版權所有.
          </p>
        </div>
      </div>
    </footer>
  )
}
