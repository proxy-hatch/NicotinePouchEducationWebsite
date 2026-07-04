import Link from "next/link"
import { Reveal } from "@/components/motion/reveal"
import { VideoPlayer } from "@/components/sections/home/video-player"

export function VideoEndorsement() {
  return (
    <section className="w-full py-12 md:py-16 bg-surface">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-ink">
                重新認識尼古丁：科學與事實
              </h2>
              <p className="text-muted-foreground md:text-lg leading-relaxed">
                尼古丁長期被誤解和污名化，但科學研究顯示純尼古丁本身可能對認知功能、注意力和工作記憶帶來益處，甚至在治療妥瑞症和早期阿茲海默症方面展現潛力。每個人對尼古丁的反應不同，關鍵在於選擇最潔淨的輸送方式。口含菸作為無燃燒、無菸草、無二手菸害的輸送方法，代表著當今最安全的尼古丁使用選擇。
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <VideoPlayer />

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">深入了解</p>
              <Link
                href="https://ihavenotv.com/you-dont-know-nicotine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary-hover underline text-sm"
              >
                觀看完整紀錄片「你不了解的尼古丁」
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
