angular.module('sws')
    .controller('mainController', function($scope, $location) {
        $scope.isCurrentPath = function(path) {
            return $location.path == path;
        };
    });
