import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "薹灣尼古丁袋教育平台",
  description: "為台灣消費者提供關於尼古丁袋的可靠資訊",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="w-full py-4 bg-white border-b border-gray-200">
              <div className="container px-4 md:px-6">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-blue-800">尼古丁袋指南</span>
                  </Link>
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
                  <div className="md:hidden">
                    <button className="text-gray-600 hover:text-blue-600 transition-colors">
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
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
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
                  <p>© {new Date().getFullYear()} 薹灣尼古丁袋教育平台. 版權所有.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
