$(document).ready(function () {
  "use strict";

  //dropdown 
  $(".select").dropkick({
    mobile: true
  });


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
  });

  $('a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
  });

  //video
  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),
    // Container element
    container: document.querySelector('body'),
    // Resize
    resize: true,
    // autoplay: false,
    isMobile: window.matchMedia('(max-width: 768px)').matches,
    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),
    // Array of objects containing the src and type
    // of different video formats to add
    src: [{
        src: 'videos/video.mp4',
        type: 'video/mp4'
      },
      {
        src: 'videos/video.webm',
        type: 'video/webm;codecs="vp8, vorbis"'
      }
    ],
    // What to do once video loads (initial frame)
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
  //video

  /* Hero Video Header - Mouse Effect */
  var image,
    appending,
    imageCanvas,
    imageCanvasContext,
    lineCanvas,
    lineCanvasContext,
    pointLifetime,
    points = [];

  function start() {
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', resizeCanvases);
    appending.appendChild(imageCanvas);
    resizeCanvases();
    tick();
  }

  function onMouseMove(event) {
    var scroll = 0;
    if (!$(".search-popup").length)
      scroll = $(document).scrollTop();
    points.push({
      time: Date.now(),
      x: event.clientX,
      y: event.clientY + scroll
    });
  }

  function resizeCanvases() {
    if (!("disableRubber" in window)) {
      setTimeout(function () {
        var c = setInterval(function () {
          if ($(".hero-header canvas").length) {
            imageCanvas.width = lineCanvas.width = $(".hero-header canvas").parent().width();
            imageCanvas.height = lineCanvas.height = $(".hero-header canvas").parent().height();
          }
        }, 1);
        setTimeout(function () {
          clearInterval(c);
        }, 200);
      }, 200);
    }
  }

  function tick() {
    points = points.filter(function (point) {
      var age = Date.now() - point.time;
      return age < pointLifetime;
    });
    drawLineCanvas();
    drawImageCanvas();
    requestAnimationFrame(tick);
  }

  function drawLineCanvas() {
    var minimumLineWidth = 150;
    var maximumLineWidth = 150;
    var lineWidthRange = maximumLineWidth - minimumLineWidth;
    var maximumSpeed = 50;
    lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
    lineCanvasContext.lineCap = 'round';
    lineCanvasContext.shadowBlur = 20;
    lineCanvasContext.shadowColor = '#000';
    for (var i = 1; i < points.length; i++) {
      var point = points[i];
      var previousPoint = points[i - 1];
      var distance = getDistanceBetween(point, previousPoint);
      var speed = Math.max(0, Math.min(maximumSpeed, distance));
      var percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
      lineCanvasContext.lineWidth = minimumLineWidth + percentageLineWidth * lineWidthRange;
      var age = Date.now() - point.time;
      var opacity = (pointLifetime - age) / pointLifetime;
      lineCanvasContext.strokeStyle = 'rgba(0, 0, 0, ' + opacity + ')';
      lineCanvasContext.beginPath();
      lineCanvasContext.moveTo(previousPoint.x, previousPoint.y);
      lineCanvasContext.lineTo(point.x, point.y);
      lineCanvasContext.stroke();
    }
  }

  function getDistanceBetween(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }

  function drawImageCanvas() {
    var top = 0,
      left = 0;
    var width = imageCanvas.width;
    var height = imageCanvas.width / image.naturalWidth * image.naturalHeight;
    if (height < imageCanvas.height) {
      width = imageCanvas.height / image.naturalHeight * image.naturalWidth;
      height = imageCanvas.height;
      left = -(width - imageCanvas.width) / 2;
    } else {
      top = -(height - imageCanvas.height) / 2;
    }

    imageCanvasContext.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    imageCanvasContext.globalCompositeOperation = 'source-over';
    imageCanvasContext.drawImage(image, left, top, width, height);
    imageCanvasContext.globalCompositeOperation = 'destination-in';
    imageCanvasContext.drawImage(lineCanvas, 0, 0);

  }

  function addCanvasEffect() {
    image = document.querySelector('.clear-image');
    appending = document.querySelector('.bg-container');
    imageCanvas = document.createElement('canvas');
    imageCanvasContext = imageCanvas.getContext('2d');
    lineCanvas = document.createElement('canvas');
    lineCanvasContext = lineCanvas.getContext('2d');
    pointLifetime = 1000;
    points = [];
    if (image.complete) {
      start();
    } else {
      image.onload = start;
    }
  }

  function setCanvasEffect() {
    if (!("disableRubber" in window)) {
      var href = window.location.href;
      var dir = href.substring(0, href.lastIndexOf('/')) + "/";
      var bgImage;
      var cElement;
      if ($(".h-video").length)
        cElement = $(".h-video");
      else if ($(".h-slideshow").length)
        cElement = $(".h-slideshow");
      else if ($(".hero-header").not(".login-popup,.review-popup,.pm-popup").length)
        cElement = $(".hero-header").not(".login-popup,.review-popup,.pm-popup");
      bgImage = cElement.find(".hero-image").css("background-image");
      if (bgImage !== "none") {
        bgImage = bgImage.replace(dir, "");
        bgImage = bgImage.replace(' ', "").replace(' ', "").replace(' ', "").replace(' ', "").replace(' ', "");
        bgImage = bgImage.replace('url(\"', "").replace("url(\'", "").replace("url(", "").replace('")', "");
        bgImage = bgImage.replace("')", "").replace(")", "");
        cElement
          .append('<div class="bg-container bg-media"><img class="clear-image" src="' + bgImage + '"></div>');
        addCanvasEffect();
      }
    }
  }

  /* Prepare Interface */
  var he_ = $(".hero-header");
  he_.prepend('<div class="hero-image"></div>');
  he_.prepend('<div class="overlay"></div>');
  he_.prepend('<div class="dot-overlay"></div>');
  setCanvasEffect();
});