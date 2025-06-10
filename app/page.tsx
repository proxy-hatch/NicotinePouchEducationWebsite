"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay" // For self-wrapping/autoplay
import "./styles/faq-styles.css"

const mediaArticles = [
  {
    id: 1,
    source: "經濟日報",
    articleTitle: "台灣菸草減害研究院發布《無煙台灣宣言》",
    excerpt:
      "研究院強調菸草減害是基本人權，呼籲政府重啟科學對話，停止對電子菸、加熱菸與尼古丁袋等減害菸品的一體適用式打壓，以實現真正的無煙台灣...",
    link: "https://money.udn.com/money/story/5635/8774968",
  },
  {
    id: 2,
    source: "世界新聞網",
    articleTitle: "職場菁英新歡：尼古丁袋提神又增進效率",
    excerpt:
      "彭博社報導指出，尼古丁袋在財經界與高科技業大為風行，投資人使用後可專注完成工作，矽谷科技界使用情況越來越普遍，成為職場提神聖品...",
    link: "https://www.worldjournal.com/wj/story/121472/7824800",
  },
  {
    id: 3,
    source: "2firsts",
    articleTitle: "世界無菸日2025：前WHO執行主任呼籲擁抱菸草減害",
    excerpt:
      "全球知名菸害防制專家Derek Yach博士強調，科學證據顯示電子菸、尼古丁袋等產品危害顯著低於傳統香菸，呼籲國際社會支持減害策略拯救生命...",
    link: "https://www.2firsts.com/news/world-no-tobacco-day-2025-embracing-tobacco-harm-reduction-to-save-millions",
  },
  {
    id: 4,
    source: "中央社",
    articleTitle: "菸防法修法近2年，國健署首件加熱菸審查結果即將出爐",
    excerpt:
      "衛福部國健署長吳昭軍表示，台灣加熱菸健康風險評估審查正在進行中，首家業者審查結果預計4月公布，顯示政府以科學實證保護民眾健康...",
    link: "https://www.cna.com.tw/news/ahel/202503070183.aspx",
  },
  {
    id: 5,
    source: "中國時報",
    articleTitle: "電子菸加熱菸稽查統計：全臺2年開罰5億元",
    excerpt: "WHO統計全球新興菸品社群媒體瀏覽超過34億次，國健署加強稽查違法產品，顯示政府重視菸害防制與產品品質管控...",
    link: "https://www.chinatimes.com/cn/realtimenews/20250526002653-260405",
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
                <Button
                  asChild
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  <Link href="/vendors">查看推薦品牌</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium border-blue-200 text-blue-600 hover:bg-blue-50 rounded-lg"
                >
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
            了解您的選擇
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
                  <p>持續30-60分鐘平穩體驗，適應各種生活與工作狀態</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three-Pillar Benefits Grid */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-10 text-blue-800">核心優勢</h2>
          <div className="grid gap-8 md:gap-12 lg:grid-cols-3">
            <Card className="shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
              <CardHeader className="bg-blue-600 p-6">
                <CardTitle className="text-xl font-semibold text-white">可靠性</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3 text-gray-700 flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check-circle h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>無需充電、加油或維護</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check-circle h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>每次使用體驗一致</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check-circle h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>歐美原廠製造保證</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
              <CardHeader className="bg-blue-600 p-6">
                <CardTitle className="text-xl font-semibold text-white">便利性</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3 text-gray-700 flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check-circle h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>適合長時間會議、工廠作業、通勤使用</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check-circle h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>無需抽菸休息時間</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check-circle h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>配合薹灣高效率工作節奏</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col sm:col-span-2 lg:col-span-1">
              <CardHeader className="bg-blue-600 p-6">
                <CardTitle className="text-xl font-semibold text-white">純淨度</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3 text-gray-700 flex-grow">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check-circle h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>獲美國監管機構認可</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check-circle h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>避免燃燒產生的焦油與一氧化碳</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check-circle h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>歐美原廠直送，保證產品真實性</span>
                  </li>
                </ul>
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
                      <CardHeader className="pb-2">
                        <p className="text-sm font-medium text-gray-500">{article.source}</p>
                        <CardTitle className="text-blue-700 text-lg leading-tight mt-1">
                          {article.articleTitle}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow pt-2">
                        <p className="text-gray-600 text-sm line-clamp-3">{article.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="p-0 text-blue-600 hover:text-blue-700">
                          <Link href={article.link} target="_blank" rel="noopener noreferrer">
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
                <AccordionContent className="faq-accordion-content">
                  <p>
                    尼古丁袋是一種無煙尼古丁產品，通常放置在上唇與牙齦之間。它不含煙草，而是由尼古丁、調味劑和植物纖維等成分組成，提供無煙、無味的尼古丁體驗。
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium">可以在工作場使用嗎？</AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p>
                    尼古丁袋不產生煙霧或蒸氣，使用時無味無煙，因此可以在大多數禁止吸菸的場所使用，特別適合台灣的工作環境與生活型態。
                  </p>
                  <p className="mb-2">
                    <strong>具體使用場景：</strong>
                  </p>
                  <ul className="list-disc list-inside pl-5 mb-4">
                    <li>長時間會議或研習 - 無需中途離席吸菸休息</li>
                    <li>工廠作業環境 - 符合安全規範，不影響生產線工作</li>
                    <li>辦公大樓 - 無需搭電梯到戶外吸菸區，節省時間</li>
                    <li>公共交通通勤 - 捷運、高鐵、公車上均可謹慎使用</li>
                    <li>餐廳用餐 - 不影響用餐體驗或他人感受</li>
                    <li>商務場合 - 客戶會議、商務談判時保持專業形象</li>
                  </ul>
                  <p>這讓使用者可以更靈活地安排工作與生活節奏，無需因尼古丁需求而中斷重要事務或影響專業表現。</p>
                  <p>由於產品完全無味無煙，使用時幾乎無法察覺，因此適合各種正式或非正式場合。</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium">與電子菸有何差別？</AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p>
                    與電子菸不同，尼古丁袋不需要任何設備、電池或充電。它們不產生蒸氣或煙霧，使用時完全無味，且不需要吸入任何物質。
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-medium">尼古丁袋安全嗎？</AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p>
                    相較於傳統吸菸，尼古丁袋避免了燃燒產生的焦油、一氧化碳等數千種有害化學物質，大幅降低與吸菸相關的健康風險。美國FDA已授權部分品牌為「適合公共健康」的產品，認定其相較於香菸具有顯著較低的健康風險。
                  </p>
                  <p>
                    然而，尼古丁本身仍具有成癮性，且可能對心血管系統產生影響。尼古丁袋主要適合已經使用尼古丁產品的成年人作為減害替代選擇，不建議非尼古丁使用者開始使用。
                  </p>
                  <p>
                    與電子菸不同，尼古丁袋透過口腔吸收，完全避免肺部接觸任何物質。任何尼古丁產品都應在了解風險的情況下謹慎使用，建議諮詢醫療專業人員的建議。
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left font-medium">會影響牙齦健康嗎？</AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p>
                    部分使用者初期可能會感到輕微的牙齦刺激或刺痛感，這是正常現象，通常在使用一至兩週後會逐漸適應並減輕。這種初期反應主要是口腔組織適應新產品的過程。
                  </p>
                  <p>某些口味可能會產生刺激性唾液，使用時應避免吞嚥唾液，以免造成胃部不適、噁心或消化問題。</p>
                  <p>
                    為減少不適感，建議從較低強度產品開始，正確放置於牙齦與嘴唇之間，並定期更換放置位置。初次使用時可縮短使用時間（如15-20分鐘），待適應後再延長至建議時間。
                  </p>
                  <p>
                    相較於傳統煙草產品，尼古丁袋不含菸葉，避免了與口腔癌、牙齦疾病、牙齒染色等相關的風險。建議保持良好的口腔衛生習慣，定期進行口腔檢查。如有持續不適或異常症狀，應停止使用並諮詢牙醫或醫療專業人員。
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left font-medium">可以持續多久？</AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p>一般來說，尼古丁袋的效果可持續30-60分鐘，視產品強度和個人使用習慣而定。</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left font-medium">如何辨別產品是否正品？</AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p>
                    購買時應選擇有明確品牌標識、批號和成分標示的產品，並從可靠的供應商處購買。正品通常有防偽措施和完整的產品信息。
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left font-medium">費用會很昂貴嗎？</AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p>
                    尼古丁袋的價格因品牌和強度而異，但考慮總成本效益具有優勢：無需購買設備、充電器或耗材，避免設備故障維修費用。相較於進口IQOS的複雜成本或黑市電子菸的品質風險，正品尼古丁袋提供可預期的使用成本。
                  </p>
                  <p>
                    此外，每個袋裝可使用30-60分鐘，使用頻率通常低於電子菸的短時間吸食，長期而言更具成本效益。許多使用者認為便利性、可靠性和品質保證使投資物有所值。
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 bg-blue-50">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-blue-800">
              尋找符合品質標準的供應商？
            </h2>
            <p className="text-gray-600 md:text-lg">瀏覽歐美原廠品牌的認證經銷商，獲得品質保證的選擇</p>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-6 text-lg">
              <Link href="/vendors">查看推薦品牌</Link>
            </Button>
          </div>
        </div>
      </section>
      <div className="w-full py-6 bg-gray-100 text-center text-sm text-gray-500">
        <div className="container px-4 md:px-6">
          <p>本網站僅提供教育資訊供參考。使用任何尼古丁產品前請評估個人需求並謹慎選擇。</p>
        </div>
      </div>
    </main>
  )
}
