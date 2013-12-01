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

  });
});