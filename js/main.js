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
  $("#menu").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке

    event.preventDefault();

    //забираем идентификатор бока с атрибута href

    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь

      top = $("#article").offset().top;

    //анимируем переход на расстояние - top за 1500 мс

    $("body,html").animate({ scrollTop: top-100}, 200);
  });
});
