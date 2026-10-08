const overlay = document.getElementById("page-overlay");

// 1. On page load (Fade in + delayed scroll)
window.addEventListener("load", () => {
  if (overlay) {
    overlay.style.opacity = "0";
  }

  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const delay = 200;
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }, delay);
    }
  }
});

// 2. On page exit (Fade out)
document.querySelectorAll("a[href]").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (href.startsWith("#") || link.target === "_blank") return;

    e.preventDefault();
    if (overlay) overlay.style.opacity = "1";

    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
});
