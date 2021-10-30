$(document).ready(function () {
  // Инициализация слайдера => //
  const heroSlider = new Swiper(".hero-slider", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    direction: "horizontal",
    loop: true,

    navigation: {
      nextEl: ".slider__button--next",
      prevEl: ".slider__button--prev",
    },
  });
  // <= Инициализация слайдера //
});
