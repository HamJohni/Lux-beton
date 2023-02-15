var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4.5,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,

});
