/**
 * Created by vino on 20/5/17.
 */

angular.module('servicesModule', [])
    .factory('dataManagement', function ($http) {
        return {
            getCarriers: function () {
                var carrierPromise = $http({method: 'GET', url: 'http://localhost:3003/flights/carriers'});
                return carrierPromise;
            },
            getCarriersDetails: function (carrierName) {
                var detailspromise = $http({
                    method: 'GET',
                    url: 'http://localhost:3003/flights/carriers/' + carrierName
                });
                return detailspromise;
            },
            getCarriersFileDetails: function (carrierName) {
                var fileDetailspromise = $http({
                    method: 'GET',
                    url: 'http://localhost:3003/flights/carriers/' + carrierName+ '/flightInfo'
                });
                return fileDetailspromise;
            }


        }


    })
