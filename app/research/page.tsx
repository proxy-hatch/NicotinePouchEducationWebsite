import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResearchPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
              我們的研究方法
            </h1>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              我們如何評估產品與資料來源以提供客觀資訊
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:gap-12">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-blue-700 text-2xl">資料來源</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">同行評議科學文獻</h3>
                  <p className="text-gray-600">
                    我們優先參考經過同行評審的科學期刊文章，確保資訊來源具有學術嚴謹性。這些研究通常經過專業審查，提供最可靠的科學證據。
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">監管機構報告</h3>
                  <p className="text-gray-600">
                    我們分析來自FDA、加拿大衛生部等權威監管機構的官方報告和指南，了解各國對尼古丁替代品的最新監管立場和安全評估。
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">臨床試驗資料庫</h3>
                  <p className="text-gray-600">
                    我們追蹤相關臨床試驗的結果，特別關注那些比較不同尼古丁傳遞系統安全性和有效性的研究。
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">消費者體驗數據</h3>
                  <p className="text-gray-600">
                    我們收集並分析真實用戶的使用體驗，以補充科學研究可能未能涵蓋的實際使用情境和主觀感受。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-blue-700 text-2xl">評估標準</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">製造標準與透明度</h3>
                  <p className="text-gray-600">
                    我們評估產品製造商是否遵循良好製造規範(GMP)，並審查其成分透明度。優質產品應清楚列出所有成分及其含量。
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">第三方檢測驗證</h3>
                  <p className="text-gray-600">
                    我們優先考慮經過獨立實驗室檢測的產品，確保其成分與標示一致，且不含有害污染物。
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">法規合規狀態</h3>
                  <p className="text-gray-600">
                    我們檢視產品在原產國的法規合規情況，包括是否符合當地的產品標準和銷售許可要求。
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">供應鏈可追溯性</h3>
                  <p className="text-gray-600">
                    我們評估產品的供應鏈透明度，包括原料來源、生產地點和品質控制流程的公開程度。
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-blue-700 text-2xl">研究限制</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">長期效應研究缺口</h3>
                  <p className="text-gray-600">
                    我們坦承尼古丁袋等較新型產品的長期健康影響研究相對有限，現有證據主要來自短期和中期研究。
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">不斷演進的監管環境</h3>
                  <p className="text-gray-600">
                    我們認識到全球各地對尼古丁替代品的監管正在快速發展，今日合規的產品可能需要因應未來法規變更而調整。
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">個人健康考量的重要性</h3>
                  <p className="text-gray-600">
                    我們強調個人健康狀況差異可能導致不同的適用性，任何尼古丁產品的使用都應考慮個人健康狀況並諮詢醫療專業人員。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
