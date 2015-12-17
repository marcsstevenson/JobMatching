(function () {

    var app = angular.module('JobListApp', ['ngRoute', 'angular-loading-bar', 'ui.bootstrap']);

    /**
     * Configure the Routes
     */
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
          // Home
          .when("/", { title: "Home", templateUrl: "Home", controller: "JobListHomeController" })
          // Pages
          .when("/Details", { title: "Job Details", templateUrl: "Details", controller: "JobListDetailsController" })
          .when("/List", { title: "All Jobs", templateUrl: "List", controller: "JobListIndexController" })
        
          .otherwise("/PageNotFound", { templateUrl: "PageNotFound" });
    }]);
}());