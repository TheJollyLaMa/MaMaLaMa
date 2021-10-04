var app = angular.module("ClientWebApp", ["ngRoute"]);
app.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider

    .when("/", {controller: "PortfolioController", templateUrl: "index.html"})
    .when("/About", {controller: "PortfolioController", templateUrl: "Portfolio/about.html"})
    .when("/Portfolio", {controller: "PortfolioController",templateUrl: "Portfolio/portfolio.html"})
    .when("/Contact", {controller: "PortfolioController",templateUrl: "Portfolio/contact.html"})
    .when("/Login", {controller: "AuthController",templateUrl: "Login.html"})
    .when("/Logout", {resolve: {deadResolve: function ($location, AuthFactory) {AuthFactory.clearData(); $location.path('/Login'); } }})
    .when("/BehindTheCounter", {
      resolve: {check: function ($location, AuthFactory) {if (!AuthFactory.isUserLoggedIn()) {$location.path('/Login');}}},
      controller : "BehindTheCounterController",
      templateUrl : "BehindTheCounter/behind_the_counter.html"
    })
    .otherwise({redirectTo: "/"})
  }
]);
