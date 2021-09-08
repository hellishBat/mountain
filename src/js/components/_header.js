// Header
export const scrollFunction = () => {
  const scrollTarget = document.querySelector('.js-scroll-target'); /* Watch*/
  const scrollTargetHeight = scrollTarget.scrollHeight;
  const header = document.querySelector('.header');

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
