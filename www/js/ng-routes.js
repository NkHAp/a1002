var domain = "http://www.sahracing.com/";
//$scope.domain = domain;

var app = angular.module('SahRacingApp', ['ngResource', 'ngSanitize', 'ngRoute', 'ngTouch']);

app.filter('trusted', ['$sce', function($sce) {
    var div = document.createElement('div');
    return function(text) {
        div.innerHTML = text;
        return $sce.trustAsHtml(div.textContent);
    };
}])

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
        when('/', {
          
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        }).when('/home', {
          
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        }).
        when('/static/:id', {
            templateUrl: 'pages/static.html',
            controller: 'staticController'
        }).
        otherwise({
            redirectTo: '/'
        });

    }
]);
