/**
 * Created by viveksh2 on 6/29/16.
 */


//As Service
angular.module('module3',[]).service('myFactoryAsService',function($http){
    this.getData = function()
    {
        return $http.get('./../model/flights.json');
    }

});


