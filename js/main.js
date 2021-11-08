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
    console.log($(".navbar-collapse"))
    if (idAnchor) {
      const top = $(idAnchor).offset().top;
      $("body,html").animate({
        scrollTop: top - 100
      }, 200);
      $(".navbar-collapse").removeClass("show").hide();
    }   else {
      // jQuery(".nav-item").closest(".navbar-nav").addClass("navbar-toggler").hide();
    }
    
  })
});

var rellax = new Rellax('.rellax');

// $(document).ready(function() {
//   $('.nav_link').click(function(event) {
//       $('.header, .navbar').removeClass('active');
//       $('body').removeClass('lock')
//   });
// });

// jQuery(document).on("click",".nav-item", function(){

//     jQuery(".nav-item").closest(".navbar-nav").removeClass("menu-toggle-open").hide();
// });

