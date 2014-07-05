'use strict';

var fifaAppServices = angular.module('fifaAppServices', []);

fifaAppServices.service('MatchService', function($http) {
    // Here for now... Angular fails to work if I use this...
    this.getToday = function() {
        var promise = $http({
            method: 'GET',
            url: 'http://192.168.0.2:8081/api/today'
        }).success(function(data, status, headers, config) {
            var matches = data;
            return matches;
        });
        return promise;
    };

    this.getTomorrow = function() {
        var promise = $http({
            method: 'GET',
            url: 'http://192.168.0.2:8081/api/tomorrow'
        }).success(function(data, status, headers, config) {
            var matches = data;
            return matches;
        });
        return promise;
    };
});