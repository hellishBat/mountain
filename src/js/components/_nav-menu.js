// Nav menu
const navBtn = document.querySelector('.js-nav-btn');
const navMenu = document.querySelector('.js-nav-menu');
const navLinks = document.querySelectorAll('.header__link');
const body = document.querySelector('body');

export const toggleNav = () => {
  if (navBtn.classList.contains('active')) {
    navBtn.classList.remove('active');
    navMenu.classList.remove('active');
    body.classList.remove('lock');

  } else {
    navBtn.classList.add('active');
    navMenu.classList.add('active');
    body.classList.add('lock');
  }
}

navBtn.addEventListener('click', () => {
  toggleNav();
});

for (let i = 0; i < navLinks.length; ++i) {
  navLinks[i].addEventListener('click', () => {
    toggleNav();
  });
}
