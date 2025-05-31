import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">常見問題</h1>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              關於尼古丁袋的詳細解答
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-800">產品認知類</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-medium">尼古丁袋到底是什麼？</AccordionTrigger>
                  <AccordionContent>
                    尼古丁袋是一種無煙尼古丁產品，通常放置在上唇與牙齦之間。它不含煙草，而是由尼古丁、調味劑和植物纖維等成分組成，提供無煙、無味的尼古丁體驗。這種產品源自北歐國家，現已在全球多個市場普及，作為傳統煙草產品的替代選擇。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-medium">與電子菸有何差別？</AccordionTrigger>
                  <AccordionContent>
                    與電子菸不同，尼古丁袋不需要任何設備、電池或充電。它們不產生蒸氣或煙霧，使用時完全無味，且不需要吸入任何物質。電子菸需要加熱液體產生蒸氣，而尼古丁袋則是通過口腔黏膜吸收尼古丁，使用方式和體驗完全不同。此外，尼古丁袋不會產生二手煙或蒸氣，可以在更多場合使用。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-800">安全健康類</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-medium">尼古丁袋安全嗎？</AccordionTrigger>
                  <AccordionContent>
                    相較於傳統吸菸，尼古丁袋不含燃燒產生的有害物質，如焦油和一氧化碳，因此減少了許多與吸菸相關的健康風險。然而，尼古丁本身仍具有成癮性，且可能對心血管系統產生影響。尼古丁袋主要適合已經使用尼古丁產品的成年人作為替代選擇，不建議非尼古丁使用者開始使用。任何尼古丁產品都應在了解風險的情況下謹慎使用，並建議諮詢醫療專業人員的建議。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-medium">會影響牙齦健康嗎？</AccordionTrigger>
                  <AccordionContent>
                    部分使用者可能會感到輕微的牙齦刺激，尤其是初次使用時。這通常是暫時性的，隨著使用習慣的形成會逐漸減輕。選擇較低強度的產品並正確放置可以減少這種情況。建議定期進行口腔檢查，保持良好的口腔衛生習慣，並在使用後徹底清潔口腔。如有持續不適，應停止使用並諮詢牙醫。相較於傳統煙草產品，尼古丁袋對牙齒的染色和口腔健康的負面影響通常較小。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-800">使用實務類</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-medium">可以持續多久？</AccordionTrigger>
                  <AccordionContent>
                    一般來說，尼古丁袋的效果可持續30-60分鐘，視產品強度和個人使用習慣而定。較高強度的產品可能提供更長時間的尼古丁釋放，而較低強度的產品則可能持續時間較短。使用者可以根據個人需求選擇適合的產品強度和使用頻率。值得注意的是，過度使用可能導致尼古丁攝入過量，應遵循產品建議的使用指南。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-left font-medium">
                    可以在工作場所或公共場所使用嗎？
                  </AccordionTrigger>
                  <AccordionContent>
                    尼古丁袋不產生煙霧或蒸氣，使用時無味無煙，因此可以在大多數禁止吸菸的場所使用，包括辦公室、餐廳、公共交通工具和會議室等。這是其相較於傳統煙草產品和電子菸的主要優勢之一。然而，使用前應了解當地法規和工作場所政策，某些特定場所可能有自己的規定。在使用時保持謹慎和尊重他人的態度也很重要。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-800">品質採購類</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-left font-medium">如何辨別產品是否正品？</AccordionTrigger>
                  <AccordionContent>
                    購買時應選擇有明確品牌標識、批號和成分標示的產品，並從可靠的供應商處購買。正品通常有防偽措施和完整的產品信息，包括製造日期、保質期和原產地等。避免購買價格異常低廉或包裝有明顯瑕疵的產品。可以通過官方網站或授權經銷商驗證產品真實性，某些品牌還提供線上驗證工具。選擇知名品牌和有良好聲譽的供應商可以降低購買到假冒產品的風險。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-left font-medium">費用會很昂貴嗎？</AccordionTrigger>
                  <AccordionContent>
                    尼古丁袋的價格因品牌和強度而異，但長期來看，通常比持續購買香菸或維護電子菸設備更經濟實惠。一盒尼古丁袋通常包含多個單位，每個可使用30-60分鐘，因此使用成本相對較低。此外，考慮到不需要購買額外的設備、充電器或耗材，以及可能減少的醫療成本，尼古丁袋可能是一個具有成本效益的選擇。不同品牌和產品線的價格範圍可能有所不同，消費者可以根據自己的預算選擇適合的產品。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
