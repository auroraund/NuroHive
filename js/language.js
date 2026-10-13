// 画面内のテキスト更新＆ボタン表記＆htmlのlang属性を同期する関数
function updateContent() {
  const currentLang = i18next.language;

  // 1. html タグの lang 属性を同期
  document.documentElement.lang = currentLang;

  // 2. テキストの一括更新
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = i18next.t(key);
  });

  // 3. トグルボタンの表記を変更（en表示中なら「JA」、ja表示中なら「EN」）
  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.textContent = currentLang === "en" ? "JA" : "EN";
  }
}

// 保存された言語を取得（無ければデフォルトの 'en'）
const savedLang = localStorage.getItem("user_lang") || "en";

// i18next の初期化
i18next
  .use(i18nextHttpBackend)
  .init({
    lng: savedLang, // localStorage から復元した言語を設定
    fallbackLng: "en",
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
  })
  .then(() => {
    updateContent();
  });

// トグルボタンのクリックイベント
const toggleBtn = document.getElementById("lang-toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const nextLang = i18next.language === "en" ? "ja" : "en";

    // 選択された言語を localStorage に保存
    localStorage.setItem("user_lang", nextLang);

    // 言語を切り替えて描画を更新
    i18next.changeLanguage(nextLang).then(updateContent);
  });
}
