document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close-btn");
  const wrappers = document.querySelectorAll("#container .item .img-wrapper");

  // 各画像のラッパーをクリックでモーダル開く
  wrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", () => {
      const img = wrapper.querySelector("img");
      if (!img) return;
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  const closeModal = () => {
    modal.style.display = "none";
  };

  closeBtn.addEventListener("click", closeModal);

  // 背景クリックで閉じる
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // ESCキーで閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") closeModal();
  });
});
