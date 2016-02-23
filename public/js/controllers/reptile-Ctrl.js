angular.module('sws')
    .controller('reptileController', function($scope, $log) {
        // $scope.myInterval = 5000;
        $scope.slides = [
            { image: '/img/reptiles/snake1.jpg' },
            { image: '/img/reptiles/snake2.jpg' },
            { image: '/img/reptiles/snake3.jpg' },
            { image: '/img/reptiles/snake4.jpg' },
            { image: '/img/reptiles/snake5.jpg' },
            { image: '/img/reptiles/snake6.jpg' }
        ];
    });
