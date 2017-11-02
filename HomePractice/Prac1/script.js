/**
 * Created by vino on 6/24/17.
 */
var myApp = angular.module("myModule",[])

myApp.controller("myController",function($scope){
    var employee = {
        firstName:"Vinodhini",
        lastName:"Asok Kumar",
        gender:"Female",
        age:"25"
    }
    $scope.employee=employee;
    $scope.message = "Angular Js Tutorial";
});
