"use client"

import { useEffect } from "react"
import Script from "next/script"
import Clarity from "@microsoft/clarity"
import { siteConfig } from "@/lib/site-config"

const microsoftClarityProjectId = "t8zin2xpe3"

export function Analytics() {
  const siteUrl = siteConfig.url

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": siteConfig.fullTitle,
        "url": siteUrl,
        "description": "為臺灣消費者提供關於口含菸的可靠資訊",
        "inLanguage": "zh-TW"
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": siteConfig.fullTitle,
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

  // Initialize Microsoft Clarity
  useEffect(() => {
    if (typeof window !== "undefined") {
      Clarity.init(microsoftClarityProjectId)
    }
  }, [])

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NJMMFLSV38"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NJMMFLSV38', {
            'linker': {
              'domains': ['healthynic.com']
            }
          });
        `}
      </Script>

      <Script
        id="json-ld-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />
    </>
  )
}
