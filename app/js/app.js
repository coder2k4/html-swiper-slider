import {Swiper , Parallax, Mousewheel, Controller} from "swiper";

Swiper.use([Parallax, Mousewheel, Controller])

document.addEventListener('DOMContentLoaded', () => {


    // Swiper Text
    const swiperText = new Swiper('.slider-text' , {
        loop: false,
        speed: 2400,
        mousewheel: {
            invert: false
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

})
