const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
if (preloader) {
preloader.classList.add("hide");
}
});

/* =========================
MOBILE MENU
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("open");
});
}

/* =========================
CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
link.addEventListener("click", () => {
if (navMenu) {
navMenu.classList.remove("open");
}
});
});

/* =========================
HEADER SCROLL EFFECT
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
if (header) {
if (window.scrollY > 50) {
header.classList.add("scrolled");
} else {
header.classList.remove("scrolled");
}
}
});

/* =========================
SCROLL TO TOP
========================= */

const scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
if (!scrollTop) return;

if (window.scrollY > 500) {
    scrollTop.classList.add("show");
} else {
    scrollTop.classList.remove("show");
}

});

if (scrollTop) {
scrollTop.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});
}

/* =========================
REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("visible");
}
});
},
{
threshold: 0.15
}
);

revealElements.forEach(element => {
revealObserver.observe(element);
});

/* =========================
CONTACT FORM
========================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
contactForm.addEventListener("submit", event => {
event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    contactForm.reset();
});

};