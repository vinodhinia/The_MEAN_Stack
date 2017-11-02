/**
 * Created by viveksh2 on 6/29/16.
 */
angular.module('module1',['module2'])
    .controller('module1Ctrl', function ($scope, $http) {
        $scope.getDataFromServer = function () {
            $http.get('./../model/flights.json').then(
                function(res){
                    console.log(res.data);
                    $scope.flights = res.data;
                }
                ,function (err) {
                    console.log(err.message);
            })
        };

        //$scope.flights = model;

        $scope.getDataFromServer();
    });

