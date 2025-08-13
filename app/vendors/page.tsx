import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ExternalLink, ShoppingBag } from "lucide-react"
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
  /*
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
  */
]

const brandsData: Brand[] = [
  {
    id: "zyn",
    name: "ZYN",
    productImageUrl:
      "https://imgproxy.whitepouches.com/gravity:nowe/resize:fit:1250/quality:70/aHR0cHM6Ly93aGl0ZXBvdWNoZXMuY2VudHJhY2RuLm5ldC9jbGllbnQvZHluYW1pYy9pbWFnZXMvNDkwXzI0Njc5ZjM5NDMtNzExX3p5bi1jb29sLW1pbnQtbWluaS1kcnktc3VwZXItc3Ryb25nLW9yaWdpbmFsLmpwZw==",
    description:
      "ZYN由Swedish Match（Philip Morris International）製造，是首個獲得美國FDA PMTA正式授權的口含菸品牌。2025年1月FDA授權20項產品上市，確認其有害成分含量顯著低於香菸。提供多種口味與尼古丁強度選擇，採用高科技蒸餾純化技術，為全球市場領導品牌。",
    websiteUrl: "https://www.zyn.com/gb/en/home.html/",
    origin: "瑞典 / 美國",
  },
  {
    id: "loop",
    name: "LOOP",
    productImageUrl:
      "https://loopnicotinepouches.com/wp-content/uploads/2024/09/Spicy_Apple_Studio_Right_Shadow_1500x1500.webp",
    description:
      "LOOP由Another Snus Factory製造，以InstantRush™快速釋放技術聞名，提供創新辛辣口味系列。採用PlantCan™環保包裝罐，符合永續發展理念。在瑞典監管市場具有合法銷售地位，專為追求新奇體驗的年輕消費者設計。",
    websiteUrl: "https://loopnicotinepouches.com/",
    origin: "瑞典",
  },
  {
    id: "velo",
    name: "VELO",
    productImageUrl: "https://snusdiscount.co.uk/cdn/shop/files/Breezy_Mango_Right.png?v=1720813552&width=1946",
    description:
      "VELO由英美菸草公司（BAT）推出，經第三方認證實驗室檢測，相較香菸減少99%有毒物質。提供傳統菸草尼古丁與VELO PLUS合成尼古丁選項，時尚包裝設計，在全球多個市場獲得合規銷售許可，包裝獲ISCC永續認證。",
    websiteUrl: "https://www.velo.com/",
    origin: "英國",
  },
  {
    id: "helwit",
    name: "Helwit",
    productImageUrl: "https://www.nicpouch.co.uk/cdn/shop/products/HELWITMINT2p.jpg?v=1629888315",
    description:
      "Helwit由Yoik AB製造，強調永續發展理念，工廠採用100%水力發電，使用環保包裝罐。專注於自然風味研發，符合瑞典嚴格的品質標準。針對環保意識強、偏好自然風味的消費者，體現北歐簡約與可持續發展價值觀。",
    websiteUrl: "https://helwit.com",
    origin: "瑞典",
  },
  {
    id: "killa",
    name: "KILLA",
    productImageUrl:
      "https://management.flavourvapour.co.uk/res/user/fullsize/6478_killa-mini-blueberry-nicotine-pouch-snus-uk.jpg",
    description:
      "KILLA由N.G.P. Empire/N.G.P. Tobacco ApS製造，專為經驗豐富的尼古丁使用者設計，提供超高尼古丁含量選項。口味濃烈多樣，包裝設計前衛，在丹麥監管框架下生產。適合追求強烈刺激感的資深使用者，為高強度市場區塊的代表品牌。",
    websiteUrl: "https://killapods.eu/",
    origin: "丹麥",
  },
  {
    id: "on",
    name: "on!",
    productImageUrl: "https://nicopouches.fr/en/1958-large_default/mint-mini-medium-6-mg.jpg",
    description:
      "on!由Helix Innovations LLC（Altria Group旗下）製造，採用獨特長方形包裝設計，提供從低到高的多樣化尼古丁強度選擇。Altria已向FDA提交35項on!產品的PMTA申請，並發表同行評議研究證實其減害潛力。適合尋求靈活劑量選擇的使用者。",
    websiteUrl: "https://www.onnicotine.com/",
    origin: "瑞典 / 美國",
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
              探索國際知名口含菸（尼古丁袋）品牌與可信通路
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
          {vendorsData.length > 0 ? (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">Coming Soon</p>
              <p className="text-gray-400 mt-2">我們正在努力整理更多優質供應商資訊，敬請期待！</p>
            </div>
          )}
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
                    <div className="aspect-square bg-white rounded-md flex items-center justify-center overflow-hidden mb-3">
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
