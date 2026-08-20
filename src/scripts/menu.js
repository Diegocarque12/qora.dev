// src/scripts/menu.js
export function initMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuToggle || !closeMenu || !mobileMenu) {
    console.error("One or more menu elements not found");
    return;
  }

  const open = () => {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex", "flex-col");
    menuToggle.setAttribute("aria-expanded", "true");
  };

  const close = () => {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex", "flex-col");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    if (mobileMenu.classList.contains("hidden")) open();
    else close();
  });

  closeMenu.addEventListener("click", close);

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", close);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      mobileMenu.classList.remove("hidden", "flex-col");
      mobileMenu.classList.add("flex");
      menuToggle.setAttribute("aria-expanded", "false");
    } else {
      close();
    }
  });
}