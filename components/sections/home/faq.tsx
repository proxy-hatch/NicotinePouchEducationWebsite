"use client"

import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { BlogPost } from "@/lib/content/blog"

export function Faq({ posts }: { posts: Pick<BlogPost, 'slug' | 'title'>[] }) {
  const getBlogTitle = (slug: string) => {
    const post = posts.find((post) => post.slug === slug)
    return post?.title || "相關文章"
  }

  return (
    <section className="w-full py-12 md:py-16 bg-surface">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-ink">
            常見問題與詳細解答
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-medium">口含菸到底是什麼？</AccordionTrigger>
              <AccordionContent className="faq-accordion-content">
                <p>
                  口含菸（又稱尼古丁袋、nicotine pouch）是一種無煙尼古丁產品，通常放置在上唇與牙齦之間。它不含煙草，而是由尼古丁、調味劑和植物纖維等成分組成，提供無煙、無味的尼古丁體驗。
                </p>
                <p>
                  想深入了解？請閱讀我們的{" "}
                  <Link href="/blog/what-is-nicotine-pouch" className="text-accent hover:text-primary-hover underline">
                    {getBlogTitle("what-is-nicotine-pouch")}
                  </Link>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-medium">可以在工作場使用嗎？</AccordionTrigger>
              <AccordionContent className="faq-accordion-content">
                <p>
                  口含菸不產生煙霧或蒸氣，使用時無味無煙，因此可以在大多數禁止吸菸的場所使用，特別適合台灣的工作環境與生活型態。
                </p>
                <p className="mb-2">
                  <strong>具體使用場景：</strong>
                </p>
                <ul className="list-disc list-inside pl-5 mb-4">
                  <li>長時間會議或研習 - 無需中途離席吸菸休息</li>
                  <li>工廠作業環境 - 符合安全規範，不影響生產線工作</li>
                  <li>辦公大樓 - 無需搭電梯到戶外吸菸區，節省時間</li>
                  <li>公共交通通勤 - 捷運、高鐵、公車上均可謹慎使用</li>
                  <li>餐廳用餐 - 不影響用餐體驗或他人感受</li>
                  <li>商務場合 - 客戶會議、商務談判時保持專業形象</li>
                </ul>
                <p>這讓使用者可以更靈活地安排工作與生活節奏，無需因尼古丁需求而中斷重要事務或影響專業表現。</p>
                <p>由於產品完全無味無煙，使用時幾乎無法察覺，因此適合各種正式或非正式場合。</p>
                <p>
                  了解更多專業場合使用建議，請參考{" "}
                  <Link href="/blog/workplace-nicotine-pouch-guide" className="text-accent hover:text-primary-hover underline">
                    {getBlogTitle("workplace-nicotine-pouch-guide")}
                  </Link>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-medium">與電子菸有何差別？</AccordionTrigger>
              <AccordionContent className="faq-accordion-content">
                <p>
                  與電子菸不同，口含菸不需要任何設備或充電。它們不產生蒸氣或煙霧，使用時完全無味，且不需要吸入任何物質。
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-medium">口含菸安全嗎？</AccordionTrigger>
              <AccordionContent className="faq-accordion-content">
                <p>
                  相較於傳統吸菸，口含菸避免了燃燒產生的焦油、一氧化碳等數千種有害化學物質，大幅降低與吸菸相關的健康風險。美國FDA已授權部分品牌為「適合公共健康」的產品，認定其相較於香菸具有顯著較低的健康風險。
                </p>
                <p>
                  然而，尼古丁本身仍具有較低成癮性，且可能對心血管系統產生影響。口含菸主要適合已經使用尼古丁產品的成年人作為減害替代選擇，不建議非尼古丁使用者開始使用。
                </p>
                <p>
                  與電子菸不同，口含菸透過口腔吸收，完全避免肺部接觸任何物質。任何尼古丁產品都應在了解風險的情況下謹慎使用，建議諮詢醫療專業人員的建議。
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-medium">尼古丁真的像大家說的那麼有害嗎？</AccordionTrigger>
              <AccordionContent className="faq-accordion-content">
                <p>
                  這是一個常見的誤解。純尼古丁本身與香菸的危害完全不同。科學研究顯示，尼古丁可能對認知功能、注意力、執行功能和工作記憶帶來益處
                  (
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC1201375/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    source
                  </a>
                  )，並在治療妥瑞症 (
                  <a
                    href="https://www.sciencedirect.com/science/article/abs/pii/S0163725896001994"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    source
                  </a>
                  )、早期阿茲海默症 (
                  <a
                    href="https://optoceutics.com/nicotine-and-alzheimers-connection-risks-benefits-impact/?srsltid=AfmBOopqouLKCUFtQIiEU4hpjtIpij-7h4w9mdQpBgLSHZw8LzC48VEH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    source
                  </a>
                  ) 等神經精神疾病方面展現治療潛力。
                </p>
                <p>
                  每個人對尼古丁的代謝和反應存在基因差異，使用目的也不同。真正的風險來自輸送方式：香菸的燃燒產生焦油和數千種致癌物質，而口含菸作為無燃燒、無菸草、無二手菸害的方式，消除了這些主要風險源。美國的減害政策正是基於這種科學認知，將口含菸定位為風險階梯中最低的選項。
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left font-medium">會影響牙齦健康嗎？</AccordionTrigger>
              <AccordionContent className="faq-accordion-content">
                <p>
                  部分使用者初期可能會感到輕微的牙齦刺激或刺痛感，這是正常現象，通常在使用一至兩週後會逐漸適應並減輕。這種初期反應主要是口腔組織適應新產品的過程。
                </p>
                <p>某些口味可能會產生刺激性唾液，使用時應避免吞嚥唾液，以免造成胃部不適、噁心或消化問題。</p>
                <p>
                  為減少不適感，建議從較低強度產品開始，正確放置於牙齦與嘴唇之間，並定期更換放置位置。初次使用時可縮短使用時間（如15-20分鐘），待適應後再延長至建議時間。
                </p>
                <p>
                  相較於傳統煙草產品，口含菸不含菸葉，避免了與口腔癌、牙齦疾病、牙齒染色等相關的風險。建議保持良好的口腔衛生習慣，定期進行口腔檢查。如有持續不適或異常症狀，應停止使用並諮詢牙醫或醫療專業人員。
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left font-medium">一錠可以持續多久呢？</AccordionTrigger>
              <AccordionContent className="faq-accordion-content">
                <p>一般來說，口含菸的效果可持續30-60分鐘，視產品強度和個人使用習慣而定。</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left font-medium">如何辨別產品是否正品？</AccordionTrigger>
              <AccordionContent className="faq-accordion-content">
                <p>
                  購買時應選擇有明確品牌標識、批號和成分標示的產品，並從可靠的供應商處購買。正品通常有防偽措施和完整的產品資訊。
                </p>
                <p>
                  詳細的辨識技巧請參考我們的{" "}
                  <Link href="/blog/nicotine-pouch-where-to-buy-taiwan" className="text-accent hover:text-primary-hover underline">
                    {getBlogTitle("nicotine-pouch-where-to-buy-taiwan")}
                  </Link>
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left font-medium">費用會很昂貴嗎？</AccordionTrigger>
              <AccordionContent className="faq-accordion-content">
                <p>
                  口含菸的價格因品牌和強度而異，但考慮總成本效益具有優勢：無需購買設備、充電器或耗材，避免設備故障維修費用。相較於進口IQOS的複雜成本或黑市電子菸的品質風險，正品口含菸提供可預期的使用成本。
                </p>
                <p>
                  此外，每錠可使用30-60分鐘，使用頻率通常低於電子菸的短時間吸食，長期而言更具成本效益。許多使用者認為便利性、可靠性和品質保證使投資物有所值。
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
