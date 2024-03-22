menu = document.querySelector(".menu");
menu.onclick = function () {
  navlist = document.querySelector(".navlist");
  navlist.classList.toggle("active");
};
const swiper = new Swiper(".production-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
  navigation: {
    nextEl: ".production-swiper-button-next",
    prevEl: ".production-swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
