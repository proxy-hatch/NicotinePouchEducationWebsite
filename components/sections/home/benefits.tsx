import { Reveal } from "@/components/motion/reveal"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
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
        className="lucide lucide-check-circle h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      <span>{children}</span>
    </li>
  )
}

const pillars = [
  {
    title: "可靠性",
    items: ["無需充電、加油或維護", "每次使用體驗一致", "歐美原廠製造保證"],
    extraClass: "",
  },
  {
    title: "便利性",
    items: ["適合長時間會議、工廠作業、通勤使用", "無需抽菸休息時間", "配合薹灣高效率工作節奏"],
    extraClass: "",
  },
  {
    title: "純淨度",
    items: ["獲美國監管機構認可", "避免燃燒產生的焦油與一氧化碳", "歐美原廠直送，保證產品真實性"],
    extraClass: "sm:col-span-2 lg:col-span-1",
  },
]

export function Benefits() {
  return (
    <section className="w-full py-12 md:py-16 bg-surface">
      <div className="container px-4 md:px-6">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-10 text-ink">
            核心優勢
          </h2>
        </Reveal>
        <Stagger className="grid gap-8 md:gap-12 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <StaggerItem
              key={pillar.title}
              className={`flex flex-col ${pillar.extraClass}`}
            >
              <Card className="shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
                <CardHeader className="bg-primary p-6">
                  <CardTitle className="text-xl font-semibold text-primary-foreground">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-3 text-foreground flex-grow">
                  <ul className="space-y-3">
                    {pillar.items.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
