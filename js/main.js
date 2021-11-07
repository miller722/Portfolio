AOS.init();
function Init(){
  testimonialsSlider();
}
Init();

$(window).scroll(function () {
  $("header").toggleClass("scroll", $(this).scrollTop() > 100);
});

function testimonialsSlider(){
  new Swiper('.JS-testimonials-swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      el: ".swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Enable debugger
    fadeEffect:{
      crossFade: true
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
  });
}

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

var rellax = new Rellax('.rellax');
