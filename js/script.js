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
  $(".main-slider-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 12000,
    items: 1,
    nav: false,
    dots: true,
    rtl: true,
    smartSpeed: 1000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 1,
        nav: true,
      },

      992: {
        items: 1,
      }
    }
  });

  //search 
  $('.nice-select').niceSelect();

  //why slider owl
  $(".feature-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    items: 4,
    nav: true,
    dots: false,
    rtl: true,
    smartSpeed: 1000,
    margin: 20,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 2,
      },

      992: {
        items: 4,
      },
      1200: {
        items: 4,
      }
    }
  });

  //clients slider owl
  $(".clients-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 5,
    nav: false,
    dots: false,
    rtl: true,
    margin: 50,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 2,
      },
      575: {
        items: 3,
      },
      768: {
        items: 4,
      },

      992: {
        items: 6,
      }
    }
  });

  //testimonial slider owl
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 3,
    nav: false,
    dots: true,
    rtl: true,
    smartSpeed: 1000,
    margin: 20,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      575: {
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

  //related cars slider owl
  $(".related-cars-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 4,
    nav: false,
    dots: true,
    rtl: true,
    smartSpeed: 1000,
    margin: 20,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 2,
      },

      992: {
        items: 4,
      },
      1200: {
        items: 4,
      }
    }
  });

  //single car slider
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    autoplay: true,
    autoplaySpeed: 1000,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '30px',
    responsive: [{
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
  });

  //to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $("#toTop").fadeIn(100);
    } else {
      $("#toTop").fadeOut(100);
    }
  });

  $("#toTop").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 0);
  });

  //store theme colors in local storage 
  if (!localStorage.getItem("main_color")) {
    $(":root").css("--main-color", "#C69531");
  } else {
    $(":root").css("--main-color", localStorage.getItem("main_color"));
  }

  if (!localStorage.getItem("second_color")) {
    $(":root").css("--second-color", "#155CB4");
  } else {
    $(":root").css("--second-color", localStorage.getItem("second_color"));
  }

  if (!localStorage.getItem("dark_color")) {
    $(":root").css("--dark-color", "#363636");
  } else {
    $(":root").css("--dark-color", localStorage.getItem("dark_color"));
  }

  //lazyload images
  $("img").Lazy({
    scrollDirection: "vertical",
    effect: "fadeIn",
    visibleOnly: false,
  });

  //tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  //counter up
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
    offset: 50,
    beginAt: 100,
  });
});

$(window).on("load", function () {
  $('.loader').delay(500).fadeOut(500);
});

//offers counter
function handleTickInit1(tick) {
  var nextYear = new Date().getFullYear() + 1;
  Tick.count.down(2021 + "-11-22 24:00:00").onupdate = function (value) {
    tick.value = value;
  };
}
function handleTickInit2(tick) {
  var nextYear = new Date().getFullYear() + 1;
  Tick.count.down(2021 + "-11-25 24:00:00").onupdate = function (value) {
    tick.value = value;
  };
}
function handleTickInit3(tick) {
  var nextYear = new Date().getFullYear() + 1;
  Tick.count.down(2021 + "-11-24 24:00:00").onupdate = function (value) {
    tick.value = value;
  };
}
function handleTickInit4(tick) {
  var nextYear = new Date().getFullYear() + 1;
  Tick.count.down(2021 + "-11-27 24:00:00").onupdate = function (value) {
    tick.value = value;
  };
}