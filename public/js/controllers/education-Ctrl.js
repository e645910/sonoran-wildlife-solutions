angular.module('sws')
	.controller('educationController', function($scope, $location){
		$scope.isCurrentPath = function(path) {
			return $location.path() == path;
		};
	});