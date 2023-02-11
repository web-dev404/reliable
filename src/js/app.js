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
var modalCard = new Swiper(".modalCard", {
  direction: 'vertical',
  navigation: false,
  spaceBetween: 25,
  slidesPerView: 4,
  allowTouchMove: false,
});
var modalCard2 = new Swiper(".modalCard2", {
  effect: "fade",
  navigation: false,
  allowTouchMove: false,
  modules: [ Thumbs, EffectFade ],
  thumbs: {
    swiper: modalCard,
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



// ----- Modal card ----- //


export default class HystModal {
  constructor(props) {
    const defaultConfig = {
      backscroll: true,
      linkAttributeName: 'data-hystmodal',
      closeOnOverlay: true,
      closeOnEsc: true,
      closeOnButton: true,
      waitTransitions: false,
      catchFocus: true,
      fixedSelectors: '*[data-hystfixed]',
      beforeOpen: () => { },
      afterClose: () => { },
    };
    this.config = Object.assign(defaultConfig, props);
    if (this.config.linkAttributeName) {
      this.init();
    }
    this._closeAfterTransition = this._closeAfterTransition.bind(this);
  }

  init() {
    this.isOpened = false;
    this.openedWindow = false;
    this.starter = false;
    this._nextWindows = false;
    this._scrollPosition = 0;
    this._reopenTrigger = false;
    this._overlayChecker = false;
    this._isMoved = false;
    this._focusElements = [
      'a[href]',
      'area[href]',
      'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
      'select:not([disabled]):not([aria-hidden])',
      'textarea:not([disabled]):not([aria-hidden])',
      'button:not([disabled]):not([aria-hidden])',
      'iframe',
      'object',
      'embed',
      '[contenteditable]',
      '[tabindex]:not([tabindex^="-"])',
    ];
    this._modalBlock = false;

    const existingShadow = document.querySelector('.modal-card__shadow');
    if (existingShadow) {
      this.shadow = existingShadow;
    } else {
      this.shadow = document.createElement('div');
      this.shadow.classList.add('modal-card__shadow');
      document.body.appendChild(this.shadow);
    }
    this.eventsFeeler();
  }

  eventsFeeler() {
    document.addEventListener('click', (e) => {
      const clickedlink = e.target.closest(`[${this.config.linkAttributeName}]`);
      if (!this._isMoved && clickedlink) {
        e.preventDefault();
        this.starter = clickedlink;
        const targetSelector = this.starter.getAttribute(this.config.linkAttributeName);
        this._nextWindows = document.querySelector(targetSelector);
        this.open();
        return;
      }
      if (this.config.closeOnButton && e.target.closest('[data-hystclose]')) {
        this.close();
      }
    });

    if (this.config.closeOnOverlay) {
      document.addEventListener('mousedown', (e) => {
        if (!this._isMoved && (e.target instanceof Element) && !e.target.classList.contains('modal-card__wrap')) return;
        this._overlayChecker = true;
      });

      document.addEventListener('mouseup', (e) => {
        if (!this._isMoved && (e.target instanceof Element) && this._overlayChecker && e.target.classList.contains('modal-card__wrap')) {
          e.preventDefault();
          this._overlayChecker = !this._overlayChecker;
          this.close();
          return;
        }
        this._overlayChecker = false;
      });
    }

    window.addEventListener('keydown', (e) => {
      if (!this._isMoved && this.config.closeOnEsc && e.which === 27 && this.isOpened) {
        e.preventDefault();
        this.close();
        return;
      }
      if (!this._isMoved && this.config.catchFocus && e.which === 9 && this.isOpened) {
        this.focusCatcher(e);
      }
    });
  }

  open(selector) {
    if (selector) {
      if (typeof (selector) === 'string') {
        this._nextWindows = document.querySelector(selector);
      } else {
        this._nextWindows = selector;
      }
    }
    if (!this._nextWindows) {
      console.log('Warning: hystModal selector is not found');
      return;
    }
    if (this.isOpened) {
      this._reopenTrigger = true;
      this.close();
      return;
    }
    this.openedWindow = this._nextWindows;
    this._modalBlock = this.openedWindow.querySelector('.modal-card__window');
    this.config.beforeOpen(this);
    this._bodyScrollControl();
    this.shadow.classList.add('modal-card__shadow--show');
    this.openedWindow.classList.add('modal-card--active');
    this.openedWindow.setAttribute('aria-hidden', 'false');
    if (this.config.catchFocus) this.focusControl();
    this.isOpened = true;
  }

  close() {
    if (!this.isOpened) {
      return;
    }
    if (this.config.waitTransitions) {
      this.openedWindow.classList.add('modal-card--moved');
      this._isMoved = true;
      this.openedWindow.addEventListener('transitionend', this._closeAfterTransition);
      this.openedWindow.classList.remove('modal-card--active');
    } else {
      this.openedWindow.classList.remove('modal-card--active');
      this._closeAfterTransition();
    }
  }

  _closeAfterTransition() {
    this.openedWindow.classList.remove('modal-card--moved');
    this.openedWindow.removeEventListener('transitionend', this._closeAfterTransition);
    this._isMoved = false;
    this.shadow.classList.remove('modal-card__shadow--show');
    this.openedWindow.setAttribute('aria-hidden', 'true');

    if (this.config.catchFocus) this.focusControl();
    this._bodyScrollControl();
    this.isOpened = false;
    this.openedWindow.scrollTop = 0;
    this.config.afterClose(this);

    if (this._reopenTrigger) {
      this._reopenTrigger = false;
      this.open();
    }
  }

  focusControl() {
    const nodes = this.openedWindow.querySelectorAll(this._focusElements);
    if (this.isOpened && this.starter) {
      this.starter.focus();
    } else if (nodes.length) nodes[0].focus();
  }

  focusCatcher(e) {
    const nodes = this.openedWindow.querySelectorAll(this._focusElements);
    const nodesArray = Array.prototype.slice.call(nodes);
    if (!this.openedWindow.contains(document.activeElement)) {
      nodesArray[0].focus();
      e.preventDefault();
    } else {
      const focusedItemIndex = nodesArray.indexOf(document.activeElement);
      if (e.shiftKey && focusedItemIndex === 0) {
        nodesArray[nodesArray.length - 1].focus();
        e.preventDefault();
      }
      if (!e.shiftKey && focusedItemIndex === nodesArray.length - 1) {
        nodesArray[0].focus();
        e.preventDefault();
      }
    }
  }

  _bodyScrollControl() {
    if (!this.config.backscroll) return;

    // collect fixed selectors to array
    const fixedSelectorsElems = document.querySelectorAll(this.config.fixedSelectors);
    const fixedSelectors = Array.prototype.slice.call(fixedSelectorsElems);

    const body = document.body;
    if (this.isOpened === true) {
      body.classList.remove('modal-card__opened');
      body.style.marginRight = '';
      fixedSelectors.forEach((el) => {
        el.style.marginRight = '';
      });
      window.scrollTo(0, this._scrollPosition);
      body.style.top = '';
      return;
    }
    this._scrollPosition = window.pageYOffset;
    const marginSize = window.innerWidth - body.clientWidth;
    body.style.top = `${-this._scrollPosition}px`;

    if (marginSize) {
      body.style.marginRight = `${marginSize}px`;
      fixedSelectors.forEach((el) => {
        el.style.marginRight = `${parseInt(getComputedStyle(el).marginRight, 10) + marginSize}px`;
      });
    }
    body.classList.add('modal-card__opened');
  }
}


const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
});