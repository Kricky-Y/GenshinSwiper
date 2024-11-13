'use strict'; 

{
const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 8,
});

const swiper1 = new Swiper ('.swiper1', {
  thumbs: {
    swiper: swiper2,
  },
});


}