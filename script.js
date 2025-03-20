
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

ScrollReveal().reveal('.section__pic-container', { origin: 'left' });
ScrollReveal().reveal('.section__text', { origin:'right'});

const typed = new Typed('.multiple-text',{
  strings:['Backend developer','Web developer','Software Engineer'],
  typeSpeed:70,
  backSpeed:70,
  backDelay:1000,
  loop:true,
});