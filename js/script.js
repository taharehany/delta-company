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

  (function () {
    if ($("header").next().hasClass("main-slider")) {
      $("header").addClass("transparent")
    }
  })();

  //main slider owl
  $('.main-slider-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1,
    nav: true,
    rtl: true,
    dots: false,
    dotsEach: 3,
    smartSpeed: 1000,
    autoplaySpeed: true,
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
        items: 5,
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
    $(":root").css("--main-color", "#aa146a");
  } else {
    $(":root").css("--main-color", localStorage.getItem("main_color"));
  }

  if (!localStorage.getItem("second_color")) {
    $(":root").css("--second-color", "#2a3179");
  } else {
    $(":root").css("--second-color", localStorage.getItem("second_color"));
  }

  if (!localStorage.getItem("dark_color")) {
    $(":root").css("--dark-color", "#222");
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

  //lazyload images
  $("img").Lazy({
    scrollDirection: "vertical",
    effect: "fadeIn",
    visibleOnly: false,
  });

  // toast notification
  let toastTrigger = $('.add_to_cart');
  let toastAdding = $('#addToast');
  let toastRemoving = $('#removeToast');
  toastTrigger.on('click', function () {
    $(this).toggleClass("added").find("i").toggleClass("bi-cart bi-check2-all");

    if ($(this).hasClass("added")) {
      $(this).find("span").text("حذف من السلة");
    } else {
      $(this).find("span").text("أضف إلى السلة");
    }

    if (toastTrigger && $(this).hasClass("added")) {
      let toast = new bootstrap.Toast(toastAdding)
      toast.show();
    } else {
      let toast = new bootstrap.Toast(toastRemoving)
      toast.show();
    }
  });
});