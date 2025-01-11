// Navbar Menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("max-h-screen", "opacity-100");
  } else {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("max-h-screen", "opacity-100");
  }
});

// Accordion
function toggleAccordion(element) {
  const content = element.nextElementSibling;
  const icon = element.querySelector("svg");

  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    icon.classList.add("rotate-180");
  } else {
    content.classList.add("hidden");
    icon.classList.remove("rotate-180");
  }
}
