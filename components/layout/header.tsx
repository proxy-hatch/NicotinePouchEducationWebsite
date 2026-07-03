"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { siteConfig } from "@/lib/site-config"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="w-full py-4 bg-white border-b border-gray-200 relative">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-blue-800">
              {siteConfig.name}
              <span className="ml-2 text-sm font-normal text-gray-500">{siteConfig.titleZh}</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden mobile-menu-container">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-blue-600 transition-colors p-2 relative z-50"
              aria-label="開啟選單"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                  onClick={closeMobileMenu}
                />

                {/* Mobile Menu */}
                <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
                  <div className="flex flex-col h-full">
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                      <span className="text-lg font-semibold text-blue-800">選單</span>
                      <button
                        onClick={closeMobileMenu}
                        className="text-gray-600 hover:text-blue-600 transition-colors p-2"
                        aria-label="關閉選單"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Menu Items */}
                    <nav className="flex-1 py-4">
                      <div className="space-y-1">
                        {siteConfig.nav.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-4 border-transparent hover:border-blue-600"
                            onClick={closeMobileMenu}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </nav>

                    {/* Menu Footer */}
                    <div className="p-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500 text-center">{siteConfig.fullTitle}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
