import type React from "react"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const siteUrl = process.env.SITE_URL || 'http://localhost:3000';

export const metadata = {
  title: "台灣口含菸（尼古丁袋）科普平台",
  description: "為臺灣消費者提供關於口含菸的可靠資訊",
  metadataBase: new URL(siteUrl),
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "台灣口含菸（尼古丁袋）科普平台",
    description: "純淨尼古丁，明智選擇。為臺灣消費者提供關於口含菸的可靠資訊。",
    url: siteUrl,
    siteName: "台灣口含菸（尼古丁袋）科普平台",
    images: [
      {
        url: "/og-image.png", // Relative path, will be resolved to absolute by Next.js/Vercel
        width: 1200,
        height: 630,
        alt: "台灣口含菸（尼古丁袋）科普平台 - 純淨尼古丁，明智選擇",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "台灣口含菸（尼古丁袋）科普平台",
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
