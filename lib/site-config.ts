export const siteConfig = {
  name: 'NicoFacts',
  titleZh: '口含菸（尼古丁袋）科普平台',
  fullTitle: 'NicoFacts｜口含菸（尼古丁袋）科普平台',
  description: '為臺灣消費者提供關於口含菸的可靠資訊',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nicofacts.com',
  nav: [
    { label: '了解更多', href: '/learn' },
    { label: '研究方法', href: '/research' },
    { label: '推薦品牌', href: '/vendors' },
    { label: '聯繫我們', href: '/contact' },
  ],
  footerLinks: [
    { label: '法律聲明', href: '/legal-disclaimer' },
    { label: '隱私政策', href: '/privacy-policy' },
    { label: '免責聲明', href: '/disclaimer' },
  ],
} as const
