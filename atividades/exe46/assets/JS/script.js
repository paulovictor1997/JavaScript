//menu mobile
const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("#closeButton");
const mobileMenu = document.querySelector("#mobileMenu");

hamburgerButton.addEventListener("click", ()=> {
  mobileMenu.classList.add("flex");
});

closeButton.addEventListener("click", ()=> {
  mobileMenu.classList.remove("flex");
});


//Swiper JS config
var swiper = new Swiper(".swiper", {
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
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