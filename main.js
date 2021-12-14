/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      toggle.classList.toggle("uil-times");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  const toggle = document.getElementById("nav-toggle");
  navMenu.classList.remove("show");
  toggle.classList.remove("uil-times");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
// *==================== SCROLL SECTIONS ACTIVE LINK ====================
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);
// *==================== CHANGE BACKGROUND HEADER ====================*/
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
})
