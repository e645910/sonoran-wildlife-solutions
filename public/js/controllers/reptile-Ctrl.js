angular.module('sws')
    .controller('reptileController', function($scope, $log) {
        $scope.myInterval = 5000;
        $scope.slides = [
            { image: '/img/snake1.jpg' },
            { image: '/img/snake2.jpg' },
            { image: '/img/snake3.jpg' },
            { image: '/img/snake4.jpg' },
            { image: '/img/snake5.jpg' },
            { image: '/img/snake6.jpg' }
        ];
    });
