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
    var $target = $(e.target);
    if($target[0].tagName === 'LI') {
      var slideTo = $target.data('slide-to');
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