"use client"

import type React from "react"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { useState, useEffect } from "react"
import Script from "next/script"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "台灣口含菸（尼古丁袋）科普平台",
        "url": siteUrl,
        "description": "為臺灣消費者提供關於口含菸的可靠資訊",
        "inLanguage": "zh-TW"
      },
      {
        "@type": "WebSite", 
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": "台灣口含菸（尼古丁袋）科普平台",
        "publisher": {"@id": `${siteUrl}/#organization`}
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "口含菸到底是什麼？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "口含菸（又稱尼古丁袋、nicotine pouch）是一種無煙尼古丁產品，通常放置在上唇與牙齦之間。它不含煙草，而是由尼古丁、調味劑和植物纖維等成分組成，提供無煙、無味的尼古丁體驗。"
            }
          },
          {
            "@type": "Question", 
            "name": "可以在工作場使用嗎？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "口含菸因其無煙、無味、無需吸入的特性，非常適合在工作場所使用。它可以在辦公室、會議室、公共交通等場所謹慎使用，不會影響他人或專業形象。"
            }
          },
          {
            "@type": "Question",
            "name": "與電子菸有何差別？", 
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "與電子菸不同，口含菸不需要任何設備或充電。它們不產生蒸氣或煙霧，使用時完全無味，且不需要吸入任何物質。"
            }
          },
          {
            "@type": "Question",
            "name": "口含菸安全嗎？",
            "acceptedAnswer": {
              "@type": "Answer", 
              "text": "相較於傳統吸菸，口含菸避免了燃燒產生的焦油、一氧化碳等數千種有害化學物質，大幅降低與吸菸相關的健康風險。美國FDA已授權部分品牌為「適合公共健康」的產品。"
            }
          }
        ]
      }
    ]
  }

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
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="w-full py-4 bg-white border-b border-gray-200 relative">
              <div className="container px-4 md:px-6">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-blue-800">{"口含菸（尼古丁袋）科普平台"}</span>
                  </Link>

                  {/* Desktop Navigation */}
                  <nav className="hidden md:flex items-center space-x-6">
                    <Link href="/learn" className="text-gray-600 hover:text-blue-600 transition-colors">
                      了解更多
                    </Link>
                    <Link href="/research" className="text-gray-600 hover:text-blue-600 transition-colors">
                      研究方法
                    </Link>
                    <Link href="/vendors" className="text-gray-600 hover:text-blue-600 transition-colors">
                      推薦品牌
                    </Link>
                    <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                      聯繫我們
                    </Link>
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
                                <Link
                                  href="/learn"
                                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-4 border-transparent hover:border-blue-600"
                                  onClick={closeMobileMenu}
                                >
                                  了解更多
                                </Link>
                                <Link
                                  href="/research"
                                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-4 border-transparent hover:border-blue-600"
                                  onClick={closeMobileMenu}
                                >
                                  研究方法
                                </Link>
                                <Link
                                  href="/vendors"
                                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-4 border-transparent hover:border-blue-600"
                                  onClick={closeMobileMenu}
                                >
                                  推薦品牌
                                </Link>
                                <Link
                                  href="/contact"
                                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-l-4 border-transparent hover:border-blue-600"
                                  onClick={closeMobileMenu}
                                >
                                  聯繫我們
                                </Link>
                              </div>
                            </nav>

                            {/* Menu Footer */}
                            <div className="p-4 border-t border-gray-200">
                              <p className="text-sm text-gray-500 text-center">台灣口含菸（尼古丁袋）科普平台</p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </header>
            {children}
            <footer className="w-full py-6 bg-gray-100 mt-auto">
              <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <Link
                    href="/legal-disclaimer"
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    法律聲明
                  </Link>
                  <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    隱私政策
                  </Link>
                  <Link href="/disclaimer" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    免責聲明
                  </Link>
                </div>
                <div className="mt-6 text-center text-sm text-gray-500">
                  <p>© {new Date().getFullYear()} 台灣口含菸（尼古丁袋）科普平台. 版權所有.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
