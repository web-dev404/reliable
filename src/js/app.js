import * as flsFunctions from './modules/functions.js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper';
import smoothScroll from './modules/smooth-scroll.js';
import modal from './modules/modal.js';

flsFunctions.isWebp();

const swiperBanner = new Swiper('.swiper-banner', {
  loop: true,
  speed: 750,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
const swiperProducts = new Swiper('.swiper-products', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  allowTouchMove: false,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.querySelectorAll('.nav__link').forEach(dropDownFunc);
function dropDownFunc(dropDown) {
  if(dropDown.classList.contains('nav__link') === true){
    dropDown.addEventListener('click', function () {
      if (this.parentElement.classList.contains('open') === true) {
          this.parentElement.classList.remove('open');
      } else {
          this.parentElement.classList.add('open');
      }
    });
  }
};