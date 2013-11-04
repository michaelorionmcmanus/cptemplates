require.config({
  paths: {
    jquery: '../bower_components/jquery/jquery',
    "bootstrap-collapse": '../bower_components/sass-bootstrap/js/collapse',
    "bootstrap-dropdown": '../bower_components/sass-bootstrap/js/dropdown'
  },
  shim: {
    "bootstrap-collapse": {
      deps: ['jquery']
    },
    "bootstrap-dropdown": {
      deps: ['jquery']
    }
  }
});

require(['app', 'jquery', 'bootstrap-collapse', 'bootstrap-dropdown'], function (app, $) {
  'use strict';
  // use app here
  console.log(app);
  console.log('Running jQuery %s', $().jquery);
});