angular.module('sws')
    .controller('reptileController', function($scope) {
        $scope.myIntervals = 10000;
        $scope.slides = [
            { image: '/img/reptiles/mojave.jpg', name: 'Mojave Rattlesnake', text: 'They are both aggressive and fast--a deadly combination.'},
            { image: '/img/reptiles/blacktail.jpg', name: 'Black-Tail Rattlesnake', text: 'The Black-tailed is generally considered one of the less aggressive rattlesnakes, but is still a dangerous snake.'},
            { image: '/img/reptiles/dimondback.jpg', name: 'Western Dimondback Rattlesnake', text: 'The Dimondback is venomous and is responsible for the second greatest number of snakebite fatalities in the u.s.'},
            { image: '/img/reptiles/gilaMonster.jpg', name: 'Gila Monster', text: 'Gila Monsters have a venomous bite.  generally speaking they are slow moving.  however, they are capable of quick movement.'},
            { image: '/img/reptiles/coloradoRiverToad.jpg', name: 'Colorado River Toad', text: 'When a Colorado River toad is threatened, it will secrete a milky-white toxin.  dogs that have attacked toads have been paralyzed or even killed.'},
            { image: '/img/reptiles/WoodhouseToad.jpg', name: 'Woodhouse Toad', text: 'These toads are generally found along streams and in wet places.  their croak is extremely loud.  some people have mistaken the croak of these toads for the chatter of a raccoon.'}
        ];
    });
