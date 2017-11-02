/**
 * Created by vino on 20/5/17.
 */
angular.module('controllersModule', ['servicesModule'])
    .controller('MainCtrl', function ($scope, dataManagement) {
        var getDataPromise = dataManagement.getCarriers();
        getDataPromise.success(function (data) {
            $scope.flights = data.data;
        });

        getDataPromise.error(function (data, status) {
            $scope.errorMessage = status;
        });


    }).controller('carriersDetailsCtrl', function ($scope, dataManagement, $routeParams) {

    var getDataPromise = dataManagement.getCarriersDetails($routeParams.flightId);

    getDataPromise.success(function (data) {

        $scope.flightDtls = data.data.flights;
    });

    getDataPromise.error(function (data, status) {
        $scope.errorMessage = status;
    });



})

