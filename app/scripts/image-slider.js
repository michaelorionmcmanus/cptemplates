define([
  'jquery',
  'swipe'
], function($) {
  'use strict';
  var nav = $("[data-slider-nav]");
  var navCircles = $("[data-slider-nav] li");
  var slider = $("[data-slider]").Swipe({
    transitionEnd: function(index, elem) {
      navCircles.removeClass('active');
      navCircles.filter('[data-slide-to="'+ index +'"]').addClass('active');
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
});