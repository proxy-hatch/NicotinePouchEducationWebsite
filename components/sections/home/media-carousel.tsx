"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const mediaArticles = [
  {
    id: 1,
    source: "經濟日報",
    articleTitle: "台灣菸草減害研究院發布《無煙台灣宣言》",
    excerpt:
      "研究院強調菸草減害是基本人權，呼籲政府重啟科學對話，停止對電子菸、加熱菸與口含菸等減害菸品的一體適用式打壓，以實現真正的無煙台灣...",
    link: "https://money.udn.com/money/story/5635/8774968",
  },
  {
    id: 2,
    source: "世界新聞網",
    articleTitle: "職場菁英新歡：口含菸提神又增進效率",
    excerpt:
      "彭博社報導指出，口含菸在財經界與高科技業大為風行，投資人使用後可專注完成工作，矽谷科技界使用情況越來越普遍，成為職場提神聖品...",
    link: "https://www.worldjournal.com/wj/story/121472/7824800",
  },
  {
    id: 3,
    source: "2firsts",
    articleTitle: "世界無菸日2025：前WHO執行主任呼籲擁抱菸草減害",
    excerpt:
      "全球知名菸害防制專家Derek Yach博士強調，科學證據顯示電子菸、口含菸等產品危害顯著低於傳統香菸，呼籲國際社會支持減害策略拯救生命...",
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

export function MediaCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
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
                  <p className="text-sm font-medium text-muted-foreground">{article.source}</p>
                  <CardTitle className="text-primary text-lg leading-tight mt-1">
                    {article.articleTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-2">
                  <p className="text-muted-foreground text-sm line-clamp-3">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 text-primary hover:text-primary-hover">
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
      <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-primary text-primary hidden md:inline-flex" />
      <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-primary text-primary hidden md:inline-flex" />
    </Carousel>
  )
}
