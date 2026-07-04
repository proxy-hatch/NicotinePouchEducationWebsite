import { PageHeader } from "@/components/primitives/page-header"
import { Section } from "@/components/primitives/section"
import { Reveal } from "@/components/motion/reveal"

export default function DisclaimerPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageHeader title="免責聲明" subtitle="關於本網站資訊的重要聲明" />

      <Section>
        <Reveal>
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-ink prose-a:text-accent">
            <h2>資訊性質</h2>
            <p>
              本網站（台灣尼古丁袋教育平台）提供的所有內容，包括文字、圖像、連結及其他資料，均僅供一般教育和資訊目的。這些資訊不應被視為專業醫療建議、診斷或治療的替代品。
            </p>
            <h3>1. 非醫療建議</h3>
            <p>
              本網站的內容無意取代專業醫療人員的建議。如果您有任何關於健康狀況或醫療問題的疑慮，請務必諮詢您的醫生或其他合格的醫療服務提供者。切勿因閱讀本網站上的資訊而忽視專業醫療建議或延誤就醫。
            </p>
            <h3>2. 資訊準確性與完整性</h3>
            <p>
              我們已盡合理努力確保本網站資訊的準確性和最新性。然而，我們不對資訊的準確性、完整性、可靠性、適用性或及時性作任何明示或暗示的陳述或保證。任何依賴本網站資訊的風險均由您自行承擔。
            </p>
            <h3>3. 產品資訊與推薦</h3>
            <p>
              本網站可能提及或推薦某些產品或品牌。這些提及或推薦僅基於我們的研究和評估標準，並不構成對任何特定產品的代言。消費者在做出購買決定前應自行進行盡職調查，並考慮個人需求和健康狀況。我們與推薦的供應商可能沒有任何關聯關係，除非另有說明。
            </p>
            <h3>4. 個人責任</h3>
            <p>
              您對如何使用本網站提供的資訊負有全部責任。對於因使用或依賴本網站資訊而直接或間接導致的任何損失或損害，我們概不負責。
            </p>
            <h3>5. 尼古丁產品風險</h3>
            <p>
              尼古丁是一種成癮性物質。尼古丁袋和其他尼古丁替代產品並非完全無風險，且不適合未成年人、孕婦、哺乳期婦女或對尼古丁敏感的人士。如果您目前不使用尼古丁產品，我們不建議您開始使用。
            </p>
            <h3>6. 外部連結</h3>
            <p>
              本網站可能包含指向第三方網站的連結。提供這些連結是為了方便起見，並不表示我們認可這些網站的內容。我們對第三方網站的內容、隱私政策或做法概不負責。
            </p>
            <p className="text-sm text-muted-foreground mt-8">最後更新日期：{new Date().toLocaleDateString("zh-TW")}</p>
          </div>
        </Reveal>
      </Section>
    </main>
  )
}
