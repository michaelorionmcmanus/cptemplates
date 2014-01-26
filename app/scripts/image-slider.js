define([
  'jquery',
  'swipe'
], function($) {
  'use strict';
  var nav = $("[data-slider-nav]");
  var navCircles = $("[data-slider-nav] li");
  var slides = $("[data-slider]").find('.swipe-wrap > div');
  var firstSlide;
  var currentSlide;

  function adjustHeight(elem) {
    var $elem = $(elem);
    var imgMaxHeight =  $( window ).height() * 0.65;
    // Set an absolute max image height;
    $elem.find('img').css('max-height', imgMaxHeight);
    var parent = $elem.parent();
    var newHeight = $elem.outerHeight();
    parent.css('height', newHeight + 'px');
  };

  if(slides.length > 0 && slides.first()) {
    firstSlide = slides.first();
    currentSlide = firstSlide;
    firstSlide.css('width', '100%');
    adjustHeight(firstSlide);
    firstSlide.css('width', '50%');
  }

  var slider = $("[data-slider]").Swipe({
    transitionEnd: function(index, elem) {
      navCircles.removeClass('active');
      navCircles.filter('[data-slide-to="'+ index +'"]').addClass('active');
      currentSlide = elem;
    },
    callback: function(index, elem) {
      adjustHeight(elem);
    }
  });

  nav.on('click', function(e) {
    var $target = $(e.target),
      slideTo;

    if($target[0].tagName === 'LI') {
      slideTo = $target.data('slide-to');
    }

    if($target[0].tagName === 'IMG') {
      slideTo = $target.parent().data('slide-to');
    }

    if(slideTo !== false && slideTo > -1) {
      slider.data('Swipe').slide(slideTo);
      navCircles.removeClass('active');
      $target.addClass('active');
    }

  });

  var didResize = false;

  $(window).resize(function() {
    didResize = true;
  });

  setInterval(function() {
    if ( didResize ) {
      didResize = false;
      if(currentSlide) {
        adjustHeight(currentSlide);
      }
      // Check your page position and then
      // Load in more results
    }
  }, 250);
});