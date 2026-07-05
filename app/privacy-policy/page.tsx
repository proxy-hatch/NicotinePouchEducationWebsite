import { PageHeader } from "@/components/primitives/page-header"
import { Section } from "@/components/primitives/section"
import { Reveal } from "@/components/motion/reveal"

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageHeader title="隱私政策" subtitle="我們如何收集、使用和保護您的個人資訊" />

      <Section>
        <Reveal>
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-ink prose-a:text-accent">
            <h2>我們對您隱私的承諾</h2>
            <p>
              台灣尼古丁袋教育平台（以下簡稱「我們」或「本網站」）致力於保護您的隱私。本隱私政策解釋了我們如何收集、使用、披露和保護您在使用本網站時提供的個人資訊。
            </p>
            <h3>1. 資訊收集</h3>
            <p>
              當您訪問本網站、訂閱我們的電子報或通過聯繫表單與我們聯繫時，我們可能會收集您的個人資訊，例如您的姓名、電子郵件地址和您自願提供的任何其他資訊。我們也可能自動收集某些非個人資訊，例如您的
              IP 地址、瀏覽器類型和操作系統。
            </p>
            <h3>2. 資訊使用</h3>
            <p>我們收集的資訊將用於以下目的：</p>
            <ul>
              <li>提供和改進本網站的服務與內容。</li>
              <li>回覆您的查詢和請求。</li>
              <li>向您發送您可能感興趣的更新、電子報或其他資訊（如果您已同意接收）。</li>
              <li>分析網站使用情況以改善使用者體驗。</li>
            </ul>
            <h3>3. Cookie 和追蹤技術</h3>
            <p>
              本網站可能使用 Cookie
              和類似的追蹤技術來增強您的瀏覽體驗並收集有關網站使用的資訊。您可以通過瀏覽器設置管理您的 Cookie 偏好。
            </p>
            <h3>4. 資訊共享與披露</h3>
            <p>
              除非法律要求或為保護我們的權利，否則我們不會將您的個人資訊出售、交易或以其他方式轉讓給第三方。我們可能會與協助我們運營網站或開展業務的可信賴第三方服務提供商共享您的資訊，前提是他們同意對此類資訊保密。
            </p>
            <h3>5. 資料安全</h3>
            <p>
              我們採取合理的安全措施來保護您的個人資訊免遭未經授權的訪問、使用或披露。但是，請注意，任何通過互聯網傳輸的數據都不是
              100% 安全的。
            </p>
            <h3>6. 您的權利</h3>
            <p>
              您有權訪問、更正或刪除我們持有的您的個人資訊。如果您希望行使這些權利，請通過本網站提供的聯繫方式與我們聯繫。
            </p>
            <h3>7. 政策變更</h3>
            <p>我們可能會不時更新本隱私政策。任何變更將在本頁面上發布，並註明更新日期。我們鼓勵您定期查看本政策。</p>
            <p className="text-sm text-muted-foreground mt-8">最後更新日期：{new Date().toLocaleDateString("zh-TW")}</p>
          </div>
        </Reveal>
      </Section>
    </main>
  )
}
