$(document).ready(function () {
  "use strict";

  $(".side-navigation .sub-menu > a").click(function (e) {
    $(".side-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
      e.stopPropagation()
  })

  //fixed header
  // $(window).scroll(function () {
  //   let scroll = $(window).scrollTop();

  //   if (scroll >= 5) {
  //     $("header .navbar.main-nav").addClass("fixed");
  //   } else {
  //     $("header .navbar.main-nav").removeClass("fixed");
  //   }
  // });

  //dropdown dropkick select
  $(".select").dropkick({
    mobile: true
  });

  //toast notification
  let toastTrigger = document.getElementById('addToFavBtn')
  let toastLiveExample = document.getElementById('favToast')
  if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
      let toast = new bootstrap.Toast(toastLiveExample)
      toast.show()
    })
  }

  //validate form
  (function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
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

  //check if input file is more than ... images
  $(".advertise input[type='file']").change(function () {
    let fileUpload = $(".advertise input[type='file']");
    // console.log(fileUpload[0].files[0]);
    if (parseInt(fileUpload.get(0).files.length) > 2) {
      // alert("You can only upload a maximum of 5 files");
      $(this).parent().find(".invalid-tooltip").css("display", "block").text("must be less than 3 images")
      fileUpload.val("");
    } else {
      $(this).parent().find(".invalid-tooltip").css("display", "none")
    }
  });

  $('a[data-slide]').click(function (e) {
    e.preventDefault();
    let slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });

  //main slider owl
  $('.main-slider-carousel').owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 1,
    nav: true,
    dots: false,
    lazyLoad: true,
    navText: ["<i class='bi bi-arrow-left'></i>", "<i class='bi bi-arrow-right'></i>"],
    responsive: {
      600: {
        items: 3
      }
    }
  });
});