// Google 翻訳の初期化
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "ja",
      includedLanguages: "en,ja",
      autoDisplay: false,
    },
    "google_translate_element",
  );
}

// ボタンクリックによる言語切替処理
document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("lang-btn");
  if (!langBtn) return;

  langBtn.addEventListener("click", () => {
    const selectEl = document.querySelector(".goog-te-combo");
    if (!selectEl) return;

    // 現在の言語状態を判定して切り替え
    const currentLang = document.documentElement.lang;

    if (currentLang === "en" || selectEl.value === "en") {
      // 日本語に戻す
      selectEl.value = "ja";
      selectEl.dispatchEvent(new Event("change"));
      document.documentElement.lang = "ja";
      langBtn.textContent = "English";
    } else {
      // 英語に翻訳
      selectEl.value = "en";
      selectEl.dispatchEvent(new Event("change"));
      document.documentElement.lang = "en";
      langBtn.textContent = "日本語";
    }
  });
});
