// 設定したいパスワード
const AUTH_KEY = "nuro2026";

// 1. 各ページ冒頭で実行するアクセスチェック処理
function checkAuth() {
  const isAuth = sessionStorage.getItem("site_authenticated");

  // 未認証の場合、現在のパス（Path + Search）をエンコードして gate.html へリダイレクト
  if (!isAuth) {
    const currentPath = encodeURIComponent(
      window.location.pathname + window.location.search,
    );
    window.location.replace(`/gate.html?redirect=${currentPath}`);
  }
}

// 2. gate.html 側での認証フォーム送信処理
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("auth-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("pass-input").value;
      const errorMsg = document.getElementById("error-msg");

      if (input === AUTH_KEY) {
        sessionStorage.setItem("site_authenticated", "true");

        // URLパラメータから元のリダイレクト先を取得
        const params = new URLSearchParams(window.location.search);
        const redirectUrl = params.get("redirect");

        if (redirectUrl) {
          // 元々飛びたかったページへ遷移
          window.location.replace(decodeURIComponent(redirectUrl));
        } else {
          // パラメータがない場合は保存されている言語設定のTopへ
          const savedLang = localStorage.getItem("user_lang");
          if (savedLang === "en") {
            window.location.replace("/index-en.html");
          } else {
            window.location.replace("/index.html");
          }
        }
      } else {
        errorMsg.style.display = "block";
      }
    });
  }
});
