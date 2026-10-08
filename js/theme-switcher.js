// Encapsulate the scope using an IIFE
(() => {
  const initThemeToggle = () => {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
      // 1. Toggle the class and directly capture the result (boolean)
      const isDark = document.documentElement.classList.toggle("dark");

      // 2. Save directly to localStorage using a ternary operator
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  };

  // Execute immediately if the DOM is already loaded; otherwise, wait for the event
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
