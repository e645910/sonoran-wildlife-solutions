angular.module('sws')
    .controller('reptileRemovalController', function($scope, $location) {
        $scope.isCurrentPath = function(path) {
            return $location.path == path;
        };
    });
