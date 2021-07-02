new Swiper('.partners-slider', {
    spaceBetween: 5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true,
    autoHeight: true,
    preloadImage: false,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        490: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 1,
            spaceBetween: 30
        }
    },
    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false
    },
    watchSlidesProgress: true,
    watchSlideVisibility: true
});

new Swiper('.partners-slider-company', {
    navigation: {
        nextEl: '.swiper-button-partners-next',
        prevEl: '.swiper-button-partners-prev'
    },
    slidesPerView: 2,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 2
        },
        490: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 6
        }
    },
    autoplay: {
        delay: 2000
    }
});
