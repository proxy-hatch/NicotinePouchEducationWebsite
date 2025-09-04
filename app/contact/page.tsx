"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, HelpCircle, Clock, ChevronRight } from "lucide-react"

export default function ContactPage() {
  // Extract domain from SITE_URL for email
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const domain = new URL(siteUrl).hostname
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
      {/* Page Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">聯繫我們</h1>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              有問題或建議？我們很樂意聽取您的意見。請透過以下電子郵件地址與我們聯繫。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 space-y-10">
          {/* Email Contact Card */}
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center space-x-3 pb-4">
              <Mail className="h-8 w-8 text-blue-600" />
              <CardTitle className="text-2xl text-blue-700">透過電子郵件聯繫</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                無論您是對我們的研究內容有疑問，還是希望了解更多相關資訊，都歡迎與我們交流。
              </p>
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-md">
                <Mail className="h-5 w-5 text-blue-700" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-lg font-medium text-blue-600 hover:text-blue-700 hover:underline break-all"
                >
                  {contactEmail}
                </a>
              </div>
              <p className="text-sm text-gray-500 italic">我們期待您的來信！</p>
            </CardContent>
          </Card>

          {/* Common Inquiry Types Card */}
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center space-x-3 pb-4">
              <HelpCircle className="h-8 w-8 text-teal-600" />
              <CardTitle className="text-2xl text-teal-700">常見詢問類型</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">我們經常收到關於以下主題的詢問：</p>
              <ul className="space-y-2 pl-5">
                {inquiryTypes.map((type, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{type}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Response Time Card */}
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center space-x-3 pb-4">
              <Clock className="h-8 w-8 text-slate-600" />
              <CardTitle className="text-2xl text-slate-700">回覆時間</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                我們通常會在1-3個工作日內回覆您的郵件。如果您的詢問較為複雜，可能需要稍長的時間進行詳細回覆。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
