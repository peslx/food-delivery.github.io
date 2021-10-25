$(document).ready(function () {
  // Инициализация слайдера => //
  const heroSlider = new Swiper(".hero-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    navigation: {
      nextEl: ".hero-slider__button--next",
      prevEl: ".hero-slider__button--prev",
    },
  });
  // <= Инициализация слайдера //
});
