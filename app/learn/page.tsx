import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

// Blog post data structure
const blogPosts = [
  {
    id: "iqos-guide",
    slug: "iqos-guide",
    title: "加熱菸購買指南：IQOS台灣現況與最佳替代方案",
    excerpt:
      "台灣消費者面臨IQOS取得困難？了解加熱菸在台灣的法規現況，以及為何越來越多人選擇更便利的替代方案。完整分析各種選項的優缺點，協助您找到最適合的解決方案。",
    readingTime: 7,
  },
  {
    id: "toxin-comparison",
    slug: "toxin-comparison",
    title: "研究顯示：各產品毒素含量比較",
    excerpt:
      "比較香菸、電子菸及替代品的有害化學物質暴露。本文深入分析最新科學研究，揭示不同尼古丁產品中的有害物質含量差異，幫助您了解各種選擇的健康風險。",
    readingTime: 6,
  },
  {
    id: "global-regulations",
    slug: "global-regulations",
    title: "全球減害法規方針",
    excerpt:
      "各國如何在創新與公共健康間取得平衡。探討世界各地對尼古丁替代品的監管策略，以及這些政策如何影響消費者選擇和公共健康成果。",
    readingTime: 5,
  },
  {
    id: "quality-guide",
    slug: "quality-guide",
    title: "消費者指南：評估尼古丁產品品質",
    excerpt:
      "應避免的警示信號與值得注意的品質指標。學習如何辨別高品質的尼古丁替代品，了解產品標籤上的關鍵資訊，以及如何避免劣質或假冒產品。",
    readingTime: 7,
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
