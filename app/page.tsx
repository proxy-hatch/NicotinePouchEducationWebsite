import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay" // For self-wrapping/autoplay

const mediaArticles = [
  {
    id: 1,
    source: "經濟日報",
    title: "尼古丁袋產品在全球市場的發展趨勢...",
    link: "#", // Placeholder link
  },
  {
    id: 2,
    source: "2firsts",
    title: "世界無菸日2025：擁抱菸害減害以拯救數百萬人...",
    link: "#", // Placeholder link
  },
  {
    id: 3,
    source: "國際觀點",
    title: "尼古丁替代品在減少傳統菸草危害中的角色...",
    link: "#", // Placeholder link
  },
  {
    id: 4,
    source: "健康新知",
    title: "專家解析：尼古丁袋與傳統菸品的比較",
    link: "#", // Placeholder link
  },
  {
    id: 5,
    source: "科技脈動",
    title: "創新尼古丁技術如何改變消費習慣",
    link: "#", // Placeholder link
  },
]

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">
                純淨尼古丁，明智選擇
              </h1>
              <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                告別傳統菸和電子菸的使用困擾，選擇透明成分的健康可靠替代方案
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  <Link href="/vendors">查看推薦品牌</Link>
                </Button>
                <Button asChild variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <Link href="/learn">了解更多</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <div className="aspect-video overflow-hidden rounded-xl bg-blue-100 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="尼古丁袋產品示意圖"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Comparison */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-10 text-blue-800">
            傳統困擾 vs. 純淨新選擇
          </h2>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <Card className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/30 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-alert-triangle h-6 w-6 text-white"
                    >
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl font-semibold text-white">常見困擾</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-orange-400" />
                  <p>設備維護充電煩惱，使用便利性受限</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-orange-400" />
                  <p>市場產品成分不明，品質參差影響肺部健康</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-orange-400" />
                  <p>新興菸品進口困難，傳統香菸燃燒產生焦油危害肺功能</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-orange-400" />
                  <p> 使用場所受限影響工作與生活便利性，二手煙霧影響他人</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="bg-gradient-to-r from-sky-500 to-cyan-500 p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/30 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-sparkles h-6 w-6 text-white"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M19 17v4" />
                      <path d="M3 5h4" />
                      <path d="M17 19h4" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl font-semibold text-white">純淨新選擇</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400" />
                  <p>口腔吸收避免肺部接觸，隨時隨地安全使用</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400" />
                  <p>歐美品牌保障，藥用級成分完整透明標示</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400" />
                  <p>零煙霧零異味，適合專業場合使用</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-cyan-400" />
                  <p>持續30-60分鐘平穩體驗，適應各種生活與工作狀</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three-Pillar Benefits Grid */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-8 text-blue-800">核心優勢</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-blue-700">可靠性</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>無需充電、加油或維護</p>
                <p>每次使用體驗一致</p>
                <p>西方品質標準</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-blue-700">便利性</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>可在餐廳、交通工具、會議中使用</p>
                <p>無需抽菸休息時間</p>
                <p>適合忙碌行程</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-blue-700">純淨度</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>FDA規範成分</p>
                <p>無燃燒毒素</p>
                <p>透明供應鏈</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-blue-800">媒體關注與專家觀點</h2>
            <p className="text-gray-600 md:text-lg">了解國際與台灣媒體如何報導尼古丁替代方案</p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000, // Autoplay delay of 5 seconds
                stopOnInteraction: true,
              }),
            ]}
            className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {mediaArticles.map((article) => (
                <CarouselItem key={article.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                      <CardHeader>
                        <CardTitle className="text-blue-700 text-lg">{article.source}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-gray-600 text-sm">{article.title}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="p-0 text-blue-600 hover:text-blue-700">
                          <Link href={article.link}>
                            閱讀更多 <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-blue-600 text-blue-600 hidden md:inline-flex" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-blue-600 text-blue-600 hidden md:inline-flex" />
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-blue-800">常見問題與詳細解答</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium">尼古丁袋到底是什麼？</AccordionTrigger>
                <AccordionContent>
                  尼古丁袋是一種無煙尼古丁產品，通常放置在上唇與牙齦之間。它不含煙草，而是由尼古丁、調味劑和植物纖維等成分組成，提供無煙、無味的尼古丁體驗。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium">與電子菸有何差別？</AccordionTrigger>
                <AccordionContent>
                  與電子菸不同，尼古丁袋不需要任何設備、電池或充電。它們不產生蒸氣或煙霧，使用時完全無味，且不需要吸入任何物質。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium">尼古丁袋安全嗎？</AccordionTrigger>
                <AccordionContent>
                  相較於傳統吸菸，尼古丁袋不含燃燒產生的有害物質。然而，尼古丁本身仍具有成癮性，且不建議非尼古丁使用者開始使用。任何尼古丁產品都應在了解風險的情況下謹慎使用。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-medium">會影響牙齦健康嗎？</AccordionTrigger>
                <AccordionContent>
                  部分使用者可能會感到輕微的牙齦刺激，尤其是初次使用時。選擇較低強度的產品並正確放置可以減少這種情況。如有持續不適，應停止使用並諮詢牙醫。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-medium">可以持續多久？</AccordionTrigger>
                <AccordionContent>
                  一般來說，尼古丁袋的效果可持續30-60分鐘，視產品強度和個人使用習慣而定。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-medium">可以在工作場所使用嗎？</AccordionTrigger>
                <AccordionContent>
                  尼古丁袋不產生煙霧或蒸氣，使用時無味無煙，因此可以在大多數禁止吸菸的場所使用。然而，使用前應了解當地法規和工作場所政策。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left font-medium">如何辨別產品是否正品？</AccordionTrigger>
                <AccordionContent>
                  購買時應選擇有明確品牌標識、批號和成分標示的產品，並從可靠的供應商處購買。正品通常有防偽措施和完整的產品信息。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left font-medium">費用會很昂貴嗎？</AccordionTrigger>
                <AccordionContent>
                  尼古丁袋的價格因品牌和強度而異，但長期來看，通常比持續購買香菸或維護電子菸設備更經濟實惠。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-12 md:py-24 bg-blue-50">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-blue-800">準備體驗純淨尼古丁？</h2>
            <p className="text-gray-600 md:text-lg">瀏覽符合西方品質標準的經驗證供應商</p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-6 text-lg">
              <Link href="/vendors">查看推薦品牌</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer Footer */}
      <div className="w-full py-6 bg-gray-100 text-center text-sm text-gray-500">
        <div className="container px-4 md:px-6">
          <p>本網站提供尼古丁替代方案的教育資訊。內容僅供參考用途。個人醫療建議請諮詢醫療專業人員。</p>
        </div>
      </div>
    </main>
  )
}
