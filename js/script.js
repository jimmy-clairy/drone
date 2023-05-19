const header = document.querySelector('.header__overlay')
window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    if (window.scrollY > 50) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
})