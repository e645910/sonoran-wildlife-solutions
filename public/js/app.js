angular.module('sws', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main-view.html',
                controller: 'mainController'
            })
            .when('/reptiles', {
                templateUrl: 'views/animal-removal/reptile-view.html',
                controller: 'reptileController'
            }) 
            .when('/bats', {
                templateUrl: 'views/animal-removal/bat-view.html',
                controller: 'batController'
            })
            .when('/raccoons', {
                templateUrl: 'views/animal-removal/raccoons-view.html',
                controller: 'raccoonsController'
            })
            .when('/rodents', {
                templateUrl: 'views/animal-removal/rodents-view.html',
                controller: 'rodentsController'
            })
            .when('/education', {
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
    });
