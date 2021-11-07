$(document).ready(function () {
  "use strict";

  //show nav link underline 
  $(".nav-link").on("mouseleave", function () {
    $(this).addClass("change")
  });
  $(".nav-link").on("mousemove", function () {
    $(this).removeClass("change")
  });


  // fixed header
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if (scroll > 1) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });

  //main slider owl
  $('.main-slider-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    items:1,
    nav: true,
    dots: false,
    navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
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
    $(":root").css("--main-color", "#00a54f");
  } else {
    $(":root").css("--main-color", localStorage.getItem("main_color"));
  }

  if (!localStorage.getItem("second_color")) {
    $(":root").css("--second-color", "#8dd7f7");
  } else {
    $(":root").css("--second-color", localStorage.getItem("second_color"));
  }

  if (!localStorage.getItem("dark_color")) {
    $(":root").css("--dark-color", "#222222");
  } else {
    $(":root").css("--dark-color", localStorage.getItem("dark_color"));
  }

  //lazyload images
  $("img").Lazy({
    scrollDirection: "vertical",
    effect: "fadeIn",
    visibleOnly: false,
  });
});