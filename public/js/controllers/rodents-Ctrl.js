angular.module('sws')
    .controller('rodentsController', function($scope) {
        $scope.myIntervals = 9000;
        $scope.slides = [
            { image: '/img/rodents/packRat.jpg', name: 'Packrat', text: 'Packrats not only gnaw continually, but are notorious collectors of things, all of which they drag into their nests.', subText: 'Kissing bugs often breed in packrat nests.  when they bite you, they suck blood and leave a nasty bite that itches and often leaves a large red welt.'},
            { image: '/img/rodents/harris.jpg', name: 'Harris Antelope Ground Squirrel', text: "These guys like to eat seeds and cactus fruits, when they get into gardens they will eat your plants, but usually don't kill them"},
            { image: '/img/rodents/rockSquirrel.jpg', name: 'Rock Squirrel', text: 'They can be very destructive and like to tunnel under houses and other structures leaving the foundations weakened.  they can also chew up irrigation lines.'},
            { image: '/img/rodents/pocket.jpg', name: 'Pocket Mouse', text: 'Rats and Mice gnaw and grind on things day in and day out to keep their teeth worn down.  that means that packrat control and rodent control are constant issue for homeowners.' },
            { image: '/img/rodents/roundTail.jpg', name: 'Round-tailed Squirrel', text: 'Some people call these little critters prairie dogs, but they are not.  watch out for them as they will get into your gardens too'}
        ];
    });