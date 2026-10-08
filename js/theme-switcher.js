const toggle = document.getElementById("theme-toggle");

// Check OS settings (prefers-color-scheme: dark)
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (isDark) document.documentElement.classList.add("dark");

// Toggle manually when the button is clicked
toggle?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
