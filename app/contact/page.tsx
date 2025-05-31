"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">聯繫我們</h1>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              有問題或建議？我們很樂意聽取您的意見
            </p>
          </div>
        </div>
      </section>

      {/* LINE Contact Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-md mx-auto text-center">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-blue-700">透過 LINE 聯繫我們</CardTitle>
                <CardDescription>點擊下方連結或掃描 QR Code 加入我們的 LINE 好友</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center space-y-4">
                  <a
                    href="https://line.me/ti/p/YOUR_LINE_ID" // Replace YOUR_LINE_ID with the actual LINE ID
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    點此加入 LINE 好友
                  </a>
                  <div className="p-4 border rounded-lg bg-gray-50">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt="LINE QR Code"
                      className="w-48 h-48 md:w-52 md:h-52"
                    />
                  </div>
                  <p className="text-sm text-gray-500">請使用您的 LINE App 掃描此 QR Code</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
