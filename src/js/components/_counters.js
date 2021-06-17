// Counters
"use strict"

import anime from 'animejs/lib/anime.es.js';

export const countup = (el, target) => {
  let data = {
    count: 0
  };
  anime({
    targets: data,
    count: [0, target],
    duration: 2000,
    round: 1,
    delay: 200,
    easing: "cubicBezier(.17,.67,.83,.67)",
    update() {
      el.innerText = data.count;
    }
  });
}

export const makeCountup = (el) => {
  const text = el.textContent;
  const target = parseInt(text, 10);

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        countup(el, target);
        io.unobserve(entry.target);
      }
    });
  });

  io.observe(el);
}

export const els = document.querySelectorAll(".about__number");

els.forEach(makeCountup);
