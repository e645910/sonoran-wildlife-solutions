angular.module('sws')
    .controller('birdController', function($scope) {
    	$scope.myIntervals = 9000;
    	$scope.slides = [
    	{image: '/img/birds/rockDove1.jpg', name: 'Rock Dove (pigeon)', text:"sitting on top of a plastic owl on someone's roof."},
    	{image: '/img/birds/rockDove2.jpg', name: 'Rock Dove (pigeon)', text:"these birds like to gather in large groups and leave lots of 'poop' behind."},
    	{image: '/img/birds/gilaWoodpecker.jpg', name: 'Gila Woodpecker', text:'woodpeckers will loudly bang on metal chimneys and pipes to declare their territories and to attract mates.'}
    	];
    });
