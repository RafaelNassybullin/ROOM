let mySwiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: false,
    centeredSlides: true,
    slideToClickedSlide: false,
    autoplayd: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
    }
});