import * as flsFunction from "../js/modules/function.js"

flsFunction.testWebP();

import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

// Now you can use Swiper
const swiper = new Swiper('.swiper', {
  // Install modules
  modules: [Navigation, Pagination, Scrollbar],
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // ...
});
