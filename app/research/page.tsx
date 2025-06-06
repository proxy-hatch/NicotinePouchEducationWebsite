import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

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
                  <h3 className="font-medium">美國FDA權威評估標準</h3>
                  <p className="text-gray-600">
                    我們以美國食品藥物管理局(FDA)菸草產品上市前審查(PMTA)為黃金標準。
                    <a href="https://www.fda.gov/news-events/press-announcements/fda-authorizes-marketing-20-zyn-nicotine-pouch-products-after-extensive-scientific-review" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FDA於2025年1月16日首次授權20項ZYN尼古丁袋產品上市</a>，經過「廣泛科學審查，包括毒理學評估」，確認這些產品的「有害成分含量顯著低於香菸和大多數無煙菸草產品」。我們採用相同的嚴格科學評估框架。
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">國際技術標準文獻</h3>
                  <p className="text-gray-600">我們依據三大權威技術標準：</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li><strong>英國標準協會BSI PAS 8877:2022</strong>《無菸草口用尼古丁袋組成、製造與檢測規範》</li>
                    <li><strong>瑞典標準協會SIS/TS 72:2024</strong>《含尼古丁無菸草口用產品安全與品質要求》</li>
                    <li><strong>國際標準化組織ISO 21109:2025</strong>《尼古丁袋pH值測定方法》</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">第三方檢測驗證數據</h3>
                  <p className="text-gray-600">
                    我們參考歐洲最大線上零售商Haypp Group的Nicoleaks透明化檢測平台，該平台委託瑞典Eurofins認證實驗室進行獨立檢測，公開發布尼古丁含量、pH值、重金屬及菸草特異性亞硝胺(TSNAs)等關鍵指標的批次檢測結果。
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
                  <h3 className="font-medium">製造品質認證要求</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li><strong>GMP製造規範</strong>：藥品級生產環境控制</li>
                    <li><strong>ISO 9001:2015認證</strong>：國際品質管理體系</li>
                    <li><strong>藥用級尼古丁</strong>：符合BSI PAS 8877純度要求</li>
                    <li><strong>食品級袋材</strong>：符合歐盟法規EC No. 1935/2004</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">嚴格技術規格標準</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li><strong>尼古丁含量上限</strong>：20mg/袋（BSI PAS 8877及SIS/TS 72統一標準）</li>
                    <li><strong>pH值控制範圍</strong>：5.6-9.1（基於SIS/TS 72:2024安全範圍）</li>
                    <li><strong>重金屬檢測</strong>：砷、鉛、汞、鉻、鎳含量符合食品安全標準</li>
                    <li><strong>禁用物質管控</strong>：嚴禁CMR物質（致癌、致突變、生殖毒性）</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">監管合規驗證</h3>
                  <p className="text-gray-600">我們優先評估在全球最嚴格監管市場獲得合法授權的產品：</p>
                   <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li><strong>美國</strong>：FDA PMTA正式授權狀態</li>
                    <li><strong>瑞典</strong>：國家食品署合規註冊</li>
                    <li><strong>英國</strong>：BSI PAS 8877標準符合度</li>
                    <li><strong>阿聯酋</strong>：ECAS強制認證合規性</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-blue-700 text-2xl">研究限制與品質管控現況</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">全球品質合規挑戰</h3>
                  <p className="text-gray-600">
                    <a href="https://www.journaloftradingstandards.co.uk/health-safety/nicotine-pouches-suck-it-and-see/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">英國國家貿易標準局最新檢測報告顯示</a>，在受測的市售尼古丁袋樣品中，<strong>僅有1項產品完全符合BSI PAS 8877分析規範</strong>及《通用產品安全法規》要求。這凸顯了全球市場品質參差不齊的嚴重問題。
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">台灣監管環境分析</h3>
                  <p className="text-gray-600">
                    根據<a href="https://www.mohw.gov.tw/cp-3162-27716-1.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">衛生福利部藥物食品安全週報</a>說明，含尼古丁產品在台灣被歸類為藥品管理。目前台灣缺乏針對尼古丁袋的專門品質監管機制，消費者難以獲得可靠的產品安全資訊。
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">亞洲人群研究資料限制</h3>
                  <p className="text-gray-600">
                    目前針對亞洲人群的尼古丁袋臨床研究相對有限，我們主要依據歐美權威機構的安全性評估數據，並考量亞洲人群在尼古丁代謝酶活性及口腔生理特徵上的差異。
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* NOTE: This is a new section based on the provided content. */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-blue-700 text-2xl">我們的品質驗證流程</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">四階段嚴格篩選</h3>
                  <ol className="list-decimal pl-5 text-gray-600 space-y-1">
                    <li><strong>監管資格審查</strong>：優先評估FDA授權或歐盟合規產品</li>
                    <li><strong>技術標準驗證</strong>：檢查是否符合BSI PAS 8877/SIS TS 72規範</li>
                    <li><strong>第三方檢測確認</strong>：要求提供Eurofins等認證實驗室報告</li>
                    <li><strong>供應鏈透明度</strong>：追溯製造商GMP資質及原料來源</li>
                  </ol>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">品質保證的必要性</h3>
                  <p className="text-gray-600">
                    在缺乏官方品質監管的環境下，選擇經過國際第三方驗證的產品至關重要。我們的評估確保推薦產品符合全球最高安全標準，為消費者提供可信賴的選擇依據。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Conversion to Vendors Page Section */}
      <section className="w-full py-12 md:py-16 bg-blue-50">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-blue-800">查看通過驗證的產品</h2>
            <p className="text-gray-700 md:text-lg/relaxed">
              基於上述FDA級別的嚴格評估標準，我們已完成對全球主要尼古丁袋品牌的綜合評估。
            </p>
            <Link
              href="/vendors"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              查看推薦品牌和可信供應商指南 →
            </Link>
            <p className="text-gray-600 text-sm">
              了解哪些產品通過我們的四階段品質認證標準，瀏覽經我們驗證、能夠提供國際品牌正品的可靠採購渠道。
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signal Subtext */}
      <section className="w-full py-8 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-500">
              我們的評估標準參考FDA
              PMTA審查流程，確保推薦產品達到國際醫藥級品質要求。所有推薦供應商均經過供應鏈透明度驗證，為台灣消費者提供最可靠的產品資訊。
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
