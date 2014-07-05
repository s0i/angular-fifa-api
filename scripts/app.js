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

        // Have a problem where ng-repeat loads matches on top of fixed header
        // This is just a workaround
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