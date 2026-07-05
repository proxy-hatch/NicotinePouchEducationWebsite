import { Reveal } from "@/components/motion/reveal"
import { CTAButton } from "@/components/primitives/cta-button"

export function BottomCta() {
  return (
    <section className="w-full py-12 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6 text-center">
        <Reveal>
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-ink">
              尋找符合品質標準的供應商？
            </h2>
            <p className="text-muted-foreground md:text-lg">
              瀏覽歐美原廠品牌的認證經銷商，獲得品質保證的選擇
            </p>
            <div className="flex justify-center">
              <CTAButton href="/vendors" className="px-8 py-4 text-lg">
                查看推薦品牌
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
