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
  $(".main-slider-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    items: 1,
    nav: true,
    dots: false,
    rtl: true,
    smartSpeed: 2000,
    // animateOut: "slideOutUp",
    // animateIn: "slideOutUp",
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

  //team slider owl
  $(".team-slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    items: 4,
    margin: 20,
    nav: false,
    dots: true,
    rtl: true,
    smartSpeed: 1000,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      }
    }
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

  //validate form
  (function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll(".needs-validation")

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener("submit", function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } else {
            event.preventDefault()
          }
          form.classList.add("was-validated")
        }, false)
      })
  })();

  //store theme colors in local storage 
  if (!localStorage.getItem("main_color")) {
    $(":root").css("--main-color", "#e3ac2b");
  } else {
    $(":root").css("--main-color", localStorage.getItem("main_color"));
  }

  if (!localStorage.getItem("dark_color")) {
    $(":root").css("--dark-color", "#191919");
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

$(window).on("load", function () {
  $('.loader').delay(500).fadeOut(500);

  AOS.init({
    duration: 800,
  });
});