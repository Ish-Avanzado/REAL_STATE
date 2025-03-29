const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const cta = document.querySelector(".cta");
const backDrop = document.querySelector(".backdrop");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    headerNav.classList.toggle("open");
    backDrop.classList.toggle("open");
    cta.classList.toggle("open");
})
