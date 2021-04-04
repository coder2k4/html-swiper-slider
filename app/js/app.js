import {Swiper , Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation} from "swiper";

Swiper.use([Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation])

import { gsap, Power2 } from "gsap";

document.addEventListener('DOMContentLoaded', () => {


    // Swiper Text
    const swiperText = new Swiper('.slider-text' , {
        loop: false,
        speed: 2400,
        mousewheel: {
            invert: false,
        },
        pagination: {
            type: 'bullets',
            el: '.swiper-pagination',
            clickable: true
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })

	// Swiper IMG
    const swiperImg = new Swiper('.slider-img' , {
        loop: false,
        speed: 2400,
        parallax: true,
    })

    swiperImg.controller.control = swiperText;
    swiperText.controller.control = swiperImg;


    const gear = document.querySelector('.slider-gear');
    swiperText.on('slideNextTransitionStart', function () {
        gsap.to(gear, {
            transition: 2.8,
            rotation: '+=40',
            ease: Power2.easeOut
        })
    })
    swiperText.on('slideNextTransitionEnd', function () {
        gsap.to(gear, {
            transition: 2.8,
            rotation: '-=40',
            ease: Power2.easeOut
        })
    })
})
