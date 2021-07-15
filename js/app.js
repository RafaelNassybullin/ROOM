let burger = document.querySelector('.burger');
let burger2 = document.querySelector('.burger2');
let menu = document.querySelector('.nav-menu');

burger.addEventListener('click', ()=>{
    menu.style.top = '0'
})
burger2.addEventListener('click', ()=>{
    menu.style.top = -824+'px';
})

let mySwiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: false,
    centeredSlides: true,
    slideToClickedSlide: false,
    autoplay: {
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

