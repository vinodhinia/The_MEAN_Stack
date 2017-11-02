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
            $scope.sortColumn = 'name';

            $scope.reverseOrder = false;

            $scope.handleSort = function(column){
                $scope.reverseOrder = ($scope.sortColumn == column)? !reverseOrder : false;
                $scope.sortColumn = column;
            }

            $scope.getSortClass = function(column){
                if($scope.sortColumn == column){
                    return $scope.reverseOrder
                }
            }
        });