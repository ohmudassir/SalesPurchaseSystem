const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !expanded);
});
