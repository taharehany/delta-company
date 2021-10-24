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
  $(".main-slider-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    items: 1,
    nav: true,
    dots: false,
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

  //clients slider owl
  $(".clients-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 5,
    nav: false,
    dots: false,
    margin: 50,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },

      992: {
        items: 5,
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
    scrollDirection: "vertical",
    effect: "fadeIn",
    visibleOnly: true,
  });



  //bmi calculate
  let age = $(".age");
  let height = $(".height");
  let weight = $(".weight");
  let gender = $(".dk-selected");
  let bmiForm = $(".bmi-form form");

  $(".calculate").on("click", function (e) {
    validateForm();
  });

  function validateForm() {
    if (age.val() == "" || height.val() == "" || weight.val() == "" || !gender.attr("aria-activedescendant")) {
      // alert("All fields are required!");
    } else {
      countBmi();
    }
  }

  function countBmi() {
    let bmiArray = [age.val(), height.val(), weight.val()];
    if (gender.attr("aria-activedescendant") == "dk0-male") {
      bmiArray.push("male");
    } else if (gender.attr("aria-activedescendant") == "dk0-female") {
      bmiArray.push("female");
    }

    // bmiForm.reset();

    let bmiEquation = Number(bmiArray[2]) / (Number(bmiArray[1]) / 100 * Number(bmiArray[1]) / 100);

    let result = "";
    if (bmiEquation < 18.5) {
      result = "Underweight";
    } else if (18.5 <= bmiEquation && bmiEquation <= 24.9) {
      result = "Healthy";
    } else if (25 <= bmiEquation && bmiEquation <= 29.9) {
      result = "Overweight";
    } else if (30 <= bmiEquation && bmiEquation <= 34.9) {
      result = "Obese";
    } else if (35 <= bmiEquation) {
      result = "Extremely obese";
    }

    $(".bmi-info .bmi-text").text(result);
    $(".bmi-info .bmi-number").text(parseFloat(bmiEquation).toFixed(2));
  }
});

$(window).on("load", function () {
  $('.loader').delay(500).fadeOut(500);
});