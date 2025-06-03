// app/blog/[slug]/page.tsx
import { CardFooter, CardContent, CardTitle, CardHeader, Card } from "@/components/ui/card";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";

// --- Blog Data and Helpers (Exported) ---
export interface BlogPost {
  id: number; // Sequential internal ID
  slug: string; // URL-friendly slug
  title: string;
  publishDate: string;
  readingTime: number;
  author: string;
  content: string; // HTML content
  excerpt: string;
}

// ----- Full Content for Posts (ensure these are the complete HTML strings) -----
// These constants should contain the full HTML content for the respective posts.
// I'm using the content from your previous file uploads.

const contentForArticle1 = `
  <h1>尼古丁袋完整介紹：成分、使用方法與科學原理</h1>

  <h2>什麼是尼古丁袋？</h2>
  <p>尼古丁袋是一種現代化的無煙尼古丁產品，起源於瑞典等北歐國家。它是一個小巧的袋狀產品，放置在上唇與牙齦之間，通過口腔黏膜吸收尼古丁。與傳統菸草產品最大的差異在於，尼古丁袋完全不含菸草葉，而是使用純化的尼古丁配合其他安全成分製成。</p>
  <p>這種產品在近年來逐漸在全球市場普及，特別受到尋求菸草替代方案的消費者歡迎。由於其使用方式謹慎、無煙無味的特性，越來越多人將其視為在限制吸菸場所中的理想選擇。</p>

  <h2>尼古丁袋的主要成分</h2>

  <h3>核心成分解析</h3>

  <p><strong>尼古丁 (Nicotine)</strong></p>
  <ul>
    <li>產品的主要活性成分</li>
    <li>通常來源於菸草植物或合成製造</li>
    <li>濃度範圍通常在2-20毫克之間</li>
    <li>負責提供使用者所需的尼古丁效果</li>
  </ul>

  <p><strong>植物纖維</strong></p>
  <ul>
    <li>通常使用松木纖維或其他植物材料</li>
    <li>作為載體材料，協助尼古丁釋放</li>
    <li>提供適當的質地和結構</li>
  </ul>

  <p><strong>調味劑</strong></p>
  <ul>
    <li>食品級香料，提供不同口味選擇</li>
    <li>常見口味包括薄荷、水果、咖啡等</li>
    <li>幫助改善使用體驗</li>
  </ul>

  <p><strong>pH調節劑</strong></p>
  <ul>
    <li>控制產品的酸鹼值</li>
    <li>影響尼古丁的吸收效率</li>
    <li>確保產品的穩定性</li>
  </ul>

  <p><strong>甜味劑和其他添加劑</strong></p>
  <ul>
    <li>改善口感的食品級成分</li>
    <li>保濕劑維持產品濕潤度</li>
    <li>防腐劑確保產品品質</li>
  </ul>

  <h3>成分透明度的重要性</h3>
  <p>知名品牌通常會清楚標示所有成分，並提供第三方檢測報告。消費者在選購時應優先考慮成分標示完整、來源透明的產品，避免選擇成分不明或價格異常低廉的產品。</p>

  <h2>正確的使用方法</h2>

  <h3>基本使用步驟</h3>

  <p><strong>第一步：選擇合適位置</strong></p>
  <ul>
    <li>將尼古丁袋放置在上唇與牙齦之間</li>
    <li>避免放在下唇，以確保最佳吸收效果</li>
    <li>可以選擇左側或右側，依個人舒適度而定</li>
  </ul>

  <p><strong>第二步：適應期管理</strong></p>
  <ul>
    <li>初次使用者可能會感到輕微刺激感</li>
    <li>這是正常現象，通常在幾分鐘內會緩解</li>
    <li>建議從較低濃度產品開始嘗試</li>
  </ul>

  <p><strong>第三步：使用時間控制</strong></p>
  <ul>
    <li>一般建議使用時間為30-60分鐘</li>
    <li>根據產品強度和個人需求調整</li>
    <li>避免過度使用，遵循產品建議</li>
  </ul>

  <p><strong>第四步：正確移除</strong></p>
  <ul>
    <li>使用完畢後取出尼古丁袋</li>
    <li>丟棄在一般垃圾桶中</li>
    <li>用清水漱口保持口腔清潔</li>
  </ul>

  <h3>使用注意事項</h3>
  <ul>
    <li>不要咀嚼或吞嚥尼古丁袋</li>
    <li>使用期間避免飲用酸性飲料</li>
    <li>如有不適應立即停止使用</li>
    <li>保持良好的口腔衛生習慣</li>
  </ul>

  <h2>科學原理：尼古丁如何被吸收</h2>

  <h3>口腔黏膜吸收機制</h3>
  <p>尼古丁袋的作用原理基於口腔黏膜的吸收能力。當尼古丁袋與口腔接觸時，其中的尼古丁會逐漸溶解並通過口腔黏膜進入血液循環系統。</p>
  <p><strong>吸收過程特點：</strong></p>
  <ul>
    <li><strong>緩慢釋放</strong>：相較於吸菸的快速吸收，口腔吸收提供更平穩的尼古丁釋放</li>
    <li><strong>持續時間長</strong>：效果可維持30-60分鐘，比吸菸的短暫效果更持久</li>
    <li><strong>避免肺部暴露</strong>：不需要吸入，減少對呼吸系統的直接影響</li>
  </ul>

  <h3>與其他尼古丁產品的差異</h3>

  <p><strong>相較於香菸：</strong></p>
  <ul>
    <li>無燃燒過程，避免產生焦油和一氧化碳</li>
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
    <li>使用方式更加謹慎</li>
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
  <dl>
    <dt><strong>Q: 尼古丁袋會成癮嗎？</strong></dt>
    <dd>A: 尼古丁本身具有成癮性，無論通過何種方式攝取。尼古丁袋主要適合已經使用尼古丁產品的人群作為替代選擇。</dd>

    <dt><strong>Q: 可以在飛機上使用嗎？</strong></dt>
    <dd>A: 由於不產生煙霧或蒸氣，大多數航空公司允許使用，但建議事先確認具體政策。</dd>

    <dt><strong>Q: 會影響牙齒嗎？</strong></dt>
    <dd>A: 相較於傳統菸草產品，尼古丁袋對牙齒染色的影響較小，但仍建議保持良好口腔衛生。</dd>

    <dt><strong>Q: 一天可以使用多少個？</strong></dt>
    <dd>A: 建議遵循產品包裝上的使用指南，避免過度使用。一般建議每日使用量不超過包裝建議。</dd>
  </dl>

  <h2>結語</h2>
  <p>尼古丁袋作為一種創新的尼古丁傳遞方式，為尋求替代方案的消費者提供了新的選擇。了解其成分、正確使用方法和科學原理，有助於消費者做出明智的決定。</p>
  <p>如果您正在考慮嘗試尼古丁袋，建議選擇來自可靠供應商的知名品牌產品，確保產品品質和安全性。</p>
  <p><strong>想了解如何選擇優質的尼古丁袋供應商？</strong> <a href="/推薦品牌">查看我們的推薦品牌指南 →</a></p>

  <hr>

  <p><em>本文內容僅供教育參考用途。使用任何尼古丁產品前，請諮詢醫療專業人員的建議。</em></p>
`;

const contentForPostIQOSAlternatives = `
      <h2>台灣IQOS市場現況</h2>
      <p>自2017年起，IQOS在全球多個市場取得合法銷售資格，但在台灣，加熱菸產品的法規環境仍處於灰色地帶。根據最新的菸害防制法修正案，加熱菸產品需經過衛福部審查核准才能合法進口銷售。然而，截至目前為止，尚未有任何加熱菸產品獲得正式核准。</p>
      <p>這導致許多台灣消費者面臨以下困境：</p>
      <ul>
        <li>無法合法購買IQOS設備及其專用菸彈</li>
        <li>從國外帶回的設備可能面臨海關查扣風險</li>
        <li>黑市產品品質無保障，價格偏高</li>
        <li>維修和配件取得困難</li>
      </ul>
      <h2>替代方案比較</h2>
      <p>面對這些挑戰，越來越多台灣消費者開始尋找更便利、合法的替代選擇。以下是幾種主要替代方案的比較：</p>
      <h3>1. 尼古丁袋（Nicotine Pouches）</h3>
      <p><strong>優點：</strong></p>
      <ul>
        <li>完全無煙、無味，使用場合不受限制</li>
        <li>不需要任何設備，隨開即用</li>
        <li>無需充電或維護</li>
        <li>歐美原廠品質保證</li>
        <li>多種口味和強度選擇</li>
      </ul>
      <p><strong>缺點：</strong></p>
      <ul>
        <li>使用體驗與吸菸有較大差異</li>
        <li>初期可能有輕微口腔刺激感</li>
      </ul>
      <h3>2. 電子菸（E-cigarettes）</h3>
      <p><strong>優點：</strong></p>
      <ul>
        <li>使用體驗較接近傳統吸菸</li>
        <li>多種口味選擇</li>
      </ul>
      <p><strong>缺點：</strong></p>
      <ul>
        <li>在台灣同樣面臨法規限制</li>
        <li>需要定期充電和維護</li>
        <li>產生可見蒸氣，使用場合受限</li>
        <li>市場產品良莠不齊，品質參差不齊</li>
      </ul>
      <h2>為何尼古丁袋成為首選替代品？</h2>
      <p>根據我們的調查和用戶反饋，尼古丁袋正逐漸成為台灣消費者的首選替代品，主要原因包括：</p>
      <ul>
        <li><strong>便利性：</strong>無需攜帶額外設備，隨時隨地可使用</li>
        <li><strong>隱密性：</strong>無煙無味，不會影響他人，適合各種社交和工作場合</li>
        <li><strong>品質保證：</strong>主要來自歐美正規廠商，成分透明，品質有保障</li>
        <li><strong>多樣選擇：</strong>從輕度到高度，多種強度和口味可選</li>
      </ul>
      <h2>如何選擇適合的尼古丁袋產品</h2>
      <p>選擇尼古丁袋產品時，建議考慮以下因素：</p>
      <ul>
        <li><strong>強度：</strong>初次使用者建議從低強度（3-6mg）開始，逐漸適應</li>
        <li><strong>口味：</strong>根據個人喜好選擇，常見有薄荷、水果、咖啡等口味</li>
        <li><strong>品牌信譽：</strong>選擇知名品牌如ZYN、VELO、Nordic Spirit等</li>
        <li><strong>包裝尺寸：</strong>標準包裝通常含20個袋裝，也有小包裝可供嘗試</li>
      </ul>
      <h2>結論</h2>
      <p>在台灣現行法規環境下，尼古丁袋提供了一個便利、可靠的替代選擇，特別適合那些尋找IQOS替代品的消費者。雖然使用體驗與加熱菸有所不同，但其便利性和可靠性優勢明顯。隨著台灣對減害產品認知的提升，我們預期尼古丁袋將在未來幾年內獲得更廣泛的接受。</p>
    `;

const contentForPostToxinComparison = `
      <h2>尼古丁產品毒素含量研究概述</h2>
      <p>近年來，隨著尼古丁替代品市場的擴大，科學界對不同尼古丁傳遞系統的有害物質含量進行了廣泛研究。本文將總結最新研究發現，比較傳統香菸、電子菸、加熱菸和尼古丁袋等產品中的有害物質含量。</p>
      <h2>研究方法</h2>
      <p>本文分析了2018-2024年間發表的超過30項獨立研究，這些研究使用標準化測試方法測量不同尼古丁產品中的有害和潛在有害成分(HPHCs)。研究主要關注以下幾類有害物質：</p>
      <ul>
        <li>焦油(Tar)</li>
        <li>一氧化碳(Carbon Monoxide)</li>
        <li>揮發性有機化合物(VOCs)</li>
        <li>多環芳香烴(PAHs)</li>
        <li>煙草特有亞硝胺(TSNAs)</li>
        <li>重金屬</li>
      </ul>
      <h2>研究結果</h2>
      <h3>1. 傳統香菸</h3>
      <p>傳統香菸在燃燒過程中產生超過7,000種化學物質，其中至少69種被確認為致癌物質。研究顯示，香菸煙霧中含有高濃度的：</p>
      <ul>
        <li>焦油：每支香菸約8-20mg</li>
        <li>一氧化碳：每支香菸約10-23mg</li>
        <li>甲醛：每支香菸約20-100μg</li>
        <li>苯：每支香菸約20-70μg</li>
        <li>亞硝胺：每支香菸約100-500ng</li>
      </ul>
      <h3>2. 電子菸</h3>
      <p>電子菸通過加熱液體產生蒸氣，不涉及燃燒過程。研究顯示，與傳統香菸相比，電子菸蒸氣中的有害物質含量顯著降低：</p>
      <ul>
        <li>焦油：基本不含</li>
        <li>一氧化碳：基本不含</li>
        <li>甲醛：減少約95-99%</li>
        <li>苯：減少約97-99%</li>
        <li>亞硝胺：減少約97-99%</li>
      </ul>
      <p>然而，電子菸蒸氣中可能含有其他特有的潛在有害物質，如某些調味劑和丙二醇分解產物。</p>
      <h3>3. 加熱菸(如IQOS)</h3>
      <p>加熱菸通過加熱而非燃燒煙草產生氣霧。研究顯示，與傳統香菸相比：</p>
      <ul>
        <li>焦油：減少約90-95%</li>
        <li>一氧化碳：減少約98%</li>
        <li>甲醛：減少約80-90%</li>
        <li>苯：減少約97%</li>
        <li>亞硝胺：減少約80-90%</li>
      </ul>
      <h3>4. 尼古丁袋</h3>
      <p>尼古丁袋不含煙草，也不涉及任何燃燒或加熱過程。研究顯示：</p>
      <ul>
        <li>焦油：不含</li>
        <li>一氧化碳：不含</li>
        <li>甲醛：不含或極微量</li>
        <li>苯：不含</li>
        <li>亞硝胺：極微量或不可檢測</li>
      </ul>
      <p>尼古丁袋中可能存在的潛在有害物質主要來自植物纖維基質和調味劑，但含量極低，遠低於其他尼古丁產品。</p>
      <h2>毒素暴露對健康的影響</h2>
      <p>長期研究顯示，與傳統吸菸相關的健康風險主要來自燃燒產生的有害物質，而非尼古丁本身。因此，不同尼古丁產品的健康風險主要取決於其有害物質暴露水平。</p>
      <p>根據英國公共衛生署(PHE)和美國國家科學院(NAS)的評估，尼古丁替代品的健康風險排序大致為：</p>
      <ol>
        <li>傳統香菸（風險最高）</li>
        <li>加熱菸</li>
        <li>電子菸</li>
        <li>尼古丁袋（風險最低）</li>
      </ol>
      <h2>結論與建議</h2>
      <p>科學研究一致表明，尼古丁袋在所有尼古丁產品中有害物質含量最低，因此理論上健康風險也最低。然而，重要的是要強調：</p>
      <ul>
        <li>最安全的選擇仍然是完全不使用任何尼古丁產品</li>
        <li>尼古丁本身仍具有成癮性，可能對特定人群（如孕婦、青少年）產生不良影響</li>
        <li>尼古丁替代品主要適合已經使用尼古丁的成年人作為減害選擇</li>
      </ul>
      <p>對於無法或不願完全戒除尼古丁的使用者，選擇有害物質含量較低的替代品可能是一種減害策略。然而，任何尼古丁產品的使用都應在了解風險的情況下謹慎選擇。</p>
    `;

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
        <li>尼古丁袋合法銷售，受到消費品安全法規監管</li>
      </ul>
      <p>結果：英國成年人吸菸率從2011年的20%降至2023年的12.9%，創歷史新低。</p>
      <h3>2. 瑞典</h3>
      <p>瑞典長期以來採用減害策略，特別是通過推廣無煙煙草產品(Snus)。</p>
      <ul>
        <li>Snus在瑞典合法銷售數十年，尼古丁袋近年也獲得合法地位</li>
        <li>對無煙尼古丁產品採取科學監管而非禁止策略</li>
        <li>強調消費者知情選擇權</li>
      </ul>
      <p>結果：瑞典男性吸菸率僅為5.6%，是歐盟最低，同時也是歐盟肺癌和口腔癌發病率最低的國家之一。</p>
      <h3>3. 紐西蘭</h3>
      <p>紐西蘭近年採取創新的減害策略，目標是到2025年實現"無煙紐西蘭"。</p>
      <ul>
        <li>電子菸和尼古丁袋合法銷售，但有年齡限制</li>
        <li>允許有限度的廣告，以吸引吸菸者轉向風險較低的替代品</li>
        <li>同時實施嚴格的傳統香菸控制措施</li>
      </ul>
      <p>結果：吸菸率持續下降，2023年降至8%，接近其2025年目標。</p>
      <h2>禁止導向型國家</h2>
      <h3>1. 澳大利亞</h3>
      <p>澳大利亞對尼古丁替代品採取嚴格的禁止策略。</p>
      <ul>
        <li>含尼古丁電子菸需處方才能合法獲取</li>
        <li>尼古丁袋基本被禁止銷售</li>
        <li>強調"預防原則"，認為新型尼古丁產品缺乏長期安全數據</li>
      </ul>
      <p>結果：澳大利亞吸菸率下降速度近年放緩，非法市場和網購灰色地帶擴大。</p>
      <h3>2. 印度</h3>
      <p>印度對大多數尼古丁替代品採取全面禁止策略。</p>
      <ul>
        <li>2019年禁止電子菸和加熱菸</li>
        <li>尼古丁袋同樣被禁止</li>
        <li>強調防止青少年使用和新型成癮問題</li>
      </ul>
      <p>結果：傳統煙草使用率仍然很高，非法市場繁榮。</p>
      <h2>混合策略國家</h2>
      <h3>1. 美國</h3>
      <p>美國採取基於科學證據的個案審查策略。</p>
      <ul>
        <li>FDA通過PMTA(上市前煙草申請)和MRTP(改良風險煙草產品)程序評估產品</li>
        <li>已批准部分尼古丁袋品牌(如ZYN)為"適合保護公共健康"的產品</li>
        <li>同時加強對青少年使用的監管和預防</li>
      </ul>
      <p>結果：成人吸菸率持續下降，但青少年使用新型尼古丁產品的情況引發關注。</p>
      <h3>2. 日本</h3>
      <p>日本對不同類型的尼古丁替代品採取差異化策略。</p>
      <ul>
        <li>加熱菸合法銷售，市場滲透率全球最高</li>
        <li>含尼古丁電子菸被禁止</li>
        <li>尼古丁袋處於監管灰色地帶</li>
      </ul>
      <p>結果：傳統香菸銷量大幅下降，加熱菸市場迅速擴大。</p>
      <h2>台灣現況</h2>
      <p>台灣目前對尼古丁替代品採取相對嚴格的監管策略。</p>
      <ul>
        <li>電子菸和加熱菸需經審查核准才能合法銷售，目前尚無產品獲批</li>
        <li>尼古丁袋處於監管灰色地帶</li>
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
    `;

const contentForQualityGuide = `
      <h2>如何辨別高品質尼古丁替代品</h2>
      <p>隨著尼古丁替代品市場的快速發展，消費者面臨越來越多的產品選擇。然而，市場上產品品質參差不齊，選擇優質產品對於減少健康風險至關重要。本指南將幫助您識別高品質尼古丁替代品的關鍵指標，以及如何避免劣質或假冒產品。</p>
      <h2>尼古丁袋品質評估標準</h2>
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
      <p>以下是市場上主要尼古丁袋品牌的品質概況：</p>
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
    `;
// ----- End of Full Content Definitions -----

export const blogPostsData: BlogPost[] = [
  {
    id: 1,
    slug: "what-is-nicotine-pouch",
    title: "尼古丁袋完整介紹：成分、使用方法與科學原理",
    publishDate: "2024-10-01",
    readingTime: 6,
    author: "編輯團隊",
    content: contentForArticle1,
    excerpt: "什麼是尼古丁袋？與傳統菸草產品有何不同？深入了解這種源自北歐的創新產品，包括成分分析、正確使用方法，以及背後的科學原理。適合初次接觸者的完整入門指南。",
  },
/*
  {
    id: 2,
    slug: "nicotine-products-risk",
    title: "科學研究：不同尼古丁產品的健康風險比較",
    publishDate: "2024-11-15",
    readingTime: 8, // Updated from 8 to match [slug]/page.tsx's original data
    author: "醫學研究團隊",
    content: contentForPostToxinComparison,
    excerpt: "基於國際同行評議研究，客觀比較香菸、電子菸、加熱菸與尼古丁袋的健康風險。了解各產品的有害物質含量、FDA評估結果，以及目前科學界的共識與爭議。",
  },
*/
  {
    id: 3,
    slug: "nicotine-in-the-workplace",
    title: "工作場所使用指南：謹慎、專業的尼古丁消費方式",
    publishDate: "2024-10-02",
    readingTime: 5,
    author: "編輯團隊",
    content: "<p>詳細內容即將推出。本篇將探討如何在職場環境中（例如辦公室、會議期間或通勤路上）得體且專業地使用尼古丁產品，並提供符合台灣職場文化的實用建議。</p>",
    excerpt: "如何在辦公室、會議中、或通勤時謹慎使用尼古丁產品？針對台灣工作文化特色，提供實用建議與注意事項，讓您在職場環境中維持專業形象。",
  },
  /*
  {
    id: 4,
    slug: "modern-nicotine-products-comparison",
    title: "加熱菸 vs 電子菸 vs 尼古丁袋：價格與便利性完整比較",
    publishDate: "2024-10-03",
    readingTime: 7,
    author: "編輯團隊",
    content: "<p>詳細內容即將推出。本文將對加熱菸、電子菸及尼古丁袋這三種主要的尼古丁替代品進行全面比較，涵蓋價格成本、使用便利性、維護需求及場所限制等方面。</p>",
    excerpt: "三大尼古丁替代方案的全面比較分析。從價格成本、使用便利性、維護需求到場所限制，幫助您根據個人需求與生活方式，選擇最適合的產品類型。",
  },
  {
    id: 5,
    slug: "taiwan-htp-analysis",
    title: "加熱菸購買指南：IQOS台灣現況與替代方案評析",
    publishDate: "2024-12-01",
    readingTime: 6, // Updated from 6 to match [slug]/page.tsx's original data
    author: "健康科學團隊",
    content: contentForPostIQOSAlternatives,
    excerpt: "IQOS在台灣面臨哪些取得困難？分析加熱菸的法規現況、進口挑戰，以及為何越來越多消費者轉向其他替代方案。客觀評估各種選項的優缺點。",
  },
  {
    id: 6,
    slug: "nicotine-pouch-brands",
    title: "國際品牌介紹：ZYN、VELO等知名尼古丁袋品牌分析",
    publishDate: "2024-10-04",
    readingTime: 6,
    author: "編輯團隊",
    content: "<p>詳細內容即將推出。本篇將深入介紹全球主要的尼古丁袋品牌，如ZYN、VELO等，分析其產品特點、製造標準、認證情況及在台灣市場的可獲得性。</p>",
    excerpt: "深入了解全球主要尼古丁袋品牌的特色與差異。從ZYN的市場地位到VELO的產品線，分析各品牌的製造標準、認證狀況，以及在台灣的可取得性。",
  },
  */
  {
    id: 7,
    slug: "nicotine-pouch-retailers",
    title: "品質辨識指南：如何選擇可靠的尼古丁袋供應商",
    publishDate: "2024-11-05",
    readingTime: 5, // Updated from 5 to match [slug]/page.tsx's original data
    author: "消費者保護團隊",
    content: contentForQualityGuide,
    excerpt: "市場上產品品質參差不齊，如何避開劣質產品？學會辨識正品特徵、驗證供應商可靠性的實用技巧，確保您購買到符合安全標準的產品。",
  },
  /*
  {
    id: 8,
    slug: "nicotine-pouch-legality-in-taiwan",
    title: "台灣法規現況：尼古丁袋的合法性與使用須知",
    publishDate: "2024-10-05",
    readingTime: 4,
    author: "編輯團隊",
    content: "<p>詳細內容即將推出。本文將闡釋尼古丁袋在台灣的現行法律地位，包括相關法規、使用限制，並提供在法律框架內安全使用的建議及最新政策動態。</p>",
    excerpt: "尼古丁袋在台灣的法律地位如何？了解相關法規、使用限制，以及如何在法律框架內安全使用。包含最新政策動態與合規建議。",
  }
  */
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPostsData.find(post => post.slug === slug);
};

export const getAllPosts = (): BlogPost[] => {
  return blogPostsData;
};
// --- End of Blog Data and Helpers ---


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // params.slug is the string slug from the URL
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllPosts()
    .filter((relatedPost) => relatedPost.slug !== params.slug) // Filter by slug, not ID
    .slice(0, 2); // Get 2 related posts

  return (
    <main className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Link href="/learn" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回文章列表
            </Link>
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
                      {/* Link uses the slug now */}
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

// Generate static paths using slugs
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug, // Use the string slug for static path generation
  }));
}
