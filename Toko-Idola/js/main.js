
// main.js
// Hero Carousel
const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  autoplay: { delay: 5000 },
});

// Flash Sale Carousel
const flashSaleSwiper = new Swiper('.flash-sale-swiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  breakpoints: {
    0: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
  }
});

// Testimoni Carousel
const testimoniSwiper = new Swiper('.testimoni-swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: { el: '.swiper-pagination', clickable: true },
  autoplay: { delay: 4000 },
});
