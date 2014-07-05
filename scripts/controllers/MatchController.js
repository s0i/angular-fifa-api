'use strict';

var fifaAppControllers = angular.module('fifaAppControllers', ['fifaAppServices']);

fifaAppControllers.controller('FifaMatchControl', function($scope, $http, MatchService) {
    $http.get('http://192.168.0.2:8081/api/today').success(function(data) {
        $('.loader').fadeOut("slow");
        $('#main').css('visibility', 'visible').hide().fadeIn("slow");
        $scope.matches = data.concat($scope.matches);
    });

    $scope.options = [{
        name: "Date",
        value: "date"
    }, {
        name: "Group",
        value: "group"
    }, {
        name: "Arena",
        value: "arena"
    }];

    $scope.getTomorrow = function() {
        MatchService.getTomorrow().then(function(data) {
            $scope.matches = data.data.concat($scope.matches);
        });
    }
});