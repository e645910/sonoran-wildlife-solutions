angular.module('sws')
    .controller('batController', function($scope) {
        $scope.myIntervals = 9000;
        $scope.slides = [
            { image: '/img/bat1.jpg', name: 'Townsends Big Eared', text: 'This townsends big eared bat lives with others of his kind in the soil-piping features of the cienega creek preserve southeast of Tucson'},
            { image: '/img/bat2.jpg', name: 'Canyon Bat or Western Pipistrelle', text: 'Arizonas smallest bat, they are notorious for squeezing into very small cracks and crevices along the eaves of houses.'},
            { image: '/img/bat3.jpg', name: 'Mexican Long-Tongued Bat', text: 'Some of arizonas bats are nectar feeders and can be seen hitting humming bird feeders at night.'},
            { image: '/img/bat4.jpg', name: 'Big Brown Bats', text: 'Big brown bats tend to cluster in larger colonies and like to occupy houses and structures--especially attics. ' },
            { image: '/img/bat5.jpg', name: 'Pocketed Freetail Bat', text: 'Bats are not flying rodents; they are delicate mammals.  their wings are actually their hands.'}
        ];
    });