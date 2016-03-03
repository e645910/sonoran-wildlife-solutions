angular.module('sws')
    .controller('reptileController', function($scope, $location, $log) {
        $scope.myIntervals = 9000;
        $scope.slides = [
            { image: '/img/snake1.jpg', name: 'Mojave rattlesnake.', text: 'They are both aggressive and fast--a deadly combination.'},
            { image: '/img/snake2.jpg', name: 'Black Tail Rattlesnake', text: 'The Black-tailed is generally considered one of the less aggressive rattlesnakes, but is still a dangerous snake.'},
            { image: '/img/snake3.jpg', name: 'Western Dimondback Rattlesnake', text: 'The Dimondback is venomous and is responsible for the second greatest number of snakebite fatalities in the u.s..'},
            { image: '/img/Gila Monster.jpg', name: 'Gila Monster', text: 'Gila Monsters have a venomous bite.  Generally speaking they are slow moving.  However, they are capable of quick movement.' },
            { image: '/img/coloradorivertoad.jpg', name: 'Colorado Toad', text: 'When a Colorado River toad is threatened, it will secrete a milky-white hallucinogenic toxin.  Dogs that have attacked toads have been paralyzed or even killed.' }
        ];
    });
