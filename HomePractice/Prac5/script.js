/**
 * Created by vino on 6/24/17.
 */
angular.module("myModule",[])
        .controller("myController",function($scope){
            var technologies = [
                {name: "C++", likes:0,dislike:0},
                {name: "Java", likes:0,dislike:0},
                {name: "Python", likes:0,dislike:0},
                {name: "Ruby", likes:0,dislike:0},

            ]

            $scope.technologies = technologies;
            $scope.incrementLikes = function(technology){
                technology.likes += 1;
            }
            $scope.incrementDislikes = function(technology){
                technology.dislike +=1;
            }

        });