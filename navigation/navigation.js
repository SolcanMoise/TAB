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
            template: "<h1>Home Page</h1>",
            // controller: "HomeCtrl"
        })
        .state('login', {
            url: '/login',
            template: "<h1>Login Page</h1>",
            // controller: "LoginCtrl"
        })
        .state('signup', {
            url: '/signup',
            template: "<h1>Signup Page</h1>",
            // controller: "SignupCtrl"
        });

    // Redirect to home page if url does not  
    // matches any of the states mentioned above 
    $urlRouterProvider.otherwise("/home");

    $locationProvider.html5Mode(true);
});    