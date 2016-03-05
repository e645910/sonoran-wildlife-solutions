angular.module('sws')
    .controller('rodentsController', function($scope) {
        $scope.myIntervals = 9000;
        $scope.slides = [
            { image: '/img/rodents/townsend.jpg', name: 'Townsends Big Eared', text: "This townsend's big eared bat lives with others of his kind in the soil-piping features of the cienega creek preserve southeast of Tucson."},
            { image: '/img/rodents/canyon.jpg', name: 'Canyon Bat or Western Pipistrelle', text: "Arizona's smallest bat, they are notorious for squeezing into very small cracks and crevices along the eaves of houses."},
            { image: '/img/rodents/mexican.jpg', name: 'Mexican Long-Tongued Bat', text: "Some of arizona's bats are nectar feeders and can be seen hitting humming bird feeders at night."},
            { image: '/img/rodents/brown.jpg', name: 'Big Brown Bats', text: 'Big brown bats tend to cluster in larger colonies and like to occupy houses and structures--especially attics. ' },
            { image: '/img/rodents/pocketed.jpg', name: 'Pocketed Freetail Bat', text: 'Bats are not flying rodents; they are delicate mammals.  their wings are actually their hands.'}
        ];
    });