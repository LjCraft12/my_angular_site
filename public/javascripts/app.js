console.log('App.js is running');
var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .when("home", {
            url: "/",
            templateUrl: "/templates/home.html",
            controller: "homeController",
            controllerAs: "$ctrl"
        })
        .when("about",{
            url: "/about",
            templateUrl: "/templates/about.html",
            controller: "aboutController",
            controllerAs: "$ctrl"
        })
        .when("profile",{
            url: "/profile",
            templateUrl: "/templates/profile.html",
            controller: "profileController",
            controllerAs: "$ctrl"
        })

});