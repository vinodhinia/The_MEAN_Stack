angular.module("myApp", [])
    .controller("defaultCtrl", function ($scope) {
        $scope.items = [
            {name: "Apples", category: "Fruit", price: 1.20, expiry: 10},
            {name: "Bananas", category: "Fruit", price: 2.42, expiry: 7},
            {name: "Pears", category: "Fruit", price: 2.02, expiry: 6}
        ];
    }).directive('unorderedList', function () {
    return {
        link: function (scope, element, attribute) {
            scope.data = scope[attribute["unorderedList"]];
        },
        restrict: 'A',
        template: "<ul><li ng-repeat='item in data'> {{ item.name }} --- {{ item.category }} --- {{ item.price | currency }} --- {{ item.expiry }}</li></ul>"
    }

});