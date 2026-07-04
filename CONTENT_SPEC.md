# NicoFacts — Content Spec

**Goal:** Education platform for Taiwanese consumers about nicotine pouches（口含菸／尼古丁袋）— provide clear, evidence-based, regulatory-grounded information to help consumers in Taiwan make informed decisions about nicotine-pouch products.
**Tone:** clinical, professional, authoritative. Traditional Chinese (zh-TW).
**Brand:** Site name is **NicoFacts**（口含菸科普平台）. Domain nicofacts.com.
**Editing rule:** This file dictates all page copy. Code must match this spec; edit here first, then sync components. Blog posts live in content/blog/*.md in their entirety — frontmatter (title, publishDate, readingTime, author, hero image + alt, excerpt) plus body; this file only indexes them.

---

## Outbound links

| Destination | Purpose | URL |
|---|---|---|
| CNN (media article) | Media coverage — FDA modified-risk authorization for ZYN | https://edition.cnn.com/2026/07/01/health/zyn-cigarettes-fda |
| 經濟日報 (media article) | Media coverage — 無煙台灣宣言 | https://money.udn.com/money/story/5635/8774968 |
| 世界新聞網 (media article) | Media coverage — 職場口含菸提神 | https://www.worldjournal.com/wj/story/121472/7824800 |
| 2firsts (media article) | Media coverage — 世界無菸日2025 | https://www.2firsts.com/news/world-no-tobacco-day-2025-embracing-tobacco-harm-reduction-to-save-millions |
| 中央社 (media article) | Media coverage — 加熱菸審查 | https://www.cna.com.tw/news/ahel/202503070183.aspx |
| 中國時報 (media article) | Media coverage — 電子菸稽查統計 | https://www.chinatimes.com/cn/realtimenews/20250526002653-260405 |
| PMC (NIH) study | FAQ citation — nicotine cognitive benefits | https://pmc.ncbi.nlm.nih.gov/articles/PMC1201375/ |
| ScienceDirect study | FAQ citation — nicotine and Tourette's | https://www.sciencedirect.com/science/article/abs/pii/S0163725896001994 |
| Optoceutics article | FAQ citation — nicotine and Alzheimer's | https://optoceutics.com/nicotine-and-alzheimers-connection-risks-benefits-impact/?srsltid=AfmBOopqouLKCUFtQIiEU4hpjtIpij-7h4w9mdQpBgLSHZw8LzC48VEH |
| "You Don't Know Nicotine" documentary | Deep-dive video link (hero video section) | https://ihavenotv.com/you-dont-know-nicotine |
| FDA press announcement | Research page — FDA ZYN PMTA authorization | https://www.fda.gov/news-events/press-announcements/fda-authorizes-marketing-20-zyn-nicotine-pouch-products-after-extensive-scientific-review |
| Journal of Trading Standards (UK) | Research page — UK trading standards test report | https://www.journaloftradingstandards.co.uk/health-safety/nicotine-pouches-suck-it-and-see/ |
| 衛生福利部 (Taiwan MOHW) | Research page — Taiwan drug/food safety weekly | https://www.mohw.gov.tw/cp-3162-27716-1.html |
| Healthy Nic (vendor) | Vendor listing — Taiwan authorized retailer | https://healthynic.com/ |
| ZYN brand site | Brand listing | https://www.zyn.com/gb/en/home.html/ |
| LOOP brand site | Brand listing | https://loopnicotinepouches.com/ |
| VELO brand site | Brand listing | https://www.velo.com/ |
| Helwit brand site | Brand listing | https://helwit.com |
| KILLA brand site | Brand listing | https://killapods.eu/ |
| on! brand site | Brand listing | https://www.onnicotine.com/ |
| Chart.js CDN | Market-growth page chart library | https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js |
| Google Tag Manager | Analytics script | https://www.googletagmanager.com/gtag/js?id=G-NJMMFLSV38 |

---

## Site Map (all routes)

```
/
/learn
/research
/vendors
/market-growth
/contact
/disclaimer
/legal-disclaimer
/privacy-policy
/blog
/blog/what-is-nicotine-pouch
/blog/workplace-nicotine-pouch-guide
/blog/nicotine-pouch-where-to-buy-taiwan
```

---

## Global chrome

### Header

**Logo text:** `NicoFacts` **(rebrand)** — current code renders `口含菸（尼古丁袋）科普平台` as the logo/brand text linking to `/`.

**Desktop nav (in order):**
| Label | href |
|---|---|
| 了解更多 | /learn |
| 研究方法 | /research |
| 推薦品牌 | /vendors |
| 聯繫我們 | /contact |

**Mobile menu button aria-label:** `開啟選單` (opens) / `關閉選單` (close button inside panel)
**Mobile menu panel header text:** `選單`
**Mobile menu items:** same four links/labels as desktop nav, in the same order.
**Mobile menu footer text:** `NicoFacts｜口含菸（尼古丁袋）科普平台` **(rebrand)** — this line is the site name used as branding chrome, so it follows the rebrand rule; current code renders `台灣口含菸（尼古丁袋）科普平台`.

### Footer

**Footer link row (in order):**
| Label | href |
|---|---|
| 法律聲明 | /legal-disclaimer |
| 隱私政策 | /privacy-policy |
| 免責聲明 | /disclaimer |

**© line:** `© {year} NicoFacts｜口含菸（尼古丁袋）科普平台. 版權所有.` **(rebrand)** — `{year}` is a literal token representing the dynamic current-year expression in code, currently rendered as `{new Date().getFullYear()}` (see `app/ClientLayout.tsx` line 304: `© {new Date().getFullYear()} 台灣口含菸（尼古丁袋）科普平台. 版權所有.`).

---

## Landing (/) — section by section

Source: `components/sections/home/home-client.tsx`

### Hero

- **H1:** `純淨尼古丁，明智選擇`
- **Subheadline:** `告別傳統菸和電子菸的使用困擾，選擇透明成分的口含菸（尼古丁袋）替代方案`
- **Primary CTA:** `查看推薦品牌` → `/vendors`
- **Secondary CTA:** `了解更多` → `/learn`
- **Hero image alt text:** `手持開啟的口含菸罐，展示白色尼古丁袋 - 無煙、透明成分的現代尼古丁替代方案` (src `/hero-pouches.jpg`; Unsplash photo by Swenico, free license)

### Problem/Solution Comparison

- **Section H2:** `了解您的選擇`
- **Card 1 title:** `常見困擾`
  - `新興菸品進口困難，傳統香菸燃燒產生焦油危害肺功能`
  - `市場產品成分不明，品質參差影響肺部健康`
  - `設備維護充電煩惱，便利性受限`
  - ` 使用場所受限影響工作與生活，二手煙霧影響他人` (note: source string has a leading space before "使用")
- **Card 2 title:** `純淨新選擇`
  - `口腔吸收避免肺部接觸，隨時隨地安全使用`
  - `歐美知名品牌保障如ZYN、VELO等，藥用級成分完整透明標示`
  - `零煙霧零異味，適合專業場合使用`
  - `持續30-60分鐘平穩體驗，適應各種生活與工作情景，享受持久尼古丁釋放`

### Three-Pillar Benefits Grid

- **Section H2:** `核心優勢`
- **Pillar 1 — 可靠性:**
  - `無需充電、加油或維護`
  - `每次使用體驗一致`
  - `歐美原廠製造保證`
- **Pillar 2 — 便利性:**
  - `適合長時間會議、工廠作業、通勤使用`
  - `無需抽菸休息時間`
  - `配合薹灣高效率工作節奏` (note: source has typo "薹灣" instead of "台灣" — transcribed verbatim as it appears in code)
- **Pillar 3 — 純淨度:**
  - `獲美國監管機構認可`
  - `避免燃燒產生的焦油與一氧化碳`
  - `歐美原廠直送，保證產品真實性`

### Media Coverage (carousel)

- **Section H2:** `媒體關注與專家觀點`
- **Section subtext:** `了解國際與台灣媒體如何報導尼古丁替代方案`
- **Card interaction:** the entire card is a link → `article.link`, opens in new tab; an external-link icon sits beside the source name (no separate CTA text)

`mediaArticles` array (id, source, articleTitle, excerpt, link):

1. **CNN** — `美國FDA批准ZYN作為香菸減害替代產品行銷`
   excerpt: `美國食品藥物管理局正式授權20款ZYN口含菸產品以減害名義行銷，認可完全改用ZYN可顯著降低多種重大疾病風險，樹立減害監管里程碑...`
   link: https://edition.cnn.com/2026/07/01/health/zyn-cigarettes-fda

2. **經濟日報** — `台灣菸草減害研究院發布《無煙台灣宣言》`
   excerpt: `研究院強調菸草減害是基本人權，呼籲政府重啟科學對話，停止對電子菸、加熱菸與口含菸等減害菸品的一體適用式打壓，以實現真正的無煙台灣...`
   link: https://money.udn.com/money/story/5635/8774968

3. **世界新聞網** — `職場菁英新歡：口含菸提神又增進效率`
   excerpt: `彭博社報導指出，口含菸在財經界與高科技業大為風行，投資人使用後可專注完成工作，矽谷科技界使用情況越來越普遍，成為職場提神聖品...`
   link: https://www.worldjournal.com/wj/story/121472/7824800

4. **2firsts** — `世界無菸日2025：前WHO執行主任呼籲擁抱菸草減害`
   excerpt: `全球知名菸害防制專家Derek Yach博士強調，科學證據顯示電子菸、口含菸等產品危害顯著低於傳統香菸，呼籲國際社會支持減害策略拯救生命...`
   link: https://www.2firsts.com/news/world-no-tobacco-day-2025-embracing-tobacco-harm-reduction-to-save-millions

5. **中央社** — `菸防法修法近2年，國健署首件加熱菸審查結果即將出爐`
   excerpt: `衛福部國健署長吳昭軍表示，台灣加熱菸健康風險評估審查正在進行中，首家業者審查結果預計4月公布，顯示政府以科學實證保護民眾健康...`
   link: https://www.cna.com.tw/news/ahel/202503070183.aspx

6. **中國時報** — `電子菸加熱菸稽查統計：全臺2年開罰5億元`
   excerpt: `WHO統計全球新興菸品社群媒體瀏覽超過34億次，國健署加強稽查違法產品，顯示政府重視菸害防制與產品品質管控...`
   link: https://www.chinatimes.com/cn/realtimenews/20250526002653-260405

### Video Section

- **Section H2:** `重新認識尼古丁：科學與事實`
- **Body:** `尼古丁長期被誤解和污名化，但科學研究顯示純尼古丁本身可能對認知功能、注意力和工作記憶帶來益處，甚至在治療妥瑞症和早期阿茲海默症方面展現潛力。每個人對尼古丁的反應不同，關鍵在於選擇最潔淨的輸送方式。口含菸作為無燃燒、無菸草、無二手菸害的輸送方法，代表著當今最安全的尼古丁使用選擇。`
- **Video `aria-label`:** `JFK Jr. 談論尼古丁的益處`
- **Video poster:** `/video/jfk_jr_nicotine_poster.jpg`
- **Video sources:** `/video/jfk_jr_nicotine_endorsement.webm`, `/video/jfk_jr_nicotine_480p.mp4` (mobile), `/video/jfk_jr_nicotine_endorsement.mp4`
- **Fallback text (no video support):** `您的瀏覽器不支援影片播放。請升級您的瀏覽器或` + link text `直接下載影片` (downloads `/video/jfk_jr_nicotine_endorsement.mp4`)
- **Below-video caption:** `深入了解`
- **Below-video link text:** `觀看完整紀錄片「你不了解的尼古丁」` → https://ihavenotv.com/you-dont-know-nicotine (new tab)

### FAQ Section

- **Section H2:** `常見問題與詳細解答`

1. **Q:** `口含菸到底是什麼？`
   **A:** `口含菸（又稱尼古丁袋、nicotine pouch）是一種無煙尼古丁產品，通常放置在上唇與牙齦之間。它不含煙草，而是由尼古丁、調味劑和植物纖維等成分組成，提供無煙、無味的尼古丁體驗。`
   Plus: `想深入了解？請閱讀我們的 ` + link to blog post title for slug `what-is-nicotine-pouch` (dynamic title via `getBlogTitle`, currently resolves to `口含菸完整介紹 {{year}}：成分分析、使用方法與科學原理指南`) → `/blog/what-is-nicotine-pouch`

2. **Q:** `可以在工作場使用嗎？`
   **A (paragraph 1):** `口含菸不產生煙霧或蒸氣，使用時無味無煙，因此可以在大多數禁止吸菸的場所使用，特別適合台灣的工作環境與生活型態。`
   **Bold lead-in:** `具體使用場景：`
   **Bullet list:**
   - `長時間會議或研習 - 無需中途離席吸菸休息`
   - `工廠作業環境 - 符合安全規範，不影響生產線工作`
   - `辦公大樓 - 無需搭電梯到戶外吸菸區，節省時間`
   - `公共交通通勤 - 捷運、高鐵、公車上均可謹慎使用`
   - `餐廳用餐 - 不影響用餐體驗或他人感受`
   - `商務場合 - 客戶會議、商務談判時保持專業形象`
   **Paragraph:** `這讓使用者可以更靈活地安排工作與生活節奏，無需因尼古丁需求而中斷重要事務或影響專業表現。`
   **Paragraph:** `由於產品完全無味無煙，使用時幾乎無法察覺，因此適合各種正式或非正式場合。`
   Plus: `了解更多專業場合使用建議，請參考 ` + link to blog post title for slug `workplace-nicotine-pouch-guide` (resolves to `職場口含菸使用攻略：辦公室、會議室專業隱形使用技巧`) → `/blog/workplace-nicotine-pouch-guide`

3. **Q:** `與電子菸有何差別？`
   **A:** `與電子菸不同，口含菸不需要任何設備或充電。它們不產生蒸氣或煙霧，使用時完全無味，且不需要吸入任何物質。`

4. **Q:** `口含菸安全嗎？`
   **A (paragraph 1):** `相較於傳統吸菸，口含菸避免了燃燒產生的焦油、一氧化碳等數千種有害化學物質，大幅降低與吸菸相關的健康風險。美國FDA已授權部分品牌為「適合公共健康」的產品，認定其相較於香菸具有顯著較低的健康風險。`
   **A (paragraph 2):** `然而，尼古丁本身仍具有較低成癮性，且可能對心血管系統產生影響。口含菸主要適合已經使用尼古丁產品的成年人作為減害替代選擇，不建議非尼古丁使用者開始使用。`
   **A (paragraph 3):** `與電子菸不同，口含菸透過口腔吸收，完全避免肺部接觸任何物質。任何尼古丁產品都應在了解風險的情況下謹慎使用，建議諮詢醫療專業人員的建議。`

5. **Q:** `尼古丁真的像大家說的那麼有害嗎？`
   **A (paragraph 1):** `這是一個常見的誤解。純尼古丁本身與香菸的危害完全不同。科學研究顯示，尼古丁可能對認知功能、注意力、執行功能和工作記憶帶來益處 (` + link text `source` (→ https://pmc.ncbi.nlm.nih.gov/articles/PMC1201375/) + `)，並在治療妥瑞症 (` + link text `source` (→ https://www.sciencedirect.com/science/article/abs/pii/S0163725896001994) + `)、早期阿茲海默症 (` + link text `source` (→ https://optoceutics.com/nicotine-and-alzheimers-connection-risks-benefits-impact/?srsltid=AfmBOopqouLKCUFtQIiEU4hpjtIpij-7h4w9mdQpBgLSHZw8LzC48VEH) + `) 等神經精神疾病方面展現治療潛力。`
   **A (paragraph 2):** `每個人對尼古丁的代謝和反應存在基因差異，使用目的也不同。真正的風險來自輸送方式：香菸的燃燒產生焦油和數千種致癌物質，而口含菸作為無燃燒、無菸草、無二手菸害的方式，消除了這些主要風險源。西方國家的減害政策正是基於這種科學認知，將口含菸定位為風險階梯中最低的選項。`

6. **Q:** `會影響牙齦健康嗎？`
   **A (paragraph 1):** `部分使用者初期可能會感到輕微的牙齦刺激或刺痛感，這是正常現象，通常在使用一至兩週後會逐漸適應並減輕。這種初期反應主要是口腔組織適應新產品的過程。`
   **A (paragraph 2):** `某些口味可能會產生刺激性唾液，使用時應避免吞嚥唾液，以免造成胃部不適、噁心或消化問題。`
   **A (paragraph 3):** `為減少不適感，建議從較低強度產品開始，正確放置於牙齦與嘴唇之間，並定期更換放置位置。初次使用時可縮短使用時間（如15-20分鐘），待適應後再延長至建議時間。`
   **A (paragraph 4):** `相較於傳統煙草產品，口含菸不含菸葉，避免了與口腔癌、牙齦疾病、牙齒染色等相關的風險。建議保持良好的口腔衛生習慣，定期進行口腔檢查。如有持續不適或異常症狀，應停止使用並諮詢牙醫或醫療專業人員。`

7. **Q:** `一錠可以持續多久呢？`
   **A:** `一般來說，口含菸的效果可持續30-60分鐘，視產品強度和個人使用習慣而定。`

8. **Q:** `如何辨別產品是否正品？`
   **A:** `購買時應選擇有明確品牌標識、批號和成分標示的產品，並從可靠的供應商處購買。正品通常有防偽措施和完整的產品信息。`
   Plus: `詳細的辨識技巧請參考我們的 ` + link to blog post title for slug `nicotine-pouch-where-to-buy-taiwan` (resolves to `口含菸哪裡買？{{year}}台灣購買指南與推薦商家評價`) → `/blog/nicotine-pouch-where-to-buy-taiwan`

9. **Q:** `費用會很昂貴嗎？`
   **A (paragraph 1):** `口含菸的價格因品牌和強度而異，但考慮總成本效益具有優勢：無需購買設備、充電器或耗材，避免設備故障維修費用。相較於進口IQOS的複雜成本或黑市電子菸的品質風險，正品口含菸提供可預期的使用成本。`
   **A (paragraph 2):** `此外，每錠可使用30-60分鐘，使用頻率通常低於電子菸的短時間吸食，長期而言更具成本效益。許多使用者認為便利性、可靠性和品質保證使投資物有所值。`

### Bottom CTA Section

- **H2:** `尋找符合品質標準的供應商？`
- **Body:** `瀏覽歐美原廠品牌的認證經銷商，獲得品質保證的選擇`
- **CTA button:** `查看推薦品牌` → `/vendors`

### Footer disclaimer strip

- `本網站僅提供教育資訊供參考。使用任何尼古丁產品前請評估個人需求並謹慎選擇。`

---

## Learn (/learn)

Source: `app/learn/page.tsx`

- **H1:** `了解尼古丁替代方案`
- **Subheadline:** `基於實證研究，協助您做出明智決定`
- **Blog grid:** for each published post — title, excerpt, `{readingTime}分鐘閱讀` (with clock icon). The entire card is a link → `/blog/{slug}` (chevron affordance at footer right; no separate CTA text)

---

## Research (/research)

Source: `app/research/page.tsx`

- **H1:** `我們的研究方法`
- **Subheadline:** `我們如何評估產品與資料來源以提供客觀資訊`

### Card 1 — 資料來源

- **H3:** `美國FDA權威評估標準`
  `我們以美國食品藥物管理局(FDA)菸草產品上市前審查(PMTA)為黃金標準。` + link text `FDA於2025年1月16日首次授權20項ZYN尼古丁袋產品上市`（→ https://www.fda.gov/news-events/press-announcements/fda-authorizes-marketing-20-zyn-nicotine-pouch-products-after-extensive-scientific-review）+ `，經過「廣泛科學審查，包括毒理學評估」，確認這些產品的「有害成分含量顯著低於香菸和大多數無煙菸草產品」。我們採用相同的嚴格科學評估框架。`
- **H3:** `國際技術標準文獻`
  `我們依據三大權威技術標準：`
  - `英國標準協會BSI PAS 8877:2022`（bold）`《無菸草口用尼古丁袋組成、製造與檢測規範》`
  - `瑞典標準協會SIS/TS 72:2024`（bold）`《含尼古丁無菸草口用產品安全與品質要求》`
  - `國際標準化組織ISO 21109:2025`（bold）`《尼古丁袋pH值測定方法》`
- **H3:** `第三方檢測驗證數據`
  `我們參考歐洲最大線上零售商Haypp Group的Nicoleaks透明化檢測平台，該平台委託瑞典Eurofins認證實驗室進行獨立檢測，公開發布尼古丁含量、pH值、重金屬及菸草特異性亞硝胺(TSNAs)等關鍵指標的批次檢測結果。`

### Card 2 — 評估標準

- **H3:** `製造品質認證要求`
  - `GMP製造規範`（bold）：`藥品級生產環境控制`
  - `ISO 9001:2015認證`（bold）：`國際品質管理體系`
  - `藥用級尼古丁`（bold）：`符合BSI PAS 8877純度要求`
  - `食品級袋材`（bold）：`符合歐盟法規EC No. 1935/2004`
- **H3:** `嚴格技術規格標準`
  - `尼古丁含量上限`（bold）：`20mg/袋（BSI PAS 8877及SIS/TS 72統一標準）`
  - `pH值控制範圍`（bold）：`5.6-9.1（基於SIS/TS 72:2024安全範圍）`
  - `重金屬檢測`（bold）：`砷、鉛、汞、鉻、鎳含量符合食品安全標準`
  - `禁用物質管控`（bold）：`嚴禁CMR物質（致癌、致突變、生殖毒性）`
- **H3:** `監管合規驗證`
  `我們優先評估在全球最嚴格監管市場獲得合法授權的產品：`
  - `美國`（bold）：`FDA PMTA正式授權狀態`
  - `瑞典`（bold）：`國家食品署合規註冊`
  - `英國`（bold）：`BSI PAS 8877標準符合度`
  - `阿聯酋`（bold）：`ECAS強制認證合規性`

### Card 3 — 研究限制與品質管控現況

- **H3:** `全球品質合規挑戰`
  link text `英國國家貿易標準局最新檢測報告顯示`（→ https://www.journaloftradingstandards.co.uk/health-safety/nicotine-pouches-suck-it-and-see/）`，在受測的市售尼古丁袋樣品中，`**`僅有1項產品完全符合BSI PAS 8877分析規範`**`及《通用產品安全法規》要求。這凸顯了全球市場品質參差不齊的嚴重問題。`
- **H3:** `台灣監管環境分析`
  `根據` + link text `衛生福利部藥物食品安全週報`（→ https://www.mohw.gov.tw/cp-3162-27716-1.html）`說明，含尼古丁產品在台灣被歸類為藥品管理。目前台灣缺乏針對尼古丁袋的專門品質監管機制，消費者難以獲得可靠的產品安全資訊。`
- **H3:** `亞洲人群研究資料限制`
  `目前針對亞洲人群的尼古丁袋臨床研究相對有限，我們主要依據歐美權威機構的安全性評估數據，並考量亞洲人群在尼古丁代謝酶活性及口腔生理特徵上的差異。`

### Card 4 — 我們的品質驗證流程

- **H3:** `四階段嚴格篩選`（ordered list）
  1. `監管資格審查`（bold）：`優先評估FDA授權或歐盟合規產品`
  2. `技術標準驗證`（bold）：`檢查是否符合BSI PAS 8877/SIS TS 72規範`
  3. `第三方檢測確認`（bold）：`要求提供Eurofins等認證實驗室報告`
  4. `供應鏈透明度`（bold）：`追溯製造商GMP資質及原料來源`
- **H3:** `品質保證的必要性`
  `在缺乏官方品質監管的環境下，選擇經過國際第三方驗證的產品至關重要。我們的評估確保推薦產品符合全球最高安全標準，為消費者提供可信賴的選擇依據。`

### Conversion section

- **H2:** `查看通過驗證的產品`
- **Body:** `基於上述FDA級別的嚴格評估標準，我們會持續追蹤對全球主要尼古丁袋品牌的綜合評估。`
- **CTA button:** `查看推薦品牌和可信供應商` → `/vendors`
- **Sub-caption:** `了解哪些產品通過我們的四階段品質認證標準，瀏覽經我們驗證、能夠提供國際品牌正品的可靠採購渠道。`

### Trust signal footer

- `我們的評估標準參考FDA PMTA審查流程，確保推薦產品達到國際醫藥級品質要求。所有推薦供應商均經過供應鏈透明度驗證，為台灣消費者提供最可靠的產品資訊。` (note: source has a line break/space between "FDA" and "PMTA" from JSX wrapping — content is otherwise contiguous)

---

## Vendors (/vendors)

Source: `app/vendors/page.tsx`

- **H1:** `推薦供應商與品牌`
- **Subheadline:** `探索國際知名口含菸（尼古丁袋）品牌與可信通路`

### Vendors section

- **H2:** `經驗證供應商`

**Vendor: Healthy Nic**
- Description: `台灣唯一歐美原廠授權口含菸專賣店。獨家引進FDA認證ZYN等7大國際品牌，堅持原廠直送、防偽驗證、恆溫倉儲。`
- Website: https://healthynic.com/
- Features (badges): `FDA認證正品保證`, `原廠防偽QR驗證`, `LINE專業諮詢`, `隱密包裝配送`
- Shipping info: `台灣地區 3-6 工作日送達`
- CTA: `前往選購` → https://healthynic.com/ (new tab)

(Note: two additional vendors, "Global Pouches" and "Nicotine World Hub", exist only as commented-out placeholder data in the source and are NOT live/rendered — not included as active content.)

**Empty-state copy (shown only if vendorsData is empty — currently not shown since Healthy Nic exists):** `Coming Soon` / `我們正在努力整理更多優質供應商資訊，敬請期待！`

### Brands section

- **H2:** `國際知名品牌`

| Brand | Description | Website | Origin (產地) |
|---|---|---|---|
| ZYN | `ZYN由Swedish Match（Philip Morris International）製造，是首個獲得美國FDA PMTA正式授權的口含菸品牌。2025年1月FDA授權20項產品上市，確認其有害成分含量顯著低於香菸。提供多種口味與尼古丁強度選擇，採用高科技蒸餾純化技術，為全球市場領導品牌。` | https://www.zyn.com/gb/en/home.html/ | 瑞典 / 美國 |
| LOOP | `LOOP由Another Snus Factory製造，以InstantRush™快速釋放技術聞名，提供創新辛辣口味系列。採用PlantCan™環保包裝罐，符合永續發展理念。在瑞典監管市場具有合法銷售地位，專為追求新奇體驗的年輕消費者設計。` | https://loopnicotinepouches.com/ | 瑞典 |
| VELO | `VELO由英美菸草公司（BAT）推出，經第三方認證實驗室檢測，相較香菸減少99%有毒物質。提供傳統菸草尼古丁與VELO PLUS合成尼古丁選項，時尚包裝設計，在全球多個市場獲得合規銷售許可，包裝獲ISCC永續認證。` | https://www.velo.com/ | 英國 |
| Helwit | `Helwit由Yoik AB製造，強調永續發展理念，工廠採用100%水力發電，使用環保包裝罐。專注於自然風味研發，符合瑞典嚴格的品質標準。針對環保意識強、偏好自然風味的消費者，體現北歐簡約與可持續發展價值觀。` | https://helwit.com | 瑞典 |
| KILLA | `KILLA由N.G.P. Empire/N.G.P. Tobacco ApS製造，專為經驗豐富的尼古丁使用者設計，提供超高尼古丁含量選項。口味濃烈多樣，包裝設計前衛，在丹麥監管框架下生產。適合追求強烈刺激感的資深使用者，為高強度市場區塊的代表品牌。` | https://killapods.eu/ | 丹麥 |
| on! | `on!由Helix Innovations LLC（Altria Group旗下）製造，採用獨特長方形包裝設計，提供從低到高的多樣化尼古丁強度選擇。Altria已向FDA提交35項on!產品的PMTA申請，並發表同行評議研究證實其減害潛力。適合尋求靈活劑量選擇的使用者。` | https://www.onnicotine.com/ | 瑞典 / 美國 |

Each brand card links out to `websiteUrl` (new tab), shows product image with alt `{name} Product Sample`, and shows `產地：{origin}`.

### Legal disclaimer footer

- `本頁面提供的品牌與供應商資訊僅供研究參考，旨在幫助消費者了解國際品質標準與驗證方法。我們不直接銷售任何產品，所列資訊基於公開的監管資料與第三方檢測結果。消費者應自行評估相關風險並遵守當地法規。`

---

## Market Growth (/market-growth)

Source: `app/market-growth/page.tsx`

Note: this page is currently in **English**, not zh-TW — transcribed verbatim as-is (no rebrand or translation applied per spec instructions; flagged for later pages/design review since it's inconsistent with the rest of the zh-TW site).

- **H1:** `The Market Growth Trajectory`
- **Subheadline:** `Global Nicotine Pouch Market Valuation: Historical & Projected (2018-2032)`
- **Chart:** line chart, id `marketGrowthChart`, three datasets: `Optimistic Projection`, `Conservative Projection`, `Realistic Estimate`
  - Years axis: 2018–2032
  - Realistic Estimate data (all years 2018–2032): 0.3, 0.8, 1.8, 2.7, 4.7, 7.4, 7.25, 7.1, 9.2, 11.9, 15.3, 19.7, 25.4, 27.8, 30.2 ($B)
  - Conservative Projection data (2025–2032 only, prior years null): 6.6, 7.9, 9.5, 11.4, 13.7, 16.4, 19.1, 22.0 ($B)
  - Optimistic Projection data (2025–2032 only, prior years null): 7.5, 10.2, 13.8, 18.7, 25.4, 34.5, 39.8, 43.5 ($B)
  - Y-axis title: `Market Valuation (in Billions USD)`
  - Y-axis tick format: `$` + value + `B`
- **Key Insights heading:** `Key Insights:`
  - `This chart shows a smooth, unified curve representing the market's journey from infancy to a projected ` **`$30B+ industry`** `.`
  - `The solid blue line represents the most realistic estimate, blending historical data with future projections.`
  - `Hover over the chart from 2025 onward to see the specific values for the ` **`Optimistic`** `, ` **`Realistic`** `, and ` **`Conservative`** ` forecasts.`

---

## Contact (/contact)

Source: `app/contact/page.tsx`

- **H1:** `聯繫我們`
- **Subheadline:** `有問題或建議？我們很樂意聽取您的意見。請透過以下電子郵件地址與我們聯繫。`

### Card 1 — 透過電子郵件聯繫

- Body: `無論您是對我們的研究內容有疑問，還是希望了解更多相關資訊，都歡迎與我們交流。`
- Email display: `{contactEmail}` — dynamically computed as `info@{domain}` where `domain` is derived from `NEXT_PUBLIC_SITE_URL` (fallback `localhost:3000`); `mailto:` link
- Caption: `我們期待您的來信！`

### Card 2 — 常見詢問類型

- Body: `我們經常收到關於以下主題的詢問：`
- List (`inquiryTypes`, in order):
  1. `產品品質評估標準的詳細說明`
  2. `國際市場發展動態與趨勢`
  3. `特定品牌或產品的相關資訊`
  4. `供應鏈與品質驗證流程`
  5. `台灣及亞洲市場的法規環境`

### Card 3 — 回覆時間

- Body: `我們通常會在1-3個工作日內回覆您的郵件。如果您的詢問較為複雜，可能需要稍長的時間進行詳細回覆。`

---

## Disclaimer (/disclaimer)

Source: `app/disclaimer/page.tsx`

- **H1:** `免責聲明`
- **Subheadline:** `關於本網站資訊的重要聲明`

**H2:** `資訊性質`
`本網站（台灣尼古丁袋教育平台）提供的所有內容，包括文字、圖像、連結及其他資料，均僅供一般教育和資訊目的。這些資訊不應被視為專業醫療建議、診斷或治療的替代品。`

**H3 1. 非醫療建議**
`本網站的內容無意取代專業醫療人員的建議。如果您有任何關於健康狀況或醫療問題的疑慮，請務必諮詢您的醫生或其他合格的醫療服務提供者。切勿因閱讀本網站上的資訊而忽視專業醫療建議或延誤就醫。`

**H3 2. 資訊準確性與完整性**
`我們已盡合理努力確保本網站資訊的準確性和最新性。然而，我們不對資訊的準確性、完整性、可靠性、適用性或及時性作任何明示或暗示的陳述或保證。任何依賴本網站資訊的風險均由您自行承擔。`

**H3 3. 產品資訊與推薦**
`本網站可能提及或推薦某些產品或品牌。這些提及或推薦僅基於我們的研究和評估標準，並不構成對任何特定產品的代言。消費者在做出購買決定前應自行進行盡職調查，並考慮個人需求和健康狀況。我們與推薦的供應商可能沒有任何關聯關係，除非另有說明。`

**H3 4. 個人責任**
`您對如何使用本網站提供的資訊負有全部責任。對於因使用或依賴本網站資訊而直接或間接導致的任何損失或損害，我們概不負責。`

**H3 5. 尼古丁產品風險**
`尼古丁是一種成癮性物質。尼古丁袋和其他尼古丁替代產品並非完全無風險，且不適合未成年人、孕婦、哺乳期婦女或對尼古丁敏感的人士。如果您目前不使用尼古丁產品，我們不建議您開始使用。`

**H3 6. 外部連結**
`本網站可能包含指向第三方網站的連結。提供這些連結是為了方便起見，並不表示我們認可這些網站的內容。我們對第三方網站的內容、隱私政策或做法概不負責。`

**Footer line:** `最後更新日期：{最後更新日期}` — dynamically rendered via `{new Date().toLocaleDateString("zh-TW")}` (i.e., today's date in zh-TW locale format at render/build time)

---

## Legal (/legal-disclaimer)

Source: `app/legal-disclaimer/page.tsx`

- **H1:** `法律聲明`
- **Subheadline:** `本網站使用條款與重要法律資訊`

**H2:** `網站使用條款`
`歡迎訪問台灣尼古丁袋教育平台（以下簡稱「本網站」）。使用本網站即表示您同意遵守以下條款。如果您不同意這些條款，請勿使用本網站。`

**H3 1. 資訊準確性**
`本網站提供的所有資訊僅供教育和參考目的。我們努力確保資訊的準確性和及時性，但不對其完整性、可靠性或適用性作任何明示或暗示的保證。使用者應自行判斷資訊的適用性。`

**H3 2. 非醫療建議**
`本網站內容不構成醫療建議、診斷或治療。任何有關健康狀況或治療方案的問題，請務必諮詢合格的醫療專業人員。切勿因本網站上的資訊而延誤尋求專業醫療建議。`

**H3 3. 智慧財產權**
`本網站所有內容，包括文字、圖像、標誌和設計，均受著作權和其他智慧財產權法律保護。未經我們事先書面同意，不得複製、修改、散佈或以任何其他方式使用本網站的任何內容。`

**H3 4. 第三方連結**
`本網站可能包含指向第三方網站的連結。這些連結僅為方便使用者而提供，我們對這些第三方網站的內容、準確性或安全性不承擔任何責任。`

**H3 5. 責任限制**
`在法律允許的最大範圍內，對於因使用或無法使用本網站或其內容而導致的任何直接、間接、附帶、特殊或後果性損害，本網站及其關聯方概不負責。`

**H3 6. 條款修改**
`我們保留隨時修改這些條款的權利。任何修改將在本網站上公佈後立即生效。建議您定期查看這些條款以了解任何變更。`

**Footer line:** `最後更新日期：{最後更新日期}` — dynamically rendered via `{new Date().toLocaleDateString("zh-TW")}`

---

## Privacy (/privacy-policy)

Source: `app/privacy-policy/page.tsx`

- **H1:** `隱私政策`
- **Subheadline:** `我們如何收集、使用和保護您的個人資訊`

**H2:** `我們對您隱私的承諾`
`台灣尼古丁袋教育平台（以下簡稱「我們」或「本網站」）致力於保護您的隱私。本隱私政策解釋了我們如何收集、使用、披露和保護您在使用本網站時提供的個人資訊。`

**H3 1. 資訊收集**
`當您訪問本網站、訂閱我們的電子報或通過聯繫表單與我們聯繫時，我們可能會收集您的個人資訊，例如您的姓名、電子郵件地址和您自願提供的任何其他資訊。我們也可能自動收集某些非個人資訊，例如您的 IP 地址、瀏覽器類型和操作系統。`

**H3 2. 資訊使用**
`我們收集的資訊將用於以下目的：`
- `提供和改進本網站的服務與內容。`
- `回覆您的查詢和請求。`
- `向您發送您可能感興趣的更新、電子報或其他資訊（如果您已同意接收）。`
- `分析網站使用情況以改善使用者體驗。`

**H3 3. Cookie 和追蹤技術**
`本網站可能使用 Cookie 和類似的追蹤技術來增強您的瀏覽體驗並收集有關網站使用的資訊。您可以通過瀏覽器設置管理您的 Cookie 偏好。`

**H3 4. 資訊共享與披露**
`除非法律要求或為保護我們的權利，否則我們不會將您的個人資訊出售、交易或以其他方式轉讓給第三方。我們可能會與協助我們運營網站或開展業務的可信賴第三方服務提供商共享您的資訊，前提是他們同意對此類資訊保密。`

**H3 5. 資料安全**
`我們採取合理的安全措施來保護您的個人資訊免遭未經授權的訪問、使用或披露。但是，請注意，任何通過互聯網傳輸的數據都不是 100% 安全的。`

**H3 6. 您的權利**
`您有權訪問、更正或刪除我們持有的您的個人資訊。如果您希望行使這些權利，請通過本網站提供的聯繫方式與我們聯繫。`

**H3 7. 政策變更**
`我們可能會不時更新本隱私政策。任何變更將在本頁面上發布，並註明更新日期。我們鼓勵您定期查看本政策。`

**Footer line:** `最後更新日期：{最後更新日期}` — dynamically rendered via `{new Date().toLocaleDateString("zh-TW")}`

---

## Blog index

### Published posts

| Slug | Title | publishDate | author | readingTime | heroImageUrl | heroImageAlt | Excerpt |
|---|---|---|---|---|---|---|---|
| what-is-nicotine-pouch | `口含菸完整介紹 {{year}}：成分分析、使用方法與科學原理指南` (literal `{{year}}` token — code does `substituteYear` at render time) | 2024-10-01 | 健康科學團隊 | 6 | /blog/holding_nicotine_pouch_wood_background.jpg | 口含菸成分與使用方法圖解 | `什麼是口含菸（尼古丁袋）？與傳統菸草產品有何不同？深入了解這種源自北歐的創新產品，包括成分分析、正確使用方法，以及背後的科學原理。適合初次接觸者的完整入門指南。` |
| workplace-nicotine-pouch-guide | `職場口含菸使用攻略：辦公室、會議室專業隱形使用技巧` | 2024-10-02 | 編輯團隊 | 5 | /blog/workplace_optimized.webp | 專業人士在辦公室低調使用口含菸示意圖 | `如何在辦公室、會議中、或通勤時低調使用尼古丁產品？針對台灣工作文化特色，提供實用建議與注意事項，讓您在職場環境中維持專業形象。` |
| nicotine-pouch-where-to-buy-taiwan | `口含菸哪裡買？{{year}}台灣購買指南與推薦商家評價` (literal `{{year}}` token) | 2024-11-05 | 消費者保護團隊 | 5 | /blog/zyn_manufacturing.jpeg | 辨識高品質口含菸與可靠供應商指南 | `市場上產品品質參差不齊，如何避開劣質產品？學會辨識正品特徵、驗證供應商可靠性的實用技巧，確保您購買到符合安全標準的產品。` |

Full bodies live in `content/blog/what-is-nicotine-pouch.md`, `content/blog/workplace-nicotine-pouch-guide.md`, `content/blog/nicotine-pouch-where-to-buy-taiwan.md`.

### Planned / unwritten posts

Recovered from `git show be2553c^:lib/blog.ts` (commented-out entries; body content was never written for these — some had `content: "<p>詳細內容即將推出。..."</p>` placeholder-only stubs, others reference removed content constants).

| Slug | Title (as of that commit; `${new Date().getFullYear()}` was a JS template literal, not a literal token) | Excerpt | Body status |
|---|---|---|---|
| nicotine-products-risk | `科學研究：不同尼古丁產品的健康風險比較` | `基於國際同行評議研究，客觀比較香菸、電子菸、加熱菸與尼古丁袋的健康風險。了解各產品的有害物質含量、FDA評估結果，以及目前科學界的共識與爭議。` | Unwritten — referenced content constant `contentForPostToxinComparison` not present in that file |
| modern-nicotine-products-comparison | `加熱菸 vs 電子菸 vs 尼古丁袋：{{year}}價格與便利性完整比較` | `三大尼古丁替代方案的全面比較分析。從價格成本、使用便利性、維護需求到場所限制，幫助您根據個人需求與生活方式，選擇最適合的產品類型。` | Unwritten — placeholder stub only (`詳細內容即將推出...`) |
| taiwan-htp-analysis | `加熱菸購買指南：IQOS台灣{{year}}現況與替代方案評析` | `IQOS在台灣面臨哪些取得困難？分析加熱菸的法規現況、進口挑戰，以及為何越來越多消費者轉向其他替代方案。客觀評估各種選項的優缺點。` | Unwritten — referenced content constant `contentForPostIQOSAlternatives` not present in that file |
| nicotine-pouch-brands | `國際品牌介紹：ZYN、VELO等知名尼古丁袋品牌分析` | `深入了解全球主要尼古丁袋品牌的特色與差異。從ZYN的市場地位到VELO的產品線，分析各品牌的製造標準、認證狀況，以及在台灣的可取得性。` | Unwritten — placeholder stub only (`詳細內容即將推出...`) |
| nicotine-pouch-legality-in-taiwan | `台灣法規現況：尼古丁袋的合法性與使用須知` | `尼古丁袋在台灣的法律地位如何？了解相關法規、使用限制，以及如何在法律框架內安全使用。包含最新政策動態與合規建議。` | Unwritten — placeholder stub only (`詳細內容即將推出...`) |

