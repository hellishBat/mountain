// Header
"use strict"

export const scrollFunction = () => {
  let scrollTarget = document.querySelector('.js-scroll-target'); /* Watch*/
  let scrollTargetHeight = scrollTarget.scrollHeight;
  let header = document.querySelector('.header');

  if (document.body.scrollTop > scrollTargetHeight || document.documentElement.scrollTop > scrollTargetHeight) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

window.addEventListener('scroll', () => {
  scrollFunction();
});

window.addEventListener('load', () => {
  scrollFunction();
});
