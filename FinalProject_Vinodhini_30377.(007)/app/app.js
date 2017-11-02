/**
 * Created by vino on 20/5/17.
 */
var app = angular.module("flightCarriers", ['controllersModule', 'ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/viewCarriers', {
            templateUrl: 'app/templates/carriers.html',
            controller: 'MainCtrl'
        })
        .when('/viewFlights/:flightId', {
            templateUrl: 'app/templates/carriersDetails.html',
            controller: 'carriersDetailsCtrl'
        })
        .otherwise({
            redirectTo: '/viewCarriers'
        });
});