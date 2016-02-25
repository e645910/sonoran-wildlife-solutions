angular.module('sws')
    .controller('reptileController', function($scope, $location, $log) {
        $scope.myInterval = 5000;
        $scope.w = window.innerWidth;
        $scope.h = window.innerHeight - 80;
        $scope.slides = [
            { image: '/img/snake1.jpg', text: 'Mojave Rattlesnake'},
            { image: '/img/snake2.jpg', text: 'Black Tail Rattlesnake'},
            { image: '/img/Gila Monster.jpg', text: 'Gila Monster' },
            // { image: '/img/Gila Monsters.jpg', text: 'Gila Monsters' },
            // { image: '/img/Gila Monsters.jpg', text: 'Gila Monsters' },
        ];
    });
