// src/scripts/menu.js
export function initMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuToggle || !closeMenu || !mobileMenu) {
    console.error("One or more menu elements not found");
    return;
  }

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    mobileMenu.classList.toggle("flex-col");
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex", "flex-col");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex", "flex-col");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.remove("flex-col");
      mobileMenu.classList.add("flex");
    } else {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex", "flex-col");
    }
  });
}