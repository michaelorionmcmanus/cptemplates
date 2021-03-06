require.config({
  paths: {
    jquery: '../bower_components/jquery/jquery',
    "bootstrap-collapse": '../bower_components/sass-bootstrap/js/collapse',
    "bootstrap-dropdown": '../bower_components/sass-bootstrap/js/dropdown',
    "swipe": '../bower_components/Swipe/swipe'
  },
  shim: {
    "bootstrap-collapse": {
      deps: ['jquery']
    },
    "bootstrap-dropdown": {
      deps: ['jquery']
    },
    "swipe": {
      deps: ['jquery']
    }
  }
});

require(['app', 'jquery', 'bootstrap-collapse', 'bootstrap-dropdown', 'image-slider'], function (app, $) {
  'use strict';
  $(function(){
    var searchToggle = $('[type=button].navbar-search');
    var navToggle = $('[type=button].navbar-search');
    var nav = $('#main-nav');
    var search = $('#search');
    var shown = false;
    var mainNavBar = $('#main-navbar');
    var main = $('.main');
    var searchClose = $('#search button.close');

    nav.collapse('hide');
    search.collapse('hide');

    search.on('shown.bs.collapse', function() {
      navToggle.blur();
      searchToggle.blur();
      nav.collapse('hide');
      search.find('input').focus();
      shown = true;
    });

    search.on('show.bs.collapse', function() {
      main.hide();
    });

    search.on('hidden.bs.collapse', function() {
      searchToggle.blur();
      shown = false;
      main.show();
    });

    nav.on('shown.bs.collapse', function() {
      searchToggle.blur();
      navToggle.blur();
      search.collapse('hide');
      // Make it easier to scroll within nav.
      $('html, body').css('overflow', 'hidden');
      shown= true;
    });

    nav.on('hidden.bs.collapse', function() {
      navToggle.blur();
      $('html, body').css('overflow', 'auto');
      shown = false;
    });

    searchClose.on('click', function() {
      search.collapse('hide');
    });

    function throttle(method, scope) {
      clearTimeout(method._tId);
      method._tId= setTimeout(function(){
        method.call(scope);
      }, 100);
    }

    function hideAll() {
      if(shown) {
        nav.collapse('hide');
      }
    }

    window.onresize = function(){
      throttle(hideAll, window);
    };

  });
});