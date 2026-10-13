document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const scrollThreshold = 60;

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  // 1. スクロール時に発火
  window.addEventListener("scroll", handleScroll, { passive: true });

  // 2. ページジャンプ直後やリロード時（最初から下にスクロールしている状態）にも判定を実行
  handleScroll();
});
