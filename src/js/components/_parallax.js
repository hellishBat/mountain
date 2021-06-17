// Parallax
"use strict"

// Waiting for content loaded
export default window.onload = () => {
  const parallax = document.querySelector('.parallax');

  if (parallax) {
    const contentHeader = document.querySelector('.parallax__header');
    const contentText = document.querySelector('.parallax__content-wrapper');

    const mountains = document.querySelector('.images-parallax__scene--mountains');
    const snow = document.querySelector('.images-parallax__scene--snow');
    const human = document.querySelector('.images-parallax__scene--human');

    // Coefficients
    const forMountains = 32;
    const forSnow = 16;
    const forHuman = 8;

    // Anim speed
    const speed = 0.05;

    // Declaring variables
    let positionX = 0,
      positionY = 0;
    let coordXprocent = 0,
      coordYprocent = 0;

    const setMouseParallaxStyle = () => {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      // Setting styles
      mountains.style.cssText = `transform: translate(${positionX / forMountains}%,${positionY / forMountains}%);`;
      snow.style.cssText = `transform: translate(${positionX / forSnow}%,${positionY / forSnow}%);`;
      human.style.cssText = `transform: translate(${positionX / forHuman}%,${positionY / forHuman}%);`;

      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", (e) => {
      // Getting block width and height
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      // Zero in the middle
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      // Getting percents
      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
    });

    // Parallax on scroll
    let thresholdSets = [];
    for (let i = 0; i <= 1.0; i += 0.005) {
      thresholdSets.push(i);
    }
    const callback = (entries, observer) => {
      const scrollTopPercent = window.pageYOffset / parallax.offsetHeight * 100;
      setParallaxItemsStyle(scrollTopPercent);
    };
    const observer = new IntersectionObserver(callback, {
      threshold: thresholdSets
    });

    observer.observe(document.querySelector('.content'));

    const setParallaxItemsStyle = (scrollTopPercent) => {
      contentHeader.style.cssText = `transform: translate(0%,-${scrollTopPercent / 20}%);`;
      contentText.style.cssText = `transform: translate(0%,-${scrollTopPercent / 20}%);`;
      mountains.parentElement.style.cssText = `transform: translate(0%,-${scrollTopPercent / 15}%);`;
      snow.parentElement.style.cssText = `transform: translate(0%,-${scrollTopPercent / 10}%);`;
      human.parentElement.style.cssText = `transform: translate(0%,-${scrollTopPercent / 5}%);`;
    }
  }
}
