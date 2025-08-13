// app/blog/[slug]/page.tsx
import { CardFooter, CardContent, CardTitle, CardHeader, Card } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock } from "lucide-react"
import Image from "next/image" // Import Next Image

// --- Blog Data and Helpers (Exported) ---
export interface BlogPost {
  id: number // Sequential internal ID
  slug: string // URL-friendly slug
  title: string
  publishDate: string
  readingTime: number
  author: string
  heroImageUrl: string // Added for hero image
  heroImageAlt: string // Added for hero image alt text
  content: string // HTML content
  excerpt: string
}

// ----- Full Content for Posts (ensure these are the complete HTML strings) -----
// These constants should contain the full HTML content for the respective posts.

const article1Content = `
  <h2>什麼是口含菸？</h2>
  <p>口含菸（又稱尼古丁袋）是一種現代化的無煙尼古丁產品，起源於瑞典等北歐國家。它是一個小巧的袋狀產品，放置在上唇與牙齦之間，通過口腔黏膜吸收尼古丁。與傳統菸草產品最大的差異在於，口含菸完全不含菸草葉，而是使用純化的尼古丁配合其他安全成分製成。</p>
  <p>這種產品在近年來逐漸在全球市場普及，特別受到尋求菸草替代方案的消費者歡迎。由於其使用方式謹慎、無煙無味的特性，越來越多人將其視為在限制吸菸場所中的理想選擇。</p>

  <h2>口含菸的主要成分</h2>

  <h3>核心成分解析</h3>
  <p><strong>尼古丁 (Nicotine)</strong></p>
  <p>尼古丁是口含菸的核心活性成分，通常來源於菸草植物萃取或實驗室合成製造。不同產品的尼古丁濃度範圍從2毫克到20毫克不等，使用者可以根據個人需求選擇適合的強度。這種精確的劑量控制是口含菸相較於傳統菸草產品的重要優勢之一。</p>

  <p><strong>植物纖維</strong></p>
  <p>優質的口含菸通常使用經過處理的松木纖維或其他天然植物材料作為載體。這些植物纖維不僅作為尼古丁的載體基質，還能協助尼古丁的穩定釋放，同時提供產品適當的質地和結構強度，確保使用過程中袋子不會破損。</p>

  <p><strong>調味劑</strong></p>
  <p>製造商使用食品級香料為產品提供多樣化的口味選擇，常見的口味包括薄荷、柑橘、漿果、咖啡等。這些調味劑不僅改善使用體驗，也有助於掩蓋尼古丁本身可能帶來的苦味，讓產品更容易被接受。</p>

  <p><strong>pH調節劑</strong></p>
  <p>pH值的控制對於口含菸的效果至關重要。製造商會添加適當的pH調節劑來維持產品的酸鹼平衡，這直接影響尼古丁在口腔黏膜中的吸收效率。適當的pH值還能確保產品在儲存期間保持穩定的品質。</p>

  <p><strong>甜味劑和其他添加劑</strong></p>
  <p>為了提升整體使用體驗，製造商會添加無熱量甜味劑來改善口感。此外，保濕劑有助於維持產品的適當濕潤度，而防腐劑則確保產品在保質期內維持品質和安全性。所有這些添加劑都必須符合食品安全標準。</p>

  <h3>成分透明度的重要性</h3>
  <p>知名品牌通常會清楚標示所有成分，並提供第三方檢測報告。消費者在選購時應優先考慮成分標示完整、來源透明的產品，避免選擇成分不明或價格異常低廉的產品。</p>

  <h2>正確的使用方法</h2>

  <h3>基本使用步驟</h3>
  <p><strong>第一步：選擇合適位置</strong></p>
  <p>使用時應將口含菸輕輕放置在上唇與牙齦之間的位置。上唇的選擇是基於該區域擁有較佳的血液循環，能夠提供更有效的尼古丁吸收。使用者可以根據個人舒適度選擇放置在左側或右側，重要的是找到一個感覺自然且不會造成不適的位置。</p>

  <p><strong>第二步：適應期管理</strong></p>
  <p>對於初次使用者來說，最初可能會感受到輕微的刺激感或辣味感覺。這是完全正常的反應，因為口腔黏膜需要時間適應尼古丁的接觸。這種感覺通常在使用後幾分鐘內會自然緩解。建議新手從較低濃度的產品開始嘗試，逐步了解自己的耐受度。</p>

  <p><strong>第三步：使用時間控制</strong></p>
  <p>一錠口含菸的建議使用時間通常為30-60分鐘，具體時長取決於產品的尼古丁濃度和個人的使用習慣。在這段時間內，尼古丁會持續且穩定地通過口腔黏膜被吸收。使用者不需要做任何額外動作，只需讓袋子自然地發揮作用即可。</p>

  <p><strong>第四步：正確移除和處理</strong></p>
  <p>使用完畢後，應小心地將口含菸從口中取出並丟棄在一般垃圾桶中。許多品牌會在包裝盒內提供專用的廢棄袋格，方便使用者暫時存放使用過的袋子。使用後建議用清水漱口，以保持口腔的清潔和舒適。</p>

  <h3>使用注意事項</h3>
  <ul>
    <li>不要咀嚼或吞嚥口含菸</li>
    <li>使用期間避免飲用酸性飲料</li>
    <li>如有不適應立即停止使用</li>
    <li>保持良好的口腔衛生習慣</li>
  </ul>

  <h2>科學原理：尼古丁如何被吸收</h2>

  <h3>口腔黏膜吸收機制</h3>
  <p>口含菸的作用原理基於口腔黏膜的吸收能力。當口含菸與口腔接觸時，其中的尼古丁會逐漸溶解並通過口腔黏膜進入血液循環系統。</p>

  <p><strong>吸收過程的獨特特點：</strong></p>

  <p><strong>緩慢而穩定的釋放</strong>：相較於吸菸時尼古丁快速進入血液循環的過程，口腔黏膜吸收提供了更加平穩和持續的尼古丁釋放方式。這種漸進式的吸收模式有助於避免尼古丁濃度的劇烈波動，為使用者提供更穩定的體驗。</p>

  <p><strong>較長的持續時間</strong>：一錠口含菸的效果通常可以維持30到60分鐘，這遠超過傳統吸菸僅數分鐘的短暫效果。這種較長的持續時間意味著使用者在一天中需要使用的次數可能較少，更符合現代人忙碌的生活節奏。</p>

  <p><strong>避免肺部直接暴露</strong>：由於口含菸不需要通過吸入的方式使用，因此完全避免了肺部與尼古丁直接接觸。這種使用方式減少了對呼吸系統的潛在影響，這也是許多醫療專家認為口腔吸收方式相對較安全的原因之一。</p>

  <h3>與其他尼古丁產品的差異</h3>

  <p><strong>相較於香菸：</strong></p>
  <ul>
    <li>無燃燒過程，避免產生焦油和一氧化碳等致癌物</li>
    <li>無二手煙問題</li>
    <li>不會影響周圍環境和他人</li>
  </ul>

  <p><strong>相較於電子菸：</strong></p>
  <ul>
    <li>無需設備和電池</li>
    <li>不產生蒸氣或霧化物</li>
    <li>使用更加謹慎隱蔽</li>
  </ul>

  <p><strong>相較於尼古丁口香糖：</strong></p>
  <ul>
    <li>無需咀嚼動作</li>
    <li>釋放更加均勻持續</li>
    <li>使用方式更加低調</li>
  </ul>

  <h2>適用人群與使用場景</h2>

  <h3>適合的使用者</h3>
  <p><strong>現有尼古丁使用者</strong></p>
  <ul>
    <li>希望減少吸菸相關健康風險的人群</li>
    <li>在禁菸場所工作的專業人士</li>
    <li>尋求更謹慎使用方式的消費者</li>
  </ul>

  <p><strong>特定使用場景</strong></p>
  <ul>
    <li>辦公室工作環境</li>
    <li>公共交通工具上</li>
    <li>會議或社交場合</li>
    <li>長途旅行期間</li>
  </ul>

  <h3>不適合的人群</h3>
  <ul>
    <li>未成年人（18歲以下）</li>
    <li>孕婦和哺乳期女性</li>
    <li>對尼古丁過敏者</li>
    <li>從未使用過尼古丁產品的人群</li>
  </ul>

  <h2>常見問題解答</h2>
  <p><strong>Q: 口含菸會成癮嗎？</strong></p>
  <p>A: 雖然成癮性低於香菸，但尼古丁本身仍具有輕微成癮性，無論通過何種方式攝取。口含菸主要適合已經使用尼古丁產品的人群作為替代選擇。</p>

  <p><strong>Q: 可以在飛機上使用嗎？</strong></p>
  <p>A: 由於不產生煙霧或蒸氣，大多數航空公司允許使用，但建議事先確認具體政策。</p>

  <p><strong>Q: 會影響牙齒嗎？</strong></p>
  <p>A: 由於口含菸使用合成尼古丁且不含菸草葉，因此不會造成牙齒染色問題。這是其相較於傳統口含菸（snus）的一大優勢。不過，長期使用仍可能對牙齦造成輕微刺激，因此建議保持良好的口腔衛生習慣，定期檢查口腔健康。</p>

  <p><strong>Q: 一天可以使用多少個？</strong></p>
  <p>A: 由於每個人的尼古丁耐受度不同，建議從較少量開始嘗試，並根據個人需求調整。初次使用者建議每日不超過3-4個，有經驗的使用者可以根據原本的尼古丁攝取習慣來決定。重要的是避免過度使用，並留意身體的反應。</p>

  <h2>結語</h2>
  <p>口含菸作為一種創新的尼古丁傳遞方式，為尋求替代方案的消費者提供了新的選擇。了解其成分、正確使用方法和科學原理，有助於消費者做出明智的決定。</p>
  <p>如果您正在考慮嘗試口含菸，建議選擇來自可靠供應商的知名品牌產品，確保產品品質和安全性。</p>
  <p><strong>想了解如何選擇優質的口含菸供應商？</strong> <a href="/vendors">查看我們的推薦品牌指南 →</a></p>

  <hr>

  <p><em>本文內容僅供教育參考用途。使用任何尼古丁產品前，請諮詢醫療專業人員的建議。</em></p>
`

const article3Content = `
  <h1>工作場所使用指南：隱形、專業的尼古丁消費方式</h1>

  <h2>為什麼工作場所需要新的解決方案？</h2>
  <p>現代職場環境對專業人士提出了更高的要求，無論是處理複雜項目、參與重要會議，還是維持高效的工作表現，都需要長時間保持專注。對於有尼古丁需求的工作者來說，傳統的吸菸方式不僅受到法規限制，也會影響工作效率和專業形象。頻繁的吸菸休息不僅打斷工作流程，在講求效率的職場環境中也可能影響整體表現。</p>
  <p>隨著法規趨嚴和健康意識提升，越來越多企業實施全面禁菸政策。即使是指定的吸菸區域，也往往位置偏遠，對於需要頻繁參與會議或處理緊急事務的專業人士來說極不方便。此外，吸菸後的氣味問題也可能在客戶會議或團隊合作中造成尷尬。</p>

  <h2>口含菸在職場的獨特優勢</h2>

  <h3>完全無味無煙的低調體驗</h3>
  <p>口含菸最大的職場優勢在於其完全低調的使用方式。產品放置在口腔內後，不會產生任何可見的煙霧、蒸氣或氣味，周圍同事完全不會察覺。這種隱蔽性讓使用者能夠在任何工作場合維持專業形象，無論是重要的客戶簡報、董事會會議，或是與國際夥伴的視訊會議。</p>
  <p>使用過程中不需要任何外顯動作，不會影響說話或工作表現。許多使用者表示，他們可以在處理重要工作任務時同時使用口含菸，既滿足了尼古丁需求，又不會被同事或客戶發現。</p>

  <h3>不中斷工作流程的連續性</h3>
  <p>傳統吸菸需要離開工作崗位，通常需要5-10分鐘的時間，包括前往吸菸區、吸菸、以及返回的時間。對於需要高度專注的工作，這種中斷往往會影響思考的連貫性和工作效率。</p>
  <p>口含菸的使用完全不需要離開座位，可以在處理文件、參與會議、或進行創意思考時同時進行。這種不中斷的特性特別適合從事設計、程式開發、財務分析等需要長時間專注的工作。</p>

  <h3>更有效的時間運用</h3>
  <p>一錠口含菸可以提供30-60分鐘的穩定效果，相較於香菸5-10分鐘的短暫滿足感，能夠大幅減少使用頻率。這意味著工作者可以在早上開始工作時使用一個，中午休息時間再使用一個，就能夠滿足大半天的需求，而不需要頻繁中斷工作。</p>

  <h2>適用的職場場景</h2>

  <h3>辦公室環境</h3>
  <h4>開放式辦公空間</h4>
  <p>在現代的開放式辦公環境中，員工的一舉一動都可能被同事注意到。口含菸的隱蔽性讓使用者能夠在座位上正常工作，不會引起任何注意或討論。這對於重視團隊和諧和專業形象的工作環境特別重要。</p>
  <h4>個人辦公室</h4>
  <p>即使在私人辦公室中，傳統吸菸仍然不被允許，而電子菸可能會觸發煙霧偵測器或產生氣味問題。口含菸讓高階主管或獨立工作者能夠在處理重要決策或長時間工作時，維持所需的尼古丁水平。</p>

  <h3>會議和商務场合</h3>
  <h4>重要會議期間</h4>
  <p>長時間的董事會會議、策略規劃會議或客戶簡報往往持續數小時。對於有尼古丁依賴的專業人士來說，會議中途離席吸菸不僅不專業，也可能錯過重要討論。口含菸讓使用者能夠全程參與，保持專注和參與度。</p>
  <h4>商務招待</h4>
  <p>在商務晚餐、客戶會議或公司活動中，頻繁離席吸菸可能會影響商務關係的建立。口含菸的隱形使用方式讓專業人士能夠全程專注於商務交流，不會因為尼古丁需求而分心或失禮。</p>

  <h3>出差和旅行</h3>
  <h4>機場和飛行期間</h4>
  <p>現代航空旅行對吸菸有嚴格限制，長途飛行對有尼古丁需求的旅客來說是一大挑戰。雖然使用前應確認航空公司政策，但口含菸由於不產生煙霧或蒸氣，通常被允許在飛行期間使用。</p>
  <h4>酒店和客戶拜訪</h4>
  <p>商務出差期間，在酒店房間或客戶辦公室使用傳統菸草產品可能違反禁菸政策或造成氣味問題。口含菸提供了一個完全不會影響環境的解決方案。</p>

  <h2>工作場所使用的最佳實踐</h2>

  <h3>低調和尊重的原則</h3>
  <p>雖然口含菸使用非常低調，但在工作場所使用時仍應保持適當的判斷力。由於多數同事可能對口含菸不熟悉，為避免不必要的關注或誤解，建議在重要簡報或需要大量說話的場合前後使用，確保最佳的專業表現。</p>

  <h3>了解公司政策</h3>
  <p>在開始在工作場所使用口含菸之前，建議了解公司的相關政策。雖然多數企業的禁菸政策主要針對傳統菸草產品和電子菸，但主動了解並遵守公司規定是專業態度的體現。</p>

  <h3>保持口腔衛生</h3>
  <p>工作場所的密切互動要求良好的個人衛生。使用口含菸後建議適時清潔口腔，確保在與同事或客戶交流時維持最佳狀態。</p>

  <h2>不同職業的應用案例</h2>

  <h3>金融業專業人士</h3>
  <p>金融業以高壓和長時間工作著稱，交易員和分析師往往需要在市場開盤期間保持高度專注。口含菸讓這些專業人士能夠在監控市場動態或進行複雜分析時，不需要離開工作崗位就能滿足尼古丁需求。</p>

  <h3>醫療從業人員</h3>
  <p>醫院環境對於煙霧和氣味有嚴格要求，醫療人員的工作性質也不允許頻繁休息。口含菸為需要在長時間手術或夜班期間保持專注的醫療專業人士提供了理想的解決方案。</p>

  <h3>科技業工作者</h3>
  <p>程式設計師和工程師經常需要長時間專注於複雜的技術問題。口含菸的長效性和不中斷特性，讓他們能夠在深度工作狀態中維持所需的尼古丁水平，不會打斷創意流程或思考邏輯。</p>

  <h3>教育工作者</h3>
  <p>教師和講師在授課期間無法離開教室吸菸，口含菸讓有需求的教育工作者能夠在長時間授課或會議期間保持穩定狀態，確保教學品質不受影響。</p>

  <h2>注意事項和建議</h2>

  <h3>工作表現的優先考量</h3>
  <p>雖然口含菸提供了工作場所使用的便利性，但工作表現和專業責任始終應該是首要考量。如果發現口含菸的使用以任何方式影響了工作效率或專業表現，應該重新評估使用方式或尋求專業建議。</p>

  <h3>同事關係和團隊和諧</h3>
  <p>即使使用非常謹慎，也要注意維護良好的同事關係。如果有同事對尼古丁產品表達關切，應該以開放和尊重的態度進行溝通，必要時調整使用方式以維護團隊和諧。</p>

  <h3>健康考量</h3>
  <p>工作壓力本身已經對健康造成挑戰，添加尼古丁使用需要更加謹慎。建議定期評估自己的尼古丁依賴程度，如有需要應尋求醫療專業人員的協助，將健康風險降到最低。</p>

  <h2>結語</h2>
  <p>對於在台灣快節奏的工作環境中有尼古丁需求的專業人士來說，口含菸提供了一個既能滿足個人需求又能維持專業形象的解決方案。其低調、無味、不中斷工作的特性，讓使用者能夠在各種職場場景中保持最佳表現。</p>
  <p>然而，選擇合適的產品品質和可靠的供應商至關重要。優質的口含菸不僅能夠提供穩定的使用體驗，也能確保在專業環境中不會出現品質問題或意外狀況。</p>

  <p><strong>想了解如何選擇適合職場使用的優質口含菸品牌？</strong> <a href="/推薦品牌">查看我們的推薦品牌指南 →</a></p>

  <hr>

  <p><em>本文內容僅供職場應用參考。使用任何尼古丁產品前，請了解相關法規並諮詢醫療專業人員的建議。在工作場所使用前，建議先了解公司相關政策。</em></p>
`

const contentForGlobalHarmReductionPolicies = `
      <h2>全球尼古丁減害政策概述</h2>
      <p>全球各國對尼古丁替代品的監管策略存在顯著差異，反映了不同的公共衛生理念和政策方向。本文將探討主要國家和地區的尼古丁減害法規方針，以及這些政策對公共健康和消費者選擇的影響。</p>
      <h2>減害導向型國家</h2>
      <h3>1. 英國</h3>
      <p>英國採取了全球最積極的尼古丁減害政策，將其作為降低吸菸率的核心策略之一。</p>
      <ul>
        <li>公共衛生署(PHE)明確支持電子菸作為戒菸工具</li>
        <li>醫療系統(NHS)可處方電子菸作為戒菸輔助工具</li>
        <li>對尼古丁替代品採取相對寬鬆的廣告和銷售規定</li>
        <li>口含菸合法銷售，受到消費品安全法規監管</li>
      </ul>
      <p>結果：英國成年人吸菸率從2011年的20%降至2023年的12.9%，創歷史新低。</p>
      <h3>2. 瑞典</h3>
      <p>瑞典長期以來採用減害策略，特別是通過推廣無煙煙草產品(Snus)。</p>
      <ul>
        <li>Snus在瑞典合法銷售數十年，口含菸近年也獲得合法地位</li>
        <li>對無煙尼古丁產品採取科學監管而非禁止策略</li>
        <li>強調消費者知情選擇權</li>
      </ul>
      <p>結果：瑞典男性吸菸率僅為5.6%，是歐盟最低，同時也是歐盟肺癌和口腔癌發病率最低的國家之一。</p>
      <h3>3. 紐西蘭</h3>
      <p>紐西蘭近年採取創新的減害策略，目標是到2025年實現"無煙紐西蘭"。</p>
      <ul>
        <li>電子菸和口含菸合法銷售，但有年齡限制</li>
        <li>允許有限度的廣告，以吸引吸菸者轉向風險較低的替代品</li>
        <li>同時實施嚴格的傳統香菸控制措施</li>
      </ul>
      <p>結果：吸菸率持續下降，2023年降至8%，接近其2025年目標。</p>
      <h2>禁止導向型國家</h2>
      <h3>1. 澳大利亞</h3>
      <p>澳大利亞對尼古丁替代品採取嚴格的禁止策略。</p>
      <ul>
        <li>含尼古丁電子菸需處方才能合法獲取</li>
        <li>口含菸基本被禁止銷售</li>
        <li>強調"預防原則"，認為新型尼古丁產品缺乏長期安全數據</li>
      </ul>
      <p>結果：澳大利亞吸菸率下降速度近年放緩，非法市場和網購灰色地帶擴大。</p>
      <h3>2. 印度</h3>
      <p>印度對大多數尼古丁替代品採取全面禁止策略。</p>
      <ul>
        <li>2019年禁止電子菸和加熱菸</li>
        <li>口含菸同樣被禁止</li>
        <li>強調防止青少年使用和新型成癮問題</li>
      </ul>
      <p>結果：傳統煙草使用率仍然很高，非法市場繁榮。</p>
      <h2>混合策略國家</h2>
      <h3>1. 美國</h3>
      <p>美國採取基於科學證據的個案審查策略。</p>
      <ul>
        <li>FDA通過PMTA(上市前煙草申請)和MRTP(改良風險煙草產品)程序評估產品</li>
        <li>已批准部分口含菸品牌(如ZYN)為"適合保護公共健康"的產品</li>
        <li>同時加強對青少年使用的監管和預防</li>
      </ul>
      <p>結果：成人吸菸率持續下降，但青少年使用新型尼古丁產品的情況引發關注。</p>
      <h3>2. 日本</h3>
      <p>日本對不同類型的尼古丁替代品採取差異化策略。</p>
      <ul>
        <li>加熱菸合法銷售，市場滲透率全球最高</li>
        <li>含尼古丁電子菸被禁止</li>
        <li>口含菸處於監管灰色地帶</li>
      </ul>
      <p>結果：傳統香菸銷量大幅下降，加熱菸市場迅速擴大。</p>
      <h2>台灣現況</h2>
      <p>台灣目前對尼古丁替代品採取相對嚴格的監管策略。</p>
      <ul>
        <li>電子菸和加熱菸需經審查核准才能合法銷售，目前尚無產品獲批</li>
        <li>口含菸處於監管灰色地帶</li>
        <li>強調預防青少年使用和防止新型成癮問題</li>
      </ul>
      <p>結果：傳統吸菸率下降緩慢，非法市場和跨境購買現象普遍。</p>
      <h2>政策趨勢與未來展望</h2>
      <p>全球尼古丁減害政策正在經歷以下趨勢：</p>
      <ul>
        <li><strong>差異化監管：</strong>根據產品風險水平採取不同監管強度</li>
        <li><strong>科學導向：</strong>更多國家開始採用基於證據的監管決策</li>
        <li><strong>平衡策略：</strong>在減害和預防之間尋求平衡</li>
        <li><strong>消費者參與：</strong>增加消費者在政策制定中的聲音</li>
      </ul>
      <h2>結論</h2>
      <p>全球尼古丁減害政策呈現多元化發展路徑。研究證據越來越支持差異化監管策略，即對風險較低的產品採取相對寬鬆的監管，同時維持對傳統香菸的嚴格控制。</p>
      <p>對台灣而言，借鑒英國、瑞典等成功案例，採取基於科學證據的減害策略，可能有助於加速降低吸菸率，同時保護公共健康。然而，任何政策調整都應考慮本地文化和社會因素，並確保有足夠措施防止青少年使用。</p>
    `

const article7Content = `
      <h2>如何辨別高品質尼古丁替代品</h2>
      <p>隨著尼古丁替代品市場的快速發展，消費者面臨越來越多的產品選擇。然而，市場上產品品質參差不齊，選擇優質產品對於減少健康風險至關重要。本指南將幫助您識別高品質尼古丁替代品的關鍵指標，以及如何避免劣質或假冒產品。</p>
      <h2>口含菸品質評估標準</h2>
      <h3>1. 包裝與標示</h3>
      <p><strong>優質產品特徵：</strong></p>
      <ul>
        <li>包裝完整，印刷清晰，無模糊或錯別字</li>
        <li>清晰標示製造商資訊、生產批號和有效期</li>
        <li>詳細列出所有成分及其含量</li>
        <li>尼古丁含量明確標示（通常以mg/袋為單位）</li>
        <li>包含原產地資訊</li>
        <li>包含使用說明和警告標語</li>
        <li>具有防篡改封條或其他安全特徵</li>
      </ul>
      <p><strong>警示信號：</strong></p>
      <ul>
        <li>包裝粗糙，印刷模糊或有明顯錯誤</li>
        <li>缺少批號、有效期或製造商資訊</li>
        <li>成分列表不完整或模糊</li>
        <li>尼古丁含量標示不清或誇大</li>
      </ul>
      <h3>2. 產品來源</h3>
      <p><strong>優質產品特徵：</strong></p>
      <ul>
        <li>來自有良好聲譽的製造商（如Swedish Match, BAT, JTI等）</li>
        <li>在原產國受到監管機構認可</li>
        <li>通過可靠的經銷渠道購買</li>
        <li>製造商提供產品驗證方式（如官網查詢）</li>
      </ul>
      <p><strong>警示信號：</strong></p>
      <ul>
        <li>來源不明或無法追溯的品牌</li>
        <li>價格異常低廉</li>
        <li>只能通過非正規渠道購買</li>
        <li>無法在製造商官網找到相關產品資訊</li>
      </ul>
      <h3>3. 物理特性</h3>
      <p><strong>優質產品特徵：</strong></p>
      <ul>
        <li>袋裝完整，無破損或漏粉</li>
        <li>袋材質地均勻，縫合牢固</li>
        <li>內容物分布均勻，無結塊</li>
        <li>開封後有適當的香氣，無異味或過強化學氣味</li>
        <li>使用時釋放均勻，無突然釋放大量尼古丁的情況</li>
      </ul>
      <p><strong>警示信號：</strong></p>
      <ul>
        <li>袋裝破損或縫合不良</li>
        <li>內容物結塊或分布不均</li>
        <li>有強烈化學氣味或異味</li>
        <li>使用時釋放不均勻或刺激性過強</li>
      </ul>
      <h2>如何驗證產品真實性</h2>
      <h3>1. 官方驗證工具</h3>
      <p>許多知名品牌提供產品真實性驗證工具：</p>
      <ul>
        <li>ZYN: 官網提供批號查詢系統</li>
        <li>VELO: 包裝上有QR碼可掃描驗證</li>
        <li>Nordic Spirit: 可通過官方APP驗證產品</li>
      </ul>
      <p>使用這些工具是確認產品真實性的最可靠方法。</p>
      <h3>2. 視覺檢查</h3>
      <p>對比官方產品圖片，檢查以下細節：</p>
      <ul>
        <li>包裝設計和顏色</li>
        <li>標誌和商標的精確度</li>
        <li>批號和有效期的印刷質量</li>
        <li>防偽特徵（如全息圖、特殊油墨等）</li>
      </ul>
      <h3>3. 購買渠道</h3>
      <p>從可靠的渠道購買可大幅降低購買到假冒產品的風險：</p>
      <ul>
        <li>官方授權經銷商</li>
        <li>知名零售商</li>
        <li>有良好聲譽的專業尼古丁替代品店</li>
      </ul>
      <p>避免來源不明的網絡賣家或價格異常低廉的供應商。</p>
      <h2>主要品牌品質比較</h2>
      <p>以下是市場上主要口含菸品牌的品質概況：</p>
      <h3>1. ZYN (Swedish Match)</h3>
      <ul>
        <li>原產地：瑞典/美國</li>
        <li>品質特點：嚴格的品質控制，成分透明，產品一致性高</li>
        <li>認證：美國FDA授權的"適合保護公共健康"產品</li>
        <li>強度範圍：3-8mg</li>
        <li>特色：白色袋裝，無煙草，使用食品級成分</li>
      </ul>
      <h3>2. VELO (BAT)</h3>
      <ul>
        <li>原產地：丹麥/瑞典</li>
        <li>品質特點：現代化生產設施，嚴格的歐盟標準</li>
        <li>認證：符合歐盟TPD法規</li>
        <li>強度範圍：2-11mg</li>
        <li>特色：多樣化口味，創新袋裝設計</li>
      </ul>
      <h3>3. Nordic Spirit (JTI)</h3>
      <ul>
        <li>原產地：瑞典</li>
        <li>品質特點：傳統瑞典製造工藝，品質穩定</li>
        <li>認證：符合瑞典GOTHIATEK®標準</li>
        <li>強度範圍：3-9mg</li>
        <li>特色：經典北歐風味，舒適袋裝</li>
      </ul>
      <h2>儲存與保存</h2>
      <p>正確的儲存方式可以維持產品品質：</p>
      <ul>
        <li>保持在陰涼乾燥處（理想溫度15-25°C）</li>
        <li>避免陽光直射</li>
        <li>開封後使用原包裝密封保存</li>
        <li>避免與強氣味物品一起存放</li>
        <li>注意有效期，避免使用過期產品</li>
      </ul>
      <h2>結論與建議</h2>
      <p>選擇高品質的尼古丁替代品對於減少健康風險至關重要。作為消費者，您應該：</p>
      <ul>
        <li>優先選擇知名品牌和有良好聲譽的製造商</li>
        <li>從可靠的渠道購買</li>
        <li>仔細檢查產品包裝和標示</li>
        <li>利用官方驗證工具確認產品真實性</li>
        <li>注意產品的物理特性和使用體驗</li>
        <li>正確儲存以維持產品品質</li>
      </ul>
      <p>記住，即使是最高品質的尼古丁產品也含有尼古丁，這是一種具有成癮性的物質。這些產品主要適合已經使用尼古丁的成年人作為減害選擇，不適合非尼古丁使用者、未成年人、孕婦或有特定健康問題的人群。</p>
    `
// ----- End of Full Content Definitions -----

export const blogPostsData: BlogPost[] = [
  {
    id: 1,
    slug: "what-is-nicotine-pouch",
    title: "口含菸完整介紹：成分、使用方法與科學原理",
    publishDate: "2024-10-01",
    readingTime: 6,
    author: "健康科學團隊",
    heroImageUrl: "/placeholder.svg?width=1200&height=630",
    heroImageAlt: "口含菸成分與使用方法圖解",
    content: article1Content,
    excerpt:
      "什麼是口含菸（尼古丁袋）？與傳統菸草產品有何不同？深入了解這種源自北歐的創新產品，包括成分分析、正確使用方法，以及背後的科學原理。適合初次接觸者的完整入門指南。",
  },
  {
    id: 3,
    slug: "nicotine-in-the-workplace",
    title: "工作場所使用指南：謹慎、專業的尼古丁消費方式",
    publishDate: "2024-10-02",
    readingTime: 5,
    author: "編輯團隊",
    heroImageUrl: "/placeholder.svg?width=1200&height=630",
    heroImageAlt: "專業人士在辦公室謹慎使用口含菸示意圖",
    content: article3Content,
    excerpt:
      "如何在辦公室、會議中、或通勤時謹慎使用尼古丁產品？針對台灣工作文化特色，提供實用建議與注意事項，讓您在職場環境中維持專業形象。",
  },
  {
    id: 7,
    slug: "nicotine-pouch-retailers",
    title: "品質辨識指南：如何選擇可靠的口含菸供應商",
    publishDate: "2024-11-05",
    readingTime: 5,
    author: "消費者保護團隊",
    heroImageUrl: "/placeholder.svg?width=1200&height=630",
    heroImageAlt: "辨識高品質口含菸與可靠供應商指南",
    content: article7Content,
    excerpt:
      "市場上產品品質參差不齊，如何避開劣質產品？學會辨識正品特徵、驗證供應商可靠性的實用技巧，確保您購買到符合安全標準的產品。",
  },
  // Add heroImageUrl and heroImageAlt for other posts if they are uncommented
  /*
  {
    id: 2,
    slug: "nicotine-products-risk",
    title: "科學研究：不同尼古丁產品的健康風險比較",
    publishDate: "2024-11-15",
    readingTime: 8,
    author: "醫學研究團隊",
    heroImageUrl: "/placeholder.svg?width=1200&height=630",
    heroImageAlt: "不同尼古丁產品健康風險比較圖表",
    content: "<p>Content for '科學研究：不同尼古丁產品的健康風險比較'</p>", // Replace with actual content
    excerpt: "基於國際同行評議研究，客觀比較香菸、電子菸、加熱菸與口含菸的健康風險。了解各產品的有害物質含量、FDA評估結果，以及目前科學界的共識與爭議。",
  },
  {
    id: 4,
    slug: "modern-nicotine-products-comparison",
    title: "加熱菸 vs 電子菸 vs 口含菸：價格與便利性完整比較",
    publishDate: "2024-10-03",
    readingTime: 7,
    author: "編輯團隊",
    heroImageUrl: "/placeholder.svg?width=1200&height=630",
    heroImageAlt: "加熱菸、電子菸、口含菸產品比較",
    content: "<p>詳細內容即將推出。本文將對加熱菸、電子菸及口含菸這三種主要的尼古丁替代品進行全面比較，涵蓋價格成本、使用便利性、維護需求及場所限制等方面。</p>",
    excerpt: "三大尼古丁替代方案的全面比較分析。從價格成本、使用便利性、維護需求到場所限制，幫助您根據個人需求與生活方式，選擇最適合的產品類型。",
  },
  {
    id: 5,
    slug: "taiwan-htp-analysis",
    title: "加熱菸購買指南：IQOS台灣現況與替代方案評析",
    publishDate: "2024-12-01",
    readingTime: 6,
    author: "健康科學團隊",
    heroImageUrl: "/placeholder.svg?width=1200&height=630",
    heroImageAlt: "IQOS台灣現況與加熱菸替代方案分析",
    content: "<p>Content for '加熱菸購買指南：IQOS台灣現況與替代方案評析'</p>", // Replace with actual content
    excerpt: "IQOS在台灣面臨哪些取得困難？分析加熱菸的法規現況、進口挑戰，以及為何越來越多消費者轉向其他替代方案。客觀評估各種選項的優缺點。",
  },
  {
    id: 6,
    slug: "nicotine-pouch-brands",
    title: "國際品牌介紹：ZYN、VELO等知名口含菸品牌分析",
    publishDate: "2024-10-04",
    readingTime: 6,
    author: "編輯團隊",
    heroImageUrl: "/placeholder.svg?width=1200&height=630",
    heroImageAlt: "ZYN、VELO等國際口含菸品牌介紹",
    content: "<p>詳細內容即將推出。本篇將深入介紹全球主要的口含菸品牌，如ZYN、VELO等，分析其產品特點、製造標準、認證情況及在台灣市場的可獲得性。</p>",
    excerpt: "深入了解全球主要口含菸品牌的特色與差異。從ZYN的市場地位到VELO的產品線，分析各品牌的製造標準、認證狀況，以及在台灣的可取得性。",
  },
  {
    id: 8,
    slug: "nicotine-pouch-legality-in-taiwan",
    title: "台灣法規現況：口含菸的合法性與使用須知",
    publishDate: "2024-10-05",
    readingTime: 4,
    author: "編輯團隊",
    heroImageUrl: "/placeholder.svg?width=1200&height=630",
    heroImageAlt: "台灣口含菸法規現況與合法性分析",
    content: "<p>詳細內容即將推出。本文將闡釋口含菸在台灣的現行法律地位，包括相關法規、使用限制，並提供在法律框架內安全使用的建議及最新政策動態。</p>",
    excerpt: "口含菸在台灣的法律地位如何？了解相關法規、使用限制，以及如何在法律框架內安全使用。包含最新政策動態與合規建議。",
  }
  */
]

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPostsData.find((post) => post.slug === slug)
}

export const getAllPosts = (): BlogPost[] => {
  return blogPostsData
}
// --- End of Blog Data and Helpers ---

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getAllPosts()
    .filter((relatedPost) => relatedPost.slug !== params.slug)
    .slice(0, 2)

  return (
    <main className="flex flex-col min-h-screen" lang="zh-TW">
      {/* Page Header */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link href="/learn" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回文章列表
            </Link>

            {/* Hero Image Placeholder */}
            {post.heroImageUrl && (
              <div className="mb-8 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={post.heroImageUrl || "/placeholder.svg"}
                  alt={post.heroImageAlt}
                  width={1200}
                  height={630}
                  className="w-full h-auto object-cover"
                  priority // Prioritize loading for LCP
                />
              </div>
            )}

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-500 space-x-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readingTime}分鐘閱讀</span>
              </div>
              <span>•</span>
              <div>{post.author}</div>
              <span>•</span>
              <div>{post.publishDate}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full py-8 md:py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-lg prose-blue">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">相關文章</h2>
            {relatedPosts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-blue-700 text-lg">{relatedPost.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/blog/${relatedPost.slug}`} className="text-blue-600 hover:underline">
                        閱讀更多
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">目前沒有相關文章。</p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
