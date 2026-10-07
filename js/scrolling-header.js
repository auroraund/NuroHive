document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header"); // Adjust to match the header's ID
  const scrollThreshold = 60; // Scroll distance (px) to trigger the change

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
});
