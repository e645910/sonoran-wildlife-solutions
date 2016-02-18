angular.module('sws')
    .controller('mainController', function($scope) {
        $scope.myInterval = 5000;
        $scope.slides = [
        {image: '/img/don1.jpg'},
        {image: '/img/don2.jpg'},
        {image: '/img/don3.jpg'},
        {image: '/img/don4.jpg'},
        {image: '/img/don5.jpg'},
        {image: '/img/don6.jpg'}
        ];
    });