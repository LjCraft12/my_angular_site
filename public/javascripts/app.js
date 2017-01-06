console.log('App.js is running');
var app = angular.module('myApp', ['ui.router']);

// Setting up routes to all pages. use double quotes to declare route name and routing
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .when("home", {
            url: "/", //url for web address
            templateUrl: "/templates/home.html", // destination of actual page to view
            controller: "homeController", // controller for page that is viewing
            controllerAs: "$ctrl" // alias for page controller
        })
    $stateProvider
        .when("about", {
            url: "/about",
            templateUrl: "/templates/about.html",
            controller: "aboutController",
            controllerAs: "$ctrl"
        })
    $stateProvider
        .when("profile", {
            url: "/profile",
            templateUrl: "/templates/profile.html",
            controller: "profileController",
            controllerAs: "$ctrl"
        })
    $urlRouterProvider.otherwise("/"); // If a page requested that doesn't exist go to the home page

});
//setting up controllers for all pages
app.controller('homeController', function () { // controller for the homepage named homeController with a function method
    this.title = 'Welcome home'; // this.title will pass the out put to the title of the current page
    console.log('Home page is showing'); // console log to make sure everything is working the way it should
});
app.controller('aboutController', function () {
    this.title = 'Welcome to the about page';
    console.log('About page is showing')
});
app.controller('profileController', function () {
    this.title = 'Welcome to the profile page';
    console.log('Profile page is showing');
})