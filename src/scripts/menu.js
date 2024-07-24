// src/scripts/menu.js
export function initMenu() {
  console.log("initMenu function is running");
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuToggle || !closeMenu || !mobileMenu) {
    console.error("One or more menu elements not found");
    return;
  }

  menuToggle.addEventListener("click", () => {
    console.log("Menu toggle clicked");
    mobileMenu.classList.toggle("hidden");
  });

  closeMenu.addEventListener("click", () => {
    console.log("Close menu clicked");
    mobileMenu.classList.add("hidden");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  });
}
