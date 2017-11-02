/**
 * Created by vino on 6/12/17.
 */
angular.module('finalDemoApp',[]).
    controller('finalDemoAppCtrl',function($scope,$http){
        $http.get("http://localhost:8089/myGetApi").then(
            function(data){
                $scope.flights = data.data;
            },function(){

            }
        )
        $scope
});