angular.module('module3',[]).
	factory('myFactory', function($http){
		var muObj = {};
		myObj.getData = function(){
			return $http.get('./../module/flights.json')
		};
		return myObj;
	})