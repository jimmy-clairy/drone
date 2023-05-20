const header = document.querySelector('.header__overlay')
window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY > 50) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
})

// Effect nav-slider ---------------------------------------------------------------------------------------------
const btnToggle = document.querySelector(".btn-toggle")
const navSlider = document.querySelector(".nav-slider")
const navSliderLink = document.querySelectorAll(".nav-slider__link")

btnToggle.addEventListener("click", toggleNav)
navSliderLink.forEach(a => a.addEventListener("click", () => toggleNav()))

function toggleNav() {
    btnToggle.classList.toggle("active")
    navSlider.classList.toggle("active")
}