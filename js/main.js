AOS.init();

$(window).scroll(function () {
  $("header").toggleClass("scroll", $(this).scrollTop() > 100);
});

const swiper = new Swiper(".testimonaials-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoHeight: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  $("#menu").click(function (e) {
    const idAnchor = $(e.target).attr('href')
    e.preventDefault();

    const top = $(idAnchor).offset().top;
    $("body,html").animate({
      scrollTop: top - 100
    }, 200);

  })
});

