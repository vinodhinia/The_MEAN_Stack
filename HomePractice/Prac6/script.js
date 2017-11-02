/**
 * Created by vino on 6/24/17.
 */
angular.module("myModule",[])
        .controller("myController",function($scope){
            var employee =[
                { firstName:"Vinodhini", dob:new Date("September 29,1991"), salary: 30000},
                {firstName:"Harish", dob:new Date("May 24,1985"), salary:90000},
                {firstName:"Yahavi", dob:new Date("August 25,2016"),salary:95000},
                {firstName:"Jagadeesh",dob:new Date("October 19,1996"),salary:90000}
            ]
            $scope.employee = employee;
            $scope.rowLimit = 3;

        });