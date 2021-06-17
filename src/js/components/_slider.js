// Slider
"use strict"

import Swiper, {
  Pagination,
  Keyboard,
} from 'swiper';

Swiper.use([Pagination, Keyboard]);

export const testimonialsSlider = new Swiper('.js-testimonials-slider', {
  loop: true,
  slidesPerView: 1,
  speed: 600,
  pagination: {
    el: '.js-testimonials-pagination',
    clickable: true,
  },
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
