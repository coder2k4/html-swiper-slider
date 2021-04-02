import {Swiper , Parallax, Mousewheel} from "swiper";

Swiper.use([Parallax, Mousewheel])

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
    const swiper = new Swiper('.slider-img' , {
        loop: false,
        speed: 2400,
        parallax: true,
        mousewheel: {
            invert: false
        }
    })

})
