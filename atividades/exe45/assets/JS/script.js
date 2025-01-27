var swiper = new Swiper(".swiper", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        // when window width is >= 320px
        648: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        760: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1100: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
  });