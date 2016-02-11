angular.module('sws')
    .controller('mainController', function($scope) {
        $scope.images = [{
            src: 'don1.jpg',
            title: 'Pic 1'
        }, {
            src: 'don2.jpg',
            title: 'Pic 2'
        }, {
            src: 'don3.jpg',
            title: 'Pic 3'
        }, {
            src: 'don4.jpg',
            title: 'Pic 4'
        }, {
            src: 'don5.jpg',
            title: 'Pic 5'
        }];
    });
