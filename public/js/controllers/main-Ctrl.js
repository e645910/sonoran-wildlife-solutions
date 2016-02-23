angular.module('sws')
    .controller('mainController', function($scope, $log) {
        $scope.myInterval = 5000;
        $scope.slides = [
            { image: '/img/main/don1.jpg' },
            { image: '/img/main/don2.jpg' },
            { image: '/img/main/don3.jpg' },
            { image: '/img/main/don4.jpg' },
            { image: '/img/main/don5.jpg' },
            { image: '/img/main/don6.jpg' }
        ];

        // $scope.items = [
        //     'The first choice!',
        //     'And another choice for you.',
        //     'but wait! A third!'
        // ];

        // $scope.status = {
        //     isopen: false
        // };

        // $scope.toggled = function(open) {
        //     $log.log('Dropdown is now: ', open);
        // };

        // $scope.toggleDropdown = function($event) {
        //     $event.preventDefault();
        //     $event.stopPropagation();
        //     $scope.status.isopen = !$scope.status.isopen;
        // };

    });
