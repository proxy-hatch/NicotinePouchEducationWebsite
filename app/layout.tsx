import type React from "react"
import "./globals.css"
import ClientLayout from "./ClientLayout"
import { siteConfig } from "@/lib/site-config"

export const metadata = {
  title: siteConfig.fullTitle,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: siteConfig.fullTitle,
    description: "純淨尼古丁，明智選擇。為臺灣消費者提供關於口含菸的可靠資訊。",
    url: siteConfig.url,
    siteName: siteConfig.fullTitle,
    images: [
      {
        url: "/og-image.png", // Relative path, will be resolved to absolute by Next.js/Vercel
        width: 1200,
        height: 630,
        alt: siteConfig.fullTitle + " - 純淨尼古丁，明智選擇",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullTitle,
    description: "純淨尼古丁，明智選擇。為臺灣消費者提供關於口含菸的可靠資訊。",
    images: ["/og-image.png"], // Relative path
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
