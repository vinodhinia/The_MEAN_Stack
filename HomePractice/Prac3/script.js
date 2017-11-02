/**
 * Created by vino on 6/24/17.
 */
angular.module('myModule',[])
        .controller('myController',function ($scope) {
           var employee = {
               firstName:"Vinodhini",
               lastName : "Asok Kumar",
               gender: "Female",
               age:"25"
           }
           $scope.employee = employee;
        });