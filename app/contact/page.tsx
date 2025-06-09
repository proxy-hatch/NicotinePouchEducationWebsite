"use client"
// Remove useState as it's no longer needed for a simple email link
// import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react" // Import Mail icon

export default function ContactPage() {
  // const [isSubmitted, setIsSubmitted] = useState(false) // No longer needed

  // const handleSubmit = (e: React.FormEvent) => { // No longer needed
  //   e.preventDefault()
  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitted(true)
  //   }, 1000)
  // }

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

      {/* Email Contact Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-md mx-auto text-center">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-blue-700">透過電子郵件聯繫</CardTitle>
                <CardDescription>點擊下方電子郵件地址，即可開啟您的郵件客戶端與我們聯繫。</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center space-y-4 py-4">
                  <Mail className="h-12 w-12 text-blue-600 mb-2" />
                  <a
                    href="mailto:info@TBD_DOMAIN.com"
                    className="text-lg font-medium text-blue-600 hover:text-blue-700 hover:underline break-all"
                  >
                    info@TBD_DOMAIN.com
                  </a>
                  <p className="text-sm text-gray-500">我們期待您的來信！</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
