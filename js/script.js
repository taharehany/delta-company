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

  //main slider owl
  $('.main-slider-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 1,
    nav: true,
    rtl: true,
    dots: false,
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
  let toastAdding = $('#addFavToast');
  let toastRemoving = $('#removeFavToast');
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