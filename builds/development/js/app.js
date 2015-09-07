angular
    .module('myApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
            .when('/',{
                templateUrl:'partials/default.html'
            })
            .when('/sample1',{
                templateUrl:'partials/sample1.html'
            })
            .when('/sample2', {
                templateUrl:'partials/sample2.html'
            })
            .otherwise({
                redirectTo:'/'
            });
            $locationProvider.html5Mode(true);

    }]);
