/**
 * Created by vino on 6/24/17.
 */
angular.module("myModule",[])
        .controller("myController",function($scope){
            var country = {
                name: "USA",
                capital:"Washington D.C",
                imagePath : "ireland houses.jpg"
            }
            $scope.country = country;
        });
