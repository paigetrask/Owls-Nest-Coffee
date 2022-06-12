const navLinks = document.querySelector("#nav-links");
const navToggle = document.querySelector(".mobile-nav-toggle");
const aboutLink = document.querySelector("#about-link");
const homeLink = document.querySelector("#home-link");
const contactLink = document.querySelector("#contact-link");

function stopTransition () {
    const classes = document.body.classList;
    let timer = 0;
    window.addEventListener('resize', function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        } else 
            classes.add('stop-transitions');

        timer = setTimeout(() => {
            classes.remove('stop-transitions');
            timer = null;
        }, 400);
    
    });
};

stopTransition()


navToggle.addEventListener("click", () => {
    const visibility = navLinks.getAttribute('data-visible');

    if (visibility === "false") {
        navLinks.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        document.body.classList.add("no-scroll");
    } else {
        navLinks.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        document.body.classList.remove("no-scroll");
    }
});


contactLink.addEventListener("click", () => {
    navLinks.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    document.body.classList.remove("no-scroll");
})

homeLink.addEventListener("click", () => {
    navLinks.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
    document.body.classList.remove("no-scroll");
})

aboutLink.addEventListener("click", () => {
    navLinks.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    document.body.classList.remove("no-scroll");
})


