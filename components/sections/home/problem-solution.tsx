import { Reveal } from "@/components/motion/reveal"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProblemSolution() {
  return (
    <section className="w-full py-12 md:py-16 bg-surface">
      <div className="container px-4 md:px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-10 text-ink">
            了解您的選擇
          </h2>
        </Reveal>
        <Stagger className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <StaggerItem>
            <Card className="bg-card shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
              <CardHeader className="bg-muted border-b border-border p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-background rounded-full">
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
                      className="lucide lucide-alert-triangle h-6 w-6 text-muted-foreground"
                    >
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>
                  <CardTitle className="text-2xl font-semibold text-ink">常見困擾</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-3 text-foreground">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-muted-foreground/60" />
                  <p>新興菸品進口困難，傳統香菸燃燒產生焦油危害肺功能</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-muted-foreground/60" />
                  <p>市場產品成分不明，品質參差影響肺部健康</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-muted-foreground/60" />
                  <p>設備維護充電煩惱，便利性受限</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-muted-foreground/60" />
                  <p> 使用場所受限影響工作與生活，二手煙霧影響他人</p>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
          <StaggerItem>
            <Card className="bg-card shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
              <CardHeader className="bg-primary p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-full">
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
              <CardContent className="p-6 space-y-3 text-foreground">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                  <p>口腔吸收避免肺部接觸，隨時隨地安全使用</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                  <p>歐美知名品牌保障如ZYN、VELO等，藥用級成分完整透明標示</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                  <p>零煙霧零異味，適合專業場合使用</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                  <p>持續30-60分鐘平穩體驗，適應各種生活與工作情景，享受持久尼古丁釋放</p>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  )
}
