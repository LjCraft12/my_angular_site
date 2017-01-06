const app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "/templates/home.html",
            controller: "homeController",
            controllerAs: "$ctrl"
        });
    $stateProvider
        .state('about', {
            url: "/about",
            templateUrl: "/templates/about.html",
            controller: "aboutController",
            controllerAs: "$ctrl"
        });
    $stateProvider
        .state('signup', {
            url: "/profile",
            templateUrl: "/templates/profile.html",
            controller: "profileController",
            controllerAs: "$ctrl"
        });
    $stateProvider
        .state("login",{
            url: "/login",
            templateUrl: "/templates/login.html",
            controller: "loginController",
            controllerAs: "$ctrl"
        });
    $urlRouterProvider.otherwise("/");
});

app.controller('homeController', function() {
    this.title = 'Home';
    console.log('home is here');
});

app.controller('aboutController', function() {
    this.title = 'About';
    console.log('about is here');
});

app.controller('profileController', function() {
    this.title = 'Profile';
    console.log('profile is here');
});
app.controller('logingController', function () {
    this.title = 'Login';
    console.log('Login is here')
});
