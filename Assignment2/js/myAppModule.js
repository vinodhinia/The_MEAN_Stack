    /**
 * Created by viveksh2 on 6/7/15.
 */
// declare a module
var myAppModule = angular.module('myAppModule', []);

myAppModule.controller('myDemoCtrl', function ($scope) {
        $scope.colorsArray = [
                {name: "Apples", category: "Fruit", price: 1.20, expiry: 10},
                {name: "Bananas", category: "Fruit", price: 2.42, expiry: 7},
                {name: "Pears", category: "Fruit", price: 2.02, expiry: 6}
            	]
    }
);

myAppModule.directive('colorList', function ($compile) {

    return {

        restrict: 'AE',
        template: "<button ng-click='showHideColors()' type='button'>"
        + "{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}"
        + "</button><div ng-hide='isHidden' id='colorContainer'>"
        + "</div>",
        link: function ($scope, $element) {

            // set default state of hide/show
            $scope.isHidden = true;
            // add function to manage hide/show state
            $scope.showHideColors = function () {
                $scope.isHidden = !$scope.isHidden;
            };

            // add colors divs to the document
            var colorContainer = $element.find('div');
            var header = "<b>Name</b> &nbsp;&nbsp;<b>Category</b> &nbsp;&nbsp;<b>Price</b> &nbsp;&nbsp; "
            colorContainer.append(header);
            angular.forEach($scope.colorsArray, function (color) {
                var appendString = "<li>"+color.name+"</li>";
                // var appendString = "<div style='background-color:" + color + "'>" + color[name] +   "</div>";
                colorContainer.append(appendString);
            });
        }
    };

});