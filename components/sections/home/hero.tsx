import Image from "next/image"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { CTAButton } from "@/components/primitives/cta-button"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <Stagger className="space-y-4">
            <StaggerItem>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-ink">
                純淨尼古丁，明智選擇
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                告別傳統菸和電子菸的使用困擾，選擇透明成分的口含菸（尼古丁袋）替代方案
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-3">
                <CTAButton href="/vendors">查看推薦品牌</CTAButton>
                <CTAButton href="/learn" variant="outline">
                  了解更多
                </CTAButton>
              </div>
            </StaggerItem>
          </Stagger>
          <div className="mx-auto lg:ml-auto">
            <div className="aspect-video overflow-hidden rounded-xl bg-secondary flex items-center justify-center">
              <Image
                src="/hero-image.png"
                alt="專業實驗室研究員使用顯微鏡進行科學研究 - 象徵口含菸產品的科學研發與品質檢測"
                width={1024}
                height={556}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
