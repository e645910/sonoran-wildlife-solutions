angular.module('sws', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main-view.html',
                controller: 'mainController'
            })
            .when('/animal', {
                templateUrl: 'views/animal-removal-view.html',
                controller: 'animalRemovalController'
            })
            .when('/education', {
                templateUrl: 'views/education-view.html',
                controller: 'educationController'
            })
            .when('/hiking', {
                templateUrl: 'views/hiking-view.html',
                controller: 'hikingController'
            })

        .otherwise({
            redirectTo: '/'
        });
    });
