angular.module('sws', ['ngRoute', 'ngAnimate'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main-view.html',
                controller: 'mainController'
            })
            .when('/education', {
                templateUrl: 'views/education-view.html',
                controller: 'educationController'
            })
            .when('/hiking', {
                templateUrl: 'views/hiking-view.html',
                controller: 'hikingController'
            })
            .when('/wildlife', {
                templateUrl: 'views/animal-removal-view.html',
                controller: 'animalRemovalController'
            })

        .otherwise({
            redirectTo: '/'
        });
    });
