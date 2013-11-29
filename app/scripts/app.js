/*global define */
define(['jquery'], function ($) {
  'use strict';

  function searchOn() {
    $('.search-container').addClass('search-active');
    $('#site-search').focus();
  };
  var trigger = $('#search-trigger');
  trigger.on('click', function() {
    searchOn();
    return false;
  });

  $('#site-search').on('blur', function() {
    $('.search-container').removeClass('search-active');
  });

  $('#site-search').on('focus', function() {
    searchOn();
  });
});