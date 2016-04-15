var whatsNextApp = angular.module("whatsNextApp", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

//whatsNextApp.config(function (toastrConfig) {
//});


//whatsNextApp.constant("Config", {
//    source: "http://localhost:62341/api/"
//});

//whatsNextApp.run(function (stateService, $location) {
//    if (!stateService.data.currentUser) {
//        $location.path("/login");
//    }
//});

whatsNextApp.config(function ($routeProvider) {

    $routeProvider
        .when("/content", {
            templateUrl: "views/content.html",
            controller: "contentController"
        })
        .otherwise({ redirectTo: "/content" });
});