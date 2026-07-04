import Image from "next/image"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { CTAButton } from "@/components/primitives/cta-button"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 hero-gradient">
      {/* Decorative backdrop: dot grid + slow-drifting teal glows (aria-hidden, no pointer events) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-dots absolute inset-0" />
        <div className="animate-hero-drift-a absolute -top-24 right-[6%] h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="animate-hero-drift-b absolute -bottom-36 left-[-6%] h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="container relative px-4 md:px-6">
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
          <div className="mx-auto lg:ml-auto w-full">
            <div className="aspect-video overflow-hidden rounded-2xl ring-1 ring-border/60 shadow-xl shadow-primary/10">
              <Image
                src="/hero-pouches.jpg"
                alt="手持開啟的口含菸罐，展示白色尼古丁袋 - 無煙、透明成分的現代尼古丁替代方案"
                width={2488}
                height={1400}
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
