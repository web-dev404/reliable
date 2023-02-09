import * as flsFunctions from "./modules/functions.js";
import Swiper from "swiper";
import { Navigation, EffectFade } from "swiper";
import smoothScroll from "./modules/smooth-scroll.js";
import AOS from "aos";

flsFunctions.isWebp();
const swiper = new Swiper(".recently__swiper", {
	slidesPerView: 1,
	spaceBetween: 8,
	modules: [Navigation],
	navigation: {
		nextEl: ".products__arrow-next",
		prevEl: ".products__arrow-prev",
	},
	breakpoints: {
		500: {
			slidesPerView: 2,
		},
		1000: {
			slidesPerView: 4,
		},
	},
});
AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
	initClassName: "aos-init", // class applied after initialization
	animatedClassName: "aos-animate", // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 800, // values from 0 to 3000, with step 50ms
	easing: "ease", // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// const swiper = new Swiper('.banners-slider', {
// 	loop: true,
// 	navigation: {
// 		nextEl: '.swiper-button-next1',
// 		prevEl: '.swiper-button-prev1'
// 	},
// 	modules: [Navigation, EffectFade],
// 	autoHeight: true,
// 	speed: 500,
// 	slidesPerView: 1,
// 	effect: 'fade'
// });
