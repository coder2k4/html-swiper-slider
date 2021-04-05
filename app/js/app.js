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
        pagination: {
            type: "custom",
            el: '.slider-pagination-count .total',
            renderCustom: function (swiper, current, total) {
                return `0${total}`
            }
        }
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


    let curnum = document.querySelector('.slider-pagination-count .current'),
        pagcur = document.querySelector('.slider-pagination-current')

    swiperText.on('slideChange', function () {
        let indx = swiperText.realIndex + 1
        gsap.to(curnum, {
            transition: .2,
            y: -10,
            opacity: 0,
            ease: Power2.easeOut,
            onComplete: function () {
                gsap.to(curnum , {
                    y: 20,
                    onComplete: ()=>{
                        gsap.to(curnum, {
                            transition: .2,
                            y: 0,
                            opacity: 1,
                            ease: Power2.easeOut,
                        })
                        curnum.innerHTML = indx;
                        pagcur.innerHTML = indx;
                    }
                })
            }
        })

    })
})
