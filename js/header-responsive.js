document.addEventListener("DOMContentLoaded", () => {
  const hamburgerToggle = document.getElementById("hamburger-toggle");
  const menuContainer = document.querySelector(".menu-container");

  if (hamburgerToggle && menuContainer) {
    // ボタンクリックで開閉切り替え
    hamburgerToggle.addEventListener("click", () => {
      hamburgerToggle.classList.toggle("is-active");
      menuContainer.classList.toggle("is-active");
    });

    // メニュー内のリンクをクリックしたら自動で閉じる
    menuContainer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburgerToggle.classList.remove("is-active");
        menuContainer.classList.remove("is-active");
      });
    });
  }
});
