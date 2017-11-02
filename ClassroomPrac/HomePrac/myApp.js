angular.module('myApp',[]).
	controller('myAppCtrl', function($scope){
		$scope.spice="Jalapeno";
		$scope.myspicy = function(){
			$scope.spice="Peruvian";
		}
		$scope.indianSpicy = function(){
			$scope.spice = "Indian";
		}
		
})


