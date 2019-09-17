// declares application module with name "TAB" 
// inject ui.router dependency 
var app = angular.module('TAB', ["ui.router"]);

// define route configurations inside app.config 
// injecting dependencies 
app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

    // creating routes or states 
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: "/home/home.html",
        })
        .state('login', {
            url: '/login',
            templateUrl: "/login/login.html",
        })
        .state('signup', {
            url: '/signup',
            templateUrl: "/signup/signup.html",
        });

    // Redirect to home page if url does not  
    // matches any of the states mentioned above 
    $urlRouterProvider.otherwise("/home");

    $locationProvider.html5Mode(true);
});    