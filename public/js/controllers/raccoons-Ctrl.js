angular.module('sws')
    .controller('raccoonsController', function($scope) {
        $scope.myIntervals = 9000;
        $scope.slides = [
            { image: '/img/raccoons/ringtail.jpg', name: 'Ringtail Cat', text: "Ringtail cats are arizona's state mammal.  they are curious, and they look so cute that you might be tempted to pet them...but don't!  their bite is worse than their bark."},
            { image: '/img/raccoons/raccoon.jpg', name: 'Raccoon', text: 'Raccoons like dark elevated holes.  they also like water features because they are fond of washing their food.  in urban areas they like to take up residence in attics and chimneys.'},
            { image: '/img/raccoons/coatis.jpg', name: 'Coatis', text: 'Coatis rarely take up residence in houses and structures, but they do sometimes dig up gardens and landscaping looking for grubs and fruits.'},
            { image: '/img/raccoons/spottedSkunk.jpg', name: 'Spotted Skunk', text: 'Skunks are critters that need to be handled with care for very obvious reasons.'},
            { image: '/img/raccoons/stripedSkunk.jpg', name: 'Striped Skunk', text: 'Skunks are omnivores and will eat just about anything.  generally speaking, skunks only spray when they have an altercation with another animal, or for some other reason feel threatened.'}
        ];
    });