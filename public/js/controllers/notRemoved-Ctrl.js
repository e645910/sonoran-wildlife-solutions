angular.module('sws')
.controller('notRemovedController', function($scope, $location){
	$scope.isCurrentPath = function(path) {
		return $location.path() == path;	
	};
});