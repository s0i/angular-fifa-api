'use strict';
var fifaApp;
var app = (function() {

    function init() {
        bindEvents();
        initModule();
    }

    function bindEvents() {
        $('html').niceScroll().hide();

        $('#sort').change(function() {
            $('#clear').css('visibility', 'visible');
        });

        $('#clear').click(function() {
            $(this).css('visibility', 'hidden');
        });

        $(window).unload(function() {
            $(window).scrollTop(0);
            $('body').scrollTop(0);
        });
    }

    function initModule() {
        fifaApp = angular.module('fifaApp', ['ngAnimate', 'fifaAppControllers', 'fifaAppServices']);
    }

    return {
        init: init
    }
}());