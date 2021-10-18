$(document).ready(function () {
  "use strict";

  // fixed header
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if (scroll > 1) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });

  //dropdown dropkick select
  $(".select").dropkick({
    mobile: true
  });

  //main slider owl
  $('.main-slider-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 400000,
    items:1,
    nav: true,
    dots: false,
    // animateOut: 'slideOutUp',
    // animateIn: 'slideOutUp',
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      
      992: {
        items: 1,
      }
    }
  });

  //to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $('#toTop').fadeIn(100);
    } else {
      $('#toTop').fadeOut(100);
    }
  });

  $("#toTop").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 0);
  });

  //store theme colors in local storage 
  if (!localStorage.getItem("main_color")) {
    $(":root").css("--main-color", "#f00");
  } else {
    $(":root").css("--main-color", localStorage.getItem("main_color"));
  }

  if (!localStorage.getItem("dark_color")) {
    $(":root").css("--dark-color", "#000");
  } else {
    $(":root").css("--dark-color", localStorage.getItem("dark_color"));
  }

  //change theme colors on choose one
  $(".main-color li").on("click", function () {
    localStorage.setItem("main_color", $(this).data("color"));
    $(":root").css("--main-color", localStorage.getItem("main_color"));
  });

  $(".dark-color li").on("click", function () {
    localStorage.setItem("dark_color", $(this).data("color"));
    $(":root").css("--dark-color", localStorage.getItem("dark_color"));
  });

  //change colors on pick color from input
  $(".main-color .pick-color").on("change", function () {
    $(":root").css("--main-color", $(this).val());
    localStorage.setItem("main_color", $(this).val());
  });

  $(".dark-color .pick-color").on("change", function () {
    $(":root").css("--dark-color", $(this).val());
    localStorage.setItem("dark_color", $(this).val());
  });

  //show setting theme colors on click icon
  $(".theme-colors .show-icon").on("click", function () {
    $(".theme-colors").toggleClass("move");
  });

  //lazyload images
  $("img").Lazy({
    scrollDirection: 'vertical',
    effect: 'fadeIn',
    visibleOnly: true,
  });
});