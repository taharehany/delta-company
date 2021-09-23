/*
Template Name: Movbok - Movies, Events, Sports Website HTML Template
Author: askbootstrap
Author URI: https://themeforest.net/user/askbootstrap
Version: 1.0
*/

(function ($) {
  "use strict"; // Start of use strict
  var btnMneu = document.getElementById('btn-mneu');
  var menuPopup = document.getElementById('menu-popup');
  var btnBerger = document.getElementById('berger-btn');
  
  btnMneu.addEventListener('click', function(){
      menuPopup.classList.toggle('toggle')
  });
  btnBerger.addEventListener('click', function(){
      menuPopup.classList.toggle('toggle-flex')
  })
  menuPopup.addEventListener('click', function(){
      menuPopup.classList.toggle('toggle-flex')
  });
  
  // Collections Slider
  $('.collections-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Osahan Slider
  $('.osahan-slider').slick({
    centerMode: true,
    centerPadding: '300px',
    autoplay: true,
    slidesToShow: 1,
    responsive: [{
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // Scroll to top button appear
  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });



  // $("body").on("contextmenu", function (e) {
  //   return false;
  // });
  // $(document).keydown(function (e) {
  //   if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
  //     return false;
  //   }
  //   if (e.which === 123) {
  //     return false;
  //   }
  //   if (e.metaKey) {
  //     return false;
  //   }
  //   //document.onkeydown = function(e) {
  //   // "I" key
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
  //     return false;
  //   }
  //   // "J" key
  //   if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
  //     return false;
  //   }
  //   // "S" key + macOS
  //   if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
  //     return false;
  //   }
  //   if (e.keyCode == 224 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
  //     return false;
  //   }
  //   // "U" key
  //   if (e.ctrlKey && e.keyCode == 85) {
  //     return false;
  //   }
  //   // "F12" key
  //   if (event.keyCode == 123) {
  //     return false;
  //   }
  // });

  //rating stars (http://auxiliary.github.io/rater/)
  $(document).ready(function () {
    $(".rating").rate();
    //or for example
    var options = {
      max_value: 5,
      step_size: 0.5,
      selected_symbol_type: 'fontawesome_star',
    }
    $(".rating").rate(options);
  });

  $(".rating_input").val($(".rating").attr("data-rate-value"))

  $(".rating").on("click", function () {
    $(".rating_input").val($(this).attr("data-rate-value"))
  })


  $(".msg_history").animate({
      scrollTop: $(".msg_history").prop("scrollHeight")
    },
    100
  );

  // (function (i, s, o, g, r, a, m) {
  //   i['GoogleAnalyticsObject'] = r;
  //   i[r] = i[r] || function () {
  //     (i[r].q = i[r].q || []).push(arguments)
  //   }, i[r].l = 1 * new Date();
  //   a = s.createElement(o),
  //     m = s.getElementsByTagName(o)[0];
  //   a.async = 1;
  //   a.src = g;
  //   m.parentNode.insertBefore(a, m)
  // })(window, document, 'script', './analytics.js', 'ga');

  // ga('create', 'UA-120909275-1', 'auto');
  // ga('send', 'pageview');

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

})(jQuery); // End of use strict