angular.module('gylfiApp', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
        })
        .when('/swansea', {
            templateUrl: 'pages/swansea.html',
        })
        .when('/iceland', {
            templateUrl: 'pages/iceland.html',
        })
        .when('/stats', {
            templateUrl: 'pages/stats.html',
        })
        .when('/bestof', {
            templateUrl: 'pages/bestof.html',
        })
        .otherwise({
            redirectTo: '/'
        });
}).controller('gylfiController', function ($scope) {

});