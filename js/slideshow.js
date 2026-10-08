document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll("#hero-section .slide");
  const dots = document.querySelectorAll("#hero-section .dot");
  const container = document.querySelector("#hero-section .slideshow-container");

  if (!slides.length) return;

  let currentIndex = 0;
  let slideTimer = null;
  let isTransitioning = false; // アニメーション中の重複実行ガード
  const intervalTime = 4000;

  const goToSlide = (index) => {
    // 同一スライド指定やアニメーション中の連打をブロック
    if (index === currentIndex || isTransitioning) return;

    isTransitioning = true;

    // 現在のアクティブを解除
    slides[currentIndex].classList.remove("active");
    if (dots[currentIndex]) dots[currentIndex].classList.remove("active");

    // 新しいインデックスの計算
    currentIndex = (index + slides.length) % slides.length;

    // 新しいスライドをアクティブ化
    slides[currentIndex].classList.add("active");
    if (dots[currentIndex]) dots[currentIndex].classList.add("active");

    // アニメーション完了（CSS transition 0.8s）後にガードを解除
    setTimeout(() => {
      isTransitioning = false;
    }, 800);
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    slideTimer = setInterval(nextSlide, intervalTime);
  };

  const stopAutoPlay = () => {
    if (slideTimer) {
      clearInterval(slideTimer);
      slideTimer = null;
    }
  };

  // 1. ドットクリックイベント
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      if (idx === currentIndex) return;
      goToSlide(idx);
      startAutoPlay(); // 手動操作後もタイマーを安全に再始動
    });
  });

  // 2. ホバー時の自動再生一時停止/再開
  if (container) {
    container.addEventListener("mouseenter", stopAutoPlay);
    container.addEventListener("mouseleave", startAutoPlay);
  }

  // 3. 【最重要】タブの切り替え・復帰時にタイマーを復元する
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoPlay(); // タブが隠れたら即停止してタイマーの狂いを防ぐ
    } else {
      startAutoPlay(); // タブに戻ってきたらタイマーを再スタート
    }
  });

  // 初期化開始
  startAutoPlay();
});