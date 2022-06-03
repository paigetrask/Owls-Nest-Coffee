const navLinks = document.querySelector("#nav-links");
const navToggle = document.querySelector(".mobile-nav-toggle");
const aboutLink = document.querySelector("#about-link");
const homeLink = document.querySelector("#home-link");
const contactLink = document.querySelector("#contact-link");

navToggle.addEventListener("click", () => {
    const visibility = navLinks.getAttribute('data-visible');

    if (visibility === "false") {
        navLinks.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        //document.body.classList.toggle('no-scroll');
    } else {
        navLinks.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        //document.body.classList.remove('no-scroll');
    }
});



contactLink.addEventListener("click", () => {
    navLinks.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
})

homeLink.addEventListener("click", () => {
    navLinks.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
})

aboutLink.addEventListener("click", () => {
    navLinks.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
})

