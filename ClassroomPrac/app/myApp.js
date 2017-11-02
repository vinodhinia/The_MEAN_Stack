angular.module('myApp',[]).
	controller('myAppCtrl', function($scope){
		$scope.spice="Jalapeno";
		$scope.mySpice = function(){
			$scope.spice = "Chilli";
		}
		$scope.jalSpicy = function(){
			$scope.spice = "Jalapeno";
		}
		
		$scope.data ={message: "hello"}
})


