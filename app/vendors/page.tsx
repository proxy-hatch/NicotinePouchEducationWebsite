import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InfoIcon, CheckCircle, Truck } from "lucide-react"

export default function VendorsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
              經驗證供應商網絡
            </h1>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              符合我們品質與透明度標準的西方品牌
            </p>
          </div>
        </div>
      </section>

      {/* Quality Standards Callout */}
      <section className="w-full py-8 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-4 p-6 rounded-lg bg-white shadow-sm">
            <div className="rounded-full bg-blue-100 p-3">
              <InfoIcon className="h-6 w-6 text-blue-700" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">品質標準</h2>
              <p className="text-gray-600">
                我們推薦的供應商必須提供：成分透明度、第三方檢測、法規合規文件，以及經驗證的供應鏈。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Cards */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-700">Nordic Spirit</CardTitle>
                  <img src="/placeholder.svg?height=40&width=40" alt="Nordic Spirit Logo" className="h-10 w-10" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <CheckCircle className="h-3 w-3 mr-1" /> 瑞典製造
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    <CheckCircle className="h-3 w-3 mr-1" /> 第三方檢測
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">可用產品:</p>
                  <p className="text-sm text-gray-600">薄荷、漿果、柑橘</p>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Truck className="h-4 w-4 mr-1" />
                  <span>台灣配送: 可用</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">了解更多</Button>
              </CardFooter>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-700">ZYN</CardTitle>
                  <img src="/placeholder.svg?height=40&width=40" alt="ZYN Logo" className="h-10 w-10" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <CheckCircle className="h-3 w-3 mr-1" /> 美國製造
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    <CheckCircle className="h-3 w-3 mr-1" /> FDA合規
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">可用產品:</p>
                  <p className="text-sm text-gray-600">薄荷、肉桂、咖啡</p>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Truck className="h-4 w-4 mr-1" />
                  <span>台灣配送: 可用</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">了解更多</Button>
              </CardFooter>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-700">VELO</CardTitle>
                  <img src="/placeholder.svg?height=40&width=40" alt="VELO Logo" className="h-10 w-10" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <CheckCircle className="h-3 w-3 mr-1" /> 丹麥製造
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    <CheckCircle className="h-3 w-3 mr-1" /> 歐盟認證
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">可用產品:</p>
                  <p className="text-sm text-gray-600">薄荷、熱帶水果、檸檬</p>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <Truck className="h-4 w-4 mr-1" />
                  <span>台灣配送: 可用</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">了解更多</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="w-full py-8 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-500">
              我們與這些供應商無關聯關係。此清單基於我們的品質評估標準提供，僅供教育用途。使用前請務必驗證產品真實性並諮詢醫療專業人員。
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
