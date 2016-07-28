angular.module('sws', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main-view.html',
                controller: 'mainController'
            })
            .when('/reptiles control', {
                templateUrl: 'views/animal-removal/reptile-view.html',
                controller: 'reptileController'
            }) 
            .when('/bat control', {
                templateUrl: 'views/animal-removal/bat-view.html',
                controller: 'batController'
            })
            .when('/raccoon control', {
                templateUrl: 'views/animal-removal/raccoons-view.html',
                controller: 'raccoonController'
            })
            .when('/rodent control', {
                templateUrl: 'views/animal-removal/rodents-view.html',
                controller: 'rodentController'
            })
            .when('/bird control', {
                templateUrl: 'views/animal-removal/birds-view.html',
                controller: 'birdController'
            })
            .when('/notRemoved control', {
                templateUrl: 'views/animal-removal/notRemoved-view.html',
                controller: 'notRemovedController'
            })
            .when('/education ', {
                templateUrl: 'views/education/education-view.html',
                controller: 'educationController'
            })
            .when('/hiking', {
                templateUrl: 'views/hiking/hiking-view.html',
                controller: 'hikingController'
            })

        .otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
    });
