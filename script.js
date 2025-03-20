
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  ScrollReveal({
    distance: "800px",
    duration: 2000,
    delay:100,
});

ScrollReveal().reveal('.section__pic-container,.details-container', { origin: 'left' });
ScrollReveal().reveal('.section__text, .text-container', { origin:'right'});