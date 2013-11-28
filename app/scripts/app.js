/*global define */
define([], function () {
    'use strict';
    var link = document.querySelector('link[href="main-nav.html"]');
    var content = link.import;
    // Grab DOM from warning.html's document.
    var el = content.querySelector('body');
    document.querySelector('header[name="main"]').appendChild(el.cloneNode(true));
});