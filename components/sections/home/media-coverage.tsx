import { Reveal } from "@/components/motion/reveal"
import { MediaCarousel } from "@/components/sections/home/media-carousel"

export function MediaCoverage() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="container px-4 md:px-6">
        <Reveal>
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-ink">
              媒體關注與專家觀點
            </h2>
            <p className="text-muted-foreground md:text-lg">
              了解國際與台灣媒體如何報導尼古丁替代方案
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <MediaCarousel />
        </Reveal>
      </div>
    </section>
  )
}
