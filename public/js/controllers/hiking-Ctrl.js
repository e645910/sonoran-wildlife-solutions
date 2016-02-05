angular.module('sws')
	.controller('hikingController', function($scope, $location){
		$scope.isCurrentPath = function(){
			return $location.path == path;
		};
	});