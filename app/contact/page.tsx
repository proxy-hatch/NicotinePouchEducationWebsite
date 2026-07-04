"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, HelpCircle, Clock, ChevronRight } from "lucide-react"
import { PageHeader } from "@/components/primitives/page-header"
import { Section } from "@/components/primitives/section"
import { Reveal } from "@/components/motion/reveal"
import { siteConfig } from "@/lib/site-config"

export default function ContactPage() {
  // Extract domain from siteConfig for email
  const domain = new URL(siteConfig.url).hostname
  const contactEmail = `info@${domain}`
  const inquiryTypes = [
    "產品品質評估標準的詳細說明",
    "國際市場發展動態與趨勢",
    "特定品牌或產品的相關資訊",
    "供應鏈與品質驗證流程",
    "台灣及亞洲市場的法規環境",
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <PageHeader
        title="聯繫我們"
        subtitle="有問題或建議？我們很樂意聽取您的意見。請透過以下電子郵件地址與我們聯繫。"
      />

      {/* Contact Details Section */}
      <Section>
        <div className="space-y-10">
          {/* Email Contact Card */}
          <Reveal>
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-center space-x-3 pb-4">
                <Mail className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-ink">透過電子郵件聯繫</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  無論您是對我們的研究內容有疑問，還是希望了解更多相關資訊，都歡迎與我們交流。
                </p>
                <div className="flex items-center space-x-2 p-3 bg-secondary rounded-md">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-lg font-medium text-accent hover:underline break-all"
                  >
                    {contactEmail}
                  </a>
                </div>
                <p className="text-sm text-muted-foreground italic">我們期待您的來信！</p>
              </CardContent>
            </Card>
          </Reveal>

          {/* Common Inquiry Types Card */}
          <Reveal delay={0.1}>
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-center space-x-3 pb-4">
                <HelpCircle className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-ink">常見詢問類型</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground">我們經常收到關於以下主題的詢問：</p>
                <ul className="space-y-2 pl-5">
                  {inquiryTypes.map((type, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{type}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          {/* Response Time Card */}
          <Reveal delay={0.2}>
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-center space-x-3 pb-4">
                <Clock className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl text-ink">回覆時間</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  我們通常會在1-3個工作日內回覆您的郵件。如果您的詢問較為複雜，可能需要稍長的時間進行詳細回覆。
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>
    </main>
  )
}
