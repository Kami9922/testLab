import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 32,
  // centeredSlides: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    550: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 24,
    },
    1251: {
      slidesPerView: 3,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '#next',
    prevEl: '#prev',
  },
});
