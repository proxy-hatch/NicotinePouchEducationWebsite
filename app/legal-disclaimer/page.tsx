export default function LegalDisclaimerPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">法律聲明</h1>
            <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              本網站使用條款與重要法律資訊
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-lg prose-blue">
            <h2>網站使用條款</h2>
            <p>
              歡迎訪問台灣尼古丁袋教育平台（以下簡稱「本網站」）。使用本網站即表示您同意遵守以下條款。如果您不同意這些條款，請勿使用本網站。
            </p>
            <h3>1. 資訊準確性</h3>
            <p>
              本網站提供的所有資訊僅供教育和參考目的。我們努力確保資訊的準確性和及時性，但不對其完整性、可靠性或適用性作任何明示或暗示的保證。使用者應自行判斷資訊的適用性。
            </p>
            <h3>2. 非醫療建議</h3>
            <p>
              本網站內容不構成醫療建議、診斷或治療。任何有關健康狀況或治療方案的問題，請務必諮詢合格的醫療專業人員。切勿因本網站上的資訊而延誤尋求專業醫療建議。
            </p>
            <h3>3. 智慧財產權</h3>
            <p>
              本網站所有內容，包括文字、圖像、標誌和設計，均受著作權和其他智慧財產權法律保護。未經我們事先書面同意，不得複製、修改、散佈或以任何其他方式使用本網站的任何內容。
            </p>
            <h3>4. 第三方連結</h3>
            <p>
              本網站可能包含指向第三方網站的連結。這些連結僅為方便使用者而提供，我們對這些第三方網站的內容、準確性或安全性不承擔任何責任。
            </p>
            <h3>5. 責任限制</h3>
            <p>
              在法律允許的最大範圍內，對於因使用或無法使用本網站或其內容而導致的任何直接、間接、附帶、特殊或後果性損害，本網站及其關聯方概不負責。
            </p>
            <h3>6. 條款修改</h3>
            <p>
              我們保留隨時修改這些條款的權利。任何修改將在本網站上公佈後立即生效。建議您定期查看這些條款以了解任何變更。
            </p>
            <p className="text-sm text-gray-500 mt-8">最後更新日期：{new Date().toLocaleDateString("zh-TW")}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
