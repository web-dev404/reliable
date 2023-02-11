import * as flsFunctions from './modules/functions.js';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Thumbs } from 'swiper';
import smoothScroll from './modules/smooth-scroll.js';

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
    clickable: 'true',
  },
});
const swiperProducts = new Swiper('.swiper-products', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  allowTouchMove: true,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1201: {
      allowTouchMove: false,
    },
  }
});
const swiperNews = new Swiper('.swiper-news', {
  loop: true,
  spaceBetween: 12,
  slidesPerView: 1,
  slidesPerGroup: 1,
  allowTouchMove: true,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1201: {
      allowTouchMove: false,
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 3,
    },
    481: {
      slidesPerView: 2,
    },
  },
});

var productСard = new Swiper(".productСard", {
  direction: 'vertical',
  navigation: false,
  spaceBetween: 10,
  slidesPerView: 4,
  allowTouchMove: false,
});
var productСard2 = new Swiper(".productСard2", {
  effect: "slide",
  navigation: false,
  spaceBetween: 10,
  allowTouchMove: true,
  modules: [ Thumbs, EffectFade ],
  thumbs: {
    swiper: productСard,
  },
  breakpoints: {
    1025: {
      allowTouchMove: false,
      effect: "fade",
    },
  }
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

document.querySelectorAll('.dropdown-toggle').forEach(dropDownFilter);
function dropDownFilter(dropDown) {
    if(dropDown.classList.contains('click-dropdown') === true){
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();
            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
                this.parentElement.classList.remove('dropdown-open');
                this.nextElementSibling.classList.remove('dropdown-active');

            } else {
                closeDropdown();
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }
};
window.addEventListener('click', function (e) {
    if (e.target.closest('.dropdown-container') === null) {
        closeDropdown();
    }
});


function closeDropdown() {
    document.querySelectorAll('.dropdown-container').forEach(function (container) {
        container.classList.remove('dropdown-open')
    });
    document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
        menu.classList.remove('dropdown-active');
    });
}

const navBtn = document.querySelector('.burger-nav'),
      navWrapper = document.querySelector('.nav'),
      body = document.body;

navBtn.addEventListener('click', () => {
  navWrapper.classList.toggle('active');
  body.classList.toggle('stop-scroll');
});

window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.nav') && !target.closest('.header')) {
    navWrapper?.classList.remove('active');
  body.classList.remove('stop-scroll');
  }
});


// ----- filters ----- //

const filterBtn = document.querySelector('.catalog__filters-button'),
      filterClose = document.querySelector('.catalog__filters-close'),
      filterWrapper = document.querySelector('.catalog__filters');

filterBtn?.addEventListener('click', () => {
  filterWrapper.classList.add('active');
  body.style.overflow = 'hidden';
});

filterClose?.addEventListener('click', () => {
  filterWrapper.classList.remove('active');
  body.style.overflow = '';
});


// ----- rating ----- //

class RatingReviews {
  constructor(dom) {
    dom.innerHTML = '<div class="reviews-rating__box" style="width: 149px; height: 27px;"></div>';
    this.div = dom.querySelector('div');
    for(var i = 0; i < 5; i++)
      this.div.innerHTML += `<div data-value="${i+1}">`;
    this.render();
  }

  change(e) {
    let value = e.target.dataset.value;
    value && (this.svg.parentNode.dataset.value = value);
    this.render();
  }

  render() {
    this.div.querySelectorAll('div').forEach(star => {
      let on = +this.div.parentNode.dataset.value >= +star.dataset.value;
      star.classList.toggle('active', on);
    });
  }
}

document.querySelectorAll('.reviews-rating').forEach(dom => new RatingReviews(dom));


class RatingProduct {
  constructor(dom) {
    dom.innerHTML = '<div class="product-rating__box" style="width: 88px; height: 16px;"></div>';
    this.div = dom.querySelector('div');
    for(var i = 0; i < 5; i++)
      this.div.innerHTML += `<div data-value="${i+1}">`;
    this.render();
  }

  change(e) {
    let value = e.target.dataset.value;
    value && (this.svg.parentNode.dataset.value = value);
    this.render();
  }

  render() {
    this.div.querySelectorAll('div').forEach(star => {
      let on = +this.div.parentNode.dataset.value >= +star.dataset.value;
      star.classList.toggle('active', on);
    });
  }
}

document.querySelectorAll('.product-rating').forEach(dom => new RatingProduct(dom));


class RatingProductCard {
  constructor(dom) {
    dom.innerHTML = '<div class="product-card-rating__box" style="width: 88px; height: 16px;"></div>';
    this.div = dom.querySelector('div');
    for(var i = 0; i < 5; i++)
      this.div.innerHTML += `<div data-value="${i+1}">`;
    this.render();
  }

  change(e) {
    let value = e.target.dataset.value;
    value && (this.svg.parentNode.dataset.value = value);
    this.render();
  }

  render() {
    this.div.querySelectorAll('div').forEach(star => {
      let on = +this.div.parentNode.dataset.value >= +star.dataset.value;
      star.classList.toggle('active', on);
    });
  }
}

document.querySelectorAll('.product-card-rating').forEach(dom => new RatingProductCard(dom));