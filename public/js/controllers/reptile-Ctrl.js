angular.module('sws')
    .controller('reptileController', function($scope, $location, $log) {
        $scope.myInterval = 5000;
        $scope.slides = [
            { image: '/img/snake1.jpg', name: 'This is a Mojave rattlesnake.', text: 'They are both aggressive and fast--a deadly combination.'},
            { image: '/img/snake2.jpg', name: 'Black Tail Rattlesnake', text: 'The Black-tailed is generally considered one of the less aggressive rattlesnakes, but is still a dangerous snake.'},
            { image: '/img/Gila Monster.jpg', name: 'Gila Monster', text: 'Gila Monsters have a venomous bite.  Generally speaking they are slow moving.  However, they are capable of quick movement.' },
            // { image: '/img/Gila Monsters.jpg', text: 'Gila Monsters' },
            // { image: '/img/Gila Monsters.jpg', text: 'Gila Monsters' },
        ];
    });
