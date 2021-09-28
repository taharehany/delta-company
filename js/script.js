$(document).ready(function () {
  "use strict";

  //fixed header
  //$(window).scroll(function () {
  //  let scroll = $(window).scrollTop();

  //  if (scroll >= 5) {
  //    $("header .navbar.main-nav").addClass("fixed");
  //  } else {
  //    $("header .navbar.main-nav").removeClass("fixed");
  //  }
  //});

  //dropdown dropkick select
  $(".select").dropkick({
    mobile: true
  });

  //validate form
  (function () {
    //Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')

    //Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })();

  //main slider owl
  $('.main-slider-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 1,
    nav: true,
    rtl: true,
    dots: false,
    lazyLoad: true,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      992: {
        items: 3,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },
      0: {
        items: 1,
        nav: false,
        dots: true,
      }
    }
  });

  //search part
  // $("#search-input").on("keyup", function () {
  //   // Search text
  //   var text = $(this).val();

  //   // Hide all content class element
  //   $('.box').hide();

  //   // Search 
  //   $('.box .subtitle:contains("' + text + '")').closest('.box').show();
  // });
});