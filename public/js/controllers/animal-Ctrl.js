angular.module('sws')
    .controller('animalRemovalController', function($scope, $location) {
        $scope.isCurrentPath = function(path) {
            return $location.path == path;
        };
    });
