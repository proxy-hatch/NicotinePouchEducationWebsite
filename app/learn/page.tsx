import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

// Blog post data structure
const blogPosts = [
  {
    id: "1",
    slug: "what-is-nicotine-pouch",
    title: "尼古丁袋完整介紹：成分、使用方法與科學原理",
    excerpt: 
      "什麼是尼古丁袋？與傳統菸草產品有何不同？深入了解這種源自北歐的創新產品，包括成分分析、正確使用方法，以及背後的科學原理。適合初次接觸者的完整入門指南。",
    readingTime: 6,
  },
  {
    id: "2",
    slug: "nicotine-products-risk",
    title: "科學研究：不同尼古丁產品的健康風險比較",
    excerpt:
      "基於國際同行評議研究，客觀比較香菸、電子菸、加熱菸與尼古丁袋的健康風險。了解各產品的有害物質含量、FDA評估結果，以及目前科學界的共識與爭議。",
    readingTime: 8,
  },
  {
    id: "3",
    slug: "nicotine-in-the-workplace",
    title: "工作場所使用指南：謹慎、專業的尼古丁消費方式",
    excerpt:
      "如何在辦公室、會議中、或通勤時謹慎使用尼古丁產品？針對台灣工作文化特色，提供實用建議與注意事項，讓您在職場環境中維持專業形象。",
    readingTime: 5,
  },
  {
    id: "4",
    slug: "modern-nicotine-products-comparison",
    title: "加熱菸 vs 電子菸 vs 尼古丁袋：價格與便利性完整比較",
    excerpt:
      "三大尼古丁替代方案的全面比較分析。從價格成本、使用便利性、維護需求到場所限制，幫助您根據個人需求與生活方式，選擇最適合的產品類型。",
    readingTime: 7,
  },
  {
    id: "5",
    slug: "taiwan-htp-analysis",
    title: "加熱菸購買指南：IQOS台灣現況與替代方案評析",
    excerpt:
      "IQOS在台灣面臨哪些取得困難？分析加熱菸的法規現況、進口挑戰，以及為何越來越多消費者轉向其他替代方案。客觀評估各種選項的優缺點。",
    readingTime: 6,
  },
  {
    id: "6",
    slug: "nicotine-pouch-brands",
    title: "國際品牌介紹：ZYN、VELO等知名尼古丁袋品牌分析",
    excerpt:
      "深入了解全球主要尼古丁袋品牌的特色與差異。從ZYN的市場地位到VELO的產品線，分析各品牌的製造標準、認證狀況，以及在台灣的可取得性。",
    readingTime: 6,
  },
  {
    id: "7",
    slug: "nicotine-pouch-retailers",
    title: "品質辨識指南：如何選擇可靠的尼古丁袋供應商",
    excerpt:
      "市場上產品品質參差不齊，如何避開劣質產品？學會辨識正品特徵、驗證供應商可靠性的實用技巧，確保您購買到符合安全標準的產品。",
    readingTime: 5,
  },
  {
    id: "8",
    slug: "nicotine-pouch-legality-in-taiwan",
    title: "台灣法規現況：尼古丁袋的合法性與使用須知",
    excerpt:
      "尼古丁袋在台灣的法律地位如何？了解相關法規、使用限制，以及如何在法律框架內安全使用。包含最新政策動態與合規建議。",
    readingTime: 4,
  },
]

export default function LearnPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
              了解尼古丁替代方案
            </h1>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              基於實證研究，協助您做出明智決定
            </p>
          </div>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <Card key={post.id} className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-blue-700">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readingTime}分鐘閱讀</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                    閱讀更多
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
