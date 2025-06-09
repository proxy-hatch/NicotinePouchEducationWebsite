import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, ExternalLink, ShoppingBag } from "lucide-react"
import Link from "next/link"

interface Vendor {
  id: string
  name: string
  logoUrl: string
  description: string
  websiteUrl: string
  features: string[]
  shippingInfo: string
}

interface Brand {
  id: string
  name: string
  logoUrl: string
  productImageUrl: string
  description: string
  websiteUrl: string
  origin: string
}

const vendorsData: Vendor[] = [
  {
    id: "vendor-1",
    name: "Pouch Direct TW",
    logoUrl: "/placeholder.svg?height=60&width=150",
    description: "專注於台灣市場的尼古丁袋零售商，提供多種國際品牌選擇，並強調快速本地配送服務。",
    websiteUrl: "https://example.com/pouchdirect",
    features: ["多品牌選擇", "本地快速配送", "中文客服"],
    shippingInfo: "台灣地區 1-3 工作日送達",
  },
  {
    id: "vendor-2",
    name: "Global Pouches",
    logoUrl: "/placeholder.svg?height=60&width=150",
    description: "國際尼古丁袋供應商，運送至全球多個地區，包括台灣。擁有廣泛的產品目錄。",
    websiteUrl: "https://example.com/globalpouches",
    features: ["全球運送", "品牌種類齊全", "多語言支持"],
    shippingInfo: "國際運送約 7-14 工作日",
  },
  {
    id: "vendor-3",
    name: "Nicotine World Hub",
    logoUrl: "/placeholder.svg?height=60&width=150",
    description: "提供來自瑞典、美國等地的優質尼古丁袋，專注於最新產品和限量版。",
    websiteUrl: "https://example.com/nicoworldhub",
    features: ["歐美優質品牌", "新品速遞", "會員專享"],
    shippingInfo: "依地區而定，可查詢運費",
  },
]

const brandsData: Brand[] = [
  {
    id: "zyn",
    name: "ZYN",
    productImageUrl: "/placeholder.svg?height=150&width=150",
    description:
      "ZYN 是瑞典著名品牌 Swedish Match 旗下的無菸草尼古丁袋產品。以其多樣的口味和不同尼古丁強度選擇而聞名，並獲得美國FDA的市場銷售授權。",
    websiteUrl: "https://example.com/zyn",
    origin: "瑞典 / 美國",
  },
  {
    id: "loop",
    name: "LOOP",
    productImageUrl: "/placeholder.svg?height=150&width=150",
    description: "",
    websiteUrl: "https://example.com/nordicspirit",
    origin: "瑞典",
  },
  {
    id: "velo",
    name: "VELO",
    productImageUrl: "/placeholder.svg?height=150&width=150",
    description:
      "VELO 是英美菸草公司 (BAT) 推出的現代口含尼古丁袋品牌。提供多種創新口味和時尚包裝，在全球市場廣受歡迎。",
    websiteUrl: "https://example.com/velo",
    origin: "丹麥 / 瑞典",
  },
  {
    id: "helwit",
    name: "Helwit",
    productImageUrl: "/placeholder.svg?height=150&width=150",
    description: "",
    websiteUrl: "https://example.com/nordicspirit",
    origin: "瑞典",
  },
  {
    id: "killa",
    name: "KILLA",
    productImageUrl: "/placeholder.svg?height=150&width=150",
    description: "",
    websiteUrl: "https://example.com/nordicspirit",
    origin: "瑞典",
  },
  {
    id: "on",
    name: "on!",
    productImageUrl: "/placeholder.svg?height=150&width=150",
    description: "",
    websiteUrl: "https://example.com/nordicspirit",
    origin: "瑞典",
  },
]

export default function VendorsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
              推薦供應商與品牌
            </h1>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              探索國際知名尼古丁袋品牌與可信通路
            </p>
          </div>
        </div>
      </section>

      {/* Vendors Section */}
      <section id="vendors" className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-blue-800 mb-10 text-center md:text-left">
            經驗證供供應商
          </h2>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 lg:grid-cols-3">
            {vendorsData.map((vendor) => (
              <Card
                key={vendor.id}
                className="shadow-lg rounded-xl overflow-hidden flex flex-col transform hover:scale-105 transition-transform duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-semibold text-blue-700">{vendor.name}</CardTitle>
                    <ShoppingBag className="h-8 w-8 text-blue-500" />
                  </div>
                  <img
                    src={vendor.logoUrl || "/placeholder.svg"}
                    alt={`${vendor.name} Logo`}
                    className="h-12 object-contain mb-2 self-start"
                  />
                  <CardDescription className="text-sm text-gray-600">{vendor.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 flex-grow">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">主要特色：</p>
                    <div className="flex flex-wrap gap-2">
                      {vendor.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          <CheckCircle className="h-3 w-3 mr-1" /> {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">配送資訊：</p>
                    <p className="text-sm text-gray-600">{vendor.shippingInfo}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                    <Link href={vendor.websiteUrl} target="_blank" rel="noopener noreferrer">
                      前往選購 <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-blue-800 mb-10 text-center md:text-left">
            國際知名品牌
          </h2>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {brandsData.map((brand) => (
              <Link
                key={brand.id}
                href={brand.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="shadow-lg rounded-xl overflow-hidden h-full flex flex-col transform group-hover:scale-105 group-hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="mb-3">
                      <CardTitle className="text-xl font-semibold text-blue-700">{brand.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow">
                    <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center overflow-hidden mb-3">
                      <img
                        src={brand.productImageUrl || "/placeholder.svg"}
                        alt={`${brand.name} Product Sample`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-4">{brand.description}</p>
                    <div>
                      <p className="text-xs font-medium text-gray-500">產地：{brand.origin}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Disclaimer (Optional - kept from original structure, can be removed or modified) */}
      <section className="w-full py-8 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-500">
              本頁面提供的品牌與供應商資訊僅供研究參考，旨在幫助消費者了解國際品質標準與驗證方法。我們不直接銷售任何產品，所列資訊基於公開的監管資料與第三方檢測結果。消費者應自行評估相關風險並遵守當地法規。
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
