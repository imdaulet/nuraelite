var swiper = new Swiper(".team__swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".team__next",
        prevEl: ".team__prev",
    },
    autoplay: {
        delay: 2000
    },
});
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });